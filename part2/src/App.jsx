import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from './services/persons'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

 
  useEffect(()=> {
    personService.getAll()
    .then(personsList=> 
       setPersons(personsList)
    )}, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterName = (e) => {
    const filtered = e.target.value
    const filteredNames = persons.filter(person => person.name.toLowerCase().match(filtered.toLowerCase())) 
    setFilteredPersons(filteredNames)
  }

// adding a new name
  const addName = (e) => {
    e.preventDefault()
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in phonebook`)
    } else {
       const newPerson = {
        name: newName,
        number: newNumber
      }
      personService.createOne(newPerson)
      .then(returnedPerson => 
        setPersons(persons.concat(returnedPerson)))
        setNewName("")
        setNewNumber("")
    }
  }

    // delete person
    const handleDelete = (personId) => {
      confirm(`Are you sure to delete?`)
      personService.deleteOne(personId)
      
      const newList = persons.filter(person => personId !== person.id)
      setPersons(newList)
        
    }

  return(
    <div>
     
       <h2>Phonebook</h2>
       <Filter handleChange={handleFilterName} />
      
       <h2>Add New</h2>
     
       <PersonForm 
           handleSubmit={addName} 
           handleName={handleNewName} 
           handleNumber={handleNewNumber} 
           personName={newName}
           personNumber={newNumber}
      /> 

      <h2>Numbers</h2>
      <Persons persons={(filteredPersons.length === 0)?persons:filteredPersons } />

      { persons.map(person => 
         <li key={person.id}>{person.name} {person.number} 
          <button onClick={()=>handleDelete(person.id)} >Delete</button>  
        </li>
         
        ) }

    </div>
  )
}

export default App

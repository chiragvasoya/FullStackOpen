import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(()=> {
    console.log("effect")
    axios
      .get("http://localhost:3001/persons")
       .then(response=>
          setPersons(response.data)
        )
  }, [])

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


  const addName = (e) => {
    e.preventDefault()
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in phonebook`)
    } else {
       const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
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

    </div>
  )
}

export default App

import { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

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

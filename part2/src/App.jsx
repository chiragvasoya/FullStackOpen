import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import personService from './services/persons'
import Notification from "./components/Notification"


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [msgType, setMsgType] = useState(null)
 
  const listToShow = filterQuery.length !== 0 ? persons.filter(person => person.name.toLowerCase().match(filterQuery.toLocaleLowerCase())) : persons

  useEffect(()=> {
    personService.getAll()
    .then(personsList => 
       setPersons(personsList)
    )}, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterName = (e) => {
    setFilterQuery(e.target.value)
      // const filtered = e.target.value
      // const newList = persons.filter(person => person.name.toLowerCase().match(filtered.toLowerCase())) 
      // console.log(newList)
      // setFilteredPersons(newList)
   
  }

// adding a new name
  const addName = (e) => {
    e.preventDefault()
    const personExist = persons.find(person => person.name === newName)
   
    if(personExist) {
      confirm(`${newName} already exists in products. Would you like to update price`)
      const updatedPerson = {...personExist, number: newNumber}
      console.log("Updated data", updatedPerson)
      personService.updateOne(personExist.id, updatedPerson)
      .then(returnedPerson => {
         setPersons(persons.map(person => person.id !== personExist.id ? person : returnedPerson))
      })
      setNewName("")
      setNewNumber("")
    } else {
       const newPerson = {
        name: newName,
        number: newNumber
      }
      personService.createOne(newPerson)
      .then(returnedPerson => 
        setPersons(persons.concat(returnedPerson)))
        .catch( error => console.log(error))
        setMessage(`${newPerson.name} Added`)
        setMsgType("success")
        setNewName("")
        setNewNumber("")
        setTimeout(() => 
          setMessage(null)
        , 5000)
       
    }
  }

    // delete person
    const handleDelete = (personId, personName) => {
      confirm(`Delete ${personName}?`)
      personService.deleteOne(personId)
      // .then(returnedPerson => returnedPerson)
      .catch(error => 
        setMessage(`Information of ${personName} has already been removed from server`))
        setMsgType("error")
        setTimeout(() => 
          setMessage(null)
        , 5000)
      
      const newList = persons.filter(person => personId !== person.id)
      setPersons(newList)
        
    }

  return(
    <div>
     
       <h2>Products</h2>
       
       <Notification message={message} type={msgType} />

       <Filter handleChange={handleFilterName} />
      
       <h2>Add New</h2>
     
       <PersonForm 
           handleSubmit={addName} 
           handleName={handleNewName} 
           handleNumber={handleNewNumber} 
           personName={newName}
           personNumber={newNumber}
      /> 

      <h2>Product List</h2>
  
      { listToShow.map(person => 
         <li key={person.id}>{person.name} ${person.number} 
         <button onClick={()=>handleDelete(person.id, person.name)} >Delete</button>  
        </li>   
        ) 
       }

    </div>
  )
}

export default App

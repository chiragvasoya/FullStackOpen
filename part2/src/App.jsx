import { useState } from "react"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return(
    <div>
      <h2>Title 1</h2>
      <form onSubmit={addName}>
      <input type="text" onChange={handleNewName} value={newName} />
      <button type="submit">Add</button>
      </form>
      <h2>Title 2</h2>
      <ul>
        { persons.map(person => <li key={person.name}>{person.name}</li> ) }
      </ul>
    </div>
  )
}

export default App

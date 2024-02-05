import { useState } from 'react'
import personService from '../services/persons'

const Persons = ({persons}) => {


  // delete person
  const handleDelete = (personId) => {
    confirm(`Are you sure to delete?`)
    
    // personService.deleteOne(personId)
        // .then(personsList =>  console.log(personsList))
  }
  
  
    return(
        <ul>
        { persons.map(person => 
         <li key={person.id}>{person.name} {person.number}  
        </li>
         
        ) }
      </ul>
    )
}

export default Persons
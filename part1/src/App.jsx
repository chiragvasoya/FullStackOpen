import { useState } from 'react'

// Header Component
const Header = ({course}) => <h1>{course}</h1>

// Content Component
const Content = ({parts}) => {
  
  return(
    <>
      { parts.map((part, i) => <Part key={i} part={part.name} exercise={part.exercises} /> ) }
      
    </>
  )
}

// Total Component
const Total = ({exercises}) => {
  return ( 
    <>
    <p>Number of exercises { exercises[0].exercises + exercises[1].exercises + exercises[2].exercises }</p>
    </>
  )
}

// Part Component

const Part = ({part, exercise}) => {
  return(
    <>
     <p>
         {part} {exercise}
      </p>
    </>
  )
}


const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return(
    <div>
      <Header course={course}></Header>
      <Content parts={parts}  ></Content>
      <Total exercises={parts} /> 
      
    </div>
  )
}

export default App

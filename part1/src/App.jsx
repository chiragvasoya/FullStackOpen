import { useState } from 'react'

// Header Component
const Header = ({course}) => <h1>{course}</h1>

// Content Component
const Content = (props) => {
  
  return(
    <>
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  )
}

// Total Component
const Total = ({exercises1, exercises2, exercises3}) => {
  return ( 
    <>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header course={course}></Header>
      <Content part1={part1}  part2={part2} part3={part3} ></Content>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      
    </div>
  )
}

export default App

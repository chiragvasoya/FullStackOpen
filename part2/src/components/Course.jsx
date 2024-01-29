// Header Component
const Header = ({course}) => <h1>{course.name}</h1>

// Content Component
const Content = ({parts}) => {
  
  return(
    <>
      { parts.map((part) => <Part key={part.id} part={part.name} exercise={part.exercises} /> ) }
      
    </>
  )
}

// Total Component
const Total = ({parts}) => {
      
    let total = parts.reduce((accumulator, part) => accumulator += part.exercises, 0) 
    
  return ( 
    <>
    <p>Number of exercises { total }</p>
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



const Course = ({course}) => {
    return(
        <div>
        <Header course={course}></Header>
        <Content parts={course.parts}  ></Content>
        <Total parts={course.parts} /> 
        
      </div>
    )
}

export default Course;
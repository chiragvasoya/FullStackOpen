import { useState } from "react"

const Header = ({heading}) => <h1>{heading}</h1>

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button> 

const Anecdote = ({anecdote, votes}) => {
  return(
    <>
     <p>{anecdote}</p>
     <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [seleted, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [maxVote, setMaxvote] = useState(0)

  const handleRandomSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const newVote = [...vote]
    newVote[seleted] += 1
    setVote(newVote)
   
    // find the max votes
    setMaxvote(newVote.indexOf(Math.max(...newVote)))
  }


  return(
    <div>
      <Header heading="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[seleted]} votes={vote[seleted]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleRandomSelect} text="Next Anecdote" />
      <Header heading="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[maxVote]} votes={vote[maxVote]} />
       
    </div>
  )
}

export default App

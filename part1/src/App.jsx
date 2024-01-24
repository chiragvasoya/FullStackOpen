import { useState } from "react"

const Header = ({heading}) => <h1>{heading}</h1> 

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Feedback = (props) => {
  return(
    <>
      <p>Good {props.good}</p>
      <p>Bad {props.bad}</p>
      <p>Neutral {props.neutral}</p>
    </>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }


  return(
    <div>
      <Header heading="Give feedback" />
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Header heading="Statastics" />
      <Feedback good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App

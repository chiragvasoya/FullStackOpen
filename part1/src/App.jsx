import { useState } from "react"

const Header = ({heading}) => <h1>{heading}</h1> 

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  return(
    <>
     <Header heading="Statistics" />
      {  props.all === 0 ?  <p>No feedback given</p> : 
        <div>
            <p>Good {props.good}</p>
            <p>Bad {props.bad}</p>
            <p>Neutral {props.neutral}</p>
            <p>All {props.all}</p>
            <p>Average {props.average/props.all}</p>
            <p>Positive {props.good/props.all}%</p>
      </div>
      }
    </>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average -1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }


  return(
    <div>
      <Header heading="Give feedback" />
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} />
    

    </div>
  )
}

export default App

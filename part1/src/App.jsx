import { useState } from "react"

const Header = ({heading}) => <h1>{heading}</h1> 

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value, arithmeticSign=''}) =>  {
  return(
    <>
    <tr>
      <td>{text}</td> 
      <td>{value} {arithmeticSign}</td>
    </tr>
    </>
    )
  }

const Statistics = (props) => {
  return(
    <>
     <Header heading="Statistics" />
      {  props.all === 0 ?  <p>No feedback given</p> : 
        <table>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="All" value={props.all} />
            <StatisticLine text="Average" value={(props.average/props.all)} />
            <StatisticLine text="Positive" value={(props.good/props.all)} arithmeticSign="%" />
           
      </table>
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

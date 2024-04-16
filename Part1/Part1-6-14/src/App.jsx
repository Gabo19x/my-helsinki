import { useState } from 'react'
import './App.css'

function StatisticLine({text, value}) {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  );
}

const Statistics = ({good, neutral, bad}) => {
  function Total() { return good + neutral + bad; }
  function Average() { return (good + neutral + bad) / 3; }
  function GoodVotes() { return (good * 100) / Total(); }

  return (
    <>
      <hr />
      <br />
      <h2>Stadistics</h2>

      <table>
      <StatisticLine text={"Good"} value={good}/>
      <StatisticLine text={"Neutral"} value={neutral}/>
      <StatisticLine text={"Bad"} value={bad}/>
      <StatisticLine text={"Total"} value={Total()}/>
      <StatisticLine text={"Avarage"} value={Average()}/>
      <StatisticLine text={"Good votes"} value={GoodVotes()}/>
      </table>
      
    </>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function Sum(funSet, x) { funSet(x += 1); }
  
  return (
    <>
      <h1>I need feedback</h1>
      <button onClick={() => Sum(setGood, good)}>✅ Good ✅</button>
      <button onClick={() => Sum(setNeutral, neutral)}>☑ Neutral ☑</button>
      <button onClick={() => Sum(setBad, bad)}>⛔ Bad ⛔</button>
      
      {(good == 0 && neutral == 0 && bad == 0)
        ? <p>I do not have feedback</p> 
        : <Statistics good={good} neutral={neutral} bad={bad} />
      }
      
    </>
  )
}

export default App

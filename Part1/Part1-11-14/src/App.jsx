import { useState } from 'react'
import './App.css'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [max, setMax] = useState(0);

  function getRandomInt() {
    return Math.floor(Math.random() * anecdotes.length);
  }

  function Vote() {
    const list = [...votes];
    list[selected] += 1;
    setVotes(list);
    Best(list);
  }

  function Best(list) {
    let m = 0;

    for (let i = 0; i < list.length; i++) {
      
      if(list[i] > list[m]) { m = i; } 
      
    }

    setMax(m);
  }

  return (
    <div>
      <h1>Anecdote</h1>
      <h2>{anecdotes[selected]}</h2>
      <p>Votes: {votes[selected]}</p>

      <button onClick={() => { Vote(); } }>❤ Like ❤</button>
      <button onClick={() => { setSelected(getRandomInt());} }>🔄 Next 🔄</button>
      <hr />

      <br />
      <h1>Best Anecdote</h1>
      <h2>{anecdotes[max]}</h2>
      <p>Votes: {votes[max]}</p>
    </div>
  )
}

export default App

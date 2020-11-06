import React, { useEffect, useState } from 'react';
import './App.css';
import generateArray from './algorithm/generateArray';
import mergeSort from './algorithm/mergeSort';

function App() {

  const [array, setArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0)

  useEffect(() => {
    reset()
  }, [])

  function solveProblem() {
    const { arr: result , count, trades } = mergeSort({ arr: array, count: 0, trades: [] })
    console.log(result)
    console.log(count)
    console.log(trades)
  }

  function reset() {
    setArray(generateArray())
  }

  return (
    <div className="App">
      <ul>
        <li>Andrea</li>
        <li>Carlos</li>
        <li>Marcelo</li>
      </ul>
      <ul>
        {
          array.map(number => (
            <li>
              {number}
            </li>
          ))
        }
      </ul>
      <button onClick={solveProblem}>
        Resolver
      </button>
      <button onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default App;

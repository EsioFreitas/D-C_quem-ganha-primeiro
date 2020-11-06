import React, { useEffect, useState } from 'react';
import './App.css';
import generateArray from './algorithm/generateArray';
import mergeSort from './algorithm/mergeSort';
import swap from './algorithm/swapArray';

function App() {

  const [array, setArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null)
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    reset()
  }, [])

  function solveProblem() {
    const { trades } = mergeSort({ arr: array, count: 0, trades: [] })
    let count = 0;
    let temp = [...array];

    const interval = setInterval(() => {
      if (count >= trades.length) {
        setIsOver(true);
        clearInterval(interval)
      } else {
        setSelectedUser(count % 3);
        temp = swap(temp, trades[count][0], trades[count][1])
        setArray(temp)
        count++;
      }
    }, 1000)
  }

  function reset() {
    setIsOver(false);
    setSelectedUser(null);
    setArray(generateArray())
  }

  return (
    <div className="App">
      <ul>
        <li style={ selectedUser === 0 ? { color: 'red', fontWeight: 'bold' } : null}>Andrea</li>
        <li style={ selectedUser === 1 ? { color: 'red', fontWeight: 'bold' } : null}>Carlos</li>
        <li style={ selectedUser === 2 ? { color: 'red', fontWeight: 'bold' } : null}>Marcelo</li>
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
      {
        isOver && <p>Acabou!</p>
      }
    </div>
  );
}

export default App;

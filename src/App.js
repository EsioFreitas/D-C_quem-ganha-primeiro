import React, { useEffect, useState } from "react";
import "./App.css";
import generateArray from "./algorithm/generateArray";
import mergeSort from "./algorithm/mergeSort";
import swap from "./algorithm/swapArray";

function App() {
  const [array, setArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    reset();
  }, []);

  function solveProblem() {
    const { trades } = mergeSort({ arr: array, count: 0, trades: [] });
    let count = 0;
    let temp = [...array];

    const interval = setInterval(() => {
      if (count >= trades.length) {
        setIsOver(true);
        clearInterval(interval);
      } else {
        setSelectedUser(count % 3);
        temp = swap(temp, trades[count][0], trades[count][1]);
        setArray(temp);
        count++;
      }
    }, 1000);
  }

  function reset() {
    setIsOver(false);
    setSelectedUser(null);
    setArray(generateArray());
  }

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-5 pt-4" style={{ color: "#353535" }}>
          <h1 className="mb-3">
            Projeto <span className="bold-text">Viagem a Trabalho</span>{" "}
          </h1>
          <p>
            Luciana foi promovida a nova gerente executiva na empresa o qual
            trabalha. Essa empresa tem a cutura de que quando há um novo
            gerente, ele tem que ir em uma filial escolhida para saber o
            andamento das atividades e retirar métricas. No entanto, Luciana
            quer mais! Como vai viajar de carro e sabe que todas as filiais
            ficam nas capitais, ela deseja passar por todas as filiais dos
            estados que passar, desde que esse percurso seja o menor possível.
            Informe qual o estado de origem de Luciana e qual o estado de
            destino. A aplicação irá se responsabilizar por dizer qual será o
            menor trajeto, passando pelas capitais da origem ao destino
            desejado.
          </p>
        </div>
        <div className="row"></div>
      </div>
      {/* <div className="App">
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
     </div> */}
    </div>
  );
}

export default App;

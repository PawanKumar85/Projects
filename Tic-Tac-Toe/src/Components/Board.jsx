import Cell from "./Cell";

import "./Board.css";
import { useState } from "react";
import Button from "./Button";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) return;
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container ">
      {isWinner ? (
        <div className="text-center">
          <div className="text-danger fw-bold text-center mt-3 fs-1">
            {isWinner} is winner 🥇
          </div>
          <Button onClick={handleReset} />
        </div>
      ) : (
        <>
          <h5 className="fw-bold">
            Turn :
            <span className="fw-bold text-danger">
              Player {isXturn ? "X" : "O"} please move
            </span>
          </h5>

          <div className="board-row">
            <Cell onClick={() => handleClick(0)} value={state[0]} />
            <Cell onClick={() => handleClick(1)} value={state[1]} />
            <Cell onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Cell onClick={() => handleClick(3)} value={state[3]} />
            <Cell onClick={() => handleClick(4)} value={state[4]} />
            <Cell onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Cell onClick={() => handleClick(6)} value={state[6]} />
            <Cell onClick={() => handleClick(7)} value={state[7]} />
            <Cell onClick={() => handleClick(8)} value={state[8]} />
          </div>
          <Button onClick={handleReset} />
        </>
      )}
    </div>
  );
};
export default Board;

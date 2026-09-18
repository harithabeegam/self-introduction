import { useState } from "react";
import "./XOGame.css";

function XOGame() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }

    return "";
  };

  const handleClick = (index) => {
    if (board[index] !== "" || winner !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = player;

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    setPlayer(player === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner("");
  };

  return (
    <div className="game-container">
      <div className="game-card">

        <h1>XO GAME</h1>

        {winner ? (
          <h2>Winner: {winner}</h2>
        ) : (
          <h2>Player {player} Turn</h2>
        )}

        <div className="board">
          {board.map((box, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
            >
              {box}
            </button>
          ))}
        </div>

        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>

      </div>
    </div>
  );
}

export default XOGame;
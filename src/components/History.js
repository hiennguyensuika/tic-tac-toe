import React from "react";

function History({ history, jumpTo }) {
  return (
    <div className="right-side">
        <h4 className="history-name">History</h4>
    <div className="history">
      <ul>
        {history.map((step, move) => {
          const desc = move ? "Move "+ move : <span className="game-start"> GAME START</span>;
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default History;
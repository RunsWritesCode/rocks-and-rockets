import React from 'react';
import Row from './Row';



const Board = (props) => {

  const checkRowsForWinner = function () {
      const board = props.board;
      if (((board[0] !== "") && (board[0] === board[1]) &&
           (board[0] === board[2])) ||
          ((board[3] !== "") &&(board[3] === board[4]) &&
           (board[3] === board[5])) ||
          ((board[6] !== "") &&(board[6] === board[7]) &&
           (board[6] === board[8]))
        ) {
        return true
      }
      return false
    }

    const checkColumnsForWinner = function () {
      const board = props.board;
      if (((board[0] !== "") && (board[0] === board[3]) &&
           (board[0] === board[6])) ||
          ((board[1] !== "") &&(board[1] === board[4]) &&
           (board[1] === board[7])) ||
          ((board[5] !== "") &&(board[2] === board[5]) &&
           (board[2] === board[8]))
        ) {
        return true;
      }
      return false;
    }

    const checkDiagonalsForWinner = function () {
      const board = props.board;
      if ((board[4] !== "") && (((board[0] === board[4]) && (board[0] === board[8])) ||
          ((board[2] === board[4]) && (board[2] === board[6])))) {
          return true;
      }
      return false;
    }

    const checkForWinner = function () {
      if (
        (checkColumnsForWinner() === true) ||
        (checkRowsForWinner() === true) ||
        (checkDiagonalsForWinner() === true)
        ) {
          props.finish();
        } else {
          props.switchPlayer();
        }
    }

    const takeGo = function (square) {
      props.update(square);
      checkForWinner();
    }


  const row = (firstCell) => (
    <Row
      firstCell={firstCell}
      player={props.player}
      playSquare={takeGo}
      gameWon={props.won}
      board={props.board}
    />
  )

  return (<div>
    <table id="O&X-Board">
      <tbody>
        {row(0)}
        {row(3)}
        {row(6)}
      </tbody>
    </table>
  </div>
)


}

export default Board;

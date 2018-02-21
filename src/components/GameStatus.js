import React from 'react';

const GameStatus = props => {

  function checkName () {
    if (props.winner === "X") {
      return "Rocket";
    } else {
      return "Asteroid";
    }
  }

  function checkCurrentPlayer () {
    if (props.currentPlayer === "X") {
      return "Rocket";
    } else {
      return "Asteroid";
    }
  }



  let currentState;

  if (props.winner !=="") {
    currentState = checkName() + " rocks!";
  } else if (!props.won && props.turns === 9) {
    currentState = "there are no winners in the space race...";
  } else {
    currentState = checkCurrentPlayer() + " to go.";
  }
  return(
    <div id="outcome">
      <h2>{currentState}</h2>
    </div>
  )
}

export default GameStatus;

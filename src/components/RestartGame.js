import React from 'react';

const RestartGame = props => {


  if (props.won || (props.turns == 9)) {
    return(
      <div id="button-div"><form>
        <button class="submit" className="restart-game-button" onClick="refresh">Restart Game</button></form>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default RestartGame

import React from 'react';
import Board from "../components/Board";
import GameStatus from '../components/GameStatus';
import RestartGame from '../components/RestartGame';


class Game extends React.Component {

  constructor(props){
    super(props)
    const grid = ["", "", "", "", "", "", "", "", ""]
    this.state = {
      winner: "",
      player: "X",
      turns: 0,
      gameboard: grid,
      won: false
    }

    this.switchPlayer = this.switchPlayer.bind(this);
    this.update = this.update.bind(this);
    this.setVictor = this.setVictor.bind(this);
  }



  switchPlayer() {
    if(this.state.player === "X"){
      this.setState({
        player: "O",
        turns: this.state.turns + 1
      })
    }
    else{
      this.setState({
        player: "X",
        turns: this.state.turns + 1
      })
    }

  }

  update(square){
    const updatedBoard = this.state.gameboard;
    updatedBoard[square] = this.state.player;
    this.setState({ gameboard: updatedBoard})
  }

  setVictor(){
    this.setState({
      winner: this.state.player,
      won: true
    })
  }


  render(){
    return(

      <div>
        <h1>Awesome Rocks and Rockets!</h1>
        <Board
          player={this.state.player}
          board={this.state.gameboard}
          won={this.state.won}
          turns={this.state.turns}
          switchPlayer={this.switchPlayer}
          update={this.update}
          finish={this.setVictor}
        />

        <RestartGame
          won={this.state.won}
          turns={this.state.turns}
          newGame={this.restartGame}/>

        <GameStatus
          winner={this.state.winner}
          currentPlayer={this.state.player}
          won={this.state.won}
          turns={this.state.turns}/>

      </div>)
    }

  }


      export default Game;

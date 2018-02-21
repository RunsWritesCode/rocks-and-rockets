import React from 'react';
import Board from "../components/Board"


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
    return( <div>
    <Board
      player={this.state.player}
      board={this.state.gameboard}
      won={this.state.won}
      turns={this.state.turns}
      switchPlayer={this.switchPlayer}
      update={this.update}
      finish={this.setVictor}
    />
  </div>)
  }






}


export default Game;

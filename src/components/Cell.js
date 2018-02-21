import React from 'react';

class Cell extends React.Component{


  constructor(props){
    super(props);
    this.state ={
      contents: this.props.contents
    };
    this.selectSquare = this.selectSquare.bind(this);
  }

    selectSquare() {
      this.props.playSquare(this.props.id);
      this.setState({ contents: this.props.contents });
    }

    checkImage(){
      if(this.props.contents === "X"){
        return ("/rocket.png")
      }
      else{
        return ("/asteroid.png")
      }
    }

    render(){
      if (this.props.contents === "" && this.props.gameWon === false) {
        return(
          <td>
            <button className="gridCell" onClick={this.selectSquare}></button>
            </td>
        )

      }
      return (

          <td><img src={this.checkImage()}/>
          </td>
        )
      }
}

export default Cell;

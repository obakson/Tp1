import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  handleClickCell(index) {

    if (this.state.cells[index] !== null) {return; }
    
    let newCells = [...this.state.cells];
    newCells[index] = this.state.currentPlayer === "player1" ? 'x' : 'o';
    
    const nextPlayer = this.state.currentPlayer === "player1" ? "player2" : "player1";
    this.setState( {cells: newCells, currentPlayer: nextPlayer} ); 
  }
  
  render() {
    return (
      <div
        style={gameLayoutStyle}
        //onClick={() => this.setState({ currentPlayer: "player 2" })}
      >
      <GameInfo currentPlayer={this.state.currentPlayer} gameState={"Running"} />
        <Board cells={this.state.cells} onClickCell={(id) => this.handleClickCell(id)} />
      </div>
    );
  }
}

export default GameLayout;

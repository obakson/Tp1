import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyleOut = {
  display: "block",
  backgroundColor: "blue",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component
{
  constructor(props) {
    super(props);

    this.state = { isOver: false }
  }


  
  render() {
    return <div
    onMouseOver={() => this.setState({isOver: true})}
    onMouseOut={() => this.setState({isOver: false})}
    onClick={() => this.props.onClick()} 
    style={this.state.isOver ? cellStyleOut: cellStyle}> { this.props.c } </div>;
  }
}

//const Cell = () => <div style={cellStyle}>23</div>;

export default Cell;

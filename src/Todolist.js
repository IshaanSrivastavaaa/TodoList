import React from 'react'
function Todolist(props) {
    const completedStyle = {
        fontStyle : "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <todolist className = 'todolist'>

        <input type = 'Checkbox' checked={props.item.completed} onChange = {() => props.handleChange(props.item.id)}></input>
        <p style = {props.item.completed ? completedStyle: null}>{props.item.text}</p>
      </todolist>
      );
  }
  
  export default Todolist;
  
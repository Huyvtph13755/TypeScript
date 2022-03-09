import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const myName = "Vũ Trọng Huy";
const myAge = 20;
const myStatus = false;
const showInfo = (props) => {
  return <p>Thông tin user {props.name}</p>
}
ReactDOM.render(<App/>, document.querySelector("#root"))

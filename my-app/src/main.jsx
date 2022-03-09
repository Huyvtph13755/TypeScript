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
const ShowInfo = (props) => {
  return <p>Thông tin user {props.name}</p>
}
ReactDOM.render(<div><h1>Hello</h1>
  <p>{myAge}</p>
  <p>{myStatus ? "Đã kết hôn" : "Chưa kết hôn"}</p>
  {showInfo({ name: "Hoang" })}
  <ShowInfo name="Hoang" />
</div>, document.querySelector("#root"))

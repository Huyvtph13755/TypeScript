import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"}
  ]
  return (
    <div className="App">
      {products.map(item => <Item data={item}/>)}
      <ShowInfo name="Huy" age={29} />
    </div>
  )
}

export default App

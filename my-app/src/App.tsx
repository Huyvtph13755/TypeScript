import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './ShowInfo'

function App() {
  type TProduct = {
    id: number,
    name: string
  }
  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<TProduct[]>([{id: 1, name: "Product A"}])

  return (
    <div className="App">
      <ShowInfo name="Huy"/>
    </div>
  )
}

export default App

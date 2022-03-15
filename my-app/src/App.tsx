import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
     const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
        console.log(data);
        
     }
     getProducts();
  },[])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id));
    document.location.href = "/";
  }
  return (
    <div className="App">
      <table className='table container-xl table-striped'>
        <thead>
          <th>STT</th>
          <th>Namea</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button className='btn btn-sm btn-danger' onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}

export default App
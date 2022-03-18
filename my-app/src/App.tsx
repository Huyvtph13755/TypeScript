import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { NavLink, Routes, Route, Navigate} from 'react-router-dom'
import WebsiteLayout from './Pages/layouts/WebsiteLayout';
import Home from './Pages/Home';
import Product from './Pages/Product';
import DashBoard from './Pages/DashBoard';
import ManagerProduct from './Pages/ManagerProduct';
import AdminLayout from './Pages/layouts/AdminLayout';
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
      {/* <table className='table container-xl table-striped'>
        <thead>
          <th>STT</th>
          <th>Name</th>
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
      </table> */}
      {/* <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
        <li><NavLink to="/admin">Admin DashBoard</NavLink></li>
      </ul> */}
      <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<DashBoard/>}/>
              <Route path="product" element={<ManagerProduct data={products}/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
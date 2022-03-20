import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove } from './api/product';
import { NavLink, Routes, Route, Navigate} from 'react-router-dom'
import WebsiteLayout from './Pages/layouts/WebsiteLayout';
import Home from './Pages/Home';
import Product from './Pages/Product';
import DashBoard from './Pages/DashBoard';
import ManagerProduct from './Pages/ManagerProduct';
import AdminLayout from './Pages/layouts/AdminLayout';
import AddProduct from './Pages/AddProduct';
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
  const onHandleAdd = async (product: ProductType) => {
    const {data} = await add(product);
    setProducts([...products, data])
  }
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<DashBoard/>}/>
              <Route path="product" element={<ManagerProduct data={products}/>} />
              <Route path="/admin/product/add" element={<AddProduct onAdd={onHandleAdd}/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
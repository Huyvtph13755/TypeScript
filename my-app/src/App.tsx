import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import type { ProductType } from './types/product';
import { list, newList, remove } from './api/product';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderWebsite from './components/HeaderWebsite';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HomeOverview from './pages/layouts/HomeOverview';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  const [newProduct, setNewProduct] = useState<ProductType[]>([])
  useEffect(() => {
    const getNewProducts = async () => {
      const { data } = await newList();
      setNewProduct(data);
      console.log(data);
    }
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
      // console.log(data);

    }
    getProducts();
    getNewProducts();
  }, [])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id));
    document.location.href = "/";
  }
  return (
    <Routes>
      <Route path="/" element={<HomeOverview />}>
        <Route index element={<HomePage data={newProduct} />} />
        <Route path='products' element={<ProductPage />} />
      </Route>
      {/* <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<DashBoard/>}/>
              <Route path='product' element={<ManagerProduct/>}/>
          </Route> */}
    </Routes>
  )
}

export default App
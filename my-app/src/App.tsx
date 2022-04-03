import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import type { ProductType } from './types/product';
import { add, list, newList, remove, update } from './api/product';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderWebsite from './components/HeaderWebsite';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HomeOverview from './pages/layouts/HomeOverview';
import AdminOverview from './pages/layouts/AdminOverview';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import PrivateRouter from './components/PrivateRouter';
import ProductAdminPage from './pages/ProductAdminPage';
import { CategoryType } from './types/category';
import { listCate } from './api/category';
import ProductEdit from './pages/ProductEdit';
import ProductAdd from './pages/ProductAdd';
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

  const removeItem = async (_id: string) => {
    // xoa tren API
    const { data } = await remove(_id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data.id));
    document.location.href = "/";
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
  }
  const onHandleUpdate = async (product:ProductType) => {
    console.log(product);
   const { data } = await update(product)
   setProducts(products.map(item => item._id == data._id ? data : item));
}
  return (
    <Routes>
      <Route path="/" element={<HomeOverview />}>
        <Route index element={<HomePage data={newProduct} />} />
        <Route path='products' element={<ProductPage data={products} />} />

        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
      </Route>
      <Route path="admin" element={<PrivateRouter><AdminOverview /></PrivateRouter>}> 
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<ProductAdminPage data={products}/>}/>
              <Route path="product/:id/edit" element={<ProductEdit onUpdate={onHandleUpdate} data={products}/>} />
              <Route path="product/add" element={<ProductAdd data={products} onAdd={onHandleAdd}/>} />
          </Route>
    </Routes>
  )
}

export default App
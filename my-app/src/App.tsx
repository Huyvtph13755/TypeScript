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
import { addCate, listCate, updateCate } from './api/category';
import ProductEdit from './pages/ProductEdit';
import ProductAdd from './pages/ProductAdd';
import Upload from './pages/Upload';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import CateAdminPage from './pages/CateAdminPage';
import CateAdd from './pages/CateAdd';
import CateEdit from './pages/CateEdit';
import ProductPageSort from './pages/ProductPageSort';
function App() {
 
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cates, setCates] = useState<CategoryType[]>([])
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
    const getCates = async () => {
      const { data } = await listCate();
      setCates(data)
    }
    getCates();
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
    await add(product);
  }
  const onHandleAddCate = async (category: CategoryType) => {
    await addCate(category);
  }
  const onHandleUpdate = async (product: ProductType) => {
    await update(product)
  }
  const onHandleUpdateCate = async (category:CategoryType) => {
    await updateCate(category)
 }
  return (
    <Routes>
      <Route path="/" element={<HomeOverview />}>
        <Route index element={<HomePage data={newProduct} />} />
        <Route path='products' element={<ProductPage data={products} />} />
        <Route path='upload' element={<Upload />} />
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='/product/:id' element={<DetailProduct data={products} />} />
        <Route path='/products/:id/sort' element={<ProductPageSort/>} />
        <Route path='cart' element={<Cart />} />
      </Route>
      <Route path="admin" element={<PrivateRouter><AdminOverview /></PrivateRouter>}>
        <Route index element={<Navigate to="product" />} />
        <Route path='product' element={<ProductAdminPage data={products} />} />
        <Route path="product/:id/edit" element={<ProductEdit onUpdate={onHandleUpdate} data={products} />} />
        <Route path="product/add" element={<ProductAdd data={products} onAdd={onHandleAdd} />} />
        <Route path="category" element={<CateAdminPage data={cates} />} />
        <Route path='category/add' element={<CateAdd onAdd={onHandleAddCate} />} />
        <Route path='category/:id/edit' element={<CateEdit onUpdate={onHandleUpdateCate} />} />
      </Route>
    </Routes>
  )
}

export default App
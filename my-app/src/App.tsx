import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { registerUser, signinUser } from './api/user';
import { NavLink, Routes, Route, Navigate} from 'react-router-dom';
import WebsiteLayout from './Pages/layouts/WebsiteLayout';
import Home from './Pages/Home';
import Product from './Pages/Product';
import DashBoard from './Pages/DashBoard';
import ManagerProduct from './Pages/ManagerProduct';
import AdminLayout from './Pages/layouts/AdminLayout';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import PrivateRouter from './components/PrivateRouter';
import Register from './Pages/Register';
import { UserType } from './types/user';
import Signin from './Pages/Signin';
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

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id));
    document.location.href = "/admin/product";
  }
  const onHandleAdd = async (product: ProductType) => {
    const {data} = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    const {data} = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item))
  }
  const registerHandle = async (user: UserType) => {
    const {data} = await registerUser(user)
  }
  const siginHandle = async (user: UserType) => {
    const {data} = await signinUser(user)
    if(data){
      console.log(data.user);

      console.log("ok");
      
    // Lưu thông tin user vào localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  }
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
              <Route path='register' element={<Register onRegister={registerHandle}/>}/>
              <Route path='login' element={<Signin onSignin={siginHandle}/>}/>
          </Route>
          <Route path='/admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<DashBoard/>}/>
              <Route path="product" element={<ManagerProduct data={products} onRemove={onHandleRemove}/>} />
              <Route path="add" element={<AddProduct onAdd={onHandleAdd}/>} />
              <Route path="product/:id/edit" element={< UpdateProduct onUpdate={onHandleUpdate}/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
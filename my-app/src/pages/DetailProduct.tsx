
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addToCart } from '../utils/addToCart';
type ProductDetailProps = {
    data: ProductType[];
    // onUpdate: (product: ProductType) => void
}
// type FormInputs = {
//     name: string,
//     category: string,
//     image: string,
//     desc: string,
//     price: number,
// }

const DetailProduct = (props: ProductDetailProps) => {
    const { id } = useParams();
    // const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    console.log(id);
    
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProducts(data)
            console.log(data);
            
        }
        getProduct();
    }, []);
    // const onSubmit: SubmitHandler<FormInputs> = data => {
    //     props.onUpdate(data);
    //     navigate('/admin/dashboard');
    //     window.location.reload();
    // }
    console.log(products);
    const [name, setName] = useState('')
    const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
            console.log(products);
            console.log(name);
            
            addToCart({...products, quantity: name ? name : 1}, function(){
                toastr.success(`Thêm sản phẩm ${products.name} vào giỏ hàng thành công!`);
            })
    };
    
    return (
        <section>
        <div className="mt-2 max-w-7xl m-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Chi tiết sản phẩm</h2>
        </div>
        <div className="my-8 max-w-7xl m-auto md:flex bg-gray-500 items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full rounded-3xl" alt="image of a girl posing"
                    src={products.image} />
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <h1
                        className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                        {products.name}</h1>
                        <br />
                        <h2 className="lg:text-xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{products.price}<u>đ</u></h2>
                        
                </div>
                {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 dark:text-gray-300"><b>Màu sắc</b></p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300">${products.color}</p>
                        <div className="w-6 h-6 ml-3 mr-4 cursor-pointer">
                        </div>
                    </div>
                </div> */}
                <div>
                    <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                        {products.desc}</p>
                    <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300"><b>Mã sản phẩm:</b> #{products._id}
                    </p>
                    
                </div>
                <div>
                <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300"><b>Số lượng:</b>
                </p>
                <input type="number" onChange={ (event) => setName(event.target.value) } placeholder="1" className="form-input mt-1 block w-2/6 pl-2 outline-none py-1 rounded-sm"/>
            </div>
                
                <br />
                <button onClick={(e) => handleClick(e, "clicked")} className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    </section>
    )
}

export default DetailProduct
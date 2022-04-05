import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types/product';

type ProductAddProps = {
    data: ProductType[];
    onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    category: string,
    image: string,
    desc: string,
    price: number,
}

const ProductAdd = (props: ProductAddProps) => {
    const [image, setImage] = useState("") 
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();
    
    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        if(image){
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData,{
                headers: {
                    "Content-Type": "application/form-data"
                  },
            });
            data.image = img.data.url;
        }
        

        console.log(data);
        
        props.onAdd(data);
        navigate("/admin/product")
        window.location.reload();
    }
    const cate = props.data.category
    console.log(cate);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-fit">
                        <div className="mt-10 sm:mt-0">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form id="formAddProduct">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-4">
                                                    <img width="30%" className="rounded" src="" />
                                                    <input type="hidden" id="img-old" />
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label className="block text-sm font-medium text-gray-700">Danh mục</label>
                                                    <select {...register('category')} id="cate" className="cate mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option selected>Chọn danh mục</option>
                                                        {cate && cate.map((item) => {
                                                            return <option value={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                                    <input type="text" {...register('name')} name="name" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-sm font-medium text-gray-700">Ảnh</label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                            <div className="flex text-sm text-gray-600">
                                                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                    <span>Upload a file</span>
                                                                    <input onChange={(e) => {setImage(e.target.files[0])}} type="file" className="sr-only" />
                                                                </label>
                                                                <p className="pl-1">or drag and drop</p>
                                                            </div>
                                                            <p className="text-xs text-gray-500">
                                                                PNG, JPG, GIF up to 10MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                                                    <textarea className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="desc" {...register('desc')} rows="10" ></textarea>
                                                </div>
                                                <div className="col-span-6">
                                                    <label className="block text-sm font-medium text-gray-700">Giá (đ)</label>
                                                    <input type="text" id="price" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('price')} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProductAdd
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCate } from '../api/category';
import { CategoryType } from '../types/category';
type CateEditProps = {
    onUpdate: (category: CategoryType) => void
}
type TypeInputs = {
    name: string
}
const CateEdit = (props: CateEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const [category, setCategory] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readCate(id);
            console.log(data);
            
            reset(data.category);
            setCategory(data.category)
        }
        getProduct();
    }, []);
    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/category');
        window.location.reload();
    }
    console.log(category);
    
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
                                                    <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                                    <input type="text" {...register('name', {required: true})} name="name" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                    {errors.name && errors.name.type === "required" && <span className='text-rose-700 text-xs ml-2'>Bạn không được bỏ trống trường này</span>}
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

export default CateEdit
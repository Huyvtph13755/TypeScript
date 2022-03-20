import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from '../types/product';
import { useNavigate } from 'react-router-dom';
type FormValue = {
    name: string,
    price: number
}
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
const AddProduct = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValue> = (data) => {
        props.onAdd(data);
        navigate('/admin/product')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-2' type="text" {...register('name', { required: true, minLength: 5 })} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                <br />
                <input className='border border-2' type="number" {...register('price')} />
                <br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct
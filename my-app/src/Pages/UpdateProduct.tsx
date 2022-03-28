import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useForm, SubmitHandler} from 'react-hook-form'
import { read } from '../api/product'
import { ProductType } from '../types/product'
type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FromInputs = {
    name: string,
    price: number
}

const UpdateProduct = (props: ProductEditProps) => {
    const {id} = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FromInputs>();
    const navigaye = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await read(id);
            reset(data);
        }
        getProduct()
    }, [])

    const onSubmit: SubmitHandler<FromInputs> = data => {
        props.onUpdate(data)
        navigaye('/admin/product')
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Tên' {...register('name')} />
            <input type="number" placeholder='Giá' {...register('price')} />
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateProduct
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { UserType } from '../types/user'

type FormValue = {
    email: string,
    password: string
}
type RegisterProps = {
    onRegister:(user: UserType) => void
}

const Register = (props: RegisterProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<UserType>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValue> = (data) => {
        props.onRegister(data);
        // navigate('/');
    } 
  return (
    <div>
        <h2>Đăng kí</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('email', {required: true})} placeholder="Email"/>
            {errors.email && errors.email.type === "required" && <span>Không được để trống</span>}
            <input type="password" {...register('password', {required: true})} placeholder="Password"/>
            {errors.password && errors.password.type === "required" && <span>Không được để trống</span>}
            <button>Đăng kí</button>
        </form>
    </div>
  )
}

export default Register
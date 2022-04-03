 import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from "../api/auth";

type FormValues = {
    name: string,
    email: string,
    password: string
};

const Signup = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div>
            <section className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-32 px-4 sm:px-6 lg:px-8">
                <     div className="w-full max-w-sm">
                    <form id="formSignup" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="pb-6 font-bold text-xl">ĐĂNG KÍ</h1>
                        <div className="relative">
                            <div className="relative">
                                <label htmlFor="email-address" className="sr-only">Họ tên</label>
                                <input x-ref="name" {...register('name', { required: true})} type="text" className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Họ tên"/>
                                {errors.name && errors.name.type === "required" && <span>Không được để trống</span>}
                            </div>
                            <div className="relative">
                                <label htmlFor="email-address" className="sr-only">Email</label>
                                <input x-ref="email" {...register('email', { required: true})} type="email" className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Email"/>
                                {errors.email && errors.email.type === "required" && <span>Không được để trống</span>}
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="sr-only">Mật khẩu</label>
                                <input x-ref="password" {...register('password', {required: true, minLength: 6})} type="password" className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Mật khẩu"/>
                                {errors.password && errors.password.type === "required" && <span>Không được để trống</span>}
                                {errors.password && errors.password.type === "minLength" && <span>Mật khẩu ít nhất có 6 kí tự!</span>}
                            </div>
                            <button className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                                ĐĂNG KÍ
                            </button>
                        </div></form>
                </div></section>
        </div>
    )
}

export default Signup
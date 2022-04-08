import React, { useEffect, useState } from 'react'

type Props = {}

const Cart = (props: Props) => {
    const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart') as string));
    let sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <body className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Sản phẩm</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Số lượng</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Giá</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Tổng giá</h3>
                        </div>
                        {cart.map((item, index) => {
                            return <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24"
                                            src={item.image}
                                            alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{item.name}</span>
                                        {/* <span className="text-red-500 text-xs">{item.color} | XL</span> */}
                                        <button onClick={() => {
                                            const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
                                            if (confirm) {
                                                const removeItem = cart.filter(item => item._id !== cart[index]._id)
                                                setCart([...removeItem])
                                            }
                                        }} className="btn btn-remove font-semibold hover:text-red-500 text-gray-500 text-xs text-left">Xóa</button>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <button className="btn btn-decrease" onClick={() => {
                                        const index = cart.findIndex(c => c.name == item.name)
                                        cart[index].quantity--
                                        // console.log(cart);
                                        
                                        if (cart[index].quantity < 1) {
                                            const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
                                            if (confirm) {
                                                const removeItem = cart.filter(item => item._id !== cart[index]._id)
                                                setCart([...removeItem])
                                            }
                                        }else{
                                            setCart([...cart])
                                        }
                                        
                                        console.log(cart);
                                        
                                    }}>-</button>
                                    <input className="mx-2 border text-center w-8" type="text" value={item.quantity} disabled />
                                    <button className="btn btn-increase" onClick={() => {
                                        const index = cart.findIndex(c => c.name == item.name)

                                        cart[index].quantity++
                                        setCart([...cart])
                                    }}>+</button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">{item.price}<u>đ</u></span>
                                <span className="text-center w-1/5 font-semibold text-sm">{Number(item.price) * Number(item.quantity)}</span>
                            </div>
                        })}
                        <a href="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Tổng quan</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Sản phẩm ({cart.length})</span>

                        </div>
                        <div>
                        </div>
                        <div className="py-10">
                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng hóa đơn (đồng)</span>
                                <span>{sum}</span>
                            </div>
                            <button
                                className="text-white bg-gray-700 hover:bg-gray-600 font-semibold py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Cart
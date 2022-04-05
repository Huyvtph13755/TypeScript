import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product';

type Props = {
    data: ProductType[]
}

const ProductNew = (props: Props) => {
    console.log(props);
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm mới</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {props.data && props.data.map((item, index) => {
                    return <div className="group relative">
                        <div
                            className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={item.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link to={`/product/${item._id}`}>
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {item.name}
                                    </Link>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{item.price}<u>đ</u></p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductNew
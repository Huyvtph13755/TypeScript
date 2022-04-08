import React from 'react'
import { ProductType } from '../types/product'
import { useEffect, useState } from 'react'
import { CategoryType } from '../types/category'
import { listCate } from '../api/category'
import { Link } from 'react-router-dom'
type Props = {
    data: ProductType[];
    onRemove: (_id: string) => void
}
const ShowAllProductAdmin = (props: Props) => {
    const data = props.data.product
    console.log(props.data.category);
    return (
        
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Quản lí sản phẩm
                            </h2>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="product/add" className="sm:ml-3">
                                <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Thêm mới
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">

                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>

                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Sản phẩm
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Danh mục
                                                    </th>
                                                    <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Ngày tạo
                                                </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Giá (đồng)
                                                    </th>
                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {data && data.map((item:any, index:any) => {
                                                    const cate = props.data.category; 
                                                    let name; 
                                                    for (let i = 0; i < cate.length; i++) {
                                                        if(item.category == cate[i]._id){
                                                            name = cate[i].name
                                                            // console.log(name);
                                                        }
                                                    }       
                                                    return<tr>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className="h-10 w-10 rounded-full"
                                                                        src={item.image}
                                                                        />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{item.createdAt}</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {item.price}
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <Link to={`/admin/product/${item._id}/edit`}
                                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</Link>
                                                            <button onClick={() => props.onRemove(item._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowAllProductAdmin
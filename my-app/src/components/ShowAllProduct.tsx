import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product';

type Props = {
    data: ProductType[]
}

const ShowAllProduct = (props: Props) => {
    // console.log(props.data.product);
    const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
        window.location.reload();
      };
    const list = props.data.product
    const listCate = props.data.category
    return (
        <div className="bg-white">
            <div>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Sản phẩm </h1>
                    </div>
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <form className="hidden lg:block">
                                <h3 className="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Danh mục</h3>
                                <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 pt-2">
                                    {listCate && listCate.map((item: any, index: any) => {
                                        return <li>
                                            <a className='focus:outline-none focus:border-b-4 focus:border-indigo-500' href={`/products/${item._id}/sort`}> {item.name} </a>
                                        </li>
                                    })}
                                </ul>
                                <div className="border-b border-gray-200 py-12">
                                    <h3 className="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Sắp xếp</h3>
                                    <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-10 pt-2">
                                        <li>
                                            <Link className='focus:outline-none focus:border-b-4 focus:border-indigo-500' to="/products/productaz/sort">Sắp xếp A - Z</Link>
                                        </li>
                                        <li>
                                            <Link className='focus:outline-none focus:border-b-4 focus:border-indigo-500' to="/products/productza/sort">Sắp xếp Z - A</Link>
                                        </li>
                                        <li>
                                            <Link className='focus:outline-none focus:border-b-4 focus:border-indigo-500' to="/products/productminm/sort">Sắp xếp theo giá từ thấp - cao</Link>
                                        </li>
                                        <li>
                                            <Link className='focus:outline-none focus:border-b-4 focus:border-indigo-500' to="/products/productmaxm/sort">Sắp xếp theo giá từ cao - thấp</Link>
                                        </li>
                                    </ul>
                                    <button onClick={(e) => handleClick(e, "clicked")} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lọc</button>
                                </div>
                                
                            </form>
                            <div className="lg:col-span-3">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                                    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {list && list.map((item: any, index: any) => {
                                                return <div className="group relative" key={index}>
                                                    <div
                                                        className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                        <img src={item.image}
                                                            alt="Front of men&#039;s Basic Tee in black."
                                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
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
                                </div>

                            </div>
                        </div>

                    </section>
                </main>
            </div>
        </div >
    )
}

export default ShowAllProduct
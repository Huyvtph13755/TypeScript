import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const HeaderAdmin = (props: Props) => {
  return (
    <div className="min-h-full">
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="/" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>
              <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</NavLink>
              <NavLink to="/admin/categories" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh mục</NavLink>
              <NavLink to="/admin/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản phẩm</NavLink>
              <NavLink to="/admin/news" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tin
                tức</NavLink>
              <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tài
                khoản</NavLink>
              <NavLink to="logout" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Đăng
                xuất</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}

export default HeaderAdmin
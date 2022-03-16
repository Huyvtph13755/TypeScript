import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div
                        className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" alt="" />
                            </a>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</NavLink>
                            <NavLink to="/product" className="text-base font-medium text-gray-500 hover:text-gray-900">Sản phẩm</NavLink>
                            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</NavLink>
                            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                Footer Website
            </footer>
        </div>
    )
}

export default WebsiteLayout
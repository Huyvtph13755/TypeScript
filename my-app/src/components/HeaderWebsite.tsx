import React from 'react'
import { NavLink } from 'react-router-dom'
type Props = {}

const HeaderWebsite = (props: Props) => {
  const a = JSON.parse(localStorage.getItem('user') as string);
  // console.log(a.user._id);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    console.log(event.target);
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <header>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" />
              </NavLink>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Trang chủ
              </NavLink>
              <NavLink to="/products" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sản phẩm
              </NavLink>
              <NavLink to="/news" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Tin tức
              </NavLink>
              <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Liên hệ
              </NavLink>
            </nav>
            {a == null ? (<div className="bg-white flex flex-col justify-center">
              <div className="flex items-center justify-center">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm"><button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span>Tài khoản</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button></span>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                      <div className="py-1">
                        <NavLink to="/signin" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Đăng nhập</NavLink>
                      </div>
                      <div className="py-1">
                        <NavLink to="/signup" tabIndex={3} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Đăng kí</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>) : (<div className="bg-white flex flex-col justify-center">
              <div className="flex items-center justify-center">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm"><button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span>{a.user.name}</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button></span>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                      {a.user.role == 1 ? (<div className="py-1">
                        <NavLink to="/admin" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">DashBoard</NavLink>
                      </div>) : (<div></div>)}
                      <div className="py-1">
                        <button tabIndex={3} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" id="logout"
                          onClick={(e) => handleClick(e, "clicked")}>Đăng xuất</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}

          </div>
        </div>
      </div>
    </header>

  )
}
export default HeaderWebsite
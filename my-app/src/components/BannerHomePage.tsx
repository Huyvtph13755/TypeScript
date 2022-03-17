import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const BannerHomePage = (props: Props) => {
  return (
    <div className="mt-2 max-w-7xl m-auto">
        <NavLink to=""><img className="w-full" src="https://picsum.photos/1000/300" alt=""/></NavLink>
    </div>
  )
}

export default BannerHomePage
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'

type Props = {}

const AdminOverview = (props: Props) => {
  return (
    <div>
      <HeaderAdmin/>
      <Outlet/>
    </div>
  )
}

export default AdminOverview
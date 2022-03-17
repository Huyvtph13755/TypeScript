import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterWebsite from '../../components/FooterWebsite'
import HeaderWebsite from '../../components/HeaderWebsite'

type Props = {}

const HomeOverview = (props: Props) => {
  return (
    <div>
        <HeaderWebsite/>
        <Outlet/>
        <FooterWebsite/>
    </div>
  )
}

export default HomeOverview
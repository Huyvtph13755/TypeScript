import React from 'react'
import BannerHomePage from '../components/BannerHomePage'
import ProductNew from '../components/ProductNew';
import SubBanner from '../components/SubBanner';

import { ProductType } from '../types/product'


type Show = {
    data: ProductType[];
}
const HomePage = (props: Show) => {
  // console.log(props);
  
  return (
    <div>
        <BannerHomePage/>
        <ProductNew data={props.data}/>
        <SubBanner/>
    </div>
  )
}

export default HomePage
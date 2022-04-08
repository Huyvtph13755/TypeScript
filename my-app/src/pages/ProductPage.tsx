import React from 'react'
import ShowAllProduct from '../components/ShowAllProduct'
import SubBanner from '../components/SubBanner';
import { ProductType } from '../types/product';

type Props = {
  data: ProductType[];
}

const ProductPage = (props: Props) => {
  return (
    <div>
      <SubBanner />
      <ShowAllProduct data={props.data} />
    </div>
  )
}

export default ProductPage
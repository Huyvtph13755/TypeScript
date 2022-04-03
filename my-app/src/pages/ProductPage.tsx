import React from 'react'
import Filter from '../components/Filter';
import ShowAllProduct from '../components/ShowAllProduct'
import { ProductType } from '../types/product';

type Props = {
  data: ProductType[];
}

const ProductPage = (props: Props) => {
  console.log(props.data);
  
  return (
    <div>
        <Filter />
       {/* <ShowAllProduct data={props.data}/> */}
    </div>
  )
}

export default ProductPage
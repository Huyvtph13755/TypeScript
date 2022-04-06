import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { sortPr } from '../api/product';
import ShowAllProduct from '../components/ShowAllProduct'
import ShowProductSort from '../components/ShowProductSort';
import SubBanner from '../components/SubBanner';
import { ProductType } from '../types/product';
type Props = {
    
  }

const ProductPageSort = (props: Props) => {
    var { id } = useParams();
    var data: any = []
    if(id == "productaz" || id == "productza" || id == "productminm" || id == "productmaxm"){
      var a = data
    }else{
        id = "category/" + id;
        var a = data.products
    }
    console.log(id);
    const [productsort, setProductsort] = useState<ProductType[]>([]);
    useEffect(() => {
        const sort = async () => {
            const {data} = await sortPr(id)
            if(data.products){
                console.log("true");
                console.log(data.products);
                setProductsort(data.products)
            }else{
              console.log("false");
              console.log(data);
              setProductsort(data)
              
            }
            // setProductsort(data)
        }
        sort()
    }, [])
    console.log(productsort);
    
  return (
    <div>
    <SubBanner />
    <ShowProductSort data={productsort} />
  </div>
  )
}

export default ProductPageSort
import React from 'react'
import { useEffect, useState } from 'react'
import { listCate } from '../api/category';
import { remove } from '../api/product';
import ShowAllProductAdmin from '../components/ShowAllProductAdmin';
import { CategoryType } from '../types/category';
import { ProductType } from '../types/product';
import { useNavigate } from 'react-router-dom';
type Props = {
  data: ProductType[];
}
const onHandleRemove = async (_id: string) => {
  // xóa trên API
  const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
  if (confirm) {
    await remove(_id);
    window.location.reload();
  }

}
const ProductAdminPage = (props: Props) => {
  // console.log(props.data.product);

  return (
    <div>
      <ShowAllProductAdmin data={props.data} onRemove={onHandleRemove} />
    </div>
  )
}

export default ProductAdminPage
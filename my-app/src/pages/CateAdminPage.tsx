import React from 'react'
import { removeCate } from '../api/category';
import ShowAllCateAdmin from '../components/ShowAllCateAdmin';
import { CategoryType } from '../types/category'

type CateProps = {
    data: CategoryType[];
}
const onHandleRemove = async (_id: string) => {
    // xóa trên API
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirm) {
      await removeCate(_id);
      window.location.reload();
    }
  
  }
const CateAdminPage = (props: CateProps) => {
  return (
    <div>
        <ShowAllCateAdmin data={props.data} onRemove={onHandleRemove} />
    </div>
  )
}

export default CateAdminPage
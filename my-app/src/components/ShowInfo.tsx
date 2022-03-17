import React from 'react'
import type { ProductType } from '../types/product'

type ShowInfoProps  = {
  info: ProductType
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
      { props.info.name}acb
    </div>
  )
}

export default ShowInfo
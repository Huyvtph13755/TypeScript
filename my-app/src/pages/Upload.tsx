import React, { useState, useEffect } from 'react'

type Props = {}

const Upload = (props: Props) => {
    const [image, setImage] = useState([]);
    function onImageChange(e){
        setImage([...e.target.file])
    }
    console.log(image);
    
  return (
    <div>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
  )
}

export default Upload
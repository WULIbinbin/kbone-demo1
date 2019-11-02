import React from 'react'
import './index.scss'

function goods(props) {
  const { goodslist } = props
  return (
    <div className='goods'>
      {
        goodslist.map((val, i) => (
          <div className='item' key={i}>
            <div className='info'>
              <img mode="widthFix" src={val.pic_url}></img>
              <div className='name'>{val.title}</div>
              <div className='price'>￥{val.price}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default goods
import React, { useState } from 'react'
import './index.scss'

function navigate() {
  const [count, setCount] = useState(0)
  const items = [{}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div className='navigate'>
      {
        items.map((val, i) => (
          <div className='item' key={i} onClick={handleGoto}>
            <div className='info'></div>
          </div>
        ))
      }
    </div>
  )
}

function handleGoto(){
  if (process.env.isMiniprogram) {
    wx.navigateTo({
      url: '/pages/goodsInfo/index'
    })
  } else {
    console.log('window', this.props)
    window.location.hash = '/goodsInfo'
  }
}

export default navigate

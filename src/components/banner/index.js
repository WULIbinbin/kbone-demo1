import React, { useState } from 'react'
import './index.scss'

function banner() {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div className='banner'>
      {
        "undefined" != typeof wx && wx.getSystemInfoSync
          ? (
            <wx-swiper>
              <wx-swiper-item>轮播</wx-swiper-item>
              <wx-swiper-item>轮播</wx-swiper-item>
            </wx-swiper>
            //<wx-switch></wx-switch>
          )
          :
          (
            items.map((val, i) => (
              <div className='item' key={i}>
                <div className='info'></div>
              </div>
            ))
          )
      }
    </div>
  )
}

export default banner

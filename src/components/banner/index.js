import React, { useState } from 'react'
import './index.scss'

function banner(props) {
  const items = ['http://img.59iwh.com/rc/060ff530b1dc70909b219856a5325b77.jpg?t=20160914']
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
                <img src={val} className='info'></img>
              </div>
            ))
          )
      }
    </div>
  )
}

export default banner

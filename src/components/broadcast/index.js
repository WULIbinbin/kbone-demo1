import React, { useState } from 'react'
import './index.scss'

function broadcast() {
  const [count, setCount] = useState(0)
  const items = [{ title: '这是个公告' }]
  return (
    <div className='broadcast'>
      {
        items.map(val => (
          <div className='item' key={val}>
            <div className='info'>{val.title}</div>
          </div>
        ))
      }
    </div>
  )
}

export default broadcast

import React, { useState } from 'react'
import './index.scss'

function navigate() {
  const [count, setCount] = useState(0)
  const items = [{}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div className='navigate'>
      {
        items.map((val, i) => (
          <div className='item' key={i}>
            <div className='info'></div>
          </div>
        ))
      }
    </div>
  )
}

export default navigate

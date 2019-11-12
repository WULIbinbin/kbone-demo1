import React from 'react'
import './index.scss'

export default class Panel extends React.Component{
  render(){
    console.log(this)
    const {children,windowHeight,windowWidth} = this.props
    let height = windowHeight-44
    return(
      <div className='panel' style={{height,width:windowWidth}}>
        <wx-scroll-view scroll-y className='panel-scroll-view' style={{height}}>
          {children}
        </wx-scroll-view>
      </div>
    )
  }
}
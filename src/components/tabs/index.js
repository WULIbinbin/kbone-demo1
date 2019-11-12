import React from 'react'
import './index.scss'

export default class Tabs extends React.Component{
  state = {
    translateX:0,
    current:0,
    windowHeight:0,
    windowWidth:0
  }

  componentWillMount(){
    if(process.env.isMiniprogram){
      this.setState({
        windowHeight : wx.getSystemInfoSync().windowHeight,
        windowWidth : wx.getSystemInfoSync().windowWidth
      })
    }
  }

  handleTabbarTap(current,event){
    let {windowWidth} = this.state
    this.setState({
      current,
      translateX:windowWidth*current
    })
  }
  render(){
    const {children} = this.props
    let tabbar = []
    children.length>0&&children.map(val=>{
      if(val.props&&val.props.title){
        tabbar.push(val.props.title)
      }
    })
    let {translateX,current,windowHeight,windowWidth} = this.state
    return(
      <div className='tabs'>
        <div className='tabs-bar'>
          {
            tabbar.length>0&&tabbar.map((val,i)=>(
              <div className={['tabs-bar--item',current===i?'tabs-bar--oncheck':'']} 
                onClick={
                  this.handleTabbarTap.bind(this,i)
                  }>
                <div className='tabs-bar--item-text'>{val}</div>
              </div>
            ))
          }
        </div>
        <div className='tabs-container'>
          <div className='tabs-scroll-view' style={{transform:`translateX(-${translateX}px)`,width:windowWidth*(children.length||1)}}>
            {
              children.length>0&&children.map(val=>{
                val.props['windowHeight'] = windowHeight
                return (val)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
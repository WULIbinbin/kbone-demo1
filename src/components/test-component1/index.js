import React from 'react'

export default class Tabs extends React.Component{
  render(){
    return (
      <div>
        <p>我是test-component1</p>
        {this.props.children}
      </div>
    )
  }
}
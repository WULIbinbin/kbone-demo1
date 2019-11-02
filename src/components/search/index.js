import React from 'react'
import './index.scss'


export default class searchBar extends React.Component {
  state = {
    inputValue: ''
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  searchClick() {
    if (process.env.isMiniprogram) {
      wx.navigateTo({
        url: '/pages/searchResult/searchResult'
      })
    }else{
      console.log('window',this.props)
      window.location.hash = '/searchResult'
    }
  }
  render() {
    return (
      <div className='search'>
        <input placeholder="请输入商品名称" value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
        <div className='btn' onClick={this.searchClick.bind(this)}>搜索</div>
      </div>
    )
  }
}

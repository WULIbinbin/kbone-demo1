import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  handleGetavatar(e) {
    console.log(e)
  }
  render() {
    return (
      <div>
        <p className=''>个人中心</p>
        {/* <wx-button open-type="getUserInfo" bindgetuserinfo={this.handleGetavatar.bind(this)}>获取头像</wx-button> */}
      </div>
    )
  }
}

export default App
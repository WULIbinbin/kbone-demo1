import React from 'react'
import './profile.scss'

class App extends React.Component {

  getUserButton = null
  getUserButton2 = null

  state = {
    userInfo:{}
  }

  componentDidMount(){
    console.log(this.getUserButton)
    this.getUserButton.addEventListener('getuserinfo',this.handleGetavatar.bind(this))
  }
  handleGetavatar(e) {
    let {userInfo} = e
    this.setState({userInfo})
  }
  render() {
    return (
      <div>
        <p className=''>个人中心</p>

        <wx-button 
        className='profile-button' 
        open-type="share"
        >
          分享
        </wx-button>

        <wx-button 
        ref={(e)=>{
          this.getUserButton = e
        }}
        className='profile-button' 
        open-type="getUserInfo"
        //bindgetuserinfo={this.handleGetavatar}
        >
          获取头像
        </wx-button>

        <img src={this.state.userInfo.avatarUrl} className='avatar'></img>

        <comp-a class="block" prefix="prefixA" suffix="suffixA" someevent="onEvent">
          {/* <div>comp-a children</div> */}
        </comp-a>

      </div>
    )
  }
}

export default App
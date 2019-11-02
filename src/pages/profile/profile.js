import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {

    return (
      <div>
        <p className=''>个人中心</p>
      </div>
    )
  }
}

export default App

// export default function createApp() {
//   const container = document.getElementById('root')
//   ReactDOM.render(<App />, container)
// }

// "undefined" != typeof wx && wx.getSystemInfoSync || createApp()

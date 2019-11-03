import React from 'react'
import ReactDOM from 'react-dom'
import App from './profile'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)
  ReactDOM.render(<App />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
import React from 'react'
import ReactDOM from 'react-dom'
import App from './searchResult'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)
  ReactDOM.render(<App />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
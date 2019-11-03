import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import SearchResult from './pages/searchResult/searchResult';
import Profile from './pages/profile/profile';

const routes = [
  { component: Home, path: '/' },
  { component: Home, path: '/home' },
  { component: SearchResult, path: '/searchResult' },
  { component: Profile, path: '/profile' },
]

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {
            routes.map((val, i) => (
              <Route exact key={i} {...val}></Route>
            ))
          }
        </Switch>
      </HashRouter>
    );
  }
}

export default function createApp() {
  const container = document.getElementById('root')
  ReactDOM.render(<App />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()

import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import SearchResult from './pages/searchResult/searchResult';
import Profile from './pages/profile/profile';
import GoodsInfo from './pages/goodsInfo/goodsInfo';

const routes = [
  { component: Home, path: '/' },
  { component: Home, path: '/home' },
  { component: SearchResult, path: '/searchresult' },
  { component: Profile, path: '/profile' },
  { component: GoodsInfo, path: '/goodsinfo' },
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

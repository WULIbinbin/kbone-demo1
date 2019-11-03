import React from 'react'
import ReactDOM from 'react-dom'
import Navigate from '../../components/navigate'
import Banner from '../../components/banner'
import Broadcast from '../../components/broadcast'
import Goods from '../../components/goods'
import SearchBar from '../../components/search'

import { indexData } from '../../utils/indexData'

class App extends React.Component {
  render() {

    return (
      <div>
        <SearchBar></SearchBar>
        <Banner></Banner>
        <Navigate></Navigate>
        <Broadcast></Broadcast>
        <Goods goodslist={indexData}></Goods>
      </div>
    )
  }
}


export default App
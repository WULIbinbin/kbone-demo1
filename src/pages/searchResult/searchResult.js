import React from 'react'
import ReactDOM from 'react-dom'
import Goods from '../../components/goods'
import SearchBar from '../../components/search'
import { indexData } from '../../utils/indexData'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <Goods goodslist={indexData}></Goods>
      </div>
    )
  }
}

export default App
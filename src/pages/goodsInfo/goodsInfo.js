import React from 'react'
import Tabs from '../../components/tabs/index'
import Panel from '../../components/tabs/panel/index'
import { indexData } from '../../utils/indexData'

import './goodsInfo.scss'

class App extends React.Component {
  render() {
    const goodsInfo = indexData[0]
    console.log(goodsInfo)
    return (
      <div className='goodsInfo'>
        {/* <div className='goodsInfo-container'>
          <img className='goodsInfo-bannerImg'></img>
          <p className='goodsInfo-title'>{goodsInfo.title}</p>
          <div className='goodsInfo-info'>
            <span className='goodsInfo-info-sku'>库存：{goodsInfo.sort_order}</span>
            <div className='goodsInfo-info-price'>售价：<span>￥{goodsInfo.price}</span></div>
          </div>
          <div className='goodsInfo-selectbar'>
            <span>请选择产品规格</span>
          </div>
        </div> */}
        <Tabs>
          <Panel title="详情">详情...</Panel>
          <Panel title="评论">评论...</Panel>
        </Tabs>
      </div>
    )
  }
}


export default App
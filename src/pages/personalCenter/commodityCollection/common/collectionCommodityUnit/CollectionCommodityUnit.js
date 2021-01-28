// 收藏商品单元

import React from 'react';
import "./collectionCommodityUnit.scss";
import { Link } from "react-router-dom";
import { SwipeAction, Cell, Checkbox } from 'zarm';

import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const CollectionShopUnit = (props) => {
  return(
    <SwipeAction
      className="collection-commodity-unit"
      right={[
        <Link to="/" className="similar-but" onClick={() => console.log('找相似')}>找相似</Link>,
        <div className="delete-but" onClick={() => console.log('删除')}>删除</div>,
      ]}
    >
      <Cell title={<div className="cell-goods-box">
        <Checkbox className="check-box" />
        <img className="cover-img" src={pictureInfoList01} alt=""/>
        <div className="check-goods-info">
          <h6 className="name">鞍钢的千万人人阿萨德发阿萨德发去玩儿阿萨德发阿萨德发</h6>
          <div className="choice-but">
            <div className="title">阿斯顿发生阿萨德发</div>
            <span className="number">x1<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11344"><path d="M801.548285 510.271032L301.254151 1010.360574c-18.242732 18.242732-47.73799 18.106338-65.844327-0.306887a47.226511 47.226511 0 0 1 0.272788-66.389904l433.358652-433.154061L235.784908 80.356335A47.192413 47.192413 0 0 1 235.307528 13.966431 46.30585 46.30585 0 0 1 301.151856 13.454952l500.396429 496.81608z" fill="" p-id="11345"></path></svg></span>
          </div>
          <div className="add-but">再选一款<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1172"><path d="M901.1 541.5H571.6V895c0 32.9-26.7 59.6-59.6 59.6-32.9 0-59.5-26.7-59.6-59.6V541.5H122.9c-32.5 0-58.9-26.4-58.9-58.9s26.4-58.9 58.9-58.9h329.5V129c0-32.9 26.7-59.6 59.6-59.6 32.9 0 59.5 26.7 59.6 59.6v294.6h329.5c32.5 0 58.9 26.4 58.9 58.9 0 32.6-26.4 59-58.9 59z" p-id="1173"></path></svg></div>
          <span className="tag">顺丰包邮</span>
          <div className="price-box">¥<b>545.45</b><em>已拼852件</em></div>
          </div>
        </div>}
      />
    </SwipeAction>
  )
}

export default CollectionShopUnit;
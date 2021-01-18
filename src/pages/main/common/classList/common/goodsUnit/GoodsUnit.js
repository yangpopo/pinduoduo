// 分类商品单元

import React, { useState, Suspense } from 'react';
import "./goodsUnit.scss";
import stationImg from "assets/img/public/station-img.jpg"; // 站位图片

const GoodsList = (props) => {
  // 点击跳转跳转
  const linkGoClick = (val) => {
      props.history.replace("/product-details/" + val);
  }

  const [dataJson, setDataJson] = useState(props.dataJson);

  // 数字格式
  const numberFormat = (val) => {
    if (val < 1000) {
      return val
    } else if (val >= 1000 && val < 10000) {
      return (val / 1000).toFixed(2) + "千"
    } else if (val >= 10000 && val <100000) {
      return (val / 10000).toFixed(2) + "万"
    } else {
      return "10万+"
    }
  }

  return (<div className="goods-unit" onClick={ () => { linkGoClick(dataJson.id) }}>
    <img className="goods-img" imgurl={ dataJson.imgUrl } src={ stationImg } alt="" />
    <div className="depict-box">
      <div className="title">{ dataJson.title }</div>
      <dl>
        <dt>
          {
            dataJson.tag.map((item ,index) => {
              return (<b key={index}>{ item }</b>)
            })
          }
        </dt>
        <dd><span>¥<b>{ dataJson.price }</b></span>已拼{ numberFormat(dataJson.quantitySold) }件</dd>
      </dl>
    </div>
  </div>)
}

export default GoodsList;
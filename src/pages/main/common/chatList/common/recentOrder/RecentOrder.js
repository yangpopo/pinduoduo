// 关注的直播框

import React, { useState, useEffect } from 'react';
import "./recentOrder.scss";

const RecentOrder = (props) => {
  // 点击跳转跳转
  const linkGoClick = (val) => {
    props.history.replace("/dialogue/" + val);
  }

  const {id, imgUrl, status} = props.dataJson;
  return (<div className="swiper-slide recent-order" onClick={() => {linkGoClick(id)}} key={id}>
    <img className="img-box" src={imgUrl} alt=""/>
    <dl>
      <dt>{status}</dt>
      <dd>咨询客服</dd>
    </dl>
  </div>)
}

export default RecentOrder;

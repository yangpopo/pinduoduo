// 店铺关注-店铺

import React, { Fragment, useState, useEffect } from 'react';
import "./shopUnit.scss";
import { Link } from "react-router-dom";
import headPortrait from "assets/img/picture/head-portrait.jpg"; // 品牌logo


const ShopUnit = () => {
  return(<Link to="/shop/0" className="shop-unit">
    <div className="head-img">
      <span className="title">品牌</span>
      <img src={headPortrait} alt="" />
      <div className="state"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9380"><path d="M128 85.333a85.333 85.333 0 0 1 85.333 85.334v682.666a85.333 85.333 0 1 1-170.666 0V170.667A85.333 85.333 0 0 1 128 85.333z m384 213.334A85.333 85.333 0 0 1 597.333 384v256a85.333 85.333 0 1 1-170.666 0V384A85.333 85.333 0 0 1 512 298.667zM896 192q85.333 0 85.333 85.333v469.334Q981.333 832 896 832t-85.333-85.333V277.333Q810.667 192 896 192z" p-id="9381"></path></svg>直播中</div>
    </div>
    <span className="name-box">回力运动鞋旗舰店</span>
  </Link>)
}

export default ShopUnit;
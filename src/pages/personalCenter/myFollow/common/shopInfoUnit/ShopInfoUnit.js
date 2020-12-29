// 店铺关注-店铺

import React, { Fragment, useState, useEffect } from 'react';
import "./shopInfoUnit.scss";
import { Link, useHistory } from "react-router-dom";
import { Popper } from 'zarm';
import headPortrait from "assets/img/picture/head-portrait.jpg"; // 品牌logo
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";


const ShopUnit = () => {
  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = () => {
    history.push("/shop/0");
  }

  const [popperVisible, setPopperVisible] = useState(false);

  return(<div className="shop-info-unit">
    <Link className="head-img" to="/shop/0"><img src={headPortrait} alt="" /></Link>
    <div className="content-box">
      <div className="title-box">
        <dl className="title">
          <dt>回力运动旗舰店<span className="label">品牌</span></dt>
          <dd>总销售10万+件</dd>
        </dl>
        <div className="but-box">
          <Popper
            content={<div className="cancel-but">取消关注</div>}
            destroy={true}
            visible={popperVisible}
            trigger="click"
            direction="bottom"
            animationType="zoomFade"
            className="custom-content"
            mountContainer={() => document.querySelector(".my-follow")}
          >
            <svg onClick={() => { setPopperVisible(true) }} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11829"><path d="M120.259456 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0ZM511.999488 512.001023m-117.921713 0a115.236 115.236 0 1 0 235.843426 0 115.236 115.236 0 1 0-235.843426 0ZM903.739521 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z" p-id="11830"></path></svg>
          </Popper>
          <Link className="shop-but-link" to="/shop/0">进入店铺</Link>
        </div>
      </div>
      {/* 产品 */}
      <div className="info-box">
        <Link className="product-link" to="/product-details/0"><img src={pictureInfoList01} alt="" /><span className="price">¥<b>154</b></span></Link>
        <Link className="product-link" to="/product-details/0"><img src={pictureInfoList02} alt="" /><span className="price">¥<b>511</b></span></Link>
        <Link className="product-link" to="/product-details/0"><img src={pictureInfoList03} alt="" /><span className="price">¥<b>21</b></span></Link>
        <Link className="product-link" to="/product-details/0"><img src={pictureInfoList03} alt="" /><span className="price">¥<b>21</b></span></Link>
      </div>
    </div>
  </div>)
}

export default ShopUnit;
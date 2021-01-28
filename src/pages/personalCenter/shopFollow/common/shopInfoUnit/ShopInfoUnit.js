// 店铺关注-店铺

import React from 'react';
import "./shopInfoUnit.scss";
import { Link } from "react-router-dom";
import headPortrait from "assets/img/picture/head-portrait.jpg"; // 品牌logo
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";


const ShopUnit = (props) => {
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.replace("/shop/0");
  }

  return(<div className="shop-info-unit">
    <Link className="head-img" to="/shop/0"><img src={headPortrait} alt="" /></Link>
    <div className="content-box">
      <div className="title-box" onClick={ () => { linkGoClick() } }>
        <dl className="title">
          <dt>回力运动旗舰店<span className="label">品牌</span></dt>
          <dd>总销售10万+件</dd>
        </dl>
        <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9997"><path d="M357.376 852.309333a25.6 25.6 0 0 0 36.181333 36.181334l358.4-358.4a25.6 25.6 0 0 0 0-36.181334l-358.4-358.4a25.6 25.6 0 0 0-36.181333 36.181334L697.685333 512l-340.309333 340.309333z" p-id="9998"></path></svg>
      </div>
      {/* 产品上新 */}
      <div className="info-box">
        <p className="title">上新3件商品</p>
        <div className="new-info-box">
          <Link className="product-link" to="/product-details/0"><img src={pictureInfoList01} alt="" /><span className="price">¥<b>154</b></span></Link>
          <Link className="product-link" to="/product-details/0"><img src={pictureInfoList02} alt="" /><span className="price">¥<b>511</b></span></Link>
          <Link className="product-link" to="/product-details/0"><img src={pictureInfoList03} alt="" /><span className="price">¥<b>21</b></span></Link>
        </div>
      </div>
      {/* 降价 */}
      <div className="info-box">
        <p className="title">上新3件商品</p>
        <div className="promotion-info-box" onClick={ () => { linkGoClick() } }>
          <img className="picture-img" src={pictureInfoList01} alt="" />
          <div className="promotion-info">
            <h6 className="title">安抚奥斯卡那克里斯多夫发卡上的看法</h6>
            <dl>
              <dt>已降35元</dt>
              <dd>降价后<b>¥454</b></dd>
            </dl>
          </div>
        </div>
        <div className="promotion-info-box" onClick={ () => { linkGoClick() } }>
          <img className="picture-img" src={pictureInfoList01} alt="" />
          <div className="promotion-info">
            <h6 className="title">安抚奥斯卡那克里斯多夫发卡上的看法</h6>
            <dl>
              <dt>已降35元</dt>
              <dd>降价后<b>¥454</b></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default ShopUnit;
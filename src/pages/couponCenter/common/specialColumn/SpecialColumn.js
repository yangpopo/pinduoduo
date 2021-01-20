// 特色栏目

import React, { Fragment, useEffect } from 'react';
import "./specialColumn.scss";

import CouponCenterIcon01 from "assets/img/public/coupon-center-icon-01.png";
import CouponCenterIcon02 from "assets/img/public/coupon-center-icon-02.png";
import CouponCenterIcon03 from "assets/img/public/coupon-center-icon-03.png";
import CouponCenterIcon04 from "assets/img/public/coupon-center-icon-04.png";
import CouponCenterIcon05 from "assets/img/public/coupon-center-icon-05.png";
import CouponCenterIcon06 from "assets/img/public/coupon-center-icon-06.png";
import CouponCenterIcon07 from "assets/img/public/coupon-center-icon-07.png";
import CouponCenterIcon08 from "assets/img/public/coupon-center-icon-08.png";

const SpecialColumn = () => {
  return (<div className="special-column">
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon01} alt="" />
      <dl className="info-box">
        <dt>每日神券</dt>
        <dd>可用5张</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon02} alt="" />
      <dl className="info-box">
        <dt>补贴特权</dt>
        <dd>专享补贴</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon03} alt="" />
      <dl className="info-box">
        <dt>免单特权</dt>
        <dd>买过都能免</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon04} alt="" />
      <dl className="info-box">
        <dt>超值满返</dt>
        <dd>最高返10元</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon05} alt="" />
      <dl className="info-box">
        <dt>生活特权</dt>
        <dd>品牌折扣</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon06} alt="" />
      <dl className="info-box">
        <dt>大额券</dt>
        <dd>可领50元</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon07} alt="" />
      <dl className="info-box">
        <dt>免费试用</dt>
        <dd>剩余2次</dd>
      </dl>
    </div>
    <div className="column-unit">
      <img className="icon-img" src={CouponCenterIcon08} alt="" />
      <dl className="info-box">
        <dt>售后无忧</dt>
        <dd>可享6次</dd>
      </dl>
    </div>
  </div>)
}

export default SpecialColumn;
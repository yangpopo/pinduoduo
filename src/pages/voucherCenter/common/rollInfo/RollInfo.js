// 滚动信息

import React, { Fragment, useState, useEffect } from 'react';
import "./rollInfo.scss";
import Swiper from "swiper";
import "../../../../../node_modules/swiper/dist/css/swiper.min.css";

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像

const RollInfo = () => {
  useEffect(() => {
    let rollInfoSwiper = new Swiper('.roll-info-swiper-container', {
      direction: 'vertical',
      spaceBetween: 0,
      loop: true,
      autoplay: true,
    });
    return () => {
      rollInfoSwiper.destroy(true);
    }
  });

  return(<div className="roll-info">
    <span className="title">充话费</span>
    <div className="swiper-container roll-info-swiper-container swiper-no-swiping ">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src={headPortrait} alt="" />XXX&nbsp;20分钟前使用5元&nbsp;优惠券充值100元</div>
        <div className="swiper-slide"><img src={headPortrait} alt="" />YYY&nbsp;30分钟前使用10元&nbsp;优惠券充值50元</div>
        <div className="swiper-slide"><img src={headPortrait} alt="" />KKK&nbsp;10分钟前使用20元&nbsp;优惠券充值150元</div>
      </div>
    </div>
  </div>)
}

export default RollInfo;
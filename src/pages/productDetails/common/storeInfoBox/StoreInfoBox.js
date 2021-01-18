// 店铺信息

import React, { Fragment, useState, useEffect } from 'react';
import "./storeInfoBox.scss";
import { Link } from "react-router-dom";

import Swiper from "swiper";
import "../../../../../node_modules/swiper/dist/css/swiper.min.css";

import headPortrait from "assets/img/picture/head-portrait.jpg";
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const StoreInfoBox = (props) => {
  // 点击跳转跳转
  const linkGoClick = (id) => {
    props.history.replace("/product-details/" + id);
  }

  useEffect(() => {
    var swiperStoreInfo = new Swiper('.swiper-store-info-box', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 5,
    });
  })

  return (
  <div className="store-info-box">
    <div className="head">
      <div className="name">
        <img src={headPortrait} alt="" />
        哈哈店铺
      </div>
      <Link className="go-shop" to="/千万人群无">进入店铺</Link>
    </div>
    <div className="info">
      <div className="score">
        综合体验:
          <div className="grade-box">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8694"><path d="M136.99999971 418.24999971l203.47500058 187.50000058L287 887.00000029l225-143.85000058L737 887.00000029l-54.225-281.25L887.00000029 418.24999971l-269.55-30.07499942L512 136.99999971 407.52500029 388.17500029 136.99999971 418.24999971z" fill="#e22c29" p-id="8695"></path></svg>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8694"><path d="M136.99999971 418.24999971l203.47500058 187.50000058L287 887.00000029l225-143.85000058L737 887.00000029l-54.225-281.25L887.00000029 418.24999971l-269.55-30.07499942L512 136.99999971 407.52500029 388.17500029 136.99999971 418.24999971z" fill="#e22c29" p-id="8695"></path></svg>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8681"><path d="M695.938 617.891l43.875 252.703-227.391-118.969v-576.703l112.641 227.813 253.969 35.859-183.094 179.297z" fill="#e22c29" p-id="8682"></path><path d="M695.938 617.891l43.875 252.703-227.391-118.969v-576.703l112.641 227.813 253.969 35.859-183.094 179.297z" fill="#d4ccca" p-id="8683"></path><path d="M145.812 438.594l253.969-35.859 113.063-227.813v576.703l-227.391 118.969 43.875-252.703z" fill="#e22c29" p-id="8684"></path></svg>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8694"><path d="M136.99999971 418.24999971l203.47500058 187.50000058L287 887.00000029l225-143.85000058L737 887.00000029l-54.225-281.25L887.00000029 418.24999971l-269.55-30.07499942L512 136.99999971 407.52500029 388.17500029 136.99999971 418.24999971z" fill="#d4ccca" p-id="8695"></path></svg>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8694"><path d="M136.99999971 418.24999971l203.47500058 187.50000058L287 887.00000029l225-143.85000058L737 887.00000029l-54.225-281.25L887.00000029 418.24999971l-269.55-30.07499942L512 136.99999971 407.52500029 388.17500029 136.99999971 418.24999971z" fill="#d4ccca" p-id="8695"></path></svg>
        </div>
      </div>
      <div className="parameter">商品数量:7&nbsp;已拼:2.6万件</div>
    </div>
    <div className="swiper-container swiper-store-info-box">
      <div className="swiper-wrapper">
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(0)}}>
          <img src={pictureInfoList01} alt="" />
          <div className="name">分公司阿尔是对大概事大方</div>
          <div className="info">
            <span>¥<b>45</b></span>
            <em>已拼212件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(1)}}>
          <img src={pictureInfoList02} alt="" />
          <div className="name">王庆伟ad</div>
          <div className="info">
            <span>¥<b>23</b></span>
            <em>已拼21件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(2)}}>
          <img src={pictureInfoList03} alt="" />
          <div className="name">说得过去ex不耽搁根深蒂固</div>
          <div className="info">
            <span>¥<b>32</b></span>
            <em>已拼232件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(3)}}>
          <img src={pictureInfoList04} alt="" />
          <div className="name">山东分公司是的法规</div>
          <div className="info">
            <span>¥<b>23</b></span>
            <em>已拼21件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(4)}}>
          <img src={pictureInfoList01} alt="" />
          <div className="name">的覆盖物而</div>
          <div className="info">
            <span>¥<b>22</b></span>
            <em>已拼31件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(5)}}>
          <img src={pictureInfoList02} alt="" />
          <div className="name">我过得好发生的份儿</div>
          <div className="info">
            <span>¥<b>32</b></span>
            <em>已拼432件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(6)}}>
          <img src={pictureInfoList03} alt="" />
          <div className="name">阿萨德发爱上的日期</div>
          <div className="info">
            <span>¥<b>54</b></span>
            <em>已拼34件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(7)}}>
          <img src={pictureInfoList04} alt="" />
          <div className="name">个拔丝地瓜对方</div>
          <div className="info">
            <span>¥<b>12</b></span>
            <em>已拼32件</em>
          </div>
        </div>
        <div className="swiper-slide store-commodity" onClick={() => {linkGoClick(8)}}>
          <img src={pictureInfoList01} alt="" />
          <div className="name">请问而且热无若曲儿</div>
          <div className="info">
            <span>¥<b>112</b></span>
            <em>已拼234件</em>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default StoreInfoBox;
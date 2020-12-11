// 接受消息

import React, { Fragment, useState, useEffect } from 'react';
import "./getNews.scss";
import { Link } from "react-router-dom";

import headPortrait from "assets/img/picture/head-portrait.jpg";

const GetNews = (props) => {
  return (<div className="get-news">
    <Link to="/shop/0" className="head-portrait"><img src={headPortrait} alt="" /></Link>
    <div className="news-box">阿斯顿发顺丰阿斯顿发顺丰阿萨法撒旦法是多少阿斯顿发生打发斯蒂芬阿萨德发阿萨德法师法师的发斯蒂芬阿萨德发安抚阿萨德发安抚按时</div>
  </div>)
}

export default GetNews;
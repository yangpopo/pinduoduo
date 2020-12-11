// 发送消息

import React, { Fragment, useState, useEffect } from 'react';
import "./sendNews.scss";

import userPortrait from "assets/img/picture/user-portrait.png";

const SendNews = (props) => {
  return (<div className="send-news">
    <img className="head-portrait" src={userPortrait} alt="" />
    <div className="news-box">汉光武帝43534儿童袜数人头沃尔特电饭锅阿示范岗闻风丧胆</div>
  </div>)
}

export default SendNews;
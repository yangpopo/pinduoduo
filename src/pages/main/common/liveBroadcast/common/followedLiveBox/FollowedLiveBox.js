// 关注的直播框

import React from 'react';
import "./followedLiveBox.scss";

const FollowedLiveBox = (props) => {
  // 点击跳转跳转
  const linkGoClick = (val) => {
    props.history.replace("/live-broadcast/" + val);
  }

  const {id, imgUrl, userImg, name} = props.dataJson;
  return (<div className="swiper-slide followed-live-box" onClick={() => {linkGoClick(id)}} key={id}>
    <img className="img-box" src={imgUrl} alt=""/>
    <span className="head-icon"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="621"><path d="M455.9 365.3c-102.9 0-186.5 83.7-186.5 186.5 0 102.9 83.7 186.5 186.5 186.5 102.1 0 185.2-83.7 185.2-186.5s-83-186.5-185.2-186.5z m0 321.8c-74.6 0-135.3-60.7-135.3-135.3 0-74.6 60.7-135.2 135.3-135.2 73.9 0 134 60.7 134 135.2 0 74.6-60.1 135.3-134 135.3z" p-id="622"></path><path d="M844 268.5H691.5l-24-69.6c-8.6-25-32.2-41.8-58.6-41.8H303.6c-26.4 0-50 16.8-58.6 41.8l-24 69.6h-41.7c-46.2 0-83.8 37.6-83.8 83.8v434c0 46.2 37.6 83.8 83.8 83.8H844c46.2 0 83.8-37.6 83.8-83.8V577.2c0-14.2-11.5-25.6-25.6-25.6-14.2 0-25.6 11.5-25.6 25.6v209.1c0 17.9-14.6 32.5-32.5 32.5H179.3c-17.9 0-32.5-14.6-32.5-32.5v-434c0-17.9 14.6-32.5 32.5-32.5h60c10.9 0 20.7-6.9 24.2-17.3l29.9-86.9c1.5-4.3 5.6-7.2 10.1-7.2h305.3c4.6 0 8.6 2.9 10.1 7.2l30 86.9c3.6 10.3 13.3 17.3 24.2 17.3H844c17.9 0 32.5 14.6 32.5 32.5v68.5c0 14.2 11.5 25.6 25.6 25.6 14.2 0 25.6-11.5 25.6-25.6v-68.5c0.1-46.2-37.5-83.8-83.7-83.8z" p-id="623"></path><path d="M766 580.2h-12c-14.2 0-25.6 11.5-25.6 25.6 0 14.2 11.5 25.6 25.6 25.6h12c14.2 0 25.6-11.5 25.6-25.6 0.1-14.2-11.4-25.6-25.6-25.6zM766 472.3h-12c-14.2 0-25.6 11.5-25.6 25.6 0 14.2 11.5 25.6 25.6 25.6h12c14.2 0 25.6-11.5 25.6-25.6 0.1-14.2-11.4-25.6-25.6-25.6z" p-id="624"></path></svg></span>
    <div className="info-box"><img src={userImg} alt="" />{name}</div>
  </div>)
}

export default FollowedLiveBox;

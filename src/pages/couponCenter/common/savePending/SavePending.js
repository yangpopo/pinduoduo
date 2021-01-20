// 省钱待办

import React, { Fragment, useState, useEffect } from 'react';
import "./savePending.scss";
import { useHistory } from "react-router-dom"; // 路由
import { Progress } from 'zarm';
import Swiper from "swiper";
import "../../../../../node_modules/swiper/dist/css/swiper.min.css";


const SavePending = (props) => {
  // 点击跳转跳转
  let history = useHistory();
  const linkGoClick = (val) => {
    history.push(val);
  }

  useEffect(() => {
    let savePendingSwiper = new Swiper('.save-pending-swiper', {
      direction: 'vertical',
      freeMode: true,
      mousewheel: true,
      autoplay:true
    });
    return () => {
      savePendingSwiper.destroy(true);
    }
  });

  return (<div className="save-pending">
    <div className="save-pending-box">
      <span className="title-box">省钱待办</span>
      <div className="swiper-container save-pending-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide-01" onClick={() => {linkGoClick("/54545544sdf")}}>
            <dl>
              <dt>你有<b>10</b>元补贴红包待领取</dt>
              <dd>每日限量发放，先到先得</dd>
            </dl>
          </div>
          <div className="swiper-slide slide-02" onClick={() => {linkGoClick("/cvghdf")}}>
            <dl>
              <dt>再拼<b>15</b>单即可免1单</dt>
              <dd>
                <Progress
                  shape="line"
                  percent={6}
                  text={(val) => `${val}/15`}
                  theme="primary"
                  strokeShape="round"
                />
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7494"><path d="M340.992 820.736c11.776 11.776 31.232 11.776 43.008 3.072l287.232-287.232c8.704-11.264 11.264-25.088 6.656-35.84-0.512-2.56-5.12-7.68-8.704-12.288L385.536 205.312c-11.776-14.848-30.72-14.848-42.496-3.072-11.776 11.776-11.776 30.72 0 42.496l265.216 268.288-267.264 264.192c-11.776 12.288-12.288 31.232 0 43.52z" p-id="7495"></path></svg>
    </div>
  </div>)
}

export default SavePending;

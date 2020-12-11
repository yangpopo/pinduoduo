// 滑动展示框

import React, { useState, useEffect } from 'react';
import "./slideLiveRevealBox.scss";
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";

const SlideLiveRevealBox = (props) => {
  const [dataJson, setDataJson] = useState(props.dataJson);
  useEffect(() => {
    let slideLiveRevealSwiper = new Swiper('.swiper-slide-live-reveal-box', {
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true,
    });
    return () => {
      slideLiveRevealSwiper.destroy(true);
    }
  }, [dataJson]);
  
  return (<div className="swiper-container swiper-slide-live-reveal-box">
    <div className="swiper-wrapper">
      {props.children}
    </div>
  </div>)
}
export default SlideLiveRevealBox;




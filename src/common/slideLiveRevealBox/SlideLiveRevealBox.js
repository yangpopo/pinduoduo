// 滑动展示框

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./slideLiveRevealBox.scss";
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";

const SlideLiveRevealBox = (props) => {
  const [dataJson, setDataJson] = useState(props.dataJson);
  useEffect(() => {
    let slideLiveRevealSwiper = new Swiper(`#${props.id}`, {
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true,
    });
    return () => {
      slideLiveRevealSwiper.destroy(true);
    }
  }, [dataJson]);
  
  return (<div id={props.id} className="swiper-container swiper-slide-live-reveal-box">
    <div className="swiper-wrapper">
      {props.children}
    </div>
  </div>)
}

SlideLiveRevealBox.propTypes = {
  id: PropTypes.string.isRequired,
}


export default SlideLiveRevealBox;




// 申请售后

import React, { Fragment, useState, useEffect } from 'react';
import "./applySelectAfterSales.scss";
import { NavBar, Icon } from "zarm";
import { useHistory, useParams } from "react-router-dom";

import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const ApplyAfterSales = (props) => {
  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      history.go(-1);
    } else {
      history.push(url);
    }
  }
  // 传递id值
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
  });

  return(<div className="apply-select-after-sales">
    <NavBar
      className="apply-select-after-sales-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="选择售后类型"
    />
    <div className="apply-select-after-sales-box">
      <div className="order-describe" onClick={ () => { linkGoClick("/logistics-information/0") }}>
        <img src={PictureInfoList01} alt="" />
        <dl className="order-info">
          <dt>搭嘎说的按时发大水的方式发斯蒂芬阿萨德发阿斯顿发生打发斯蒂芬撒旦法</dt>
          <dd>阿是搭嘎是打工千万人群无若群翁日期是的发送阿萨德发安啥都贵单位当然是抚</dd>
        </dl>
      </div>
      <div className="refund-option" onClick={ () => { linkGoClick("/apply-select-after-sales/1/apply-after-sales/?type=0") }}>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1542"><path d="M985.3 931H58.1V377.7L259.3 78.2h513.4l212.6 299.7V931zM98.1 891h847.2V390.7L752 118.2H280.6L98.1 389.9V891z" p-id="1543"></path><path d="M77.3 363.8h872.3v40H77.3z" p-id="1544"></path><path d="M493.16 378.971l0.666-280.8 40 0.095-0.665 280.8z" p-id="1545"></path><path d="M648 789H439.9v-40H648c41.9 0 75.9-34.1 75.9-75.9s-34.1-75.9-75.9-75.9H330.6v-40H648c63.9 0 115.9 52 115.9 115.9S711.9 789 648 789z" p-id="1546"></path><path d="M380.2 664.9l-100.7-86.3 95.2-99.4 28.9 27.6-66 68.9 68.7 58.8z" p-id="1547"></path></svg>
        <dl className="option-info">
          <dt>我要退货退款</dt>
          <dd>已收到货，需要退还已收到的货物</dd>
        </dl>
        <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1901"><path d="M340.992 820.736c11.776 11.776 31.232 11.776 43.008 3.072l287.232-287.232c8.704-11.264 11.264-25.088 6.656-35.84-0.512-2.56-5.12-7.68-8.704-12.288L385.536 205.312c-11.776-14.848-30.72-14.848-42.496-3.072-11.776 11.776-11.776 30.72 0 42.496l265.216 268.288-267.264 264.192c-11.776 12.288-12.288 31.232 0 43.52z" fill="#363F4D" p-id="1902"></path></svg>
      </div>
      <div className="refund-option" onClick={ () => { linkGoClick("/apply-select-after-sales/1/apply-after-sales/?type=2") }}>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3582"><path d="M329.5 454.6c0 12.3 10 22.3 22.3 22.3h134.9v76.4H357.8c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3h128.9V757c0 12.3 10 22.3 22.3 22.3s22.3-10 22.3-22.3V597.7h141c12.3 0 22.3-10 22.3-22.3s-10-22.3-22.3-22.3h-141v-76.4h134.9c12.3 0 22.3-10 22.3-22.3s-10-22.3-22.3-22.3H555.7L675.9 284c7.7-9.5 6.3-23.6-3.3-31.3-9.5-7.7-23.6-6.3-31.3 3.3L508.9 419.3 373.6 253.1c-7.8-9.5-21.8-11-31.3-3.2s-11 21.8-3.2 31.3l123.1 151.1H351.8c-12.3 0-22.3 10-22.3 22.3z" p-id="3583"></path><path d="M512 0C229.7 0 0 229.7 0 512c0 9 5.4 17.1 13.7 20.6 8.3 3.4 17.9 1.5 24.3-4.8l120.2-120.2c8.7-8.7 8.7-22.8 0-31.5s-22.8-8.7-31.5 0L48 454.8C76.3 223.9 273.6 44.5 512 44.5c257.8 0 467.5 209.7 467.5 467.5S769.8 979.5 512 979.5c-140.3 0-272-62.2-361.2-170.8-7.8-9.5-21.8-10.9-31.3-3.1-9.5 7.8-10.9 21.8-3.1 31.3 97.7 118.8 241.9 187 395.6 187 282.3 0 512-229.7 512-512S794.3 0 512 0z" p-id="3584"></path></svg>
        <dl className="option-info">
          <dt>我要退款(无需退货)</dt>
          <dd>未收到货，或与商家协商之后申请</dd>
        </dl>
        <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1901"><path d="M340.992 820.736c11.776 11.776 31.232 11.776 43.008 3.072l287.232-287.232c8.704-11.264 11.264-25.088 6.656-35.84-0.512-2.56-5.12-7.68-8.704-12.288L385.536 205.312c-11.776-14.848-30.72-14.848-42.496-3.072-11.776 11.776-11.776 30.72 0 42.496l265.216 268.288-267.264 264.192c-11.776 12.288-12.288 31.232 0 43.52z" fill="#363F4D" p-id="1902"></path></svg>
      </div>
    </div>
  </div>)
}

export default ApplyAfterSales;
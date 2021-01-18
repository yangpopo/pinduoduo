// 绑定电话

import React, { Fragment, useState, useEffect } from 'react';
import "./bindingPhone.scss";
import { NoticeBar } from "zarm";
import { NavBar ,Icon } from 'antd-mobile';

const BindingPhone = (props) => {
  // 点击跳转跳转
  const linkGoClick = (url) => {
    if (url == null) {
      props.history.goBack();
    } else {
      props.history.replace(url);
    }
  }
  
  return (<div className="binding-phone">
    <NavBar
      mode="light"
      className="binding-phone-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >绑定手机号</NavBar>
    <div className="binding-phone-box">
      <NoticeBar theme="success">绑定后可提高账号安全性，下次还可用该手机号登录多多</NoticeBar>
      <div className="phone-info">
        <div className="phone">1885****654</div>
        <div className="remarks">手机号认证服务由中国移动提供</div>
        <div className="binding-but">本机号码一键绑定</div>
        <div className="switch-but">切换手机号</div>
      </div>
      <div className="footnote-box">
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2320">
          <path d="M817.484303 213.829982a98.697707 98.697707 0 0 0-48.265255-36.300529l-0.22575-0.04515-0.1806-0.04515c-8.036684-2.979894-31.063139-10.971429-70.975661-19.730511a872.251146 872.251146 0 0 0-185.837037-19.549912c-63.841975 0-126.374603 6.591887-185.837037 19.595062-39.867372 8.668783-62.803527 16.570018-70.840212 19.640212l-0.225749 0.090299-0.22575 0.04515a97.07231 97.07231 0 0 0-48.445855 36.02963 99.420106 99.420106 0 0 0-19.504762 57.566137v339.301588c0 38.016226 23.252205 83.346737 53.999294 105.379894l212.430336 152.245503c16.028219 11.468078 36.842328 17.834215 58.604585 17.834215 21.762257 0 42.576367-6.366138 58.604586-17.834215l212.520635-152.245503c30.79224-22.033157 53.999295-67.363668 53.999294-105.379894V271.12522c0-19.549912-6.953086-39.867372-19.595062-57.295238z m-146.330864 195.002469l-193.241622 191.164727a26.367549 26.367549 0 0 1-37.293828 0l-87.771428-86.86843a26.051499 26.051499 0 0 1 0.406349-36.571429 26.367549 26.367549 0 0 1 36.887478-0.361199l69.124515 68.402116 174.549559-172.743562a26.457848 26.457848 0 0 1 36.932628 0.406349 26.051499 26.051499 0 0 1 0.406349 36.571428z" p-id="2321">
            </path>
        </svg>
        平台用户安全由中国人保财险呈报<br />已阅读并同意移动认证服务协议
      </div>
    </div>
  </div>)
}

export default BindingPhone;
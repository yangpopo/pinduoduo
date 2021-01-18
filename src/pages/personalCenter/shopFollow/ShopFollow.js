// 店铺关注

import React, { Fragment, useState, useEffect } from 'react';
import "./shopFollow.scss";
import { NavBar ,Icon } from 'antd-mobile';
import { Link } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import ShopUnit from "./common/shopUnit/ShopUnit"; // 店铺关注-店铺
import ShopInfoUnit from "./common/shopInfoUnit/ShopInfoUnit"; // 店铺关注-店铺

const ShopFollow = (props) => {
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

  // 上拉加载-下拉刷新---加载数据
  const getAjaxData = (page, obj) => {
    if (page === undefined) {
      obj.resetUpScroll();
    } else {
      setTimeout(() => {
        obj.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000);
    }
  }

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });

  return(<div className="shop-follow">
    <NavBar
      mode="light"
      className="shop-follow-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >店铺关注</NavBar>
    <UpDownLoad id="shop-follow-mescroll" className="shop-follow-mescroll" getAjaxData={getAjaxData}>
      {/* 我的关注 */}
      <div className="follow-box">
        <div className="title-box">
          <b className="title">我的关注</b>
          <Link className="link" to="/my-follow">查看全部<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4010"><path d="M357.376 852.309333a25.6 25.6 0 0 0 36.181333 36.181334l358.4-358.4a25.6 25.6 0 0 0 0-36.181334l-358.4-358.4a25.6 25.6 0 0 0-36.181333 36.181334L697.685333 512l-340.309333 340.309333z" p-id="4011"></path></svg></Link>
        </div>
        <div className="shop-content-box">
          <ShopUnit />
          <ShopUnit />
          <ShopUnit />
        </div>
      </div>

      {/* 关注动态 */}
      <div className="follow-box">
        <div className="title-box">
          <b className="title">关注动态</b>
        </div>
        <div className="time-box"><span>12月21日</span></div>
        <ShopInfoUnit />
        <ShopInfoUnit />
      </div>
    </UpDownLoad>
  </div>)
}

export default ShopFollow;
// 卡券中心

import React, { Fragment, useState, useEffect } from 'react';
import "./couponCenter.scss";
import { Link } from "react-router-dom"; // 路由
import { NavBar, Icon } from 'antd-mobile';
import MonthlyCard from "./common/monthlyCard/MonthlyCard"; // 我的月卡
import SavePending from "./common/savePending/SavePending"; // 省钱待办
import SpecialColumn from "./common/specialColumn/SpecialColumn"; // 特色栏目
import ActivityZone from "./common/activityZone/ActivityZone"; // 活动专区
import DailyCoupons from "./common/dailyCoupons/DailyCoupons"; // 每日优惠券

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉加载框

const CardCenter = (props) => {
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

  // 导航栏透明度
  const [navBarOpacity, setNavBarOpacity] = useState(0);
  const scrollFun = (e) => {
    if (e.target.scrollTop <= 100) {
      setNavBarOpacity(e.target.scrollTop);
    } else if (e.target.scrollTop > 100) {
      setNavBarOpacity(100);
    }
  }

  useEffect(() => {
    document.querySelector("#couponCenterLoad").addEventListener("scroll", scrollFun, false);
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });

  return (
    <UpDownLoad id="couponCenterLoad" className="coupon-center-load" getAjaxData={getAjaxData}>
      <NavBar
        mode="light"
        className="coupon-center-navbar"
        style={{backgroundColor: `rgba(255 255 255 / ${navBarOpacity}%)`}}
        icon={<Icon type="left" color="#868480" />}
        onLeftClick={() => {props.history.goBack();}}
        rightContent={<Link to="/" className="rule-but">规则</Link>}
      >省钱月卡</NavBar>
      <MonthlyCard />
      <SavePending />
      <SpecialColumn />
      <ActivityZone />
      <div className="division-box">
        <div className="top-box"></div>
        <div className="bottom-box"></div>
      </div>
      <DailyCoupons />
    </UpDownLoad>
  )
}

export default CardCenter;
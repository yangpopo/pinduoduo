// 卡券中心

import React, { Fragment } from 'react';
import "./couponCenter.scss";
import { Link, useHistory } from "react-router-dom"; // 路由
import { WhiteSpace, Tabs, NavBar, Icon } from 'antd-mobile';
import MonthlyCard from "./common/monthlyCard/MonthlyCard";

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

  useEffect(() => {
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
        icon={<Icon type="left" color="#868480" />}
        onLeftClick={() => {props.history.goBack();}}
        rightContent={<Link to="/" className="rule-but">规则</Link>}
      >省钱月卡</NavBar>
      <MonthlyCard />
    </UpDownLoad>
  )
}

export default CardCenter;
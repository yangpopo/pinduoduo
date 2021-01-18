// 购物券管理

import React, { Fragment, useState, useEffect } from 'react';
import "./couponManage.scss";
import { Tabs, WhiteSpace, NavBar, Icon  } from 'antd-mobile';
import { Link } from "react-router-dom";

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import CouponCenter from "./common/couponCenter/CouponCenter"; // 领券中心
import OfficialCouponEffective from "./common/officialCouponEffective/OfficialCouponEffective"; // 官方优惠券有效
import ShopCouponEffective from "./common/shopCouponEffective/ShopCouponEffective"; // 店铺优惠券有效
import CouponUsed from "./common/couponUsed/CouponUsed"; // 已使用优惠券
import CouponInvalid from "./common/couponInvalid/CouponInvalid"; // 已过期优惠券

import RecommendCoupon from "./common/recommendCoupon/RecommendCoupon"; // 推荐优惠券


const CouponManage = (props) => {
  const [menuIndex, setMenuIndex] = useState(0)
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

  const tabs = [
    { title: "未使用" },
    { title: "已使用" },
    { title: "已过期/失效" },
  ];

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

  return (<div className="coupon-manage">
    <NavBar
      mode="light"
      className="coupon-manage-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >我的优惠券</NavBar>
    <UpDownLoad id="coupon-manage-mescroll" className="coupon-manage-mescroll" getAjaxData={getAjaxData}>
      <Tabs tabs={tabs}
        initialPage={menuIndex}
        swipeable={false}
        onTabClick={(tab, index) => { setMenuIndex(index) }}
        tabBarUnderlineStyle={{ border: "1px #d63731 solid" }}
        tabBarActiveTextColor="#d63731"
        tabBarTextStyle={{ "fontSize": "4vw" }}
      >
        
        <div className="coupon-list-box">
          <CouponCenter />
          <WhiteSpace size="md" />
          {/* 未使用 */}
          {
            menuIndex == 0 &&
            <Fragment>
              <OfficialCouponEffective />
              <WhiteSpace size="md" />
              <ShopCouponEffective />
              <WhiteSpace size="md" />
              <ShopCouponEffective />
              
            </Fragment>
          }
          {/* 已使用 */}
          {
            menuIndex == 1 &&
            <Fragment>
              <CouponUsed />
              <WhiteSpace size="md" />
              <CouponUsed />
              <WhiteSpace size="md" />
              <CouponUsed />
            </Fragment>
          }
          {/* 已过期/失效 */}
          {
            menuIndex == 2 &&
            <Fragment>
              <CouponInvalid />
              <WhiteSpace size="md" />
              <CouponInvalid />
              <WhiteSpace size="md" />
              <CouponInvalid />
            </Fragment>
          }
          <WhiteSpace size="xl" />
          {
            menuIndex != 2 ?
            <Link to="/" className="explain-link">优惠券说明<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7973"><path d="M512 77C271.8 77 77 271.8 77 512c0 240.2 194.8 435 435 435 240.2 0 435-194.8 435-435C947 271.8 752.2 77 512 77L512 77zM509.2 816.4c-35.4 0-64.2-28.2-64.2-62.9s28.7-62.9 64.2-62.9c35.4 0 64.2 28.2 64.2 62.9S544.7 816.4 509.2 816.4L509.2 816.4zM681.6 460.5c-12.6 19.8-39.3 46.7-80.3 80.8-21.2 17.6-34.4 31.8-39.5 42.6-5.1 10.7-7.5 29.9-7 57.6l-91.4 0c-0.2-13.1-0.4-21.1-0.4-24 0-29.6 4.9-53.9 14.7-73 9.8-19.1 29.4-40.6 58.7-64.4 29.3-23.9 46.9-39.5 52.6-46.9 8.8-11.7 13.3-24.6 13.3-38.6 0-19.5-7.9-36.2-23.5-50.2-15.6-13.9-36.8-20.9-63.3-20.9-25.6 0-47 7.3-64.2 21.8-17.2 14.5-32 46.5-35.5 66.3-3.3 18.7-93.4 26.6-92.3-11.3 1.1-37.9 20.8-79 54.6-108.8 33.8-29.8 78.2-44.7 133.1-44.7 57.8 0 103.7 15.1 137.9 45.3 34.2 30.2 51.2 65.3 51.2 105.4C700.4 419.7 694.1 440.7 681.6 460.5L681.6 460.5z" p-id="7974" data-spm-anchor-id="a313x.7781069.1998910419.i6"></path></svg></Link>
            :
            <div className="explain-link">以上是1个月内已过期的优惠券</div>
          }
          <WhiteSpace size="xl" />
          <div className="recommend-title"><i className="icon-box"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8505"><path d="M976.39444 400.901094l-164.60007-314.822381a43.357257 43.357257 0 0 0-38.415354-23.264517H240.708276a43.357257 43.357257 0 0 0-38.415353 23.264517L37.692853 400.901094a43.350032 43.350032 0 0 0 5.845029 48.70376l430.935441 490.411684a43.350032 43.350032 0 0 0 65.126197 0l430.935441-490.411684a43.350032 43.350032 0 0 0 5.859479-48.70376z m-184.194285 20.56959L539.216595 701.685289a43.335582 43.335582 0 0 1-64.345897 0L221.872688 421.470684a43.350032 43.350032 0 1 1 64.360347-58.096268l220.810611 244.573654 220.810612-244.573654a43.350032 43.350032 0 1 1 64.345897 58.096268z" fill="" p-id="8506"></path></svg></i>推荐好券</div>
          <WhiteSpace size="lg" />
          <RecommendCoupon />
        </div>
      </Tabs>
    </UpDownLoad>
  </div>)
}

export default CouponManage;
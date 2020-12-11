// 个人中心

import React, { Fragment, useState } from 'react';
import "./personalCenter.scss";
import { Link } from "react-router-dom"; // 路由
import { WhiteSpace } from 'antd-mobile';
import UserBox from "./common/userBox/UserBox"; // 用户信息
import CouponBox from "./common/couponBox/CouponBox"; // 优惠券信息
import OrderMenu from "./common/orderMenu/OrderMenu"; // 订单菜单
import Favorites from "./common/favorites/Favorites"; // 收藏相关
import GameSet from "./common/gameSet/GameSet"; // 游戏设置
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

import Product from "assets/img/picture/head-portrait.jpg";
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";


const PersonalCenter = (props) => {
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

  const [windowListData, setWindowListData] = useState([
    {
      imgUrl: PictureInfoList01, 
      price: "9.99", 
      id: "0", 
      title: "阿斯顿发送到沙发上撒旦法", 
      tag: ["立减3元", "退货包邮"], 
      activity: [1,2,3], 
      quantitySold: 93,
      userImg: [Product, Product]
    }, {
      imgUrl: PictureInfoList02, 
      price: "549.99", 
      id: "1", 
      title: "VB电磁阀华为热", 
      tag: ["新品", "退货包运费", "急速退款"], 
      activity: [1,2,3], 
      quantitySold: 123,
      userImg: [Product, Product]
    }, {
      imgUrl: PictureInfoList03, 
      price: "848.99", 
      id: "2", 
      title: "出不来大V了发个豆腐干问题我对方", 
      tag: ["退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [Product, Product]
    }, {
      imgUrl: PictureInfoList04, 
      price: "108.99", 
      id: "3", 
      title: "阿斯顿发送到好风光瓦尔塔曲蔚然撒旦", 
      tag: ["立减3元", "退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [Product, Product]
    }
  ]);

  return (
    <UpDownLoad id="personal-center-mescroll" className="mescroll" getAjaxData={getAjaxData}>
      <div className="status-bar-box"></div>
      <UserBox />
      <CouponBox />
      <div className="order-menu-box">
        <div className="order-menu-title">
          我的订单
          <Link to="/my-order/0">查看全部 ></Link>
        </div>
        <OrderMenu />
      </div>
      <WhiteSpace size="sm" />
      <Favorites />
      <WhiteSpace size="sm" />
      <GameSet />
      <WhiteSpace size="sm" />
      <div className="product-list">
        <div className="title-box"><svg className="icon" viewBox="0 0 1239 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="99612"><path d="M618.121867 13.86578C285.951301 13.86578 119.926832 179.890248 119.926832 512.060815s166.024468 498.195035 498.195035 498.195035S1116.316902 844.231381 1116.316902 512.060815 950.292434 13.86578 618.121867 13.86578z m286.559449 446.867324c-30.650671 36.488894-62.15275 72.24801-91.708754 109.345053-7.541038 9.730372-11.554816 21.650077-11.554816 33.934671 2.067704 46.827414 6.568001 93.411569 10.460149 140.238983 3.040741 36.853783-10.825039 47.070673-45.367858 32.840005-43.908303-18.122817-87.816605-36.853783-132.211427-53.760304-10.21689-3.40563-21.163559-3.284-31.258819 0.243259-44.394821 16.784891-88.303124 35.515857-132.333056 53.395415-33.934672 13.86578-46.949044 4.986816-45.367859-31.01556 3.770519-45.246229 7.05452-90.614087 11.554817-135.860316 1.702815-16.420002-0.486519-29.434375-12.406224-42.570376-31.988597-35.272598-62.274379-72.004751-93.04668-108.372016-20.190521-23.717781-15.203706-39.894524 14.960446-47.313932 46.949044-11.676446 93.898088-22.866374 140.968761-33.569783 13.257632-2.310963 24.690818-10.581779 31.13719-22.379855 24.325929-41.597339 49.868155-82.70816 75.288752-123.697351 15.811854-25.542226 33.691412-25.298967 49.868155 0.364888 26.150374 41.597339 51.084452 83.681197 77.964604 124.670389 6.568001 9.487112 16.176743 16.420002 27.245041 19.825632 46.584155 12.527854 93.898088 22.866374 140.725502 34.421191 30.529041 7.784297 35.637487 24.812448 15.082076 49.260007z" p-id="99613"></path></svg>精选推荐</div>
      </div>
      { <WindowList dataJson={ windowListData } /> }
    </UpDownLoad>
  )
}

export default PersonalCenter;
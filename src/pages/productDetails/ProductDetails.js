// 产品详情

import React, { Fragment, useState, useEffect } from 'react';
import "./productDetails.scss";
import { useParams, useHistory} from "react-router-dom";
import { WhiteSpace } from 'antd-mobile';
import { Cell } from 'zarm';
import ActivityPromotion from "./common/activityPromotion/ActivityPromotion"; // 活动促销
import StorePromotion from "./common/storePromotion/StorePromotion"; // 店铺促销
import ServiceDescription from "./common/serviceDescription/ServiceDescription"; // 服务说明

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉加载框

import TopNavigation from "./common/topNavigation/TopNavigation"; // 顶部导航
import SlidePictureBox from "./common/slidePictureBox/SlidePictureBox"; // 幻灯片
import LineUpBox from "./common/lineUpBox/LineUpBox"; // 等待列表
import EvaluationListBox from "./common/evaluationListBox/EvaluationListBox"; // 评价列表
import ShopEvaluateListBox from "./common/shopEvaluateListBox/ShopEvaluateListBox"; // 店铺评价列表
import StoreInfoBox from "./common/storeInfoBox/StoreInfoBox"; // 店铺信息
import CommodityDetails from "./common/commodityDetails/CommodityDetails"; // 商品详情
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表
import QuickMenu from './common/quickMenu/QuickMenu'; // 浮动菜单

import Product from "assets/img/picture/head-portrait.jpg";
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const ProductDetails = (props) => {
  let history = useHistory();
  let val = useParams();
  let id = undefined;
  if (val != undefined) {
    id = val.id; // 获取商品id
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

  //商品数据
  const  windowListData = [
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
  ];

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark');
    } catch (e) {

    }
  });

  return (<UpDownLoad id="productDetailsUpDownLoadId" className="product-details" getAjaxData={getAjaxData} >
    <TopNavigation />
    <SlidePictureBox />
    <Cell className="price-info" description='已拼4105件' ><span>¥<b>6.84</b>起</span><em>¥49</em></Cell>
    <Cell className="name-box" >阿水电费干的阿萨三国杀大公司的风格阿斯顿发生发斯蒂芬沙发上阿萨德发阿斯顿发生阿斯顿发生发生 发斯蒂芬</Cell>
    <ActivityPromotion />
    <StorePromotion />
    <ServiceDescription />
    <Cell hasArrow className="ranking" onClick={() => {history.push("/live-broadcast/" + 0)}}><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="109298"><path d="M907.636364 481.745455h-148.945455c-27.927273 0-51.2 20.945455-51.2 51.2V907.636364c0 27.927273 23.272727 51.2 51.2 51.2H907.636364c27.927273 0 51.2-20.945455 51.2-51.2V532.945455c0-27.927273-23.272727-51.2-51.2-51.2z m13.963636 416.581818c0 9.309091-6.981818 16.290909-16.290909 16.290909h-141.963636c-9.309091 0-16.290909-6.981818-16.29091-16.290909V537.6c0-9.309091 6.981818-16.290909 16.29091-16.290909h141.963636c9.309091 0 16.290909 6.981818 16.290909 16.290909v360.727273zM591.127273 67.490909H442.181818c-27.927273 0-51.2 20.945455-51.2 51.2V907.636364c0 27.927273 23.272727 51.2 51.2 51.2h148.945455c27.927273 0 51.2-20.945455 51.2-51.2V118.690909c0-30.254545-25.6-51.2-51.2-51.2z m11.636363 830.836364c0 9.309091-6.981818 16.290909-16.290909 16.290909h-141.963636c-9.309091 0-16.290909-6.981818-16.290909-16.290909V125.672727c0-9.309091 6.981818-16.290909 16.290909-16.290909h141.963636c9.309091 0 16.290909 6.981818 16.290909 16.290909v772.654546zM269.963636 281.6H123.345455c-27.927273 0-51.2 20.945455-51.2 51.2V907.636364c0 27.927273 23.272727 51.2 51.2 51.2h148.945454c27.927273 0 51.2-20.945455 51.2-51.2V332.8c-2.327273-27.927273-23.272727-51.2-53.527273-51.2z m13.963637 616.727273c0 9.309091-6.981818 16.290909-16.290909 16.290909H125.672727c-9.309091 0-16.290909-6.981818-16.290909-16.290909v-558.545455c0-9.309091 6.981818-16.290909 16.290909-16.290909h141.963637c9.309091 0 16.290909 6.981818 16.290909 16.290909v558.545455zM907.636364 484.072727h-148.945455c-27.927273 0-51.2 20.945455-51.2 51.2v372.363637c0 27.927273 23.272727 51.2 51.2 51.2H907.636364c27.927273 0 51.2-20.945455 51.2-51.2V535.272727c0-30.254545-23.272727-51.2-51.2-51.2zM591.127273 67.490909H442.181818c-27.927273 0-51.2 20.945455-51.2 51.2V907.636364c0 27.927273 23.272727 51.2 51.2 51.2h148.945455c27.927273 0 51.2-20.945455 51.2-51.2V118.690909c0-27.927273-25.6-51.2-51.2-51.2zM269.963636 283.927273H123.345455c-27.927273 0-51.2 20.945455-51.2 51.2V907.636364c0 27.927273 23.272727 51.2 51.2 51.2h148.945454c27.927273 0 51.2-20.945455 51.2-51.2V335.127273c-2.327273-27.927273-23.272727-51.2-53.527273-51.2z" p-id="109299"></path></svg> [ 陶瓷菜刀水果刀畅销榜 ] 第<em>3</em>名</Cell>
    <WhiteSpace size="sm" />
    <LineUpBox />
    <WhiteSpace size="sm" />
    <EvaluationListBox />
    <WhiteSpace size="sm" />
    <ShopEvaluateListBox />
    <WhiteSpace size="sm" />
    <StoreInfoBox />
    <WhiteSpace size="sm" />
    <CommodityDetails />
    <div className="similar-goods"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15340"><path d="M393.846 118.154H196.923c-43.323 0-78.77 35.446-78.77 78.77v196.922c0 43.323 35.447 78.77 78.77 78.77h196.923c43.323 0 78.77-35.447 78.77-78.77V196.923c0-43.323-35.447-78.77-78.77-78.77z m433.231 433.231H630.154c-43.323 0-78.77 35.446-78.77 78.77v196.922c0 43.323 35.447 78.77 78.77 78.77h196.923c43.323 0 78.77-35.447 78.77-78.77V630.154c0-43.323-35.447-78.77-78.77-78.77z m-433.231 0H196.923c-43.323 0-78.77 35.446-78.77 78.77v196.922c0 43.323 35.447 78.77 78.77 78.77h196.923c43.323 0 78.77-35.447 78.77-78.77V630.154c0-43.323-35.447-78.77-78.77-78.77z m433.231-433.231H630.154c-43.323 0-78.77 35.446-78.77 78.77v196.922c0 43.323 35.447 78.77 78.77 78.77h196.923c43.323 0 78.77-35.447 78.77-78.77V196.923c0-43.323-35.447-78.77-78.77-78.77z m0 275.692H630.154V196.923h196.923v196.923z" p-id="15341"></path></svg>相似商品</div>
    <WindowList dataJson={windowListData} />
    <QuickMenu />
  </UpDownLoad>)
}

export default ProductDetails;

          








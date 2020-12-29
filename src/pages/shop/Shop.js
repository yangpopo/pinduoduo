// 商家店铺-页面

import React, { Fragment, useState, useEffect } from 'react';
import "./shop.scss";
import { NavBar, Icon, Cell } from 'zarm';
import { WhiteSpace, Tabs } from 'antd-mobile';
import { useHistory } from "react-router-dom";
import SearchIconBlock from "common/searchIconBlock/SearchIconBlock"; // 搜索图标按钮
import ShareIconBlock from "common/shareIconBlock/ShareIconBlock"; // 分享图标按钮
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉加载框

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import Product from "assets/img/picture/head-portrait.jpg";
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const Shop = (props) => {
  let history = useHistory();
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

  const { Panel } = Tabs;

  // 菜单分类
  const [tabsData, setTabsData] = useState([
    { title: "默认", sub: '1' },
    { title: "销量", sub: '2' },
    { title: "新品", sub: '3' },
    { title: "价格", sub: '3' },
  ]);


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

  return (<div className="shop-page-box">
    <NavBar
      left={
        <Icon 
          type="arrow-left"
          theme="default"
          size="sm"
          onClick={() => history.go(-1)}
        />
      }
      title="先发果汇店铺"
      right={
        <Fragment>
          <SearchIconBlock className="shop-search" />
          <ShareIconBlock className="shop-share" />
        </Fragment>
      }
    />
    <UpDownLoad id="shopUpDownLoadId" className="shop-details" getAjaxData={getAjaxData}>
      <div className="shop-up-downLoad">
        <Cell className="shop-head" icon={<img className="head-portrait" src={headPortrait} alt="" />}
          title={<dl className="shop-info">
            <dt>先发果汇</dt>
            <dd className="label"><span>坏果保赔</span></dd>
            <dd className="collection">已拼54564件&nbsp;|&nbsp;125人关注</dd>
          </dl>} description={<div className="shop-but">
            <span><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15035"><path d="M510.635 68.267c22.621 0 40.96 18.338 40.96 40.96v360.447h360.448c22.621 0 40.96 18.34 40.96 40.96 0 22.622-18.339 40.96-40.96 40.96H551.595v360.449c0 22.621-18.339 40.96-40.96 40.96-22.622 0-40.96-18.339-40.96-40.96V551.595H109.227c-22.622 0-40.96-18.339-40.96-40.96 0-22.622 18.338-40.96 40.96-40.96l360.448-0.001V109.227c0-22.622 18.338-40.96 40.96-40.96z" p-id="15036"></path></svg>关注</span>
            <span><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17037"><path d="M794.69 954.76H508.8c-247.03 0-448-200.98-448-448s200.97-448 448-448 448 200.98 448 448c0 116.76-44.19 226.24-124.77 310.06v100.61c0 20.61-16.72 37.33-37.34 37.33zM508.8 133.42c-205.86 0-373.33 167.47-373.33 373.33S302.94 880.09 508.8 880.09h248.56v-78.68c0-10.1 4.09-19.76 11.33-26.8 73.15-70.98 113.44-166.1 113.44-267.86 0-205.85-167.47-373.33-373.33-373.33z" p-id="17038"></path><path d="M308.17 506.76m-62.49 0a62.49 62.49 0 1 0 124.98 0 62.49 62.49 0 1 0-124.98 0Z" p-id="17039"></path><path d="M508.8 506.76m-62.49 0a62.49 62.49 0 1 0 124.98 0 62.49 62.49 0 1 0-124.98 0Z" p-id="17040"></path><path d="M709.42 506.76m-62.49 0a62.49 62.49 0 1 0 124.98 0 62.49 62.49 0 1 0-124.98 0Z" p-id="17041"></path></svg>客服</span>
          </div>} />
        <Cell className="shop-evaluate" title={<Fragment>评价:<span>好吃(69)</span><span>哈密瓜打(452)</span><span>柚子新鲜(52)</span></Fragment>} hasArrow />
        <WhiteSpace size="md" />
        <div className="commodity-box">
          <i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17611"><path d="M396.837 529.904c44.464 0 80.51 36.05 80.51 80.519V863.48c0 44.47-36.046 80.519-80.51 80.519H141.51C97.045 944 61 907.95 61 863.481V610.423c0-44.47 36.045-80.519 80.509-80.519h255.328z m487.654 0c44.464 0 80.509 36.05 80.509 80.519V863.48c0 44.47-36.045 80.519-80.509 80.519H629.163c-44.464 0-80.51-36.05-80.51-80.519V610.423c0-44.47 36.046-80.519 80.51-80.519H884.49zM396.837 79c44.464 0 80.51 36.05 80.51 80.519v253.058c0 44.47-36.046 80.519-80.51 80.519H141.51c-44.464 0-80.509-36.05-80.509-80.519V159.52C61 115.049 97.045 79 141.509 79h255.328z m361.14 1.15c113.065 0 204.723 91.669 204.723 204.748 0 113.078-91.658 204.747-204.723 204.747-113.065 0-204.723-91.669-204.723-204.747 0-113.08 91.658-204.748 204.723-204.748z"  p-id="17612"></path></svg></i>
          全部商品
        </div>
        <Tabs tabs={tabsData}
          initialPage={0}
          swipeable={true}
          tabBarTextStyle={{"fontSize": "3.5vw"}}
          tabBarInactiveTextColor="#272727"
          tabBarActiveTextColor="#ea2b21"
          tabBarUnderlineStyle={{"border": "#ea2b21"}}
        >
          <WindowList dataJson={windowListData} />
        </Tabs>
        <div className="the-end"><span>本店暂无更多商品</span></div>
        <div className="commodity-box">
          <i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1632"><path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542" p-id="1633"></path></svg></i>
          其他店铺的相似商品
        </div>
        <WindowList dataJson={windowListData} />
      </div>
    </UpDownLoad>
  </div>)
}

export default Shop;

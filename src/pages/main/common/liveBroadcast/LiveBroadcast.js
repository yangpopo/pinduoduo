// 直播

import React, { Fragment, useState, useEffect } from 'react';
import "./liveBroadcast.scss";
import { Link } from "react-router-dom"; // 路由
import { Tabs, NavBar } from 'antd-mobile';
import SlideLiveRevealBox from "common/slideLiveRevealBox/SlideLiveRevealBox"; // 滑动展示框
import LiveUnitBox from "./common/liveUnitBox/LiveUnitBox"; // 直播展示单位框
import FollowedLiveBox from "./common/followedLiveBox/FollowedLiveBox"; // 关注的直播框

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

import Live01 from "assets/img/picture/live-01.jpg";
import Live02 from "assets/img/picture/live-02.jpg";
import Live03 from "assets/img/picture/live-03.jpg";
import Live04 from "assets/img/picture/live-04.jpg";
import FeaturedSection from "assets/img/picture/picture-info-list-01.jpg";

const LiveBroadcast = () => {
  // 直播展示数据
  const [liveUnitList, setLiveUnitList] = useState([]);

  // 滑动展示框数据
  const [slideLiveRevealList, setSlideLiveRevealList] = useState([{
    imgUrl: Live01,
    id: 0,
    userImg: FeaturedSection,
    name: "电饭锅"
  },{
    imgUrl: Live02,
    id: 1,
    userImg: FeaturedSection,
    name: "个high发"
  },{
    imgUrl: Live03,
    id: 2,
    userImg: FeaturedSection,
    name: "结婚啥对司"
  },{
    imgUrl: Live01,
    id: 0,
    userImg: FeaturedSection,
    name: "电饭锅"
  },{
    imgUrl: Live02,
    id: 1,
    userImg: FeaturedSection,
    name: "个high发"
  },{
    imgUrl: Live03,
    id: 2,
    userImg: FeaturedSection,
    name: "结婚啥对司"
  }]);

  // 菜单标题
  const [tabs, setTabs] = useState([
    { title: '推荐', id:'0' },
    { title: '流行穿搭', id:'1' },
    { title: '珠宝饰品', id:'2' },
    { title: '歌舞娱乐', id:'3' },
    { title: '鲜花萌宠', id:'4' },
    { title: '美食生鲜', id:'5' },
    { title: '手机数码', id:'6' },
    { title: '品质男装', id:'7' },
    { title: '生活美家', id:'8' },
    { title: '运动健康', id:'9' },
    { title: '宝妈优选', id:'10' },
    { title: '美妆护肤', id:'11' },
  ])

  // 上拉加载-下拉刷新---加载数据
  const getAjaxData = (page, obj) => {
    if (page === undefined) {
      setLiveUnitList([
        {
          imgUrl: Live01, 
          online: 345, 
          id: "0", 
          title: "删除VG都发给我而言去玩儿而为人啥", 
          product: {
            title:"沙发垫温热",
            price: "19.99", 
          },
          userImg: FeaturedSection
        },{
          imgUrl: Live02, 
          online: 2112, 
          id: "1", 
          title: "从VB那个好久和接口和接口让他有无人", 
          product: {
            title:"还没国际化IT业啊",
            price: "9.99", 
          },
          userImg: FeaturedSection
        },{
          imgUrl: Live03, 
          online: 8768, 
          id: "2", 
          title: "阿斯顿发送到好风光瓦尔塔曲蔚然撒旦", 
          product: {
            title:"鬼地方个许真的",
            price: "29.99", 
          },
          userImg: FeaturedSection
        },{
          imgUrl: Live04, 
          online: 1231, 
          id: "3", 
          title: "VB那几个突然啥的千万无人区是的", 
          product: {
            title:"阿萨德刚我虽然我",
            price: "39.99", 
          },
          userImg: FeaturedSection
        }
      ]);
      obj.resetUpScroll();
    } else {
      setTimeout(() => {
        let curPageData = [
          {
            imgUrl: Live01, 
            online: 345, 
            id: "0", 
            title: "删除VG都发给我而言去玩儿而为人啥", 
            product: {
              title:"沙发垫温热",
              price: "19.99", 
            },
            userImg: FeaturedSection
          },{
            imgUrl: Live02, 
            online: 2112, 
            id: "1", 
            title: "从VB那个好久和接口和接口让他有无人", 
            product: {
              title:"还没国际化IT业啊",
              price: "9.99", 
            },
            userImg: FeaturedSection
          },{
            imgUrl: Live03, 
            online: 8768, 
            id: "2", 
            title: "阿斯顿发送到好风光瓦尔塔曲蔚然撒旦", 
            product: {
              title:"鬼地方个许真的",
              price: "29.99", 
            },
            userImg: FeaturedSection
          },{
            imgUrl: Live04, 
            online: 1231, 
            id: "3", 
            title: "VB那几个突然啥的千万无人区是的", 
            product: {
              title:"阿萨德刚我虽然我",
              price: "39.99", 
            },
            userImg: FeaturedSection
          }
        ];
        setLiveUnitList([...liveUnitList, ...curPageData])
        obj.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000);
    }
  }

  const  renderContent = (tab) =>{
    return (<div className="mescroll-box">
      {
        liveUnitList.map((item, index) => {
          return (<LiveUnitBox dataJson={item} key={item.id.toString() + index.toString()} />)
        })
      }
    </div>)
  };

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark');
    } catch (e) {

    }
  })

  return(<Fragment>
    <NavBar
      mode="light"
      className="live-nav-bar"
      rightContent={<Link key="NavBar" className="live-nav-icon" to="/my-live-broadcast/">
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="76295"><path d="M796.444 515.556l130.674-57.999a28.444 28.444 0 0 1 39.993 25.999v317.44a28.444 28.444 0 0 1-39.993 26.026l-130.674-58.026v84.337a56.889 56.889 0 0 1-56.888 56.89H113.778a56.889 56.889 0 0 1-56.89-56.89v-455.11a56.889 56.889 0 0 1 56.89-56.89h625.778a56.889 56.889 0 0 1 56.888 56.89v117.333zM497.778 312.889a99.556 99.556 0 1 1 0-199.111 99.556 99.556 0 0 1 0 199.11z m-199.111 0a71.111 71.111 0 1 1 0-142.222 71.111 71.111 0 0 1 0 142.222z m42.666 426.667a28.444 28.444 0 0 0 42.553 24.69l199.111-113.778a28.444 28.444 0 0 0 0-49.38L383.887 487.31A28.444 28.444 0 0 0 341.332 512v227.556z m56.89-178.546l113.322 64.768-113.323 64.768V561.01z" fill="#dd2c24" p-id="76296"></path></svg>我要直播
      </Link>}
    >直播</NavBar>
    <UpDownLoad id="live-broadcast-mescroll" className="live-broadcast-mescroll" getAjaxData={getAjaxData}>
      <div className="attention-box">
        <div className="attention-title">
          <span>关注的直播</span>
            <Link key="mescroll" className="live-nav-icon" to="/attention-link-all/">查看全部<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4803"><path d="M733.11 540.87c-8.41 0.05-16.49-3.25-22.47-9.18L267.69 88.74c-12.41-12.41-12.41-32.52 0-44.93 12.41-12.4 32.52-12.4 44.93 0l442.96 442.96a31.64 31.64 0 0 1 9.36 22.46c0 8.44-3.38 16.53-9.36 22.46a31.636 31.636 0 0 1-22.47 9.18z m0 0" p-id="4804"></path><path d="M290.14999999 983.82c-8.41 0.05-16.49-3.25-22.45999999-9.17a31.657 31.657 0 0 1-9.35999999-22.46c0-8.44 3.37-16.53 9.35999999-22.46L710.64 486.76c12.41-12.4 32.52-12.4 44.93 0 12.41 12.4 12.41 32.52 0 44.93l-442.96 442.96000001a31.594 31.594 0 0 1-22.46000001 9.16999999z m0 0" p-id="4805"></path></svg></Link>
        </div>
        <SlideLiveRevealBox id="liveBroadcastSlideLive">
          {
            slideLiveRevealList.map((item, index) => {
              return (<FollowedLiveBox dataJson={item} key={item.id.toString() + index.toString()} />)
            })
          }
        </SlideLiveRevealBox>
      </div>
      <Tabs tabs={tabs} tabBarBackgroundColor="#fff" tabBarActiveTextColor="#dd2f38" tabBarInactiveTextColor="#4e4e4e" tabBarUnderlineStyle={{"border": "1px #dd2f38 solid"}}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
        {renderContent}
      </Tabs>
    </UpDownLoad>
  </Fragment>)
}

export default LiveBroadcast;
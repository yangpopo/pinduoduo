// 聊天列表

import React, { Fragment, useState, useEffect} from 'react';
import "./chatList.scss";
import { NavBar } from 'antd-mobile';
import SlideLiveRevealBox from "common/slideLiveRevealBox/SlideLiveRevealBox"; // 滑动展示框
import RecentOrder from "./common/recentOrder/RecentOrder";
import ChatUnit from "./common/chatUnit/ChatUnit";

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

import Live01 from "assets/img/picture/live-01.jpg";
import Live02 from "assets/img/picture/live-02.jpg";
import Live03 from "assets/img/picture/live-03.jpg";
import FeaturedSection from "assets/img/picture/picture-info-list-01.jpg";

const ChatList = () => {
  const [friendsList, setFriendsList] = useState([{
      userImg: FeaturedSection,
      name: "阿萨德发凤凰网儿童山东分公司的风格山东分公司的风格电饭锅",
      messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格撒旦法还让他啥对方公司的是的法规是的法规",
      id: 0,
      time:"2020-10-21 16:21:01",
      messagesNumber: 1
    },{
      userImg: FeaturedSection,
      name: "哈代发货是的法规",
      messages: "吴若甫国土局好地方都发给我的玩儿",
      id: 1,
      time:"2020-10-20 16:21:01",
      messagesNumber: 0
    },{
      userImg: FeaturedSection,
      name: "让他也让曲",
      messages: "东方红问题案发前是个吃吃饭的",
      id: 1,
      time:"2020-10-18 16:21:54",
      messagesNumber: 12
    },{
      userImg: FeaturedSection,
      name: "阿萨德发",
      messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
      id: 0,
      time:"2020-10-21 16:21:01",
      messagesNumber: 1
    },{
      userImg: FeaturedSection,
      name: "哈代发货是的法规",
      messages: "吴若甫国土局好地方都发给我的玩儿",
      id: 1,
      time:"2020-10-20 16:21:01",
      messagesNumber: 0
    },{
      userImg: FeaturedSection,
      name: "让他也让曲",
      messages: "东方红问题案发前是个吃吃饭的",
      id: 1,
      time:"2020-10-18 16:21:54",
      messagesNumber: 12
    },{
      userImg: FeaturedSection,
      name: "阿萨德发",
      messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
      id: 0,
      time:"2020-10-21 16:21:01",
      messagesNumber: 1
    },{
      userImg: FeaturedSection,
      name: "哈代发货是的法规",
      messages: "吴若甫国土局好地方都发给我的玩儿",
      id: 1,
      time:"2020-10-20 16:21:01",
      messagesNumber: 0
    },{
      userImg: FeaturedSection,
      name: "让他也让曲",
      messages: "东方红问题案发前是个吃吃饭的",
      id: 1,
      time:"2020-10-18 16:21:54",
      messagesNumber: 12
    },{
      userImg: FeaturedSection,
      name: "阿萨德发",
      messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
      id: 0,
      time:"2020-10-21 16:21:01",
      messagesNumber: 1
    },{
      userImg: FeaturedSection,
      name: "哈代发货是的法规",
      messages: "吴若甫国土局好地方都发给我的玩儿",
      id: 1,
      time:"2020-10-20 16:21:01",
      messagesNumber: 0
    },{
      userImg: FeaturedSection,
      name: "让他也让曲",
      messages: "东方红问题案发前是个吃吃饭的",
      id: 1,
      time:"2020-10-18 16:21:54",
      messagesNumber: 12
    },{
      userImg: FeaturedSection,
      name: "阿萨德发",
      messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
      id: 0,
      time:"2020-10-21 16:21:01",
      messagesNumber: 1
    },{
      userImg: FeaturedSection,
      name: "哈代发货是的法规",
      messages: "吴若甫国土局好地方都发给我的玩儿",
      id: 1,
      time:"2020-10-20 16:21:01",
      messagesNumber: 0
    },{
      userImg: FeaturedSection,
      name: "让他也让曲",
      messages: "东方红问题案发前是个吃吃饭的",
      id: 1,
      time:"2020-10-18 16:21:54",
      messagesNumber: 12
    }]);

  const [recentOrderList, setRecentOrderList] = useState([{
      imgUrl: Live01,
      id: 0,
      status: "待发货"
    },{
      imgUrl: Live02,
      id: 1,
      status: "待收货"
    },{
      imgUrl: Live03,
      id: 2,
      userImg: FeaturedSection,
      status: "已签收"
    },{
      imgUrl: Live01,
      id: 0,
      status: "待发货"
    },{
      imgUrl: Live02,
      id: 1,
      status: "待收货"
    },{
      imgUrl: Live03,
      id: 2,
      userImg: FeaturedSection,
      status: "已签收"
    }]);


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
      plus.navigator.setStatusBarStyle('dark');
    } catch (e) {

    }
  })

  return(<Fragment>
    <NavBar
      mode="light"
      className="chat-list-navbar"
    >聊天</NavBar>
    <UpDownLoad id="chat-list-mescroll" className="chat-list-mescroll" getAjaxData={getAjaxData}>
      <div className="recent-box">
          <div className="title-box">近期的交易订单</div>
          <SlideLiveRevealBox id="chatListSlideLive">
            {
              recentOrderList.map((item, index) => {
                return (<RecentOrder dataJson={item} key={item.id.toString() + index.toString()} />)
              })
            }
          </SlideLiveRevealBox>
        </div>
        <ChatUnit dataJson={friendsList} />
    </UpDownLoad>
  </Fragment>)
}

export default ChatList;
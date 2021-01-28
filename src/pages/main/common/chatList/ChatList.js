// 聊天列表

import React, { Fragment, useState, useEffect} from 'react';
import "./chatList.scss";
import { NavBar,Icon } from 'antd-mobile';
import SlideLiveRevealBox from "common/slideLiveRevealBox/SlideLiveRevealBox"; // 滑动展示框
import RecentOrder from "./common/recentOrder/RecentOrder";
import ChatUnit from "./common/chatUnit/ChatUnit";

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import "assets/css/mescroll.min.css";
import MeScroll from "assets/js/mescroll.min.js";

import Live01 from "assets/img/picture/live-01.jpg";
import Live02 from "assets/img/picture/live-02.jpg";
import Live03 from "assets/img/picture/live-03.jpg";
import FeaturedSection from "assets/img/picture/picture-info-list-01.jpg";

// class ChatList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mescroll: Object,
//       friendsList: [{
//         userImg: FeaturedSection,
//         name: "阿萨德发凤凰网儿童山东分公司的风格山东分公司的风格电饭锅",
//         messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格撒旦法还让他啥对方公司的是的法规是的法规",
//         id: 0,
//         time:"2020-10-21 16:21:01",
//         messagesNumber: 1
//       },{
//         userImg: FeaturedSection,
//         name: "哈代发货是的法规",
//         messages: "吴若甫国土局好地方都发给我的玩儿",
//         id: 1,
//         time:"2020-10-20 16:21:01",
//         messagesNumber: 0
//       },{
//         userImg: FeaturedSection,
//         name: "让他也让曲",
//         messages: "东方红问题案发前是个吃吃饭的",
//         id: 1,
//         time:"2020-10-18 16:21:54",
//         messagesNumber: 12
//       },{
//         userImg: FeaturedSection,
//         name: "阿萨德发",
//         messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
//         id: 0,
//         time:"2020-10-21 16:21:01",
//         messagesNumber: 1
//       },{
//         userImg: FeaturedSection,
//         name: "哈代发货是的法规",
//         messages: "吴若甫国土局好地方都发给我的玩儿",
//         id: 1,
//         time:"2020-10-20 16:21:01",
//         messagesNumber: 0
//       },{
//         userImg: FeaturedSection,
//         name: "让他也让曲",
//         messages: "东方红问题案发前是个吃吃饭的",
//         id: 1,
//         time:"2020-10-18 16:21:54",
//         messagesNumber: 12
//       },{
//         userImg: FeaturedSection,
//         name: "阿萨德发",
//         messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
//         id: 0,
//         time:"2020-10-21 16:21:01",
//         messagesNumber: 1
//       },{
//         userImg: FeaturedSection,
//         name: "哈代发货是的法规",
//         messages: "吴若甫国土局好地方都发给我的玩儿",
//         id: 1,
//         time:"2020-10-20 16:21:01",
//         messagesNumber: 0
//       },{
//         userImg: FeaturedSection,
//         name: "让他也让曲",
//         messages: "东方红问题案发前是个吃吃饭的",
//         id: 1,
//         time:"2020-10-18 16:21:54",
//         messagesNumber: 12
//       },{
//         userImg: FeaturedSection,
//         name: "阿萨德发",
//         messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
//         id: 0,
//         time:"2020-10-21 16:21:01",
//         messagesNumber: 1
//       },{
//         userImg: FeaturedSection,
//         name: "哈代发货是的法规",
//         messages: "吴若甫国土局好地方都发给我的玩儿",
//         id: 1,
//         time:"2020-10-20 16:21:01",
//         messagesNumber: 0
//       },{
//         userImg: FeaturedSection,
//         name: "让他也让曲",
//         messages: "东方红问题案发前是个吃吃饭的",
//         id: 1,
//         time:"2020-10-18 16:21:54",
//         messagesNumber: 12
//       },{
//         userImg: FeaturedSection,
//         name: "阿萨德发",
//         messages: "阿斯顿发送到撒旦阿惹人厌让他法公司的风格",
//         id: 0,
//         time:"2020-10-21 16:21:01",
//         messagesNumber: 1
//       },{
//         userImg: FeaturedSection,
//         name: "哈代发货是的法规",
//         messages: "吴若甫国土局好地方都发给我的玩儿",
//         id: 1,
//         time:"2020-10-20 16:21:01",
//         messagesNumber: 0
//       },{
//         userImg: FeaturedSection,
//         name: "让他也让曲",
//         messages: "东方红问题案发前是个吃吃饭的",
//         id: 1,
//         time:"2020-10-18 16:21:54",
//         messagesNumber: 12
//       }],
//       recentOrderList: [{
//         imgUrl: Live01,
//         id: 0,
//         status: "待发货"
//       },{
//         imgUrl: Live02,
//         id: 1,
//         status: "待收货"
//       },{
//         imgUrl: Live03,
//         id: 2,
//         userImg: FeaturedSection,
//         status: "已签收"
//       },{
//         imgUrl: Live01,
//         id: 0,
//         status: "待发货"
//       },{
//         imgUrl: Live02,
//         id: 1,
//         status: "待收货"
//       },{
//         imgUrl: Live03,
//         id: 2,
//         userImg: FeaturedSection,
//         status: "已签收"
//       }]
//     }
//   }

//   // 第一次渲染后调用
//   componentDidMount() {
//     /*下拉刷新的回调 */
//     const downCallback = () => {
//       // 联网成功的回调,隐藏下拉刷新的状态;
//       this.state.mescroll.endDownScroll();;
//       //联网失败的回调,隐藏下拉刷新的状态
//       // mescroll.endErr();
//     }

//     // 创建MeScroll对象
//     this.setState({
//       mescroll: new MeScroll("chat-list-mescroll", {
//         down: {
//           auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
//           callback: downCallback //下拉刷新的回调
//         },
//         up: {
//           use: false
//         }
//       })
//     });
//   }

//   // 在组件完成更新后立即调用
//   componentDidUpdate() {
//     // 修改状态栏字体颜色
//     try {
//       // eslint-disable-next-line no-undef
//       plus.navigator.setStatusBarStyle('dark');
//     } catch (e) {

//     }
//   }
  
//   // 卸载时执行
//   componentWillUnmount() {
//     this.state.mescroll.destroy();
//   }

//   render() {
//     return (<Fragment>
//       <NavBar
//         mode="light"
//         className="chat-list-navbar"
//       >聊天</NavBar>
//       <div id="chat-list-mescroll" className="mescroll">
//         <div className="recent-box">
//           <div className="title-box">近期的交易订单</div>
//           <SlideLiveRevealBox id="chatListSlideLive">
//             {
//               this.state.recentOrderList.map((item, index) => {
//                 return (<RecentOrder dataJson={item} key={item.id.toString() + index.toString()} />)
//               })
//             }
//           </SlideLiveRevealBox>
//         </div>
//         <ChatUnit dataJson={this.state.friendsList} />
//       </div>
//     </Fragment>)
//   }
// }

// export default ChatList;

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
// 直播

import React, { Fragment, useEffect } from 'react';
import "./liveBroadcast.scss";
import { Link } from "react-router-dom"; // 路由
import { Tabs } from 'antd-mobile';
import { NavBar } from 'zarm';
import SlideLiveRevealBox from "common/slideLiveRevealBox/SlideLiveRevealBox"; // 滑动展示框
import LiveUnitBox from "./common/liveUnitBox/LiveUnitBox"; // 直播展示单位框
import FollowedLiveBox from "./common/followedLiveBox/FollowedLiveBox"; // 关注的直播框

import "assets/css/mescroll.min.css"; // 下拉刷新上拉加载
import MeScroll from "assets/js/mescroll.min.js"; // 下拉刷新上拉加载


import Live01 from "assets/img/picture/live-01.jpg";
import Live02 from "assets/img/picture/live-02.jpg";
import Live03 from "assets/img/picture/live-03.jpg";
import Live04 from "assets/img/picture/live-04.jpg";
import FeaturedSection from "assets/img/picture/picture-info-list-01.jpg";

class LiveBroadcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mescroll: Object,
      liveUnitList: [], // 直播展示数据
      slideLiveRevealList: [{
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
      }], // 滑动展示框数据
      tabs: [
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
      ], // 菜单标题
    }
  }

  // 第一次渲染后调用
  componentDidMount() {
    /*下拉刷新的回调 */
    const downCallback = () => {
      // 联网成功的回调,隐藏下拉刷新的状态;
      this.setState({
        liveUnitList:[
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
        ]
      });
      this.state.mescroll.resetUpScroll();
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    const upCallback = (page) => {
      //联网成功的回调,隐藏下拉刷新的状态;
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
        this.setState({
          liveUnitList:[...this.state.liveUnitList, ...curPageData]
        })
        this.state.mescroll.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000)
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    // 创建MeScroll对象
    this.setState({
      mescroll: new MeScroll("live-broadcast-mescroll", {
        down: {
          auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
          callback: downCallback //下拉刷新的回调
        },
        up: {
          lazyLoad: {
            use: true, // 是否开启懒加载,默认false
            // attr: 'imgurl', // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
            showClass: 'mescroll-lazy-in', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
            delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
            offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
          },
          auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
          isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          callback: upCallback, //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 10 //每页数据条数,默认10
          },
          htmlNodata: '<p class="upwarp-nodata">-- 暂无数据 --</p>'
        }
      })
    })
  }

  // 在组件完成更新后立即调用
  componentDidUpdate() {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark');
    } catch (e) {

    }
  }

  // 卸载时执行
  componentWillUnmount() {
    this.state.mescroll.destroy();
  }

  renderContent = (tab) =>{
    return (<div className="mescroll-box">
      {
        this.state.liveUnitList.map((item, index) => {
          return (<LiveUnitBox dataJson={item} key={item.id.toString() + index.toString()} />)
        })
      }
    </div>)
  };

  render() {
    return (<Fragment>
      <NavBar
        title="直播"
        className="live-nav-bar"
        right={
          <Fragment>
           <Link key="NavBar" className="live-nav-icon" to="/my-live-broadcast/">
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="76295"><path d="M796.444 515.556l130.674-57.999a28.444 28.444 0 0 1 39.993 25.999v317.44a28.444 28.444 0 0 1-39.993 26.026l-130.674-58.026v84.337a56.889 56.889 0 0 1-56.888 56.89H113.778a56.889 56.889 0 0 1-56.89-56.89v-455.11a56.889 56.889 0 0 1 56.89-56.89h625.778a56.889 56.889 0 0 1 56.888 56.89v117.333zM497.778 312.889a99.556 99.556 0 1 1 0-199.111 99.556 99.556 0 0 1 0 199.11z m-199.111 0a71.111 71.111 0 1 1 0-142.222 71.111 71.111 0 0 1 0 142.222z m42.666 426.667a28.444 28.444 0 0 0 42.553 24.69l199.111-113.778a28.444 28.444 0 0 0 0-49.38L383.887 487.31A28.444 28.444 0 0 0 341.332 512v227.556z m56.89-178.546l113.322 64.768-113.323 64.768V561.01z" fill="#dd2c24" p-id="76296"></path></svg>我要直播
            </Link>
          </Fragment>
        }
      />
      <div id="live-broadcast-mescroll" className="mescroll">
        <div className="attention-box">
          <div className="attention-title">
            <span>关注的直播</span>
            <Link key="mescroll" className="live-nav-icon" to="/attention-link-all/">查看全部<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4803"><path d="M733.11 540.87c-8.41 0.05-16.49-3.25-22.47-9.18L267.69 88.74c-12.41-12.41-12.41-32.52 0-44.93 12.41-12.4 32.52-12.4 44.93 0l442.96 442.96a31.64 31.64 0 0 1 9.36 22.46c0 8.44-3.38 16.53-9.36 22.46a31.636 31.636 0 0 1-22.47 9.18z m0 0" p-id="4804"></path><path d="M290.14999999 983.82c-8.41 0.05-16.49-3.25-22.45999999-9.17a31.657 31.657 0 0 1-9.35999999-22.46c0-8.44 3.37-16.53 9.35999999-22.46L710.64 486.76c12.41-12.4 32.52-12.4 44.93 0 12.41 12.4 12.41 32.52 0 44.93l-442.96 442.96000001a31.594 31.594 0 0 1-22.46000001 9.16999999z m0 0" p-id="4805"></path></svg></Link>
          </div>
          <SlideLiveRevealBox>
            {
              this.state.slideLiveRevealList.map((item, index) => {
                return (<FollowedLiveBox dataJson={item} key={item.id.toString() + index.toString()} />)
              })
            }
          </SlideLiveRevealBox>
        </div>
        <Tabs tabs={this.state.tabs} tabBarBackgroundColor="#fff" tabBarActiveTextColor="#dd2f38" tabBarInactiveTextColor="#4e4e4e" tabBarUnderlineStyle={{"border": "1px #dd2f38 solid"}}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          {this.renderContent}
        </Tabs>
      </div>
    </Fragment>)
  }
}

export default LiveBroadcast;
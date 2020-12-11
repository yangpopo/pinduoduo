// 推荐

import React, { Fragment } from 'react';
import "./recommend.scss";
import { WhiteSpace } from 'antd-mobile';
import Group from "./common/group/Group"; // 拼小圈
import Navigation from "./common/navigation/Navigation"; // 导航
import FeaturedSection from "./common/featuredSection/FeaturedSection"; // 特色栏目
import PictureInfoList from "common/pictureInfoList/PictureInfoList"; // 产品列表

import "assets/css/mescroll.min.css";
import MeScroll from "assets/js/mescroll.min.js";


// 多多菜园--data
import FeaturedSection01 from "assets/img/picture/featured-section-01.jpg"; 
import FeaturedSection02 from "assets/img/picture/featured-section-02.jpg"; 
import FeaturedSection03 from "assets/img/picture/featured-section-03.jpg"; 
import FeaturedSection04 from "assets/img/picture/featured-section-04.jpg";

// 百亿补贴--data
import FeaturedSection05 from "assets/img/picture/featured-section-05.jpg"; 
import FeaturedSection06 from "assets/img/picture/featured-section-06.jpg"; 
import FeaturedSection07 from "assets/img/picture/featured-section-07.jpg";
import FeaturedSection08 from "assets/img/picture/featured-section-08.jpg";

// 商品列表--data
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";


// 多多菜园--data
const vegetableGardenIcon = <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="47912"><path d="M154.957009 742.058314a380 380 0 1 0 714.170929-259.922845 380 380 0 1 0-714.170929 259.922845Z" fill="#52DDB2" p-id="47913"></path><path d="M869.6 481.6c72 197.6-29.6 415.2-227.2 487.2s-415.2-29.6-487.2-227.2c-33.6-92.8-28.8-189.6 5.6-274.4 7.2-17.6 36.8-25.6 46.4-42.4 9.6-16.8 0.8-42.4 13.6-56.8 41.6-49.6 96.8-89.6 161.6-113.6 196.8-71.2 415.2 30.4 487.2 227.2z" fill="#75cb34" p-id="47914"></path><path d="M378.4 349.6c41.6-18.4 27.2-80-18.4-76-16 1.6-26.4 3.2-28.8 4-79.2 42.4-138.4 111.2-170.4 190.4-35.2 84 31.2 129.6 73.6 40.8 30.4-64 79.2-120 142.4-158.4 0 0 0.8-0.8 1.6-0.8z" fill="#FFFFFF" p-id="47915"></path><path d="M836 438.4c-23.2-28.8-69.6-4-57.6 31.2v0.8c48 187.2-52.8 384-238.4 451.2-1.6 0.8-3.2 1.6-4.8 1.6-39.2 13.6-26.4 71.2 15.2 67.2 34.4-3.2 69.6-12 104-25.6 184.8-73.6 281.6-281.6 219.2-471.2-3.2-8-16.8-28.8-37.6-55.2z" fill="#65aa2b" p-id="47916"></path><path d="M583.2 427.2l86.4-63.2c5.6 12 91.2-32 99.2-20l67.2 68.8c-47.2-76.8-118.4-132-200-160-21.6 15.2-39.2 37.6-43.2 56.8v0.8c-59.2 33.6-84 78.4-94.4 112.8-12.8 43.2-8 85.6 3.2 120-43.2 32-63.2 69.6-72.8 99.2-11.2 33.6-11.2 66.4-7.2 96 8.8 58.4 76.8 87.2 125.6 54.4 0 0-53.6-87.2-46.4-109.6 6.4-19.2 88-83.2 93.6-100.8 2.4-10.4-35.2-147.2-11.2-155.2z" fill="#65aa2b" p-id="47917"></path><path d="M837.6 411.2c-32.8-48-39.2-103.2-12-152l7.2-12.8C664 192.8 668.8 363.2 668.8 363.2 496 426.4 608 576.8 608 576.8c-184 67.2-76 226.4-76 226.4l168.8-84.8 81.6-354.4 55.2 47.2z" fill="#75cb34" p-id="47918"></path><path d="M512.8 1016c-164.8 0-320-101.6-380-265.6-15.2-43.2-24-87.2-24.8-132.8 0-13.6 10.4-24 24-24 12.8 0 24 10.4 24 24 0.8 40 8 79.2 21.6 116.8 67.2 184.8 272 280 456 212.8 89.6-32.8 160.8-97.6 200.8-184s44.8-183.2 12-272c-5.6-15.2-12-29.6-19.2-44-6.4-12-1.6-26.4 10.4-32 12-6.4 26.4-1.6 32 10.4 8 16 16 32.8 21.6 49.6 76 209.6-32 441.6-241.6 517.6-44.8 15.2-91.2 23.2-136.8 23.2zM624.8 273.6c-2.4 0-5.6-0.8-8-1.6-38.4-13.6-66.4-17.6-115.2-16-12.8 0.8-24-10.4-24.8-23.2 0-13.6 10.4-24 23.2-24.8 46.4-1.6 83.2 1.6 132.8 18.4 12.8 4.8 19.2 18.4 14.4 30.4-3.2 10.4-12.8 16.8-22.4 16.8z" fill="#444B54" p-id="47919"></path><path d="M132 616.8c2.4-36-24-68-60-72.8l-31.2-4s55.2-145.6 190.4-32.8C232 507.2 432 456 435.2 640" fill="#65aa2b" p-id="47920"></path><path d="M435.2 664c-12.8 0-24-10.4-24-23.2-0.8-43.2-13.6-74.4-37.6-92.8-49.6-37.6-134.4-16.8-136-16.8-7.2 1.6-15.2 0-21.6-4.8-36-30.4-68-42.4-94.4-35.2-18.4 4.8-32 17.6-41.6 30.4 46.4 8 79.2 50.4 76 97.6-0.8 13.6-12 23.2-25.6 22.4-13.6-0.8-23.2-12.8-22.4-25.6 1.6-24-15.2-44.8-39.2-47.2l-31.2-4c-7.2-0.8-13.6-4.8-17.6-11.2-4-6.4-4.8-14.4-1.6-20.8 0.8-3.2 28-71.2 90.4-88 40-10.4 82.4 2.4 128 37.6 30.4-5.6 108.8-14.4 164.8 28 36.8 28 56 72 56.8 130.4 0.8 12-9.6 23.2-23.2 23.2zM530.4 828c-8 0-15.2-4-20-10.4-2.4-3.2-53.6-80.8-28.8-157.6 12.8-40 43.2-71.2 89.6-93.6-15.2-28.8-34.4-78.4-19.2-127.2 12-40 42.4-70.4 92-92 2.4-27.2 12-80.8 53.6-112 35.2-26.4 82.4-30.4 140.8-11.2 7.2 2.4 12.8 7.2 15.2 14.4 2.4 6.4 2.4 14.4-1.6 20.8l-7.2 12.8c-16.8 30.4-7.2 87.2 25.6 152 6.4 12 1.6 26.4-10.4 32-12 6.4-26.4 1.6-32-10.4-22.4-44-54.4-122.4-32-183.2-29.6-5.6-52.8-1.6-69.6 11.2-36 27.2-35.2 88.8-35.2 89.6 0 10.4-6.4 20-16 23.2-43.2 15.2-68.8 37.6-77.6 66.4-15.2 50.4 27.2 109.6 28 110.4 4.8 6.4 5.6 13.6 4 21.6-2.4 7.2-8 12.8-14.4 16-47.2 17.6-76.8 42.4-87.2 74.4-17.6 54.4 22.4 115.2 23.2 116 7.2 11.2 4.8 25.6-6.4 33.6-5.6 2.4-9.6 3.2-14.4 3.2zM201.6 417.6c-4.8 0-9.6-1.6-13.6-4-11.2-8-13.6-22.4-5.6-33.6 28-40 62.4-73.6 102.4-100.8 32.8-22.4 71.2-31.2 108-25.6 44 7.2 76 32.8 90.4 73.6 16 0 40 3.2 62.4 12.8 12 5.6 17.6 20 12 32-5.6 12-20 17.6-32 12-26.4-12-56.8-8-57.6-8-12.8 1.6-24-7.2-26.4-19.2-6.4-32.8-24-50.4-56-55.2-24.8-4-51.2 2.4-73.6 17.6-35.2 24-65.6 54.4-90.4 88.8-5.6 5.6-12.8 9.6-20 9.6z" fill="#444B54" p-id="47921"></path><path d="M832 1016H192c-13.6 0-24-10.4-24-24s10.4-24 24-24h640c13.6 0 24 10.4 24 24s-10.4 24-24 24z" fill="#444B54" p-id="47922"></path><path d="M952 1016c-1.6 0-3.2 0-4.8-0.8-1.6 0-3.2-0.8-4.8-1.6-1.6-0.8-2.4-1.6-4-2.4-1.6-0.8-2.4-1.6-4-3.2l-3.2-3.2c-0.8-1.6-1.6-2.4-2.4-4-0.8-1.6-0.8-3.2-1.6-4.8 0-1.6-0.8-3.2-0.8-4.8 0-1.6 0-3.2 0.8-4.8 0-1.6 0.8-3.2 1.6-4.8 0.8-1.6 1.6-2.4 2.4-4 0.8-1.6 1.6-2.4 3.2-3.2s2.4-2.4 4-3.2c1.6-0.8 2.4-1.6 4-2.4 1.6-0.8 3.2-0.8 4.8-1.6 3.2-0.8 6.4-0.8 9.6 0 1.6 0 3.2 0.8 4.8 1.6 1.6 0.8 3.2 1.6 4 2.4 1.6 0.8 2.4 1.6 4 3.2l3.2 3.2c0.8 1.6 1.6 2.4 2.4 4 0.8 1.6 0.8 3.2 1.6 4.8 0 1.6 0.8 3.2 0.8 4.8 0 1.6 0 3.2-0.8 4.8 0 1.6-0.8 3.2-1.6 4.8-0.8 1.6-1.6 3.2-2.4 4-0.8 1.6-1.6 2.4-3.2 3.2-0.8 0.8-2.4 2.4-4 3.2-1.6 0.8-2.4 1.6-4 2.4-1.6 0.8-3.2 0.8-4.8 1.6-1.6 0.8-3.2 0.8-4.8 0.8z" fill="#444B54" p-id="47923"></path></svg>;

// 百亿补贴--data
const subsidyIcon = <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="54370"><path d="M140.992 850.812c-5.196 2.728-11.594 1.47-15.446-2.96C47.352 757.952 0 640.508 0 512 0 229.234 229.226 0 512 0c282.78 0 512.976 231.032 511.992 513.812-0.452 131.454-50.452 251.22-132.288 341.64-107.5-58.32-238.422-92.576-379.704-92.576-137.492 0-265.172 32.436-371.008 87.936z m0 0" fill="#C92C2C" p-id="54371"></path><path d="M512 1024c-155.774 0-295.274-69.58-389.18-179.336a3981.266 3981.266 0 0 1 51.884-639.04h674.592a3981.192 3981.192 0 0 1 51.884 639.04C807.274 954.422 667.774 1024 512 1024z m0 0" fill="#FBC56D" p-id="54372"></path><path d="M879.57 140v68.11c0 11.04-8.952 20-20 20h-78.164c9.75 0.968 17.906 8.632 18.554 18.56 0.75 11.65-8.476 21.33-19.96 21.33H369.258c-81.368 0-149.696 61.07-158.984 141.9a4368.85 4368.85 0 0 0-28.618 493.232 515.912 515.912 0 0 1-58.836-58.468 3981.584 3981.584 0 0 1 48.328-616.554h-6.72c-11.046 0-20-8.954-20-20V140c0-11.046 8.954-20 20-20h695.142c11.048 0 20 8.954 20 20z m0 0" fill="#EBAE56" p-id="54373"></path><path d="M859.57 228.11H200c-11.046 0-20-8.954-20-20V140c0-11.046 8.954-20 20-20h659.57c11.048 0 20 8.954 20 20v68.11c0 11.046-8.952 20-20 20z m0 0" fill="#FBC56D" p-id="54374"></path><path d="M910.6 434.126l-140-87.5a20 20 0 0 0-21.2 0l-140 87.5a20.008 20.008 0 0 0-9.4 16.96V860c0 11.046 8.954 20 20 20h280c11.046 0 20-8.954 20-20V451.086c0-6.9-3.554-13.304-9.4-16.96zM780 460h-40c-11.046 0-20-8.954-20-20s8.954-20 20-20h40c11.046 0 20 8.954 20 20s-8.954 20-20 20z m0 0" fill="#49CB5C" p-id="54375"></path><path d="M660 880h-40c-11.046 0-20-8.954-20-20V451.086c0-6.9 3.554-13.304 9.4-16.96l31.396-19.626A19.92 19.92 0 0 0 640 420v440c0 11.046 8.954 20 20 20z m0 0" fill="#0CC33C" p-id="54376"></path><path d="M890 670c0 71.796-58.204 130-130 130s-130-58.204-130-130 58.204-130 130-130 130 58.204 130 130z m0 0" fill="#73D37A" p-id="54377"></path><path d="M855 610.36l-154.64 154.64c-9.766 9.766-25.594 9.766-35.36 0s-9.766-25.594 0-35.36l154.64-154.64c9.766-9.766 25.594-9.766 35.36 0s9.766 25.594 0 35.36zM690 635c19.328 0 35-15.672 35-35s-15.672-35-35-35-35 15.672-35 35 15.672 35 35 35z m140 70c-19.328 0-35 15.672-35 35s15.672 35 35 35 35-15.672 35-35-15.672-35-35-35z m0 0" fill="#FFF5F5" p-id="54378"></path><path d="M780 120v340h-40V120z m0 0" fill="#495959" p-id="54379"></path><path d="M602 250c0 49.704-40.296 90-90 90s-90-40.296-90-90 40.296-90 90-90 90 40.296 90 90z m0 0" fill="#FC6930" p-id="54380"></path><path d="M600.196 268h-176.392a90.456 90.456 0 0 1 0.914-40h174.564a90.456 90.456 0 0 1 0.914 40z m0 0" fill="#EE4424" p-id="54381"></path></svg>;



class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 多多菜园
      vegetableGarden: {
        icon: vegetableGardenIcon,
        title: "多多菜园",
        description: "次日达",
        url: "vegetable-garden",
        data: [
          {imgUrl: FeaturedSection01, price:"9.99", id: "0"},
          {imgUrl: FeaturedSection02, price:"8.99", id: "1"},
          {imgUrl: FeaturedSection03, price:"16.99", id: "2"},
          {imgUrl: FeaturedSection04, price:"1.99", id: "3"},
        ]
      },
      // 百亿补贴
      subsidy:{
        icon: subsidyIcon,
        title: "百亿补贴",
        description: "大牌正品",
        url: "subsidy",
        data: [
          {imgUrl: FeaturedSection05, price:"9.99", id: "0"},
          {imgUrl: FeaturedSection06, price:"8.99", id: "1"},
          {imgUrl: FeaturedSection07, price:"16.99", id: "2"},
          {imgUrl: FeaturedSection08, price:"1.99", id: "3"},
        ]
      },
      // 商品列表
      commodityList:[],
      mescroll: Object
    }
  }

  // 第一次渲染后调用
  componentDidMount() {
    /*下拉刷新的回调 */
    const downCallback = () => {
      // 联网成功的回调,隐藏下拉刷新的状态;
      this.setState({
        commodityList:[
          {imgUrl: PictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
          {imgUrl: PictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
          {imgUrl: PictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
          {imgUrl: PictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
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
            {imgUrl: PictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
            {imgUrl: PictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
            {imgUrl: PictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
            {imgUrl: PictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
          ];
        this.setState({
          commodityList:[...this.state.commodityList, ...curPageData]
        })
        this.state.mescroll.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000)
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    // 创建MeScroll对象
    this.setState({
      mescroll: new MeScroll("recommend-mescroll", {
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

  // 卸载时执行
  componentWillUnmount() {
    this.state.mescroll.destroy();
  }

  render() {
    return (<div id="recommend-mescroll" className="mescroll">
    <Group />
    <Navigation/>
    <div className="featured-section-box">
      <WhiteSpace size='sm' />
      <FeaturedSection dataJson={ this.state.vegetableGarden } />
      <WhiteSpace size='sm' />
      <FeaturedSection dataJson={ this.state.subsidy } />
      <WhiteSpace size='sm' />
    </div>
    <div className="mescroll-box">
      {
        this.state.commodityList.map((item, index) => {
          return (<PictureInfoList dataJson={item} key={item.id.toString() + index.toString()}/>)
        })
      }
    </div>
  </div>);
  }
}

export default Recommend;
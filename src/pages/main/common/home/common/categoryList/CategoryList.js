// 类型列表页面

import React, { Fragment } from 'react';
import "./categoryList.scss";
import { PullToRefresh, ListView, WhiteSpace } from 'antd-mobile';
import ReactDOM from 'react-dom';
import GraphicFoldedGrid from "common/graphicFoldedGrid/GraphicFoldedGrid"; // 图文折叠格子
import RankRecommendColumn from "common/rankRecommendColumn/RankRecommendColumn"; // 排行榜||小编推荐
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表

import "assets/css/mescroll.min.css";
import MeScroll from "assets/js/mescroll.min.js";

import Product from "assets/img/picture/head-portrait.jpg";
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

import TypeClass01 from "assets/img/picture/type-class-01.jpg";
import TypeClass02 from "assets/img/picture/type-class-02.jpg";
import TypeClass03 from "assets/img/picture/type-class-03.jpg";
import TypeClass04 from "assets/img/picture/type-class-04.jpg";
import TypeClass05 from "assets/img/picture/type-class-05.jpg";
import TypeClass06 from "assets/img/picture/type-class-06.jpg";
import TypeClass07 from "assets/img/picture/type-class-07.jpg";
import TypeClass08 from "assets/img/picture/type-class-08.jpg";
import TypeClass09 from "assets/img/picture/type-class-09.jpg";
import TypeClass10 from "assets/img/picture/type-class-10.jpg";
import TypeClass11 from "assets/img/picture/type-class-11.jpg";
import TypeClass12 from "assets/img/picture/type-class-12.jpg";
import TypeClass13 from "assets/img/picture/type-class-13.jpg";
import TypeClass14 from "assets/img/picture/type-class-14.jpg";
import TypeClass15 from "assets/img/picture/type-class-15.jpg";
import TypeClass16 from "assets/img/picture/type-class-16.jpg";
import TypeClass17 from "assets/img/picture/type-class-17.jpg";
import TypeClass18 from "assets/img/picture/type-class-18.jpg";
import TypeClass19 from "assets/img/picture/type-class-19.jpg";

import img01 from "assets/img/picture/featured-section-01.jpg";
import img02 from "assets/img/picture/featured-section-02.jpg";
import img03 from "assets/img/picture/featured-section-03.jpg";
import img04 from "assets/img/picture/featured-section-04.jpg";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 图文折叠格子--dataJson
      GraphicFoldedGridData: [
        {imgUrl: TypeClass01, title:"秋上新", id: "0"},
        {imgUrl: TypeClass02, title:"靴子", id: "1"},
        {imgUrl: TypeClass03, title:"毛衣", id: "2"},
        {imgUrl: TypeClass04, title:"裤子", id: "3"},
        {imgUrl: TypeClass05, title:"口红", id: "4"},
        {imgUrl: TypeClass06, title:"笔记本", id: "5"},
        {imgUrl: TypeClass07, title:"耳机", id: "6"},
        {imgUrl: TypeClass08, title:"游戏机", id: "7"},
        {imgUrl: TypeClass09, title:"粉底", id: "8"},
        {imgUrl: TypeClass10, title:"面霜", id: "9"},
        {imgUrl: TypeClass11, title:"T恤", id: "10"},
        {imgUrl: TypeClass12, title:"平板", id: "11"},
        {imgUrl: TypeClass13, title:"厨卫", id: "12"},
        {imgUrl: TypeClass14, title:"粉底", id: "13"},
        {imgUrl: TypeClass15, title:"小电器", id: "14"},
        {imgUrl: TypeClass16, title:"微波炉", id: "15"},
        {imgUrl: TypeClass17, title:"电视机", id: "16"},
        {imgUrl: TypeClass18, title:"电饭煲", id: "17"},
        {imgUrl: TypeClass19, title:"床上用品", id: "18"},
      ],
      // 排行榜||小编推荐 Rank recommend
      RankRecommendColumnData:{
        rank: {
          title: "排行榜",
          info: "每日更新",
          icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68861"><path d="M982.109091 833.163636H41.890909c-23.272727 0-41.890909 18.618182-41.890909 41.890909s18.618182 41.890909 41.890909 41.89091h940.218182c23.272727 0 41.890909-18.618182 41.890909-41.89091s-18.618182-41.890909-41.890909-41.890909zM982.109091 363.054545h-172.218182c-23.272727 0-41.890909 18.618182-41.890909 41.89091V744.727273c0 23.272727 18.618182 41.890909 41.890909 41.890909h172.218182c23.272727 0 41.890909-18.618182 41.890909-41.890909V404.945455c0-23.272727-18.618182-41.890909-41.890909-41.89091z m-88.436364 339.781819c-27.927273 0-51.2-4.654545-65.163636-18.618182-13.963636-13.963636-23.272727-37.236364-23.272727-69.818182h65.163636c0 13.963636 0 27.927273 4.654545 32.581818 0 4.654545 9.309091 9.309091 13.963637 9.309091 9.309091 0 13.963636-4.654545 18.618182-13.963636v-23.272728c0-13.963636 0-18.618182-4.654546-27.927272-4.654545-4.654545-9.309091-4.654545-18.618182-4.654546h-18.618181v-41.890909h9.30909c9.309091 0 18.618182 0 23.272728-4.654545 4.654545-4.654545 4.654545-13.963636 4.654545-27.927273 0-18.618182-4.654545-27.927273-18.618182-27.927273-4.654545 0-9.309091 0-13.963636 9.309091 0 4.654545-4.654545 18.618182-4.654545 27.927273h-60.509091c0-51.2 27.927273-79.127273 79.127272-79.127273 27.927273 0 51.2 4.654545 65.163637 18.618182 9.309091 9.309091 18.618182 27.927273 18.618182 51.2 0 13.963636 0 23.272727-9.309091 27.927273-4.654545 9.309091-13.963636 18.618182-27.927273 18.618182 27.927273 4.654545 41.890909 23.272727 41.890909 55.854545 9.309091 60.509091-18.618182 88.436364-79.127273 88.436364zM339.781818 791.272727h339.781818c23.272727 0 41.890909-18.618182 41.890909-41.890909V148.945455c0-23.272727-18.618182-41.890909-41.890909-41.89091H339.781818c-23.272727 0-41.890909 18.618182-41.890909 41.89091V744.727273c0 23.272727 18.618182 46.545455 41.890909 46.545454zM428.218182 293.236364c27.927273 0 46.545455-4.654545 60.509091-9.309091 9.309091-4.654545 18.618182-27.927273 23.272727-51.2h60.509091v339.781818h-88.436364V349.090909H428.218182V293.236364zM41.890909 791.272727h172.218182c23.272727 0 41.890909-18.618182 41.890909-41.890909V321.163636c0-23.272727-18.618182-41.890909-41.890909-41.890909H41.890909c-23.272727 0-41.890909 18.618182-41.890909 41.890909V744.727273c0 23.272727 18.618182 46.545455 41.890909 46.545454z m37.236364-251.345454l46.545454-51.2c13.963636-13.963636 18.618182-27.927273 18.618182-46.545455 0-23.272727-4.654545-32.581818-18.618182-32.581818-13.963636 0-18.618182 13.963636-18.618182 37.236364v13.963636H46.545455c0-32.581818 4.654545-55.854545 18.618181-69.818182 9.309091-18.618182 32.581818-27.927273 65.163637-27.927273s51.2 9.309091 69.818182 23.272728c9.309091 13.963636 13.963636 32.581818 13.963636 55.854545 0 32.581818-9.309091 60.509091-32.581818 83.781818l-41.890909 46.545455-9.309091 9.309091c-4.654545 4.654545-4.654545 0-4.654546 0h83.781818v74.472727H41.890909c0-41.890909 13.963636-83.781818 37.236364-116.363636z" fill="#FFC000" p-id="68862"></path></svg>,
          list: [img01, img02],
          url:"rank"
        },
        recommend: {
          title: "排行榜",
          info: "每日更新",
          icon: "",
          list:[img03, img04],
          url:"recommend"
        }
      },
      // 橱窗产品信息
      windowListData:[],
      mescroll: Object
    };
  }

  // 第一次渲染后调用
  componentDidMount() {
    /*下拉刷新的回调 */
    const downCallback = () => {
      // 联网成功的回调,隐藏下拉刷新的状态;
      this.setState({
        windowListData:[
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
        this.setState({
          windowListData:[...this.state.windowListData, ...curPageData]
        })
        this.state.mescroll.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000)
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    // 创建MeScroll对象
    this.setState({
      mescroll: new MeScroll("category-list-mescroll", {
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
    return (<div id="category-list-mescroll" className="mescroll">
    <GraphicFoldedGrid dataJson={ this.state.GraphicFoldedGridData } />
    <WhiteSpace size='sm' />
    <RankRecommendColumn dataJson={ this.state.RankRecommendColumnData } />
    <WhiteSpace size='sm' />
    { <WindowList dataJson={this.state.windowListData} /> }
  </div>);
  }
}

export default CategoryList;
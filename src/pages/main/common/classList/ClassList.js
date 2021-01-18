// 分类列表

import React, { Fragment } from 'react';
import "./classList.scss";
import { Link } from 'react-router-dom';
import {  NavBar ,Icon } from 'antd-mobile';
import SearchBlock from "common/searchBlock/SearchBlock"; // 搜索框
import VerticalMenu from "common/verticalMenu/VerticalMenu"; // 垂直菜单显示
import GoodsUnit from './common/goodsUnit/GoodsUnit'; // 分类商品单元

import featuredSection from "assets/img/picture/featured-section-05.jpg";

// 商品数据
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 菜单数据
      tabs:[
        { title: "推荐", id: 0 },
        { title: "食品", id: 1 },
        { title: "鞋包", id: 2 },
        { title: "美妆", id: 3 },
        { title: "内衣", id: 4 },
        { title: "男装", id: 5 },
        { title: "图书", id: 6 },
        { title: "洗护", id: 7 },
        { title: "数码", id: 8 },
        { title: "车品", id: 9 },
        { title: "健康", id: 10 },
        { title: "生鲜", id: 11 },
        { title: "女装", id: 12 },
        { title: "母婴", id: 13 },
        { title: "手机", id: 14 },
        { title: "电器", id: 15 },
        { title: "百货", id: 16 },
        { title: "运动", id: 17 },
        { title: "家装", id: 18 },
        { title: "家纺", id: 19 },
        { title: "充值", id: 20 },
        { title: "海淘", id: 21 },
        { title: "品牌", id: 23 },
      ],
      // 分类列表数据
      classListData: [],
      // 产品列表数据
      goodsListData: [
        {imgUrl: pictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
        {imgUrl: pictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
        {imgUrl: pictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
        {imgUrl: pictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
      ],
      // 分页数据
      page: {
        num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
        size: 10 //每页数据条数,默认10
      },
    };
  }
  
  // 切换当前菜单
  switchCurrentMenu = (menuData) => {
    console.log(menuData);
    this.setState({
      goodsListData: [
        {imgUrl: pictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
        {imgUrl: pictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
        {imgUrl: pictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
        {imgUrl: pictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
      ]
    })
  }

  // 获取数据
  getData = (page, obj) => {
    if (page === undefined) {
      // 下拉刷新
      this.setState({
        goodsListData:[
          {imgUrl: pictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
          {imgUrl: pictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
          {imgUrl: pictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
          {imgUrl: pictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
        ]
      })
      obj.resetUpScroll();
    } else {
      // 上拉加载
      setTimeout(() => {
        let sdf = [
          {imgUrl: pictureInfoList01, price:"9.99", id: "0", title:"阿斯顿发送到沙发上撒旦法", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:23423},
          {imgUrl: pictureInfoList02, price:"19.99", id: "1", title:"更好地风格十多个十多个问", tag:["极速退款", "满13返2"], activity:[1,2,3], quantitySold:34534},
          {imgUrl: pictureInfoList03, price:"29.99", id: "2", title:"山东分公司删除VB还关心程维高电饭锅", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:56756},
          {imgUrl: pictureInfoList04, price:"39.99", id: "3", title:"闪电发货瓦尔塔SV关闭", tag:["立减3元", "退货包邮"], activity:[1,2,3], quantitySold:87934},
        ];
        this.setState({
          goodsListData: [...this.state.goodsListData, ...sdf]
        })
        obj.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000)
    }
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

  render() {
    return (<Fragment>
      <NavBar
        mode="light"
        className="class-nav-bar"
        rightContent={<svg className="icon-class-share" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17653"><path d="M128 597.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666v-170.666667a42.666667 42.666667 0 1 1 85.333334 0v170.666667a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667zM481.834667 97.834667a42.666667 42.666667 0 0 1 60.330666 0l213.333334 213.333333a42.666667 42.666667 0 0 1-60.330667 60.330667L512 188.330667 328.832 371.498667a42.666667 42.666667 0 0 1-60.330667-60.330667l213.333334-213.333333z" p-id="17654"></path><path d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 1 1-85.333334 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="17655"></path></svg>}
      >分类</NavBar>
      <div className="search-block-box">
        <SearchBlock />
      </div>
      <VerticalMenu 
        className="class-list-box" 
        menuData={this.state.tabs} 
        switchCurrentMenu={this.switchCurrentMenu} 
        getAjaxData={this.getData}
        parameter={this.state.page}
      >
        <div className="class-box">
          <div className="title-box">热门分类</div>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
        </div>
        <div className="class-box">
          <div className="title-box">热门分类</div>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
          <Link className="class-a" to="/asdfas"><img src={featuredSection} alt=""/>阿萨德发</Link>
        </div>
        <div className="goods-box">
          <div className="title-box" onClick={this.asdf}>热门商品</div>
          {
            this.state.goodsListData.map((item, index) => {
              return (<GoodsUnit dataJson={item} key={item.id.toString() + index.toString()} />)
            })
          }
        </div>
      </VerticalMenu>
    </Fragment>);
  }
}




export default ClassList;

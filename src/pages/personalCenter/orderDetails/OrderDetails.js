// 订单详情

import React, { Fragment, useState, useEffect } from 'react';
import "./orderDetails.scss";
import { WhiteSpace, NavBar, Icon } from 'antd-mobile';
import { Link, useParams } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表
import MoreOperations from "./common/moreOperations/MoreOperations"; // 更多操作

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import userPortrait from "assets/img/picture/user-portrait.png"; // 头像
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const OrderDetails = (props) => {
  // 传递id值
  const { id } = useParams();

  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      props.history.goBack();
    } else {
      props.history.replace(url);
    }
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
      imgUrl: pictureInfoList01, 
      price: "9.99", 
      id: "0", 
      title: "阿斯顿发送到沙发上撒旦法", 
      tag: ["立减3元", "退货包邮"], 
      activity: [1,2,3], 
      quantitySold: 93,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList02, 
      price: "549.99", 
      id: "1", 
      title: "VB电磁阀华为热", 
      tag: ["新品", "退货包运费", "急速退款"], 
      activity: [1,2,3], 
      quantitySold: 123,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList03, 
      price: "848.99", 
      id: "2", 
      title: "出不来大V了发个豆腐干问题我对方", 
      tag: ["退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList04, 
      price: "108.99", 
      id: "3", 
      title: "阿斯顿发送到好风光瓦尔塔曲蔚然撒旦", 
      tag: ["立减3元", "退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [headPortrait, userPortrait]
    }
  ];

  return(<div className="order-details">
    <NavBar
      mode="light"
      className="order-details-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >待发货</NavBar>
    <UpDownLoad id="order-details-mescroll" className="order-details-mescroll" getAjaxData={getAjaxData}>
      <div className="express-info">
        <svg className="icon-express" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16478"><path d="M1024 100.504a30.864 30.864 0 0 0-30.856-30.856H424.784a30.864 30.864 0 0 0-30.856 30.856V190.4l-208.168-0.688h-0.104a30.856 30.856 0 0 0-26.464 15.008L4.4 462.696A30.976 30.976 0 0 0 0 478.608v237c0 65.456 53.28 118.736 118.768 118.736h48.416c0.488 66.248 54.488 120.008 120.832 120.008s120.344-53.76 120.832-120.008h213.52c0.496 66.248 54.48 120.008 120.832 120.008s120.344-53.76 120.832-120.008h41.176c65.496 0 118.776-53.28 118.776-118.736v-175.28c0-0.704-0.168-1.36-0.2-2.048 0.04-0.696 0.2-1.352 0.2-2.056V100.504z m-61.72 30.864v374H455.848l-0.2-12.88v-361.12h506.632z m-674.264 761.264c-32.624 0-59.16-26.576-59.16-59.184s26.536-59.136 59.16-59.136c32.624 0 59.16 26.52 59.16 59.136s-26.528 59.184-59.16 59.184z m455.192 0c-32.608 0-59.16-26.576-59.16-59.184s26.544-59.136 59.16-59.136 59.168 26.52 59.168 59.136-26.552 59.184-59.168 59.184z m219.072-177.024c0 31.464-25.584 57.016-57.056 57.016h-57.72c-20.992-35.84-59.832-60.032-104.296-60.032-44.72 0-83.752 24.448-104.656 60.624a31.256 31.256 0 0 0-5.912-0.592H392.312c-21-35.84-59.832-60.032-104.296-60.032s-83.296 24.184-104.288 60.032h-64.96c-31.464 0-57.048-25.552-57.048-57.016V487.168l141.352-235.672 187.016 0.632 3.832 241.184v42.912c0 2.736 0.472 5.336 1.136 7.856 1.888 15.24 14.76 27.104 30.48 27.104h536.744v144.424z" p-id="16479"></path><path d="M250.24 311.8a30.904 30.904 0 0 0-42.216 11.024L119.928 473.272a30.856 30.856 0 1 0 53.256 31.192l88.088-150.448a30.832 30.832 0 0 0-11.032-42.216z" p-id="16480"></path></svg>
        <dl className="info">
          <dt>商家已发货，正在通知快递公司取件</dt>
          <dd>2020-12-29 09:29:20</dd>
        </dl>
        <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16867"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" p-id="16868"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" p-id="16869"></path></svg>
      </div>
      <div className="address-info">
        <svg className="icon-address" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17089"><path d="M512 97.28c86.016 0 166.912 33.792 227.84 94.72C800.768 252.928 834.56 333.824 834.56 419.84s-33.792 166.912-94.72 227.84c-6.656 6.656-13.824 13.312-22.016 19.968l-2.048 2.048-2.048 2.048-201.728 201.728-201.728-201.728-2.048-2.048-2.048-2.048c-8.192-6.656-15.36-13.312-22.016-19.968-125.952-125.44-125.952-330.24 0-455.68C345.088 131.072 425.984 97.28 512 97.28m0-61.44c-98.304 0-196.608 37.376-271.36 112.64-150.016 150.016-150.016 392.704 0 542.72 8.704 8.704 17.408 16.384 26.624 24.064l245.248 245.248 245.248-245.248c9.216-7.68 17.92-15.36 26.624-24.064 150.016-150.016 150.016-393.216 0-543.232C708.608 73.216 610.304 35.84 512 35.84zM512 359.936c39.424 0 71.68 32.256 71.68 71.68s-32.256 71.68-71.68 71.68-71.68-32.256-71.68-71.68 32.256-71.68 71.68-71.68m0-61.44c-73.728 0-133.12 59.392-133.12 133.12s59.392 133.12 133.12 133.12 133.12-59.392 133.12-133.12-59.392-133.12-133.12-133.12z" p-id="17090"></path></svg>
        <dl className="info">
          <dt>用户名 154868585588 重庆市其他区</dt>
          <dd>阿斯顿发生阿斯顿发生发发顺丰阿萨德法师法师发斯蒂芬阿斯顿发顺丰</dd>
        </dl>
        <span className="more-but">展开<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17983"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" p-id="17984"></path></svg></span>
      </div>
      <WhiteSpace />
      <div className="order-info">
        <div className="head-box">
          <Link className="head" to="/shop/0">
            <img src={pictureInfoList01} alt="" />阿萨德发为
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16714"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" p-id="16715"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" p-id="16716"></path></svg>
          </Link>
        </div>
        <div className="product-box">
          <img className="product-head" src={pictureInfoList01} alt=""/>
          <ul className="info-box">
            <li className="name">电饭锅桥儿头曲儿才VG电饭锅森岛帆高阿萨德发阿萨德发阿萨德发</li>
            <li className="parameter">农家紫薯 [五斤] 实惠装 </li>
            <li className="label"><span>坏了保赔</span></li>
          </ul>
          <dl className="price">
            <dt>¥54.15</dt>
            <dd>x1</dd>
          </dl>
        </div>
        <div className="operate-but">
          <Link to="/">分享给好友</Link>
          <Link to="/dialogue/0" className="service-but"><svg className="icon-chat" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20872"><path d="M256.580267 454.314667c0 27.374933 22.084267 49.4592 49.4592 49.4592 27.3408 0 49.425067-22.084267 49.425066-49.4592 0-27.3408-22.084267-49.425067-49.425066-49.425067-27.374933 0-49.4592 22.084267-49.4592 49.425067z m191.5904 0c0 27.374933 22.084267 49.4592 49.425066 49.4592 27.374933 0 49.4592-22.084267 49.4592-49.4592 0-27.3408-22.084267-49.425067-49.4592-49.425067-27.3408 0-49.425067 22.084267-49.425066 49.425067z m191.5904 0c0 27.374933 22.084267 49.4592 49.425066 49.4592 27.374933 0 49.4592-22.084267 49.4592-49.4592 0-27.3408-22.084267-49.425067-49.4592-49.425067-27.3408 0-49.425067 22.084267-49.425066 49.425067zM503.773867 46.4896c251.0848 0 457.250133 184.081067 457.250133 412.433067 0 227.874133-206.267733 411.8528-457.250133 411.8528-25.634133 0-50.4832-1.911467-74.24-5.768534a26.8288 26.8288 0 0 0-17.066667 3.413334L273.339733 955.392a37.0688 37.0688 0 0 1-56.695466-31.4368v-130.9696a27.4432 27.4432 0 0 0-10.103467-21.845333c-101.512533-78.267733-160.017067-192.375467-160.017067-312.797867 0-227.874133 206.267733-411.8528 457.284267-411.8528z m-130.6624 759.125333c19.285333-12.117333 42.5984-16.930133 66.6624-14.0288 21.333333 3.413333 42.222933 5.0176 64 5.0176 211.797333 0 383.112533-152.7808 383.112533-337.681066 0-185.412267-171.2128-338.261333-383.112533-338.261334-211.831467 0-383.146667 152.7808-383.146667 337.681067 0 96.938667 47.5136 189.576533 131.3792 254.2592a101.649067 101.649067 0 0 1 38.741333 80.384v64.1024l82.363734-51.473067z" p-id="20873"></path></svg>联系客服</Link>
          <Link to="/apply-select-after-sales/1" className="efund-but">申请退款</Link>
        </div>
        <div className="additional-info">
          <span className="info-box">使用平台5元优惠券</span>
          <div className="price-box">
            实付:<b><em>¥</em>54.15</b>(面运费)
          </div>
        </div>
      </div>
      <WhiteSpace />
      <div className="compose-box">
        <span className="title">拼单成功</span>
        <div className="member-box">
          <div className="member-unit">
            <img src={pictureInfoList01} alt="" />
          </div>
          <div className="member-unit">
            <img src={pictureInfoList01} alt="" />
            <span className="number"><b>+2</b></span>
          </div>
          <svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16867"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" p-id="16868"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" p-id="16869"></path></svg>
        </div>
      </div>
      <WhiteSpace />
      <div className="explain-info">
        <h6 className="title">使用说明</h6>
        <p>签收后请及时开箱检查，如发现商品存在破损、变质、腐烂等影响食用情形的，请务必在签收后的24小时内发起售后申请，并上传有效的凭证。</p>
      </div>
      <WhiteSpace />
      <ul className="order-detailed">
        <li>订单编号：215645645644898<span className="operate-but">复制</span></li>
        <li>支付方式：支付宝</li>
        <li>商品快照：核对交易细节时，可作为判断依据<Link to="/" className="operate-but">查看</Link></li>
        <li>物流公司：圆通快递<span className="operate-but">复制</span></li>
        <li>快递单号：YT564566456</li>
        <li>拼单时间：2020-12-29 08:54:05</li>
        <li>下单时间：2020-12-29 08:54:05</li>
        <li>发货时间：2020-12-29 08:54:05</li>
      </ul>
      <WhiteSpace />
      <WindowList dataJson={windowListData} />
      <MoreOperations />
    </UpDownLoad>
  </div>)
}

export default OrderDetails;
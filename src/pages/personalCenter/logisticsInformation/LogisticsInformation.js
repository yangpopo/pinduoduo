// 物流信息

import React, { Fragment, useState, useEffect } from 'react';
import "./logisticsInformation.scss";
import { NavBar, Icon } from "zarm";
import { WhiteSpace } from 'antd-mobile';
import { useHistory, useParams } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const LogisticsInformation = (props) => {
  // 传递id值
  const { id } = useParams();

  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      history.go(-1);
    } else {
      history.push(url);
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

  return(<div className="logistics-information">
    <NavBar
      className="logistics-information-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="已发货"
      right={<svg className="icon-shop-but" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12089"><path d="M543.503059 102.068706l-2.831059 530.55247a30.117647 30.117647 0 0 1-60.235294-0.301176l2.800941-528.715294-160.768 160.768a30.117647 30.117647 0 0 1-42.586353-42.586353L492.845176 8.824471a30.117647 30.117647 0 0 1 42.586353 0l212.961883 212.961882a30.117647 30.117647 0 1 1-42.586353 42.586353l-162.334118-162.334118zM708.306824 391.529412a30.117647 30.117647 0 0 1 0-60.235294H873.411765a60.235294 60.235294 0 0 1 60.235294 60.235294v572.235294a60.235294 60.235294 0 0 1-60.235294 60.235294H150.588235a60.235294 60.235294 0 0 1-60.235294-60.235294V391.529412a60.235294 60.235294 0 0 1 60.235294-60.235294h163.056941a30.117647 30.117647 0 0 1 0 60.235294H150.588235v572.235294h722.82353V391.529412h-165.104941z" p-id="12090"></path></svg>}
    />
    <UpDownLoad id="logistics-information-mescroll" className="logistics-information-mescroll" getAjaxData={getAjaxData}>
      <div className="express-info">
        <img class="picture-img" src={PictureInfoList01} alt="" />
        <dl className="info-box">
          <dt>圆通快递</dt>
          <dd>快递单号：YT56456444464648<span>复制</span></dd>
        </dl>
        <div className="icon-box">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5756"><path d="M967.111 568.889c0-73.956-45.511-136.533-113.778-159.289v-11.378C853.333 210.49 699.733 56.89 512 56.89s-341.333 153.6-341.333 341.333V409.6C102.4 432.356 56.889 494.933 56.889 568.889c0 96.711 73.955 170.667 170.667 170.667h56.888V398.222h-56.888c0-159.289 125.155-284.444 284.444-284.444s284.444 125.155 284.444 284.444h-56.888v341.334h34.133c-34.133 85.333-113.778 147.91-204.8 164.977v-56.889H398.222v113.778H568.89c125.155-22.755 227.555-108.089 267.378-227.555C910.222 716.8 967.11 648.533 967.11 568.889zM227.556 682.667c-62.578 0-113.778-51.2-113.778-113.778s51.2-113.778 113.778-113.778v227.556z m568.888 0V455.11c62.578 0 113.778 51.2 113.778 113.778s-51.2 113.778-113.778 113.778z" fill="#73777A" p-id="5757"></path></svg>
          物流服务
        </div>
      </div>
      <div className="order-info">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13733"><path d="M1024 100.504a30.864 30.864 0 0 0-30.856-30.856H424.784a30.864 30.864 0 0 0-30.856 30.856V190.4l-208.168-0.688h-0.104a30.856 30.856 0 0 0-26.464 15.008L4.4 462.696A30.976 30.976 0 0 0 0 478.608v237c0 65.456 53.28 118.736 118.768 118.736h48.416c0.488 66.248 54.488 120.008 120.832 120.008s120.344-53.76 120.832-120.008h213.52c0.496 66.248 54.48 120.008 120.832 120.008s120.344-53.76 120.832-120.008h41.176c65.496 0 118.776-53.28 118.776-118.736v-175.28c0-0.704-0.168-1.36-0.2-2.048 0.04-0.696 0.2-1.352 0.2-2.056V100.504z m-61.72 30.864v374H455.848l-0.2-12.88v-361.12h506.632z m-674.264 761.264c-32.624 0-59.16-26.576-59.16-59.184s26.536-59.136 59.16-59.136c32.624 0 59.16 26.52 59.16 59.136s-26.528 59.184-59.16 59.184z m455.192 0c-32.608 0-59.16-26.576-59.16-59.184s26.544-59.136 59.16-59.136 59.168 26.52 59.168 59.136-26.552 59.184-59.168 59.184z m219.072-177.024c0 31.464-25.584 57.016-57.056 57.016h-57.72c-20.992-35.84-59.832-60.032-104.296-60.032-44.72 0-83.752 24.448-104.656 60.624a31.256 31.256 0 0 0-5.912-0.592H392.312c-21-35.84-59.832-60.032-104.296-60.032s-83.296 24.184-104.288 60.032h-64.96c-31.464 0-57.048-25.552-57.048-57.016V487.168l141.352-235.672 187.016 0.632 3.832 241.184v42.912c0 2.736 0.472 5.336 1.136 7.856 1.888 15.24 14.76 27.104 30.48 27.104h536.744v144.424z" fill="#838384" p-id="13734"></path><path d="M250.24 311.8a30.904 30.904 0 0 0-42.216 11.024L119.928 473.272a30.856 30.856 0 1 0 53.256 31.192l88.088-150.448a30.832 30.832 0 0 0-11.032-42.216z" fill="#838384" p-id="13735"></path></svg>
        <dl className="info-box">
          <dt>订单编号：56456558988656454564548</dt>
          <dd>收货地址：阿斯顿发文阿萨德发阿萨德发阿道夫啥地方放阿斯顿发生阿萨德发是的发送发斯蒂芬阿萨德发<span>展开</span></dd>
        </dl>
      </div>
      <div className="logistics-record">
        <div className="logistics-record-unit">
          <dl className="unit-info">
            <dt>商家已发货，正在通知快递公司取件</dt>
            <dd>2020-12-29&nbsp; 09:28:21</dd>
          </dl>
          <div className="remarks-info">在有物流动态更新时提醒我，<span>接受提醒</span></div>
          <div className="icon-circle"></div>
        </div>
        <div className="logistics-record-unit">
          <dl className="unit-info">
            <dt>您的订单打包完成</dt>
            <dd>2020-12-28&nbsp; 16:12:31</dd>
          </dl>
          <div className="icon-circle"></div>
        </div>
        <div className="logistics-record-unit">
          <dl className="unit-info">
            <dt>您的订单打包完成</dt>
            <dd>2020-12-28&nbsp; 16:12:31</dd>
          </dl>
          <div className="icon-circle"></div>
        </div>
        <div className="more-but">展开<svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14500"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" p-id="14501"></path></svg></div>
      </div>
      <WhiteSpace />
    </UpDownLoad>
  </div>)
}

export default LogisticsInformation;
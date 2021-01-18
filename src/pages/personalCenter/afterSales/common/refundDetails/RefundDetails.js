// 退款详情

import React, { Fragment, useState, useEffect } from 'react';
import "./refundDetails.scss";
import { Cell } from "zarm";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { Link, useParams } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

import HeadPortrait from "assets/img/picture/head-portrait.jpg";
import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const RefundDetails = (props) => {
  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if(url == null) {
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

  // 传递id值
  const { id } = useParams();


  return(<div className="refund-details">
    <NavBar
      mode="light"
      className="refund-details-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => { linkGoClick() }}
    >我的订单</NavBar>
    <UpDownLoad id="refund-details-mescroll" className="refund-details-mescroll" getAjaxData={getAjaxData}>
      <div className="refund-info">
        <div className="state"><svg className="icon-success" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="976"><path d="M512.697383 63.443961c-247.539816 0-448.208115 200.668299-448.208115 448.208115 0 247.539816 200.668299 448.208115 448.208115 448.208115 247.539816 0 448.208115-200.668299 448.208115-448.208115C960.905498 264.11226 760.237199 63.443961 512.697383 63.443961zM782.650675 386.324696 472.510102 703.184297c-1.057075 1.586125-2.233877 3.100618-3.620457 4.504594-12.155854 12.346189-31.861662 12.346189-44.025703 0L270.811334 551.265282c-12.146645-12.347213-12.146645-32.354895 0-44.683688 12.154831-12.347213 31.860638-12.347213 44.016493 0L446.411701 640.173195l292.213271-298.549583c12.165064-12.346189 31.861662-12.346189 44.025703 0C794.797319 353.9698 794.797319 373.97646 782.650675 386.324696z" p-id="977"></path></svg>退款成功</div>
        {/* <div className="state"><svg className="icon-fail" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1772" data-spm-anchor-id="a313x.7781069.1998910419.i2"><path d="M512.697 63.445c-247.538 0-448.208 200.67-448.208 448.208 0 247.54 200.67 448.208 448.208 448.208 247.54 0 448.208-200.668 448.208-448.208 0-247.539-200.668-448.208-448.208-448.208z m177.99 581.763c12.264 12.273 12.264 32.17 0 44.427-12.284 12.273-32.172 12.273-44.454 0L512.916 556.318 379.59 689.635c-12.274 12.273-32.162 12.273-44.445 0-12.266-12.256-12.266-32.154 0-44.427l133.334-133.353-133.334-133.318c-12.266-12.256-12.266-32.17 0-44.444 12.282-12.256 32.17-12.256 44.445 0l133.326 133.335 133.317-133.335c12.282-12.256 32.17-12.256 44.453 0 12.265 12.274 12.265 32.19 0 44.444L557.351 511.855l133.335 133.353z" p-id="1773"></path></svg>退款失败</div> */}
        <div className="price">¥<b>545</b></div>
      </div>
      <WhiteSpace />
      <Cell hasArrow title="协商详情" onClick={() => {linkGoClick("/")}} />
      <WhiteSpace />
      <div className="order-box">
        <div className="shop-box">
          <div className="name"><img src={HeadPortrait} alt="" />红润干果</div>
          <Link className="contact-merchants" to="/"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2051"><path d="M767.99417 383.991974c-35.327473 0-63.999161 28.671688-63.999161 63.999161s28.671688 63.999161 63.999161 63.999161 63.999161-28.671688 63.999161-63.999161S803.321643 383.991974 767.99417 383.991974L767.99417 383.991974zM511.999521 831.983108c-37.375023 0-73.470203-4.351667-108.157754-11.744211l-150.653149 90.558409 2.015604-148.44487C139.718814 692.913441 64.008386 578.099902 64.008386 447.991135c0-212.059679 200.572036-383.991974 447.991135-383.991974s447.990137 171.932294 447.990137 383.991974C959.989657 660.082761 759.41862 831.983108 511.999521 831.983108L511.999521 831.983108zM511.999521 0C229.252949 0 0.010223 200.603982 0.010223 447.991135c0 141.404733 75.03856 267.322561 191.996486 349.400261l0 226.587201 224.283083-136.093682c31.039698 5.120372 62.974887 8.095359 95.709729 8.095359 282.745574 0 511.989298-200.572036 511.989298-447.991135C1023.988819 200.603982 794.746093 0 511.999521 0L511.999521 0 511.999521 0zM256.004872 383.991974c-35.327473 0-63.998163 28.671688-63.998163 63.999161s28.671688 63.999161 63.998163 63.999161 63.999161-28.671688 63.999161-63.999161S291.332345 383.991974 256.004872 383.991974L256.004872 383.991974zM511.999521 383.991974c-35.327473 0-63.999161 28.671688-63.999161 63.999161s28.671688 63.999161 63.999161 63.999161 63.999161-28.671688 63.999161-63.999161S547.326994 383.991974 511.999521 383.991974L511.999521 383.991974z" p-id="2052"></path></svg>联系商家</Link>
        </div>
        <div className="commodity-box" onClick={() => {linkGoClick("/")}}>
          <img src={PictureInfoList01} alt="" />
          <dl className="commodity-info">
            <dt>阿斯顿发生阿水电费噶水电费阿斯顿发顺丰阿萨德发请对方付安抚</dt>
            <dd>新疆薄皮核桃5斤[送夹子]</dd>
          </dl>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2860" data-spm-anchor-id="a313x.7781069.1998910419.i3"><path d="M340.992 820.736c11.776 11.776 31.232 11.776 43.008 3.072l287.232-287.232c8.704-11.264 11.264-25.088 6.656-35.84-0.512-2.56-5.12-7.68-8.704-12.288L385.536 205.312c-11.776-14.848-30.72-14.848-42.496-3.072-11.776 11.776-11.776 30.72 0 42.496l265.216 268.288-267.264 264.192c-11.776 12.288-12.288 31.232 0 43.52z" p-id="2861"></path></svg>
        </div>
        <ul className="order-info">
          <li>订单编号:&nbsp;&nbsp;564645648548545664564<span>复制</span></li>
          <li>退款金额:&nbsp;&nbsp;¥6565</li>
          <li>退货原因:&nbsp;&nbsp;未发货</li>
          <li>申请时间:&nbsp;&nbsp;2020-12-25</li>
        </ul>
      </div>
      <div className="more-box">
        <Link className="repeat-but" to="/">再次申请</Link>
        <Link className="flow-to-but" to="/">钱款去向</Link>
      </div>
    </UpDownLoad>
  </div>)
}

export default RefundDetails;
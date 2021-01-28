// 每日优惠券

import React, { useState } from 'react';
import "./dailyCoupons.scss";
import SlideLiveRevealBox from "common/slideLiveRevealBox/SlideLiveRevealBox"; // 滑动展示框

const DailyCoupons = () => {
  // 月卡券选择状态
  const [selectionStatus, setSelectionStatus] = useState(1);

  return (<div className="daily-coupons">
    <h1 className="h1-box">
      <span className="title-box">每日神券</span>
      <span className="describe-box">领神券购物更划算</span>
    </h1>
    <h2 className="h2-box">
      <span className="title-box">全场通用券</span>
      <span className="describe-box">每天可领1张</span>
    </h2>
    <div className="switch-box">
      <dl className={selectionStatus == 0 ? "select" : ""} onClick={() => {setSelectionStatus(0)}}>
        <dt>第一周</dt>
        <dd>省10元</dd>
      </dl>
      <dl className={selectionStatus == 1 ? "current select" : "current"} onClick={() => {setSelectionStatus(1)}}>
        <dt>第二周</dt>
        <dd>可领券</dd>
      </dl>
      <dl className={selectionStatus == 2 ? "select" : ""} onClick={() => {setSelectionStatus(2)}}>
        <dt>第三周</dt>
        <dd>待开放</dd>
      </dl>
      <dl className={selectionStatus == 3 ? "select" : ""} onClick={() => {setSelectionStatus(3)}}>
        <dt>第三周</dt>
        <dd>待开放</dd>
      </dl>
    </div>
    <div className="coupons-coupon-box">
      <h3 className="title-box">本周领券时间剩余<b>2天</b></h3>
      <div className="main-box">
        <div className="coupon fail">
          <dl>
            <dt><b>5</b>元</dt>
            <dd>无门槛券</dd>
          </dl>
          <div className="state"><span className="fail">已使用</span></div>
        </div>
        <div className="coupon wait">
          <dl>
            <dt><b>2</b>元</dt>
            <dd>满20可用</dd>
          </dl>
          <div className="state"><span className="wait">领取</span></div>
        </div>
        <div className="coupon usable">
          <dl>
            <dt><b>3</b>元</dt>
            <dd>满30可用</dd>
          </dl>
          <div className="state"><span className="usable">去使用</span></div>
        </div>
        <div className="coupon wait">
          <dl>
            <dt><b>5</b>元</dt>
            <dd>满50可用</dd>
          </dl>
          <div className="state"><span className="wait">领取</span></div>
        </div>
        <div className="coupon wait">
          <dl>
            <dt><b>7</b>元</dt>
            <dd>满70可用</dd>
          </dl>
          <div className="state"><span className="wait">领取</span></div>
        </div>
        <div className="coupon wait">
          <dl>
            <dt><b>9</b>元</dt>
            <dd>满90可用</dd>
          </dl>
          <div className="state"><span className="wait">领取</span></div>
        </div>
      </div>
    </div>
    <h2 className="h2-box">
      <span className="title-box">今日神券</span>
      <span className="describe-box">仅限今日领取</span>
    </h2>
    <SlideLiveRevealBox id="dailyCouponsSlideLive">
      <div className="swiper-slide today-coupon">
        <div className="main">
          <span className="title">年货节福利</span>
          <dl className="info">
            <dt><b>25</b>元</dt>
            <dd>满199可用</dd>
          </dl>
        </div>
        <div className="but-box">立即领取</div>
      </div>
      <div className="swiper-slide today-coupon">
        <div className="main">
          <span className="title">多多买菜</span>
          <dl className="info">
            <dt><b>15</b>元</dt>
            <dd>最高可得</dd>
          </dl>
        </div>
        <div className="but-box">立即领取</div>
      </div>
      <div className="swiper-slide today-coupon">
        <div className="main">
          <span className="title">专场可用</span>
          <dl className="info">
            <dt><b>4</b>元</dt>
            <dd>满20可用</dd>
          </dl>
        </div>
        <div className="but-box">立即领取</div>
      </div>
      <div className="swiper-slide today-coupon">
        <div className="main">
          <span className="title">优选专场</span>
          <dl className="info">
            <dt><b>5</b>元</dt>
            <dd>无门槛券</dd>
          </dl>
        </div>
        <div className="but-box">立即领取</div>
      </div>
    </SlideLiveRevealBox>
  </div>)
}

export default DailyCoupons;
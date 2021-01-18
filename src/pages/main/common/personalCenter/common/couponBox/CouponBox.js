// 优惠券信息

import React, { Fragment } from 'react';
import "./couponBox.scss";

const CouponBox = (props) => {
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.replace("/coupon-center/");
  }

  return (<div className="coupon-box" onClick={linkGoClick}>
    <span>省钱月卡<em>已省548元</em></span>
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29166"><path d="M780.1326944 545.5165862a33.5165862 33.5165862 0 0 1-23.79677712-9.71980909l-469.23221477-469.23221478a33.5165862 33.5165862 0 0 1 47.59355424-47.59355263l469.23221316 469.23221319a33.5165862 33.5165862 0 0 1 0 47.59355422A33.5165862 33.5165862 0 0 1 780.1326944 545.5165862z" p-id="29167"></path><path d="M310.90047962 1014.74880099a33.5165862 33.5165862 0 0 1-23.79677711-9.71981068 33.5165862 33.5165862 0 0 1 0-47.59355264l469.23221477-469.23221478a33.5165862 33.5165862 0 0 1 47.59355263 47.59355422l-469.23221316 469.23221319A33.5165862 33.5165862 0 0 1 310.90047962 1014.74880099z" p-id="29168"></path></svg>
  </div>)
}

export default CouponBox;
// 充值优惠券

import React, { Fragment, useState, useEffect } from 'react';
import "./rechargeCoupon.scss";

const RechargeCoupon = () => {
  return(<div className="recharge-coupon">
    <dl className="price-info">
      <dt>¥<b>0.1</b></dt>
      <dd>满99可用</dd>
    </dl>
    <dl className="info">
      <dt>充值中心话费券</dt>
      <dd>有效期还有6天</dd>
    </dl>
    <div className="but">立即使用</div>
  </div>)
}

export default RechargeCoupon;
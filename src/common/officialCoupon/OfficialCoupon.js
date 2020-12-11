// 官方活动优惠券

import React from 'react';
import "./officialCoupon.scss";

const OfficialCoupon = (props) => {
  const {price, name, explain, term, state} = props.dataJson;

  return(<div className={ props.className ? "official-coupon " + props.className : "official-coupon" }>
  <span className="price">¥<b>{ price }</b></span>
  <div className="details">
    <b>{ name }</b>
    <i>{ explain }</i>
    <em>{ term }</em>
  </div>
  <span className="state">未获得</span>
  <div className="tag">可叠加</div>
</div>)
}

export default OfficialCoupon;
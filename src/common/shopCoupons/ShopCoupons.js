// 店铺优惠券

import React from 'react';
import "./shopCoupons.scss";

const ShopCoupons = (props) => {
  // const {value, requirement, speed} = props.dataJson;
  // const speedVal = parseInt(speed / requirement * 100);

  return(<div className={ props.className ? "shop-coupons " + props.className : "shop-coupons" }>
    <span className="price">¥<b>2</b></span>
      <div className="details">
        <i>满24元减2元</i>
        <em>2020.9.22-2020.11.30</em>
      </div>
      <span className="state">领取</span>
    <div className="tag">店铺券</div>
  </div>)
}

export default ShopCoupons;
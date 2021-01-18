// 店铺优惠券--有效

import React, { Fragment, useState, useEffect } from 'react';
import "./shopCouponEffective.scss";

import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const ShopCouponEffective = (props) => {
  const [openState, setOpenState] = useState(false); // 信息状态
  
  return (<div className={ props.className ? props.className + " shop-coupon-effective" : "shop-coupon-effective" }>
    <div className="shop-coupon-effective-box">
      <dl className="price-box">
        <dt>¥<em>5</em></dt>
        <dd>无门槛</dd>
      </dl>
      <dl className="coupon-info">
        <dt>
          <img src={ pictureInfoList01 } alt="" />
          <em className="name">阿萨德发刚阿斯顿发生阿萨德发阿萨德发噶啥地方电饭锅单个人56d4g6sd</em>
        </dt>
        <dd>2020.12.1-2020.12.30</dd>
      </dl>
      <dl className="but">
        <dt>立即使用</dt>
        <dd>
          {
            openState ? 
              <svg onClick={() => {setOpenState(false)}} style={{"transform": "rotate(180deg) translateX(50%)"}} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7351"><path d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z" p-id="7352"></path></svg>
              :
              <svg onClick={() => {setOpenState(true)}} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7351"><path d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z" p-id="7352"></path></svg>
          }
        </dd>
      </dl>
    </div>
    {
      openState && <div className="coupon-explain">券的来源：商家处领取获得</div>
    }
  </div>)
}

export default ShopCouponEffective;
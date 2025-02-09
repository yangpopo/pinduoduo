// 店铺优惠券--有效

import React, { useState } from 'react';
import "./officialCouponEffective.scss";

const OfficialCouponEffective = (props) => {
  const [openState, setOpenState] = useState(false); // 信息状态
  return (<div className={ props.className ? props.className + " official-coupon-effective" : "official-coupon-effective" }>
    <div className="official-coupon-effective-box">
      <div className="tag">新获得</div>
      <dl className="price-box">
        <dt>¥<em>5</em></dt>
        <dd>无门槛</dd>
      </dl>
      <dl className="coupon-info">
        <dt>阿萨德发刚阿斯顿发生阿萨德发阿萨德发噶啥地方电饭锅单个人56d4g6sd</dt>
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
      openState && <div className="coupon-explain">使用范围：除虚拟、百亿补贴、珠宝黄金、古董等商品可用<br />券的来源：商家处领取获得</div>
    }
  </div>)
}

export default OfficialCouponEffective;
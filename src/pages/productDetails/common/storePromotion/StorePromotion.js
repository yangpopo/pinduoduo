// 店铺促销

import React, { Fragment, useState, useEffect } from 'react';
import "./storePromotion.scss";
import { Popup, Cell } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框
import ShopRecurrence from "common/shopRecurrence/ShopRecurrence"; // 店铺满减
import ShopCoupons from "common/shopCoupons/ShopCoupons"; // 店铺优惠券

const StorePromotion = (props) => {
  const [storePromotionVisible, setStorePromotionVisible] = useState(false); // 店铺促销

  return (<Fragment>
    <Cell hasArrow className="shop-discount" onClick={() => {setStorePromotionVisible(true)}}>
      <div className="cashback"><b>返现</b><span>店铺内拼满29元返2元</span></div>
      <div className="coupon"><b>领券</b><em>满24元减2元</em><em>满27元减3元</em><em>满147元减7元</em></div>
    </Cell>
    {/* 店铺活动弹窗 */}
    <Popup
      visible={storePromotionVisible}
      onMaskClick={() => {setStorePromotionVisible(false)}}
      destroy={false}
    >
      <PopupBox title="优惠详情" className="store-promotion-popup" closeBut={()=>{setStorePromotionVisible(false)}}>
        <div className="store-promotion-box">
          <div className="title">店铺拼单返现</div>
          <ShopRecurrence dataJson={{value: 1, requirement: 24, speed: 3}} className="shop-recurrence-box" />
          <div className="title">领取优惠券</div>
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
          <ShopCoupons className="shop-coupons-box" />
        </div>
      </PopupBox>
    </Popup>
  </Fragment>)
  
}

export default StorePromotion;
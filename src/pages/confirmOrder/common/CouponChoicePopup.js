// 确认订单

import React, { Fragment, useState, useEffect } from 'react';
import "./couponChoicePopup.scss";
import { Popup, Cell, Radio } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框

const CouponChoicePopup = (props) => {
  const [couponSelect, setCouponSelect] = useState(0);
  return (
    <Popup
      visible={ props.couponChoicePopup }
      onMaskClick={() => { props.couponChoicePopupClose(props.currentGoodsIdIndex.productId, props.currentGoodsIdIndex.index, couponSelect) }}
      destroy={false}
    >
      <PopupBox title="哈哈哈店铺" className="coupon-choice-popup" closeBut={()=>{ props.couponChoicePopupClose(props.currentGoodsIdIndex.productId, props.currentGoodsIdIndex.index, couponSelect) }}>
        <div className="coupon-choice-box">
          <Cell className="coupon-option" title={<dl className="coupon-info"><dt>仅限指定商品使用</dt><dd>有效期&nbsp;2020.11.25-2030.12.30</dd></dl>} icon={<Fragment>¥<b>2</b></Fragment>} description={<Radio checked={couponSelect == 0} onClick={ () => { setCouponSelect(0) } } />} />
          <Cell className="coupon-option" title={<dl className="coupon-info"><dt>暂无优惠</dt></dl>} description={<Radio checked={couponSelect == -1} onClick={ () => { setCouponSelect(-1) } } />} />
        </div>
      </PopupBox>
    </Popup>
  )
}

export default CouponChoicePopup
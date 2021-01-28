// 充值中心

import React from 'react';
import "./voucherCenter.scss";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import ShareIconBlock from "common/shareIconBlock/ShareIconBlock"; // 分享图标按钮
import RollInfo from "./common/rollInfo/RollInfo"; // 滚动信息
import PhoneNumber from "./common/phoneNumber/PhoneNumber"; // 手机号
import AddUpSave from "./common/addUpSave/AddUpSave"; // 累计节省
import RechargeCoupon from "./common/rechargeCoupon/RechargeCoupon"; // 充值优惠券
import RechargeNumber from "./common/rechargeNumber/RechargeNumber"; // 充值数量选择
import MoreRecharge from "./common/moreRecharge/MoreRecharge"; // 更多充值

const VoucherCenter = (props) => {
  return (<div className="voucher-center">
    <NavBar
      mode="light"
      className="voucher-center-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {props.history.goBack();}}
      rightContent={<ShareIconBlock className="icon-but" />}
    >充值中心</NavBar>
    <div className="voucher-center-box">
      <RollInfo />
      <WhiteSpace />
      <PhoneNumber />
      <WhiteSpace />
      <AddUpSave />
      <WhiteSpace />
      <RechargeCoupon />
      <WhiteSpace />
      <RechargeNumber couponJson={{id:0, price: 0.1, condition: 50}} />
      <WhiteSpace />
      <MoreRecharge />
    </div>
  </div>)
}

export default VoucherCenter;
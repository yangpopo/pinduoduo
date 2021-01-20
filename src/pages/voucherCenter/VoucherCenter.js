// 充值中心

import React, { Fragment, useState, useEffect } from 'react';
import "./voucherCenter.scss";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import ShareIconBlock from "common/shareIconBlock/ShareIconBlock"; // 分享图标按钮

const VoucherCenter = (props) => {
  return (<div className="voucher-center">
    <NavBar
      mode="light"
      className="voucher-center-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {props.history.goBack();}}
      rightContent={<ShareIconBlock className="icon-but" />}
    >充值中心</NavBar>

    
  </div>)
}

export default VoucherCenter;
// 历史浏览

import React, { Fragment, useState, useEffect } from 'react';
import "./historyBrowsing.scss";
import { NavBar, Icon  } from 'antd-mobile';
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import CommodityUnit from "./common/commodityUnit/CommodityUnit"; // 商品单元
import BatchBlock from "./common/batchBlock/BatchBlock"; // 批量处理

const HistoryBrowsing = (props) => {
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

  const [adminStatus, setAdminStatus] = useState(false); // 管理状态

  // 上拉加载-下拉刷新---加载数据
  const getAjaxData = (page, obj) => {
    if (page === undefined) {
      obj.resetUpScroll();
    } else {
      setTimeout(() => {
        obj.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000);
    }
  }

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });


  return(<div className="history-browsing">
    <NavBar
      mode="light"
      className="history-browsing-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
      rightContent={<div className="right-but" onClick={() => {setAdminStatus((val) => {return !val})}}>{adminStatus ? "完成" : "管理"}</div>}
    >历史浏览</NavBar>
    <UpDownLoad id="history-browsing-mescroll" className="history-browsing-mescroll" getAjaxData={getAjaxData}>
        <div className="time-box">今天</div>
        <CommodityUnit checState={adminStatus} />
        <CommodityUnit checState={adminStatus} />
        <CommodityUnit checState={adminStatus} />
        <div className="time-box">12月22日</div>
        <CommodityUnit checState={adminStatus} />
        <CommodityUnit checState={adminStatus} />
        <div className="time-box">12月21日</div>
        <CommodityUnit checState={adminStatus} />
        <BatchBlock openState={adminStatus} />
    </UpDownLoad>
  </div>)
}

export default HistoryBrowsing;
// 商品收藏

import React, { Fragment, useState, useEffect } from 'react';
import "./commodityCollection.scss";
import { NavBar ,Icon } from 'antd-mobile';
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import CollectionShopUnit from "./common/collectionShopUnit/CollectionShopUnit"; // 收藏店铺单元
import SearchBlock from "./common/searchBlock/SearchBlock"; // 结算模块
import TotalBlock from "./common/totalBlock/TotalBlock"; // 结算模块
import BatchBlock from "./common/batchBlock/BatchBlock"; // 管理模块

const CommodityCollection = (props) => {
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

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

  const [totalOrAdmin, setTotalOrAdmin] = useState(true);

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });

  return(<div className="commodity-collection">
    <NavBar
      mode="light"
      className="collection-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
      rightContent={<Fragment>
        { totalOrAdmin && <SearchBlock className="admin-but" />}
        <div className="admin-but" onClick={() => {setTotalOrAdmin((val) => {return !val})}}>{totalOrAdmin ? "管理":"完成"}</div>
      </Fragment>}
    >商品收藏</NavBar>
    <UpDownLoad id="commodity-collection-mescroll" className="commodity-collection-mescroll" getAjaxData={getAjaxData}>
        <CollectionShopUnit />
        <CollectionShopUnit />
    </UpDownLoad>
    {
      totalOrAdmin ? <TotalBlock /> : <BatchBlock />
    }
  </div>)
}

export default CommodityCollection;
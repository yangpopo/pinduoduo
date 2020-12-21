// 商品收藏

import React, { Fragment, useState, useEffect } from 'react';
import "./commodityCollection.scss";
import { NavBar, Icon } from "zarm";
import { useHistory } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import CollectionShopUnit from "./common/collectionShopUnit/CollectionShopUnit"; // 收藏店铺单元
import SearchBlock from "./common/searchBlock/SearchBlock"; // 结算模块
import TotalBlock from "./common/totalBlock/TotalBlock"; // 结算模块
import BatchBlock from "./common/batchBlock/BatchBlock"; // 管理模块

const CommodityCollection = (props) => {
  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = () => {
    history.go(-1);
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

  return(<div className="commodity-collection">
    <NavBar
      className="collection-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="商品收藏"
      right={<Fragment>
        { totalOrAdmin && <SearchBlock />}
        <div onClick={() => {setTotalOrAdmin((val) => {return !val})}}>{totalOrAdmin ? "管理":"完成"}</div>
      </Fragment>}
    />
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
// 店铺关注

import React, { Fragment, useState, useEffect } from 'react';
import "./shopFollow.scss";
import { NavBar, Icon } from "zarm";
import { Link, useHistory } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载

const ShopFollow = () => {
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

  return(<div class="shop-follow">
    <NavBar
      className="shop-follow-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="店铺关注"
    />
    <UpDownLoad id="shop-follow-mescroll" className="shop-follow-mescroll" getAjaxData={getAjaxData}>
      {/* 我的关注 */}
      <div class="follow-box">
        <div className="title-box">
          <b className="title">我的关注</b>
          <Link to="/">查看全部</Link>
        </div>
      </div>
    </UpDownLoad>
  </div>)
}

export default ShopFollow;
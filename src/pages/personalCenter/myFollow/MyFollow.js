// 店铺关注-我的关注

import React, { Fragment, useState, useEffect } from 'react';
import "./myFollow.scss";
import { NavBar, Icon } from "zarm";
import { useHistory } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import ShopUnit from "./common/shopUnit/ShopUnit"; // 店铺关注-店铺
import ShopInfoUnit from "./common/shopInfoUnit/ShopInfoUnit"; // 店铺关注-店铺

const MyFollow = () => {
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

  const [screenState, setScreenState] = useState(false);

  return(<div className="my-follow">
    <NavBar
      className="my-follow-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="我的关注"
    />
    <UpDownLoad id="my-follow-mescroll" className="my-follow-mescroll" getAjaxData={getAjaxData}>

      {/* 最近常逛 */}
      <div class="follow-box">
        <div className="title-box">
          <b className="title">最近常逛</b>
        </div>
        <div className="shop-content-box">
          <ShopUnit />
          <ShopUnit />
          <ShopUnit />
        </div>
      </div>

      {/* 全部关注 */}
      <div class="follow-box">
        <div className="title-box">
          <b className="title">全部关注</b>
          <div className="screen-but" onClick={ () => {setScreenState((val) =>!val)} }><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12483"><path d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327zM890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058zM890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" p-id="12484"></path></svg>筛选</div>
        </div>
        {
          screenState && <div className="screen-box">
            <ul className="menu-box">
              <li className="select"><b className="check-mark"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13098"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z" fill="" p-id="13099"></path></svg></b>全部关注(2)</li>
              <li><b className="check-mark"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13098"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z" fill="" p-id="13099"></path></svg></b>百货(1)</li>
              <li><b className="check-mark"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13098"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z" fill="" p-id="13099"></path></svg></b>运动(1)</li>
            </ul>
          </div>
        }
        <Fragment>
          <ShopInfoUnit />
          <ShopInfoUnit />
        </Fragment>
      </div>
    </UpDownLoad>
  </div>)
}

export default MyFollow;
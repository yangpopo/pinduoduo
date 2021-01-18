// 订单搜索

import React, { Fragment, useState, useEffect } from 'react';
import "./orderSearch.scss";
import OrderList from "common/orderList/OrderList"; // 订单列表

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import userPortrait from "assets/img/picture/user-portrait.png"; // 头像
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const OrderSearch = (props) => {
  const [orderSearchState, setOrderSearchState] = useState(false);
  const inputRef = React.createRef(); // 搜索框焦点
  const searchData = [{
    shopName: "阿萨德发为",
    shopNameHeadPortrait: headPortrait,
    shopId: 0,
    orderId: 0,
    goodsId: 0,
    goodsState: 0,
    goodsName: "电饭锅桥儿头曲儿才VG电饭锅森岛帆高阿萨德发阿萨德发阿萨德发",
    goodsCover: pictureInfoList01,
    goodsDispose: ["农家紫薯", "[五斤]", "实惠装"],
    features: ["坏了保赔"],
    price: 54.15,
    coupon: [2.5, 2],
    group: [headPortrait, userPortrait],
    number: 1,
    expressInfo: {
      name:"极兔快递",
      info:"包裹已经签收!签收人是[代签收],如有疑问请联系快递员:哈哈哈,电话635454655"
    }
  }, {
    shopName: "风格和风格",
    shopNameHeadPortrait: userPortrait,
    shopId: 1,
    orderId: 1,
    goodsId: 1,
    goodsState: 0,
    goodsName: "高合金钢和对方公司的问题东方广场电饭锅单电饭锅",
    goodsCover: pictureInfoList02,
    goodsDispose: ["农家紫薯", "[五斤]", "实惠装"],
    features: ["坏了保赔"],
    price: 84.15,
    coupon: [],
    group: [headPortrait, userPortrait],
    number: 2,
    expressInfo: {
      name:"极兔快递",
      info:"包裹已经签收!签收人是[代签收],如有疑问请联系快递员:哈哈哈,电话635454655"
    }
  }];


  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus(); // 输入框活动焦点
    }
  })
  return (<Fragment>
    {
      !orderSearchState ? 
      <i onClick={ () => { setOrderSearchState((val) => { return !val }) } } className="order-search-icon">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15020"><path d="M885 905.5L731.5 707.9c7.9-6.7 15.7-13.7 23-21.2 33.6-33.6 60-72.7 78.5-116.4 19.1-45.1 28.8-93.1 28.8-142.5s-9.7-97.4-28.8-142.5c-18.5-43.6-44.9-82.8-78.5-116.4-33.6-33.6-72.7-60-116.4-78.5C593 71.3 545 61.6 495.6 61.6s-97.4 9.7-142.5 28.8c-43.6 18.5-82.8 44.9-116.4 78.5s-60 72.7-78.5 116.4c-19.1 45.1-28.8 93.1-28.8 142.5s9.7 97.4 28.8 142.5c18.5 43.6 44.9 82.8 78.5 116.4s72.7 60 116.4 78.5c45.1 19.1 93.1 28.8 142.5 28.8s97.4-9.7 142.5-28.8c13-5.5 25.6-11.7 37.8-18.6L831.5 947c11.4 14.7 32.3 17.7 46.4 6.6l1.8-1.3c14.4-11.2 16.6-32.1 5.3-46.8zM495.7 732C328 732 191.6 595.5 191.6 427.7S328 123.6 495.7 123.6 799.8 260 799.8 427.7c0 167.9-136.4 304.3-304.1 304.3z" p-id="15021"></path></svg>
      </i>
      :
      <div className="order-search">
        <div className="search-box">
          <div className="return-but" onClick={ () => { setOrderSearchState((val) => { return !val }) } }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5827"><path d="M290.89 483.13c8.41-0.05 16.49 3.25 22.47 9.18L756.31 935.26c12.41 12.41 12.41 32.52 0 44.93-12.41 12.4-32.52 12.4-44.93 0l-442.96-442.96a31.64 31.64 0 0 1-9.36-22.46c0-8.44 3.38-16.53 9.36-22.46a31.636 31.636 0 0 1 22.47-9.18z m0 0" p-id="5828"></path><path d="M733.85000001 40.18c8.41-0.05 16.49 3.25 22.45999999 9.17a31.657 31.657 0 0 1 9.35999999 22.46c0 8.44-3.37 16.53-9.35999999 22.46L313.36 537.24c-12.41 12.4-32.52 12.4-44.93 0-12.41-12.4-12.41-32.52 0-44.93l442.96-442.96000001a31.594 31.594 0 0 1 22.46000001-9.16999999z m0 0" p-id="5829"></path></svg></div>
          <div className="search-input-box">
            <svg className="icon-search" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15873" data-spm-anchor-id="a313x.7781069.1998910419.i7"><path d="M463 67c214.286 0 388 173.714 388 388 0 96.938-35.55 185.572-94.322 253.579a40.375 40.375 0 0 1 3.896 3.426L938.057 889.49c15.621 15.62 15.621 40.947 0 56.568-15.62 15.621-40.947 15.621-56.568 0L704.005 768.574a40.218 40.218 0 0 1-4.781-5.762l0.009 0.008C633.807 813.105 551.895 843 463 843 248.714 843 75 669.286 75 455S248.714 67 463 67z m0 64c-178.94 0-324 145.06-324 324s145.06 324 324 324 324-145.06 324-324-145.06-324-324-324z" p-id="15874"></path></svg>
            <input ref={ inputRef } className="input-box" type="text" placeholder="输入商品名称或订单号"  />
          </div>
          <div className="search-but">搜索</div>
        </div>
        <div className="order-list-box">
          <OrderList dataJson={searchData} />
        </div>
      </div>
    }
  </Fragment>)
}

export default OrderSearch;
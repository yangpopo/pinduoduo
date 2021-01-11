// 订单列表

import React, { Fragment, useState, useEffect } from 'react';
import "./orderList.scss";
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";


const OrderList = (props) => {
  const moreMenuDom = React.createRef();
  // 更多菜单获取焦点
  const getFocusMore = (event) => {
    event.persist();
    try {
      event.target.children[0].style.display = "block";
    } catch(e) {
    }
  }

  // 更多菜单失去焦点
  const getBlurMore = (event) => {
    event.persist();
    setTimeout(() => {
      try {
        event.target.children[0].style.display = "none";
      } catch(e) {
      }
    }, 100)
  }

  let history = useHistory();
  // 点击跳转跳转
  const linkGoGoodsClick = (orderId) => {
    history.push("/order-details/" + orderId);
  }

  // 价格转化
  const priceConversion = (val) => {
    let promotionValue = 0;
    for (let i = 0; i < val.coupon.length; i++) {
      promotionValue += val.coupon[i];
    }
    return val.price - promotionValue;
  }

  useState(() => {
  })
  return (<div className="order-list">
    {
      props.dataJson.length == 0 ?
      <div className={ props.className === "" ? "data-none" : props.className + " data-none"}>
        <svg className="icon-order" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16227"><path d="M762.30656 355.66592 384.67072 355.66592c-9.472 0-17.16736 8.4224-17.16736 18.7904 0 10.37312 7.69024 18.7904 17.16736 18.7904l377.63072 0c9.47712 0 17.16736-8.41728 17.16736-18.7904C779.4688 364.0832 771.77856 355.66592 762.30656 355.66592L762.30656 355.66592zM254.7712 374.45632c0 10.37312 6.72256 18.7904 15.03232 18.7904l45.09696 0c8.30464 0 15.03232-8.41728 15.03232-18.7904 0-10.368-6.72768-18.7904-15.03232-18.7904l-45.09696 0C261.49888 355.66592 254.7712 364.0832 254.7712 374.45632L254.7712 374.45632zM762.30656 562.35008 384.67072 562.35008c-9.472 0-17.16736 8.4224-17.16736 18.79552 0 10.368 7.69024 18.78528 17.16736 18.78528l377.63072 0c9.47712 0 17.16736-8.41728 17.16736-18.78528C779.4688 570.77248 771.77856 562.35008 762.30656 562.35008L762.30656 562.35008zM314.90048 562.35008l-45.09696 0c-8.30464 0-15.03232 8.4224-15.03232 18.79552 0 10.368 6.72256 18.78528 15.03232 18.78528l45.09696 0c8.30464 0 15.03232-8.41728 15.03232-18.78528C329.9328 570.77248 323.20512 562.35008 314.90048 562.35008L314.90048 562.35008zM762.30656 769.03936 384.67072 769.03936c-9.472 0-17.16736 8.4224-17.16736 18.78528 0 10.37312 7.69024 18.79552 17.16736 18.79552l377.63072 0c9.47712 0 17.16736-8.4224 17.16736-18.79552C779.4688 777.45664 771.77856 769.03936 762.30656 769.03936L762.30656 769.03936zM314.90048 769.03936l-45.09696 0c-8.30464 0-15.03232 8.4224-15.03232 18.78528 0 10.37312 6.72256 18.79552 15.03232 18.79552l45.09696 0c8.30464 0 15.03232-8.4224 15.03232-18.79552C329.9328 777.45664 323.20512 769.03936 314.90048 769.03936L314.90048 769.03936zM385.59232 224.13824l263.05024 0c20.72064 0 37.5808-16.85504 37.5808-37.5808L686.22336 92.61056c0-20.72064-16.86016-37.57568-37.5808-37.57568L385.59232 55.03488c-20.72576 0-37.5808 16.85504-37.5808 37.57568l0 93.94688C348.01152 207.2832 364.86656 224.13824 385.59232 224.13824L385.59232 224.13824zM385.59232 92.61056l263.05024 0 0.0256 93.94688L385.59232 186.55744 385.59232 92.61056 385.59232 92.61056zM874.12224 55.03488l-150.30784 0 0 37.57568 150.30784 0c31.08352 0 56.3712 25.28256 56.3712 56.3712l0 751.58528c0 31.08352-25.28256 56.36608-56.3712 56.36608L160.11264 956.93312c-31.08352 0-56.36608-25.28256-56.36608-56.36608L103.74656 148.98176c0-31.08352 25.28256-56.3712 56.36608-56.3712l150.31808 0 0-37.57568L160.11264 55.03488c-51.79904 0-93.94688 42.14784-93.94688 93.94688l0 751.58528c0 51.79904 42.14784 93.952 93.94688 93.952l714.00448 0c51.80416 0 93.952-42.14784 93.952-93.952L968.06912 148.98176C968.06912 97.1776 925.9264 55.03488 874.12224 55.03488L874.12224 55.03488z" p-id="16228"></path></svg>
        <p>没有相关订单</p>
      </div>
      :
      props.dataJson.map((item, index) => {
        return (<div className={ props.className === "" ? "order-unit" : props.className + " order-unit"} key={item.orderId}>
          <div className="product-info" >
            <div className="head-box">
              <Link to={ "/shop/" + item.shopId } className="head"><img src={ item.shopNameHeadPortrait } alt="" />{ item.shopName }<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16714"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" p-id="16715"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" p-id="16716"></path></svg></Link>
            <span className="state">
              { item.goodsState == 0 && "待发货" }
              { item.goodsState == 1 && "待收货" }
              { item.goodsState == 2 && "待评价" }
              { item.goodsState == 3 && "已评价" }
              { item.goodsState == 4 && "交易成功" }
              { item.goodsState == 5 && "未发货,退款成功" }
              { item.goodsState == 6 && "已发货,退款成功" }
              { item.goodsState == 7 && "交易已取消" }
            </span>
            </div>
            <div className="product-box" onClick={ () => {linkGoGoodsClick(item.orderId)} }>
              <img className="product-head" src={ item.goodsCover } alt="" />
              <ul className="info-box">
                <li className="name">{ item.goodsName }</li>
                <li className="parameter">
                  {
                    item.goodsDispose.map((itemDispose, index) => {
                      return itemDispose + " "
                    })
                  }
                </li>
                <li className="label">
                  {
                    item.features.map((itemFeatures, index) => {
                      return <span key={itemFeatures}>{ itemFeatures }</span>
                    })
                  }
                  </li>
              </ul>
              <dl className="price">
                <dt>¥{ item.price }</dt>
                <dd>x{ item.number }</dd>
              </dl>
            </div>
          </div>
          <div className="pay-info">
            <div className="compose">
              {
                item.group.map((itemGroup, index) => {
                  return <img src={itemGroup} key={index} alt="" />
                })
              }
            </div>
            <div className="price">
              {
                item.coupon.length != 0 &&
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17360"><path d="M900.3614815999999 584.8177781333334c-48.54518506666667-24.272593066666666-63.10874026666667-43.690666666666665-63.108741333333334-82.52681493333333 0-36.40888853333333 14.5635552-55.8269632 63.108741333333334-82.52681493333333 26.699851733333333-16.990814933333333 29.127111466666666-31.554370133333336 29.127111466666666-55.8269632v-138.35377813333335c0-43.690666666666665-36.40888853333333-80.0995552-80.09955626666667-80.0995552H160.04740693333332c-43.690666666666665 0-80.0995552 36.40888853333333-80.0995552 80.0995552v138.35377813333335c0 21.845333333333333 2.427259733333333 41.26340693333333 29.127111466666666 55.8269632 19.4180736 9.7090368 63.10874026666667 33.981629866666665 63.10874026666667 82.52681493333333 0 53.399703466666665-31.554370133333336 70.3905184-60.6814816 80.0995552h-2.427258666666667c-26.699851733333333 16.990814933333333-29.127111466666666 43.690666666666665-29.127111466666666 55.8269632v138.35377813333335c0 43.690666666666665 36.40888853333333 80.0995552 80.0995552 80.0995552h689.3416298666667c43.690666666666665 0 80.0995552-36.40888853333333 80.09955626666667-80.0995552v-138.35377813333335c0-26.699851733333333-9.7090368-36.40888853333333-29.127111466666666-53.399703466666665z m-266.9985184-48.54518506666667c14.5635552 0 26.699851733333333 12.136296533333333 26.699851733333333 26.699851733333333s-12.136296533333333 26.699851733333333-26.699851733333333 26.699851733333333h-101.9448896v101.94488853333334c0 14.5635552-12.136296533333333 26.699851733333333-26.699851733333333 26.699851733333333s-26.699851733333333-12.136296533333333-26.699851733333333-26.699851733333333v-101.94488853333334h-101.94488853333334c-14.5635552 0-26.699851733333333-12.136296533333333-26.699851733333333-26.699851733333333s12.136296533333333-26.699851733333333 26.699851733333333-26.699851733333333h101.94488853333334v-63.108741333333334h-109.22666666666667c-14.5635552 0-26.699851733333333-12.136296533333333-26.699851733333333-26.699851733333333s12.136296533333333-26.699851733333333 26.699851733333333-26.699851733333333h80.09955626666667l-84.95407466666667-84.95407466666667c-9.7090368-9.7090368-9.7090368-26.699851733333333 0-36.40888853333333 9.7090368-9.7090368 26.699851733333333-9.7090368 36.40888853333333 0l104.37214826666667 104.37214826666667 104.37214826666667-104.37214826666667c9.7090368-9.7090368 26.699851733333333-9.7090368 36.408889599999995 0 9.7090368 9.7090368 9.7090368 26.699851733333333 0 36.40888853333333l-84.95407466666667 84.95407466666667h77.67229653333334c14.5635552 0 26.699851733333333 12.136296533333333 26.699851733333333 26.699851733333333s-12.136296533333333 26.699851733333333-26.699851733333333 26.699851733333333h-109.22666666666667v63.108741333333334h104.37214826666667z" fill="" p-id="17361"></path></svg>
              }
              实付:<em>¥{ priceConversion(item) }</em>(免运费)
              </div>
          </div>
          <div className="operate-info">
            <div className="operate-box">
              <button onFocus={ (e) => { getFocusMore(e) } } onBlur={ (e) => { getBlurMore(e) } } className="more-but">更多
                <ul ref={ moreMenuDom } className="menu-box">
                  <li><Link to="/">再次购买</Link></li>
                  <li><Link to="/">延长收货</Link></li>
                </ul>
              </button>
              <Link className="link-but" to="/apply-select-after-sales/1">申请退款</Link>
              <Link className="link-but" to="/logistics-information/0">查看物流</Link>
              <div className="confirm-but">确认收货</div>
            </div>
            <div className="info-box">
              <Link to="/logistics-information/0" className="box">
                <svg className="icon-express" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19143"><path d="M96.50176 519.31136c0.14336-4.34176 1.45408-8.6016 3.8912-12.24704l131.21536-196.89472c4.32128-6.41024 11.63264-10.30144 19.39456-10.30144H428.35968c12.86144 0 23.28576 10.4448 23.28576 23.30624v379.61728c0 12.84096-10.4448 23.28576-23.32672 23.28576h-47.69792a106.53696 106.53696 0 0 1-213.13536 0h-47.7184a23.3472 23.3472 0 0 1-23.30624-23.30624V519.9872l0.04096-0.67584z m248.56576-6.3488v-142.09024H255.1808l-94.74048 142.09024h184.60672zM274.0224 779.30496a53.32992 53.32992 0 0 0 53.28896-53.248 53.3504 53.3504 0 0 0-53.28896-53.28896 53.3504 53.3504 0 0 0-53.248 53.26848 53.32992 53.32992 0 0 0 53.248 53.26848z m244.03968-550.5024h399.85152c17.08032 0 30.9248 13.84448 30.9248 30.9248V695.0912a30.9248 30.9248 0 0 1-30.9248 30.94528H842.3424a106.53696 106.53696 0 0 1-106.55744 106.53696 106.53696 106.53696 0 0 1-106.55744-106.53696h-111.12448a30.9248 30.9248 0 0 1-30.9248-30.9248v-435.4048c0-17.05984 13.824-30.9248 30.9248-30.9248z m217.7024 550.5024a53.32992 53.32992 0 0 0 53.248-53.248 53.3504 53.3504 0 0 0-53.248-53.28896 53.37088 53.37088 0 0 0-53.30944 53.26848 53.32992 53.32992 0 0 0 53.28896 53.26848z" p-id="19144"></path></svg>
                { item.expressInfo.name }
                { item.expressInfo.info }
              </Link>
            </div>
          </div>
        </div>)
      })
    }
  </div>)
}


OrderList.propTypes = {
  dataJson: PropTypes.array,
  className: PropTypes.string
}

OrderList.defaultProps = {
  dataJson: [],
  className: ""
};
export default OrderList;
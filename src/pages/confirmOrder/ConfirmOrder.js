// 确认订单

import React, { Fragment, useState, useEffect } from 'react';
import "./confirmOrder.scss";
import { WhiteSpace } from 'antd-mobile';
import { NavBar, Icon, Cell, Stepper } from 'zarm';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux"; // 链接全局状态

// 下拉刷新
import "assets/css/mescroll.min.css";
import MeScroll from "assets/js/mescroll.min.js";

import CouponChoicePopup from "./common/CouponChoicePopup"; // 优惠券弹窗

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";

const ConfirmOrder = (props) => {
  const [numberValue, setNumberValue] = useState(0); // 数量值
  // 商品信息
  const [commodityInfo, setCommodityInfo] = useState([
    {
      shopImgUrl: headPortrait,
      shopName: "哈哈哈",
      productId: 0,
      productImgUrl: pictureInfoList01,
      productName: "阿萨德发是否收到发顺丰问啊是的发送撒旦法",
      productTypeName: "重量",
      productTypeInfo: ["红袖", "带箱9-10斤", "特惠小果"],
      productPrice: 45.5,
      productUnit: "件",
      advantage: ["坏果保赔"],
      number: 1,
      numberMin: 1,
      numberMax: 10,
      coupon:[{
        price: 2,
        explain: "仅限指定商品使用",
        startTime: "2020.11.25",
        endTime: "2050.12.31",
        id:0
      }],
      couponSelect: 0
    },{
      shopImgUrl: headPortrait,
      shopName: "哈哈哈",
      productId: 1,
      productImgUrl: pictureInfoList02,
      productName: "123电饭锅去打个样4 啥对方公司的 ",
      productTypeName: "重量",
      productTypeInfo: ["红袖", "带箱9-10斤", "特惠小果"],
      productPrice: 23.5,
      productUnit: "件",
      advantage: ["坏果保赔"],
      number: 1,
      numberMin: 1,
      numberMax: 15,
      coupon:[],
      couponSelect: 0
  }]);

  // 修改数量
  const modifiedQuantity = (val, index) => {
    let dataJson = JSON.parse(JSON.stringify(commodityInfo));
    dataJson[index].number = 1;
    setCommodityInfo(dataJson)
  }

  // 支付方式数据
  const [paymentData, setPaymentData] = useState([
    {
      icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3710"><path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#00C800" p-id="3711"></path><path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#00C800" p-id="3712"></path></svg>,
      name: "微信支付",
      explain: "推荐",
      id: 0,
    }, {
      icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4728"><path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z" fill="#02A9F1" p-id="4729"></path></svg>,
      name: "支付宝",
      explain: "可安全免密支付",
      id: 1,
    }, {
      icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5539"><path d="M882.607224 620.289332c-32.233122-46.50108-75.778894-81.46643-126.399805-101.611236 22.323425-15.70468 41.104163-36.645618 54.679343-61.067844 15.711843-28.26781 24.01802-60.572564 24.01802-93.420693 0-102.397135-79.284741-185.704492-176.739307-185.704492-13.83817 0-25.097608 11.258415-25.097608 25.097608 0 13.855566 11.259438 25.128307 25.097608 25.128307 69.742411 0 126.482693 60.775178 126.482693 135.478578 0 74.719772-56.739259 135.50723-126.482693 135.50723-13.83817 0-25.097608 11.265578-25.097608 25.112957l0 0.1361c0 13.855566 11.259438 25.128307 25.097608 25.128307 125.46348 0 227.536226 108.816335 227.536226 242.568594 0 13.872962 11.285021 25.159006 25.157983 25.159006 13.83817 0 25.097608-11.286044 25.097608-25.159006C935.958316 730.243583 917.509129 670.644183 882.607224 620.289332zM623.157147 577.673745c-26.348088-18.662035-55.000662-33.399691-85.316108-43.895743 64.020082-38.906102 103.316064-108.150162 103.316064-183.412286 0-118.333082-96.263437-214.604706-214.588333-214.604706-118.358665 0-214.649731 96.271624-214.649731 214.604706 0 40.289612 11.282974 79.585593 32.630165 113.642247 18.054191 28.803 42.605354 52.879348 71.567989 70.318532-30.826076 10.523681-59.94937 25.424042-86.697571 44.369533-29.125341 20.629853-54.761208 45.569872-76.194356 74.126254-44.566008 59.375296-68.122517 130.018216-68.122517 204.28978 0 13.83817 11.258415 25.097608 25.097608 25.097608 13.855566 0 25.128307-11.259438 25.128307-25.097608 0-77.456093 30.202882-150.434198 85.043908-205.489094 54.711066-54.924937 127.125329-85.206614 203.921389-85.283362 2.535753 0.225127 5.117554 0.047072 7.631818-0.515746l1.991354-0.446162c74.719772 1.51347 144.95337 31.659047 198.329021 85.261872 54.815443 55.04978 85.003999 128.013559 85.003999 205.448162 0 13.83817 11.272741 25.097608 25.128307 25.097608 13.83817 0 25.097608-11.259438 25.097608-25.097608 0-74.271564-23.556509-144.913461-68.121494-204.28978C677.918355 623.243617 652.282488 598.303598 623.157147 577.673745zM426.56877 186.002274c90.629113 0 164.362418 73.733305 164.362418 164.363442 0 90.638323-73.733305 164.378791-164.362418 164.378791-90.647533 0-164.393117-73.740468-164.393117-164.378791C262.17463 259.735579 335.921237 186.002274 426.56877 186.002274z" p-id="5540" fill="#d3333f"></path></svg>,
      name: "找微信好友支付",
      explain: "",
      id: 3,
    }, {
      icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6162"><path d="M511.037 986.94c-85.502 0-163.986-26.686-214.517-66.544-25.66 7.149-58.486 18.655-79.202 32.921-17.725 12.202-15.516 24.647-12.32 29.67 14.027 22.069 240.622 14.092 306.04 7.219v-3.265z" fill="#FAAD08" p-id="6163"></path><path d="M495.627 986.94c85.501 0 163.986-26.686 214.518-66.544 25.66 7.149 58.485 18.655 79.203 32.921 17.724 12.202 15.512 24.647 12.32 29.67-14.027 22.069-240.623 14.092-306.042 7.219v-3.265z" fill="#FAAD08" p-id="6164"></path><path d="M496.137 472.026c140.73-0.935 253.514-27.502 291.73-37.696 9.11-2.432 13.984-6.789 13.984-6.789 0.032-1.25 0.578-22.348 0.578-33.232 0-183.287-88.695-367.458-306.812-367.47C277.5 26.851 188.8 211.021 188.8 394.31c0 10.884 0.55 31.982 0.583 33.232 0 0 3.965 4.076 11.231 6.048 35.283 9.579 150.19 37.482 294.485 38.437h1.037zM883.501 626.967c-8.66-27.825-20.484-60.273-32.455-91.434 0 0-6.886-0.848-10.366 0.158-107.424 31.152-237.624 51.006-336.845 49.808h-1.026c-98.664 1.186-227.982-18.44-335.044-49.288-4.09-1.176-12.168-0.677-12.168-0.677-11.97 31.16-23.793 63.608-32.453 91.433-41.3 132.679-27.92 187.587-17.731 188.818 21.862 2.638 85.099-99.88 85.099-99.88 0 104.17 94.212 264.125 309.947 265.596a765.877 765.877 0 0 1 5.725 0c215.738-1.471 309.947-161.424 309.947-265.595 0 0 63.236 102.519 85.102 99.88 10.186-1.231 23.566-56.14-17.732-188.819" p-id="6165"></path><path d="M429.208 303.911c-29.76 1.323-55.195-32.113-56.79-74.62-1.618-42.535 21.183-78.087 50.95-79.417 29.732-1.305 55.149 32.116 56.765 74.64 1.629 42.535-21.177 78.08-50.925 79.397m220.448-74.62c-1.593 42.507-27.03 75.941-56.79 74.62-29.746-1.32-52.553-36.862-50.924-79.397 1.614-42.526 27.03-75.948 56.764-74.639 29.77 1.33 52.57 36.881 50.951 79.417" fill="#FFFFFF" p-id="6166"></path><path d="M695.405 359.069c-7.81-18.783-86.466-39.709-183.843-39.709h-1.045c-97.376 0-176.033 20.926-183.842 39.709a6.66 6.66 0 0 0-0.57 2.672c0 1.353 0.418 2.575 1.072 3.612 6.58 10.416 93.924 61.885 183.341 61.885h1.045c89.416 0 176.758-51.466 183.34-61.883a6.775 6.775 0 0 0 1.069-3.622 6.66 6.66 0 0 0-0.567-2.664" fill="#FAAD08" p-id="6167"></path><path d="M464.674 239.335c1.344 16.946-7.87 32-20.55 33.645-12.701 1.647-24.074-10.755-25.426-27.71-1.326-16.954 7.873-32.008 20.534-33.64 12.722-1.652 24.114 10.76 25.442 27.705m77.97 8.464c2.702-4.392 21.149-27.488 59.328-19.078 10.028 2.208 14.667 5.457 15.646 6.737 1.445 1.888 1.84 4.576 0.375 8.196-2.903 7.174-8.894 6.979-12.217 5.575-2.144-0.907-28.736-16.948-53.232 6.99-1.685 1.648-4.7 2.212-7.558 0.258-2.856-1.956-4.038-5.923-2.342-8.678" p-id="6168"></path><path d="M503.821 589.328h-1.031c-67.806 0.802-150.022-8.004-229.638-23.381-6.817 38.68-10.934 87.294-7.399 145.275 8.928 146.543 97.728 238.652 234.793 239.996h5.57c137.065-1.344 225.865-93.453 234.796-239.996 3.535-57.986-0.584-106.6-7.403-145.283-79.631 15.385-161.861 24.196-229.688 23.389" fill="#FFFFFF" p-id="6169"></path><path d="M310.693 581.35v146.633s69.287 13.552 138.7 4.17V596.897c-43.974-2.413-91.4-7.79-138.7-15.546" fill="#EB1C26" p-id="6170"></path><path d="M806.504 427.238s-130.112 43.08-302.66 44.309h-1.025c-172.264-1.224-302.217-44.161-302.66-44.309L156.58 541.321c108.998 34.464 244.093 56.677 346.238 55.387l1.024-0.002c102.152 1.297 237.226-20.917 346.24-55.385l-43.579-114.083z" fill="#EB1C26" p-id="6171"></path></svg>,
      name: "QQ钱包",
      explain: "",
      id: 4,
    }, {
      icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292"><path d="M81.6 385.6c-12 36.8-15.2 76.8-15.2 116.8 0 251.2 199.2 454.4 445.6 454.4 245.6 0 445.6-203.2 445.6-454.4 0-183.2-106.4-341.6-260-413.6-56.8-26.4-108.8-32.8-120-3.2-10.4 30.4 30.4 59.2 60 72.8 29.6 13.6 110.4 52 106.4 128-3.2 76-121.6 84.8-192 55.2-69.6-28.8-171.2-72-195.2-52s-28 70.4 28 104c56.8 33.6 180.8 101.6 198.4 187.2 17.6 85.6 4.8 256.8-241.6 184C284.8 748 224 658.4 206.4 619.2c-50.4-112.8 9.6-226.4 32-260 32-48.8 32-96.8-24.8-117.6-54.4-20-98.4 39.2-132 144z" fill="#30B4FF" p-id="6293"></path><path d="M576.8 167.2c40.8 16 62.4 54.4 48 85.6-14.4 31.2-59.2 44-100 28s-62.4-54.4-48-85.6c14.4-31.2 59.2-44 100-28z" fill="#30B4FF" p-id="6294"></path></svg>,
      name: "花呗",
      explain: "",
      id: 5,
    }
  ])

  // 支付方式选中
  const [paymentSelectId, setPaymentSelectId] = useState(0);
  const paymentSelect = (id) => {
    setPaymentSelectId(id);
  }

  // 更多支付方式展开
  const [moreState, setMoreState] = useState(false);
  const paymentMoreState = () => {
    return paymentData.map((item, index) => {
      if (index < 3) {
        return (<Cell className="payment-box" onClick={ () => {paymentSelect(item.id)}} key={ item.id } icon={ item.icon } title={<Fragment><b>{ item.name }</b>{ item.explain !== "" && `(${ item.explain })` }</Fragment>} description={ paymentSelectId == item.id && <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3922"><path d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="3923"></path></svg>} />)
      } else if (moreState) {
        return (<Cell className="payment-box" onClick={ () => {paymentSelect(item.id)}} key={ item.id } icon={ item.icon } title={<Fragment><b>{ item.name }</b>{ item.explain !== "" && `(${ item.explain })` }</Fragment>} description={ paymentSelectId == item.id && <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3922"><path d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="3923"></path></svg>} />)
      }
    })
  }

  // 优惠券选择弹窗
  const [couponChoicePopup, setCouponChoicePopup] = useState(false);
  const [currentGoodsIdIndex, setCurrentGoodsIndex] = useState({productIdP: -1, index: -1});
  // 打开优惠券选择
  const couponChoicePopupOpen = (productId, index) => {
    setCouponChoicePopup(true);
    setCurrentGoodsIndex({productId, index})
  }
  // 关闭优惠券选择 
  const couponChoicePopupClose = (productId, index, couponSelect) => {
    let dataJson = JSON.parse(JSON.stringify(commodityInfo));
    dataJson[index].couponSelect = couponSelect;
    setCommodityInfo(dataJson);
    setCouponChoicePopup(false);
  }

  let history = useHistory();

  useEffect(() => {
    const downCallback = () => {
      setTimeout(() => {
        confirmOrderMescroll.endByPage((dataSize, totalPage, systime) => {
          console.log(dataSize, totalPage, systime);
        })
      }, 1000)
    }

    let confirmOrderMescroll = new MeScroll("confirm-order-mescroll", {
      down: {
        use: true,
        auto: false,
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        callback: downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
      },
      up: {
        use: false,
      }
    })
    return () => {
      confirmOrderMescroll.destroy();
    }
  })

  return (<div className="confirm-order">
    <NavBar className="nav-bar"
      left={
        <Icon
          type="arrow-left"
          theme="default"
          size="sm"
          onClick={() => { history.go(-1); }}
        />
      }
      title="订单确认"
    />
    <div id="confirm-order-mescroll" className="mescroll">
      <div className="confirm-order-box">
        <div className="address-box">
          <svg className="location-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1953"><path d="M550.259747 928.504756a845.598362 845.598362 0 0 0 145.369777-99.601108c126.862565-108.503311 202.334016-241.987044 204.491752-402.658254 0-195.873137-172.705214-356.679976-388.121276-356.679976S123.878724 230.372258 123.878724 426.085105c0.345238 160.67121 75.952318 294.006984 204.356122 403.065142a858.261192 858.261192 0 0 0 183.715834 118.946755 948.627188 948.627188 0 0 0 38.222758-19.616906z m-38.222757 95.421264S55.225719 845.795641 54.325635 426.245394C54.325635 190.867188 259.298254 0 512 0s457.674365 190.867188 457.674365 426.245394c-5.696424 422.472438-457.674365 597.754606-457.674365 597.754606z m-0.974064-448.204984a135.185262 135.185262 0 1 0-136.504564-135.357881c0 74.694666 61.070102 135.357881 136.467574 135.357881z m0 69.553088a205.453486 205.453486 0 1 1 145.493076-59.78779 205.441156 205.441156 0 0 1-145.493076 59.78779z m0 0" p-id="1954"></path></svg>
          <dl className="address-info">
            <dt><b>{ props.defaultAddress.get("name") }</b>{ props.defaultAddress.get("tel") }</dt>
            <dd>{ props.defaultAddress.get("province") }&nbsp;{ props.defaultAddress.get("city") }&nbsp;{ props.defaultAddress.get("areaCounty") }&nbsp;{ props.defaultAddress.get("detailedAddress") }</dd>
          </dl>
          <svg className="arrow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2576"><path d="M412.367 6.389l-63.88 62.071 460.007 446.973-460.007 446.975 63.88 62.071 523.885-509.044z" p-id="2577"></path></svg>
        </div>
        <WhiteSpace size="sm" />
        {
          commodityInfo.map((item, index) => {
            return (
              <div className="product-unit" key={ item.productId } >
                <Cell title={ item.shopName } className="cell-box" icon={<img alt="" src={ item.shopImgUrl } style={{ width: 24, height: 24, borderRadius: "3px" }} />} />
                <div className="product-box">
                  <img src={ item.productImgUrl } alt="" />
                  <dl className="product-info">
                    <dt className="title">{ item.productName }</dt>
                    <dt className="value">{ item.productTypeName }: 
                      { item.productTypeInfo.map((Info, indexInfo) => {
                        return (<Fragment key={ indexInfo }>{ Info }&nbsp;</Fragment>)
                      }) } 
                    </dt>
                    <dd className="price">¥&nbsp;{ item.productPrice }/{ item.productUnit }
                      {
                        item.advantage.map((advantageInfo, indexAdvantage) => {
                          return (<span key={indexAdvantage}>{ advantageInfo }</span>)
                        })
                      }
                    </dd>
                  </dl>
                </div>
                <Cell title="购买数量" className="cell-box" description={<Stepper
                  className="stepper-box"
                  value={ item.number }
                  min={ item.numberMin } max={ item.numberMax }
                  onChange={ (val) => { modifiedQuantity(val, index) }}
                  defaultValue={0}
                  step={1}
                  onInputChange={(val, index) => {
                    modifiedQuantity(val)
                  }}
                />} />
                {
                  item.coupon.length !== 0 &&
                  <Cell onClick={() => { couponChoicePopupOpen(item.productId, index) }} title="店铺优惠" className="cell-box" hasArrow description={ item.couponSelect != -1 ? <Fragment>已自动领取最佳优惠&nbsp;-&nbsp;{ item.coupon[item.couponSelect].price }</Fragment>
                  :
                  "暂不使用优惠券"
                } />
                }
                <WhiteSpace size="sm" />
              </div>
            )
          })
        }
        
        <div className="payment-method">
          {
            // 支付方式
            paymentMoreState()
          }
          {
            !moreState && 
            <div onClick={ () => {setMoreState(true)}} className="more-options">更多支付方式<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6432"><path d="M77.6 323.3l419.9 419.9c8.2 8.2 21.5 8.2 29.7 0l421.1-421.1c16.4-16.4 16.4-43 0-59.3-16.4-16.4-43-16.4-59.3 0L519.8 631.9c-4.1 4.1-10.7 4.1-14.8 0l-368-368c-16.4-16.4-43-16.4-59.3 0-16.5 16.4-16.5 43-0.1 59.4z" p-id="6433"></path></svg></div>
          }
          
        </div>
        
      </div>
    </div>
    <div className="summary">
      <span className="collection">实付款:<b>¥29.7</b><em>免运费</em></span>
      <div className="pay-but">立即支付</div>
    </div>
    <CouponChoicePopup couponChoicePopup={couponChoicePopup} currentGoodsIdIndex={currentGoodsIdIndex} couponChoicePopupClose={couponChoicePopupClose} />
  </div>)
}

// 链接redux数据
const mapStateToProps = (state) => {
  return {
    defaultAddress: state.get("global").get("defaultAddress"),
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);

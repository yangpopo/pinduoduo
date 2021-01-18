// 物流信息

import React, { Fragment, useState, useEffect } from 'react';
import "./logisticsInformation.scss";
import { Popup } from "zarm";
import { WhiteSpace, NavBar ,Icon } from 'antd-mobile';
import { useParams } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表

import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import userPortrait from "assets/img/picture/user-portrait.png"; // 头像
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const LogisticsInformation = (props) => {
  // 传递id值
  const { id } = useParams();

  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      props.history.goBack();
    } else {
      props.history.replace(url);
    }
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

  // 物流数据
  const [logisticsData, setLogisticsData] = useState([
    {
      info: "商家已发货，正在通知快递公司取件",
      time: "2020-12-29 09:28:21"
    }, {
      info: "您的订单已经打包完成",
      time: "2020-12-29 09:28:21"
    }, {
      info: "您的订单已经验证发货",
      time: "2020-12-29 09:28:21"
    }, {
      info: "您的订单开始拣货",
      time: "2020-12-29 09:28:21"
    }, {
      info: "商家已经打印货单",
      time: "2020-12-29 09:28:21"
    }, {
      info: "订单确认,已经通知商家发货",
      time: "2020-12-29 09:28:21"
    }, {
      info: "您已经提交订单,请等待系统确认",
      time: "2020-12-29 09:28:21"
    },
  ]);

  // 物流信息更多
  const [moreState, setMoreState] = useState(false);

  // 商品数据
  const  windowListData = [
    {
      imgUrl: pictureInfoList01, 
      price: "9.99", 
      id: "0", 
      title: "阿斯顿发送到沙发上撒旦法", 
      tag: ["立减3元", "退货包邮"], 
      activity: [1,2,3], 
      quantitySold: 93,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList02, 
      price: "549.99", 
      id: "1", 
      title: "VB电磁阀华为热", 
      tag: ["新品", "退货包运费", "急速退款"], 
      activity: [1,2,3], 
      quantitySold: 123,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList03, 
      price: "848.99", 
      id: "2", 
      title: "出不来大V了发个豆腐干问题我对方", 
      tag: ["退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [headPortrait, userPortrait]
    }, {
      imgUrl: pictureInfoList04, 
      price: "108.99", 
      id: "3", 
      title: "阿斯顿发送到好风光瓦尔塔曲蔚然撒旦", 
      tag: ["立减3元", "退货包运费", "急速退款"], 
      activity: [], 
      quantitySold: 2343,
      userImg: [headPortrait, userPortrait]
    }
  ];

  // 地址显示状态
  const [showState, setShowState] = useState(false);

  // 分享弹窗状态
  const [sharePopupStatus, setSharePopupStatus] = useState(false);

  return(<div className="logistics-information">
    <NavBar
      mode="light"
      className="logistics-information-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
      rightContent={<svg onClick={ () => {setSharePopupStatus(true)} } className="icon-shop-but" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12089"><path d="M543.503059 102.068706l-2.831059 530.55247a30.117647 30.117647 0 0 1-60.235294-0.301176l2.800941-528.715294-160.768 160.768a30.117647 30.117647 0 0 1-42.586353-42.586353L492.845176 8.824471a30.117647 30.117647 0 0 1 42.586353 0l212.961883 212.961882a30.117647 30.117647 0 1 1-42.586353 42.586353l-162.334118-162.334118zM708.306824 391.529412a30.117647 30.117647 0 0 1 0-60.235294H873.411765a60.235294 60.235294 0 0 1 60.235294 60.235294v572.235294a60.235294 60.235294 0 0 1-60.235294 60.235294H150.588235a60.235294 60.235294 0 0 1-60.235294-60.235294V391.529412a60.235294 60.235294 0 0 1 60.235294-60.235294h163.056941a30.117647 30.117647 0 0 1 0 60.235294H150.588235v572.235294h722.82353V391.529412h-165.104941z" p-id="12090"></path></svg>}
    >已发货</NavBar>
    <UpDownLoad id="logistics-information-mescroll" className="logistics-information-mescroll" getAjaxData={getAjaxData}>
      <div className="express-info">
        <img className="picture-img" src={pictureInfoList01} alt="" />
        <dl className="info-box">
          <dt>圆通快递</dt>
          <dd>快递单号：YT56456444464648<span>复制</span></dd>
        </dl>
        <div className="icon-box">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5756"><path d="M967.111 568.889c0-73.956-45.511-136.533-113.778-159.289v-11.378C853.333 210.49 699.733 56.89 512 56.89s-341.333 153.6-341.333 341.333V409.6C102.4 432.356 56.889 494.933 56.889 568.889c0 96.711 73.955 170.667 170.667 170.667h56.888V398.222h-56.888c0-159.289 125.155-284.444 284.444-284.444s284.444 125.155 284.444 284.444h-56.888v341.334h34.133c-34.133 85.333-113.778 147.91-204.8 164.977v-56.889H398.222v113.778H568.89c125.155-22.755 227.555-108.089 267.378-227.555C910.222 716.8 967.11 648.533 967.11 568.889zM227.556 682.667c-62.578 0-113.778-51.2-113.778-113.778s51.2-113.778 113.778-113.778v227.556z m568.888 0V455.11c62.578 0 113.778 51.2 113.778 113.778s-51.2 113.778-113.778 113.778z" fill="#73777A" p-id="5757"></path></svg>
          物流服务
        </div>
      </div>
      <div className="order-info">
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13733"><path d="M1024 100.504a30.864 30.864 0 0 0-30.856-30.856H424.784a30.864 30.864 0 0 0-30.856 30.856V190.4l-208.168-0.688h-0.104a30.856 30.856 0 0 0-26.464 15.008L4.4 462.696A30.976 30.976 0 0 0 0 478.608v237c0 65.456 53.28 118.736 118.768 118.736h48.416c0.488 66.248 54.488 120.008 120.832 120.008s120.344-53.76 120.832-120.008h213.52c0.496 66.248 54.48 120.008 120.832 120.008s120.344-53.76 120.832-120.008h41.176c65.496 0 118.776-53.28 118.776-118.736v-175.28c0-0.704-0.168-1.36-0.2-2.048 0.04-0.696 0.2-1.352 0.2-2.056V100.504z m-61.72 30.864v374H455.848l-0.2-12.88v-361.12h506.632z m-674.264 761.264c-32.624 0-59.16-26.576-59.16-59.184s26.536-59.136 59.16-59.136c32.624 0 59.16 26.52 59.16 59.136s-26.528 59.184-59.16 59.184z m455.192 0c-32.608 0-59.16-26.576-59.16-59.184s26.544-59.136 59.16-59.136 59.168 26.52 59.168 59.136-26.552 59.184-59.168 59.184z m219.072-177.024c0 31.464-25.584 57.016-57.056 57.016h-57.72c-20.992-35.84-59.832-60.032-104.296-60.032-44.72 0-83.752 24.448-104.656 60.624a31.256 31.256 0 0 0-5.912-0.592H392.312c-21-35.84-59.832-60.032-104.296-60.032s-83.296 24.184-104.288 60.032h-64.96c-31.464 0-57.048-25.552-57.048-57.016V487.168l141.352-235.672 187.016 0.632 3.832 241.184v42.912c0 2.736 0.472 5.336 1.136 7.856 1.888 15.24 14.76 27.104 30.48 27.104h536.744v144.424z" fill="#838384" p-id="13734"></path><path d="M250.24 311.8a30.904 30.904 0 0 0-42.216 11.024L119.928 473.272a30.856 30.856 0 1 0 53.256 31.192l88.088-150.448a30.832 30.832 0 0 0-11.032-42.216z" fill="#838384" p-id="13735"></path></svg>
        <dl className="info-box">
          <dt>订单编号：56456558988656454564548</dt>
          <dd>收货地址：
            {
              showState ?
              <Fragment>阿斯顿发文阿萨德发阿萨德发阿道夫啥地方放阿斯顿发生阿萨德发是的发送发斯蒂芬阿萨德发</Fragment>
              :
              <Fragment>阿斯顿发文阿萨德发阿萨德发阿...<span onClick={ () => {setShowState(true)}}>展开</span></Fragment>
            }
          </dd>
        </dl>
      </div>
      <div className="logistics-record">
        {
          logisticsData.map((item, index) => {
            if (moreState) {
              if (index == 0) {
                return (
                <div className="logistics-record-unit" key={index}>
                  <dl className="unit-info">
                    <dt>{item.info}</dt>
                    <dd>{item.time}</dd>
                  </dl>
                  <div className="remarks-info">在有物流动态更新时提醒我，<span>接受提醒</span></div>
                  <div className="icon-circle"></div>
                </div>
                )
              } else {
                return(
                  <div className="logistics-record-unit" key={index}>
                  <dl className="unit-info">
                    <dt>{item.info}</dt>
                    <dd>{item.time}</dd>
                  </dl>
                  <div className="icon-circle"></div>
                </div>
                )
              }
            } else {
              if (index < 2) {
                return(
                  <div className="logistics-record-unit" key={index}>
                  <dl className="unit-info">
                    <dt>{item.info}</dt>
                    <dd>{item.time}</dd>
                  </dl>
                  <div className="icon-circle"></div>
                </div>
                )
              }
            }
          })
        }
        <div className="more-but" onClick={() => { setMoreState((val) => {return !val}) }}>
          {
            moreState ?
            <Fragment>
              收起<svg className="icon-arrow" style={{ "transform": "rotate(180deg)"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14500"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" p-id="14501"></path></svg>
            </Fragment>
            :
            <Fragment>
              展开<svg className="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14500"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" p-id="14501"></path></svg>
            </Fragment>
          }
        </div>
      </div>
      <WhiteSpace />
      <div className="more-goods">
        <div className="title-box"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3904"><path d="M670.012292 451.789687 559.534108 451.789687l86.680175-75.443249c7.392364-6.444782 8.1711-17.674545 1.786693-25.089421-6.42534-7.42818-17.590634-8.191566-24.995277-1.77646l-111.050212 96.673783-113.877607-96.80886c-7.466042-6.352685-18.652825-5.427616-24.974811 2.074242-6.320962 7.482415-5.406127 18.705014 2.079358 25.047466l88.582501 75.323523L351.199199 451.79071c-9.784854 0-17.70729 7.963369-17.70729 17.777899 0 9.816576 7.92346 17.775852 17.70729 17.775852l141.699256 0 0 231.113705c0 9.824763 7.933693 17.767666 17.7165 17.767666 9.775644 0 17.696034-7.943926 17.696034-17.767666L528.310989 487.342414l141.702326 0c9.804297 0 17.7165-7.959276 17.7165-17.775852C687.728792 459.752032 679.816588 451.789687 670.012292 451.789687zM512.082376 128.977513c-211.67498 0-383.287523 171.60538-383.287523 383.281383s171.612543 383.281383 383.287523 383.281383c211.672934 0 383.27422-171.60538 383.27422-383.281383S723.754287 128.977513 512.082376 128.977513zM756.235049 474.849892 527.001157 764.810866c-3.368724 4.236488-8.473999 6.722098-13.869892 6.722098-5.406127 0-10.511401-2.475378-13.869892-6.722098L267.918447 472.947566c-4.439102-5.604648-5.105275-13.334703-1.654686-19.631106l73.861218-134.768403c3.118014-5.671163 9.05626-9.206686 15.522532-9.206686l328.991919 0c7.111978 0 13.537318 4.263094 16.322757 10.844999l57.724703 136.686079C761.205247 462.862883 760.269945 469.766107 756.235049 474.849892z" p-id="3905"></path></svg>精选推荐</div>
        <WindowList dataJson={windowListData} />
      </div>
    </UpDownLoad>
    <div className="operate-box">
      <span className="default-but">延长收货</span>
      <span className="important-but">确认收货</span>
    </div>
    {/* 分享弹窗 */}
    <Popup
      visible={sharePopupStatus}
      direction="bottom"
      onMaskClick={() => setSharePopupStatus(false)}
      destroy={true}
      mountContainer={() => document.querySelector(".logistics-information")}
    >
      <div className="logistics-information-popup">
        <div className="content-box">
          <h6>允许好友查看此物流动态(实时更新)</h6>
          <i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14774"><path d="M685.978 354.304c11.264 0 22.425 0.82 33.484 2.048-30.105-139.776-180.019-243.61-351.027-243.61-191.283 0-347.955 130.048-347.955 295.117 0 95.335 52.122 173.568 139.264 234.189l-34.816 104.346 121.651-60.826c43.52 8.602 78.439 17.408 121.856 17.408 10.957 0 21.709-0.512 32.461-1.331-6.758-23.245-10.752-47.514-10.752-72.704 0-151.552 130.56-274.637 295.834-274.637z m-187.085-94.003c26.214 0 43.52 17.203 43.52 43.315 0 26.01-17.306 43.418-43.52 43.418-26.112 0-52.224-17.408-52.224-43.418 0-26.112 26.112-43.315 52.224-43.315z m-243.507 86.733c-26.112 0-52.43-17.408-52.43-43.418 0-26.112 26.318-43.315 52.43-43.315s43.417 17.203 43.417 43.315c0 25.907-17.305 43.418-43.417 43.418zM1003.52 624.742c0-138.752-139.162-251.801-295.526-251.801-165.581 0-295.936 113.05-295.936 251.801 0 138.957 130.355 251.802 295.936 251.802 34.61 0 69.632-8.704 104.345-17.408l95.437 52.122-26.112-86.733c69.837-52.224 121.856-121.549 121.856-199.783z m-391.475-43.417c-17.306 0-34.816-17.203-34.816-34.714 0-17.305 17.51-34.713 34.816-34.713 26.317 0 43.52 17.408 43.52 34.713 0 17.51-17.203 34.714-43.52 34.714z m191.385 0c-17.203 0-34.508-17.203-34.508-34.714 0-17.305 17.305-34.713 34.508-34.713 26.112 0 43.52 17.408 43.52 34.713 0 17.51-17.408 34.714-43.52 34.714z" p-id="14775"></path></svg></i>
          <div>微信</div>
        </div>
        <WhiteSpace />
        <div className="cancel-but" onClick={ () => {setSharePopupStatus(false)} }>取消</div>
      </div>
    </Popup>
  </div>)
}

export default LogisticsInformation;
// 个人中心--我的订单

import React, { useState, useEffect } from 'react';
import "./myOrder.scss";
import { Tabs, NavBar ,Icon } from 'antd-mobile';
import OrderSearch from "./common/OrderSearch"; // 订单搜索

import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import OrderList from "common/orderList/OrderList"; // 订单列表
import WindowList from "common/windowList/WindowList"; // 产品橱窗列表


import headPortrait from "assets/img/picture/head-portrait.jpg"; // 店铺头像
import userPortrait from "assets/img/picture/user-portrait.png"; // 头像
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import pictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import pictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import pictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";


const MyOrder = (props) => {
  let [menuId, setMenuId] = useState(props.match.params.id); // 菜单id

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

  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

  // 菜单切换
  let [searchData, setSearchData] = useState();

  // 菜单切换
  const menuSwitch = (index = 0) => {
    setMenuId(index);
    if ((index % 2) != 0){
      setSearchData([])
    } else {
      setSearchData([{
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
      }]);
    }
  }

  //商品数据
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

  // 菜单
  const tabs = [
    { title: "全部" },
    { title: "待付款" },
    { title: "待分享" },
    { title: "待发货" },
    { title: "待收货" },
    { title: "评价" },
  ];

  useEffect(() => {
    if ((menuId % 2) != 0){
      setSearchData([])
    } else {
      setSearchData([{
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
      }]);
    }
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  }, [menuId]);

  return (<div className="my-order">
  <NavBar
    mode="light"
    className="my-order-navbar"
    icon={<Icon type="left" color="#868480" />}
    onLeftClick={() => {linkGoClick()}}
    rightContent={<OrderSearch />}
  >我的订单</NavBar>
  <UpDownLoad id="my-order-mescroll" className="my-order-mescroll" getAjaxData={getAjaxData}>
    <Tabs tabs={tabs}
      page={ parseInt(menuId) }
      onTabClick={(tab, index) => { menuSwitch(index) }}
      tabBarUnderlineStyle={{ border: "1px #d63731 solid" }}
      tabBarActiveTextColor="#d63731"
      tabBarTextStyle={{ "fontSize": "3.5vw" }}
      swipeable={false}
      renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}
    >
      <OrderList dataJson={searchData} />
    </Tabs>
    <div className="more-goods">
      <div className="title-box"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3904"><path d="M670.012292 451.789687 559.534108 451.789687l86.680175-75.443249c7.392364-6.444782 8.1711-17.674545 1.786693-25.089421-6.42534-7.42818-17.590634-8.191566-24.995277-1.77646l-111.050212 96.673783-113.877607-96.80886c-7.466042-6.352685-18.652825-5.427616-24.974811 2.074242-6.320962 7.482415-5.406127 18.705014 2.079358 25.047466l88.582501 75.323523L351.199199 451.79071c-9.784854 0-17.70729 7.963369-17.70729 17.777899 0 9.816576 7.92346 17.775852 17.70729 17.775852l141.699256 0 0 231.113705c0 9.824763 7.933693 17.767666 17.7165 17.767666 9.775644 0 17.696034-7.943926 17.696034-17.767666L528.310989 487.342414l141.702326 0c9.804297 0 17.7165-7.959276 17.7165-17.775852C687.728792 459.752032 679.816588 451.789687 670.012292 451.789687zM512.082376 128.977513c-211.67498 0-383.287523 171.60538-383.287523 383.281383s171.612543 383.281383 383.287523 383.281383c211.672934 0 383.27422-171.60538 383.27422-383.281383S723.754287 128.977513 512.082376 128.977513zM756.235049 474.849892 527.001157 764.810866c-3.368724 4.236488-8.473999 6.722098-13.869892 6.722098-5.406127 0-10.511401-2.475378-13.869892-6.722098L267.918447 472.947566c-4.439102-5.604648-5.105275-13.334703-1.654686-19.631106l73.861218-134.768403c3.118014-5.671163 9.05626-9.206686 15.522532-9.206686l328.991919 0c7.111978 0 13.537318 4.263094 16.322757 10.844999l57.724703 136.686079C761.205247 462.862883 760.269945 469.766107 756.235049 474.849892z" p-id="3905"></path></svg>精选推荐</div>
      <WindowList dataJson={windowListData} />
    </div>
  </UpDownLoad>
  </div>)
}

export default MyOrder;
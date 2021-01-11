// 退款/售后

import React, { Fragment, useState, useEffect } from 'react';
import "./afterSales.scss";
import { NavBar, Icon } from "zarm";
import { Tabs } from 'antd-mobile';
import { useHistory } from "react-router-dom";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import AfterSaleOrder from "./common/afterSaleOrder/AfterSaleOrder"; // 售后订单

const AfterSales = () => {
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

  const tabs = [
    { title: '全部' },
    { title: '待处理'},
  ];

  const [dataList, setDataList] = useState([0, 1, 2]);

  return(<div className="after-sales">
    <NavBar
      className="after-sales-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="退款/售后"
    />
    <UpDownLoad id="after-sales-mescroll" className="after-sales-mescroll" getAjaxData={getAjaxData}>
      <Tabs tabs={tabs}
        initialPage={0}
        tabBarUnderlineStyle={{ border: "1px #d63731 solid" }}
        tabBarActiveTextColor="#d63731"
        tabBarTextStyle={{ "fontSize": "3.5vw" }}
        useOnPan={false}
        swipeable={false}
        onChange={(tab, index) => { if (index == 0) {setDataList([0, 1, 2])} else {setDataList([])} }}
      >
        {
          dataList.length != 0?
            <div className="after-sales-list">
              {
                dataList.map((item, index) => {
                  return <AfterSaleOrder key={index} />
                })
              }
            </div>
          :
          <div className="after-sales-none">
            <svg class="icon-none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3385"><path d="M879.871 180.668H443.193l-9.704-38.814c-13.343-50.761-43.922-77.631-97.039-77.631H142.371c-42.874 0-77.631 34.756-77.631 77.631V879.35c0 42.876 34.757 77.631 77.631 77.631h737.5c42.872 0 77.629-34.756 77.629-77.631V258.299c0-42.873-34.758-77.631-77.629-77.631z m38.813 698.682c0 21.438-17.378 38.818-38.814 38.818h-737.5c-21.438 0-38.814-17.38-38.814-38.818V355.341c0-21.438 17.376-38.818 38.814-38.818h737.5c21.436 0 38.814 17.38 38.814 38.818V879.35z m0-591.23a77.245 77.245 0 0 0-38.814-10.411h-737.5a77.244 77.244 0 0 0-38.814 10.41V141.854c0-21.438 17.376-38.818 38.814-38.818h194.078c37.193 0 47.914 16.772 58.224 38.818l19.408 77.631H879.87c21.436 0 38.814 17.378 38.814 38.814v29.821z" p-id="3386"></path></svg>
            <div className="name">暂无退款/售后订单</div>
          </div>
        }
      </Tabs>
    </UpDownLoad>
  </div>)
}

export default AfterSales;
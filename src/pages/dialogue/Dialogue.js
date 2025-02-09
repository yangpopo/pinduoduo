// 聊天

import React, { Fragment, useState, useEffect } from 'react';
import "./dialogue.scss";
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from "react-router-dom";
import InputComponents from "common/inputComponents/InputComponents"; // 键盘
import GetNews from "./common/getNews/GetNews"; // 接受消息
import SendNews from "./common/sendNews/SendNews"; // 发送消息

const Dialogue = (props) => {
  const valId = props.match.params.id; // 动态id值
  // 点击跳转跳转
  const linkGoClick = () => {
    props.history.goBack();
  }

  // 点击发送
  const sendSubmit = (val) => {
    console.log(val, "----------");
  }

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });

  return(<div className="dialogue">
  <NavBar
    mode="light"
    className="nav-bar-dialogue"
    icon={<Icon type="left" color="#868480" />}
    onLeftClick={() => {linkGoClick()}}
    rightContent={<Link to={"/shop/" + valId} className="shop-but"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9742"><path d="M761.8 572c-30 0-59.2-8.3-84.9-24.1-16.3-10-30.3-22.5-41.4-36.9-28.5 37.9-74 61-123.5 61s-95-23.1-123.5-61c-11.1 14.4-25.1 26.9-41.4 36.9-27.1 16.6-58.1 25-89.7 24-40.4-1.2-77.6-18.4-104.8-48.4C126.4 494.6 112 456.8 112 417v-5c0-2.9 0.4-5.8 1.2-8.5l56.7-191.6c6.8-23.1 21.6-43.7 41.6-58 20-14.3 43.7-21.9 68.6-21.9h463.7c24.9 0 48.6 7.6 68.6 21.9 20 14.4 34.8 35 41.6 58l56.7 191.6c0.8 2.8 1.2 5.6 1.2 8.5v5c0 39.8-14.4 77.6-40.6 106.5-27.2 30.1-64.4 47.3-104.8 48.4-1.5 0.1-3.1 0.1-4.7 0.1zM388.6 432c16.2 0 30.7 9.6 37.2 24.5 14.5 33.7 48.4 55.4 86.2 55.4 37.8 0 71.7-21.8 86.2-55.4 6.4-14.9 21-24.5 37.2-24.5 16.1 0 30.6 9.6 37 24.5 14.6 33.8 52.6 56.7 92.4 55.5 48.9-1.4 87.2-43.2 87.2-95v-0.6L796.5 229c-6.4-21.8-28.1-36.9-52.7-36.9H280.1c-24.6 0-46.2 15.2-52.7 36.9L172 416.3v0.6c0 51.8 38.3 93.6 87.2 95 39.8 1.2 77.9-21.7 92.4-55.5 6.4-14.8 20.9-24.4 37-24.4zM742 892H282c-60.7 0-110-49.3-110-110V642c0-16.6 13.4-30 30-30s30 13.4 30 30v140c0 27.6 22.4 50 50 50h460c27.6 0 50-22.4 50-50V642c0-16.6 13.4-30 30-30s30 13.4 30 30v140c0 60.7-49.3 110-110 110z" p-id="9743"></path></svg></Link>}
  >和平绿色水果食品</NavBar>
  <div className="dialogue-box">
    <div className="time-tab">2020年11月12日&nbsp;18:20</div>
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
    <GetNews />
    <SendNews />
  </div>
  <InputComponents className="dialogue-key-board" sendSubmit={sendSubmit} fileKeyboard={true} />
  </div>)
}

export default Dialogue;
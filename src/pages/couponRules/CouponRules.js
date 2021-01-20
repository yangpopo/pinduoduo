// 月卡规则介绍

import React, { Fragment, useState, useEffect } from 'react';
import "./couponRules.scss";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';

const CouponRules = (props) => {
  // 菜单选中状态
  const [menuState, setMenuState] = useState(0);

  // 菜单内容
  const [menuData, setMenuData] = useState([
    {
      state: false,
    },
    {
      state: false,
    },
    {
      state: false,
    },
  ]);

  const menuSwitch = (index) => {
    let data = JSON.parse(JSON.stringify(menuData));
    data[index].state = !data[index].state;
    setMenuData(data);
  }


  return (<div className="coupon-rules">
    <NavBar
      mode="light"
      className="coupon-rules-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {props.history.goBack();}}
    >月卡规则介绍</NavBar>
    <div className="coupon-rules-box">
      <ul className="menu">
        <li className={menuState == 0 ? "select" : ""} onClick={() => {setMenuState(0)}}>权益规则</li>
        <li className={menuState == 1 ? "select" : ""} onClick={() => {setMenuState(1)}}>开通续费</li>
        <li className={menuState == 2 ? "select" : ""} onClick={() => {setMenuState(2)}}>月卡退款</li>
        <li className={menuState == 3 ? "select" : ""} onClick={() => {setMenuState(3)}}>邀请开卡</li>
        <li className={menuState == 4 ? "select" : ""} onClick={() => {setMenuState(4)}}>每日神券</li>
        <li className={menuState == 5 ? "select" : ""} onClick={() => {setMenuState(5)}}>补贴特权</li>
        <li className={menuState == 6 ? "select" : ""} onClick={() => {setMenuState(6)}}>免单特权</li>
        <li className={menuState == 7 ? "select" : ""} onClick={() => {setMenuState(7)}}>大额券</li>
        <li className={menuState == 8 ? "select" : ""} onClick={() => {setMenuState(8)}}>免费试用</li>
        <li className={menuState == 9 ? "select" : ""} onClick={() => {setMenuState(9)}}>其他问题</li>
      </ul>
      <div className="content-box">
        <div className="rule-unit">
          <h6 className="title">权益一：每天领券</h6>
          <div className="rule-box">
            <div className="content" style={{ height: menuData[0].state ? "auto" : ""}}>
              国家发展改革委秘书长赵辰昕介绍说，2020年，面对各种风险挑战，国家发展改革委坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持疫情防控不放松，扎实做好“六稳”工作，全面落实“六保”任务，坚定推进三大攻坚战，深化改革开放，认真履行宏观调控职责，促进了全年经济社会发展主要目标任务较好完成。
              <WhiteSpace />
              赵辰昕表示，国家统计局发布了2020年主要经济数据。可以看到，2020年，我国有效应对新冠肺炎疫情的严重冲击，在世界上率先控住疫情、率先复工复产、率先实现经济正增长，经济呈现逐季好转、稳定恢复态势，主要经济指标好于预期，成为全球唯一实现经济正增长的主要经济体，经济总量突破100万亿元，决战脱贫攻坚取得决定性成就，全面建成小康社会取得伟大历史性成就，充分展现了中国经济的强大韧性和旺盛活力。
            </div>
            {
              menuData[0].state ?
                <div className="but-close" onClick={() => {menuSwitch(0)}}>收起<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
                :
                <div className="but-open" onClick={() => {menuSwitch(0)}}>展开<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
            }
          </div>
        </div>
        <div className="rule-unit">
          <h6 className="title">权益二：补贴特权</h6>
          <div className="rule-box">
            <div className="content" style={{ height: menuData[1].state ? "auto" : ""}}>
              国家发展改革委秘书长赵辰昕介绍说，2020年，面对各种风险挑战，国家发展改革委坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持疫情防控不放松，扎实做好“六稳”工作，全面落实“六保”任务，坚定推进三大攻坚战，深化改革开放，认真履行宏观调控职责，促进了全年经济社会发展主要目标任务较好完成。
              <WhiteSpace />
              赵辰昕表示，国家统计局发布了2020年主要经济数据。可以看到，2020年，我国有效应对新冠肺炎疫情的严重冲击，在世界上率先控住疫情、率先复工复产、率先实现经济正增长，经济呈现逐季好转、稳定恢复态势，主要经济指标好于预期，成为全球唯一实现经济正增长的主要经济体，经济总量突破100万亿元，决战脱贫攻坚取得决定性成就，全面建成小康社会取得伟大历史性成就，充分展现了中国经济的强大韧性和旺盛活力。
            </div>
            {
              menuData[1].state ?
                <div className="but-close" onClick={() => {menuSwitch(1)}}>收起<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
                :
                <div className="but-open" onClick={() => {menuSwitch(1)}}>展开<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
            }
          </div>
        </div>
        <div className="rule-unit">
          <h6 className="title">权益三：免单特权</h6>
          <div className="rule-box">
            <div className="content" style={{ height: menuData[2].state ? "auto" : ""}}>
              国家发展改革委秘书长赵辰昕介绍说，2020年，面对各种风险挑战，国家发展改革委坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持疫情防控不放松，扎实做好“六稳”工作，全面落实“六保”任务，坚定推进三大攻坚战，深化改革开放，认真履行宏观调控职责，促进了全年经济社会发展主要目标任务较好完成。
              <WhiteSpace />
              赵辰昕表示，国家统计局发布了2020年主要经济数据。可以看到，2020年，我国有效应对新冠肺炎疫情的严重冲击，在世界上率先控住疫情、率先复工复产、率先实现经济正增长，经济呈现逐季好转、稳定恢复态势，主要经济指标好于预期，成为全球唯一实现经济正增长的主要经济体，经济总量突破100万亿元，决战脱贫攻坚取得决定性成就，全面建成小康社会取得伟大历史性成就，充分展现了中国经济的强大韧性和旺盛活力。
            </div>
            {
              menuData[2].state ?
                <div className="but-close" onClick={() => {menuSwitch(2)}}>收起<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
                :
                <div className="but-open" onClick={() => {menuSwitch(2)}}>展开<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13732"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="13733"></path></svg></div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default CouponRules;
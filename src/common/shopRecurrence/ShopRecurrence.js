// 店铺返现---进度

import React from 'react';
import "./shopRecurrence.scss";
import { Progress } from 'zarm';

const ShopRecurrence = (props) => {
  const {value, requirement, speed} = props.dataJson;
  const speedVal = parseInt(speed / requirement * 100);

  return(<div className={ props.className ? "shop-recurrence " + props.className : "shop-recurrence" }>
  <div className="package">
    <span>¥<b>{ value }</b></span>
    <em>现金券</em>
  </div>
  <div className="progress-box">
<div className="explain">今天店内再拼<b>{ requirement }</b>元返<b>{ value }</b>现金券</div>
    <Progress className="progress" shape="line" percent={speedVal}  size={"md"} text={(val) => `${speed}/${requirement}`} />
  </div>
</div>)
}

export default ShopRecurrence;
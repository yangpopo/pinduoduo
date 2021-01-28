// 更多操作

import React, { useState } from 'react';
import "./moreOperations.scss";
import { Link } from "react-router-dom";
import { Popper } from 'zarm';

const MoreOperations = () => {
  const [moreMenuState, setMoreMenuState] = useState(false);

  return (<div className="more-operations">
    <Popper
      content={<ul className="menu-box">
        <li>延长收货</li>
        <li>设为匿名</li>
      </ul>}
      destroy={false}
      visible={moreMenuState}
      trigger={"click"}
      direction={"top"}
      animationType={"zoomFade"}
      mountContainer={ () => {return document.querySelector(".more-operations")} }
      className="custom-content"
    >
      <span className="more-but" onClick={ () => {setMoreMenuState(true)} }>更多</span>
    </Popper>
    <Link to="/product-details/0" className="link-but">再次拼单</Link>
    <Link to="/logistics-information/0" className="link-but">查看物流</Link>
    <span className="confirm-but">确认收货</span>
  </div>)
}

export default MoreOperations;
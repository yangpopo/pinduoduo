// 合计块

import React, { Fragment, useState, useEffect } from 'react';
import "./totalBlock.scss";


const TotalBlock = () => {
  return(<div className="total-block">
    <dl className="total-info">
      <dt>已选0款</dt>
      <dd>合计:<b>¥45</b></dd>
    </dl>
    <div className="check-but">去结算</div>
  </div>)
}

export default TotalBlock;
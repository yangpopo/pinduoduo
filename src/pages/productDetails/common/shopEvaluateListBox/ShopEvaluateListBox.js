// 店铺评价列表

import React, { Fragment, useState, useEffect } from 'react';
import "./shopEvaluateListBox.scss";
import { Cell } from 'zarm';

const EvaluationListBox = (props) => {
  

  return (<div className="shop-evaluate-list-box">
    <Cell hasArrow className="shop-evaluate-list-title" description="查看全部" >该商品所属店铺评价</Cell>
    <div className="evaluate-key">
      <span className="tap-0"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6982"><path d="M509.305263 990.046316c-144.006737 0-409.923368-217.896421-409.923368-423.828211V156.294737h39.989894s91.998316-1.994105 185.936843-39.936C421.295158 78.362947 483.274105 32.336842 483.274105 32.336842L509.305263 14.389895 533.288421 32.336842s61.978947 46.026105 159.959579 84.021895c93.938526 37.941895 183.942737 39.936 185.936842 39.936h39.989895v411.917474c0 203.937684-265.916632 421.888-409.923369 421.888zM181.301895 234.334316v331.937684c0 159.959579 231.962947 341.854316 327.949473 341.854316 93.938526 0 327.895579-181.894737 327.895579-341.854316V234.280421a709.955368 709.955368 0 0 1-173.97221-41.984 915.994947 915.994947 0 0 1-151.983158-77.985684c-27.971368 18.000842-81.92 50.014316-151.929263 77.985684a733.507368 733.507368 0 0 1-177.960421 42.037895z m305.906526 465.866105l-173.918316-147.941053 54.002527-61.978947 111.939368 93.992421 211.914105-241.987368 61.978948 54.002526-265.916632 303.966316z" p-id="6983"></path></svg>划算(54)</span>
      <span className="tap-1">质量很好(32)</span>
      <span className="tap-2">舒服(64)</span>
      <span className="tap-1">质量很好(32)</span>
      <span className="tap-1">质量很好(32)</span>
      <span className="tap-1">质量很好(32)</span>
      <span className="tap-1">物流很快(564)</span>
    </div>
  </div>)
}

export default EvaluationListBox;
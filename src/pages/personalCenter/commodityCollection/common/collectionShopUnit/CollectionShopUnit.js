// 收藏店铺单元

import React, { Fragment, useState, useEffect } from 'react';
import "./collectionShopUnit.scss";
import { useHistory, Link } from "react-router-dom";
import { Cell } from 'zarm';
import headPortrait from "assets/img/picture/head-portrait.jpg";

const CollectionShopUnit = (props) => {
  return(<div className="collection-shop-unit">
    <Link className="shop-name">
      <img src={headPortrait} alt="" />店铺名称<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11344"><path d="M801.548285 510.271032L301.254151 1010.360574c-18.242732 18.242732-47.73799 18.106338-65.844327-0.306887a47.226511 47.226511 0 0 1 0.272788-66.389904l433.358652-433.154061L235.784908 80.356335A47.192413 47.192413 0 0 1 235.307528 13.966431 46.30585 46.30585 0 0 1 301.151856 13.454952l500.396429 496.81608z" fill="" p-id="11345"></path></svg>
    </Link>
    <Cell title="标题文字" />
  </div>)
}

export default CollectionShopUnit;
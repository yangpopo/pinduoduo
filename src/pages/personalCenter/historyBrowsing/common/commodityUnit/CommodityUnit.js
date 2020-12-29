// 浏览历史-商品单元

import React, { Fragment, useState, useEffect } from 'react';
import "./commodityUnit.scss";
import PropTypes from 'prop-types';
import { Checkbox } from "zarm";
import { Link, useHistory } from "react-router-dom";
import pictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";

const CommodityUnit = (props) => {
  return(<div className="commodity-unit">
    <Checkbox className="commodity-unit-check" style={{marginLeft: props.checState ? "" : "-9vw"}} />
    <Link to="/" className="head-img"><img src={pictureInfoList01} alt="" /></Link>
    <div className="info-box">
      <Link to="/" className="name">阿斯顿发送到阿斯顿发送到阿斯顿发送到阿诗丹顿发</Link>
      <div className="label-box">
        <span>立减18元</span><span>退货包运费</span><span>全场包邮</span>
      </div>
      <div className="sales-volume">已拼154件</div>
      <div className="price">¥<b>545</b></div>
    </div>
  </div>)
}

CommodityUnit.propTypes = {
  checState: PropTypes.bool,
}

// 指定 props 的默认值：
CommodityUnit.defaultProps = {
  checState: false
};
export default CommodityUnit;
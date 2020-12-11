// 快捷菜单

import React, { Fragment, useState, useEffect } from 'react';
import "./quickMenu.scss";
import {Link} from "react-router-dom";
import { connect } from "react-redux"; // 链接全局状态
import { productOptionsPopupStateFun } from "../../../../store/global/";
import ProductOptions from "common/productOptions/ProductOptions"; // 弹窗状态

const QuickMenu = (props) => {
  const [productOptionsType, setProductOptionsType] = useState("collage");
  
  const openProductOptions = (type) => {
    setProductOptionsType(type);
    props.productOptionsPopupStateFun();
  }

  return(<div className="quick-menu">
    <ul className="fun-but">
      <li>
        <Link to="/shop/0">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9742"><path d="M761.8 572c-30 0-59.2-8.3-84.9-24.1-16.3-10-30.3-22.5-41.4-36.9-28.5 37.9-74 61-123.5 61s-95-23.1-123.5-61c-11.1 14.4-25.1 26.9-41.4 36.9-27.1 16.6-58.1 25-89.7 24-40.4-1.2-77.6-18.4-104.8-48.4C126.4 494.6 112 456.8 112 417v-5c0-2.9 0.4-5.8 1.2-8.5l56.7-191.6c6.8-23.1 21.6-43.7 41.6-58 20-14.3 43.7-21.9 68.6-21.9h463.7c24.9 0 48.6 7.6 68.6 21.9 20 14.4 34.8 35 41.6 58l56.7 191.6c0.8 2.8 1.2 5.6 1.2 8.5v5c0 39.8-14.4 77.6-40.6 106.5-27.2 30.1-64.4 47.3-104.8 48.4-1.5 0.1-3.1 0.1-4.7 0.1zM388.6 432c16.2 0 30.7 9.6 37.2 24.5 14.5 33.7 48.4 55.4 86.2 55.4 37.8 0 71.7-21.8 86.2-55.4 6.4-14.9 21-24.5 37.2-24.5 16.1 0 30.6 9.6 37 24.5 14.6 33.8 52.6 56.7 92.4 55.5 48.9-1.4 87.2-43.2 87.2-95v-0.6L796.5 229c-6.4-21.8-28.1-36.9-52.7-36.9H280.1c-24.6 0-46.2 15.2-52.7 36.9L172 416.3v0.6c0 51.8 38.3 93.6 87.2 95 39.8 1.2 77.9-21.7 92.4-55.5 6.4-14.8 20.9-24.4 37-24.4zM742 892H282c-60.7 0-110-49.3-110-110V642c0-16.6 13.4-30 30-30s30 13.4 30 30v140c0 27.6 22.4 50 50 50h460c27.6 0 50-22.4 50-50V642c0-16.6 13.4-30 30-30s30 13.4 30 30v140c0 60.7-49.3 110-110 110z" p-id="9743"></path></svg>
          店铺
        </Link>
      </li>
      <li>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7327"><path d="M658.047 142C812.807 142 912 266.099 912 433.118c0 129.611-117.283 272.351-348.353 432.742-31.068 21.514-72.226 21.514-103.298 0C229.279 705.47 112 562.73 112 433.118 112 266.099 211.188 142 365.948 142c55.893 0 93.8 19.528 146.05 63.839C564.26 161.54 602.159 142 658.047 142z m-0.21 62c-38.67 0-65.568 14.177-109.149 51.369-2.019 1.723-13.438 11.547-16.742 14.354-11.251 9.524-27.732 9.524-38.983 0-3.304-2.816-14.723-12.631-16.742-14.354C432.64 218.177 405.74 204 367.067 204 249.457 204 174 298.052 174 433.782c0 103.498 105.946 231.95 321.314 380.88a30.188 30.188 0 0 0 34.28 0c215.365-148.92 321.31-277.382 321.31-380.88 0-135.73-75.452-229.782-193.067-229.782z" p-id="7328"></path></svg>
        {/* <svg style={{ color:"#df2e26" }} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7349"><path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542" p-id="7350"></path></svg> */}
        收藏
      </li>
      <li>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8085"><path d="M659.5 478.2c18.6 0 33.8 15.1 33.8 33.8 0 18.6-15.1 33.7-33.8 33.7-18.7 0-33.8-15.1-33.8-33.7 0-18.7 15.1-33.8 33.8-33.8M512 478.2c18.6 0 33.8 15.1 33.8 33.8 0 18.6-15.1 33.7-33.8 33.7-18.7 0-33.8-15.1-33.8-33.7 0-18.7 15.1-33.8 33.8-33.8M364.5 478.2c18.7 0 33.8 15.1 33.8 33.8 0 18.6-15.1 33.7-33.8 33.7-18.6 0-33.8-15.1-33.8-33.7 0.1-18.7 15.2-33.8 33.8-33.8" p-id="8086"></path><path d="M129.5 827V521.2c0-214.3 170.1-390 379.2-391.7 102.8-0.3 200.6 38.9 273.7 112s112.9 170.3 112 273.8C892.7 724.4 717 894.5 502.7 894.5H197c-37.2 0-67.5-30.3-67.5-67.5z m379.6-652.5C324.6 176 174.5 331.6 174.5 521.2V827c0 12.4 10.1 22.5 22.5 22.5h305.7c189.6 0 345.2-150.1 346.7-334.6 0.8-91.3-34.3-177.1-98.9-241.6-63.8-63.8-148.4-98.8-238.6-98.8h-2.8z" p-id="8087"></path></svg>
        客服
      </li>
    </ul>
    <dl className="purchase-but">
      <dt onClick={() => { openProductOptions("alone") }}>¥14.8<br />单独购买</dt>
      <dd onClick={() => { openProductOptions("collage") }}>¥7.9<br />发起拼单</dd>
    </dl>
    <ProductOptions type={ productOptionsType } commodityId="545" />
  </div>)
}


// 链接redux数据
const mapStateToProps = (state) => {
  return {
    productOptionsPopupState: state.get("global").get("productOptionsPopupState"), // 商品选项弹窗状态
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 商品选项弹窗状态
    productOptionsPopupStateFun() {
      dispatch(productOptionsPopupStateFun());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickMenu)
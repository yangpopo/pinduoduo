// 明细参数

import React, { useState } from 'react';
import "./detailedParameter.scss";
import { Popup, Cell } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框

const DetailedParameter = (props) => {
  const [detailedParameterVisible, setDetailedParameterVisible] = useState(false);
  return(
    <div className="detailed-box">
      <div className="detailed-info"><span>净含量</span>500g</div>
      <div className="detailed-info"><span>包装方式</span>散装</div>
      <div className="detailed-info"><span>产地</span>中国大陆/河北省/邢台市</div>
      <div className="detailed-info"><span>山楂种类</span>山楂糕</div>
      <div className="detailed-info"><span>生成日期</span>2020-07-01</div>
      <div className="detailed-info"><span>保质期</span>365天</div>
      <div className="detailed-info" onClick={() => {setDetailedParameterVisible(true)}}><span>查看更多&gt;&gt;</span></div>
      {/* 明细参数弹窗 */}
      <Popup
        visible={detailedParameterVisible}
        onMaskClick={() => {setDetailedParameterVisible(false)}}
        destroy={false}
      >
        <PopupBox title="商品参数" className="parameter-popup" closeBut={()=>{setDetailedParameterVisible(false)}}>
          <div className="parameter-box">
            <div className="parameter-unit"><span>净含量</span>500g</div>
            <div className="parameter-unit"><span>包装方式</span>散装</div>
            <div className="parameter-unit"><span>产地</span>中国大陆/河北省/邢台市</div>
            <div className="parameter-unit"><span>山楂种类</span>山楂糕</div>
            <div className="parameter-unit"><span>生成日期</span>2020-07-01</div>
            <div className="parameter-unit"><span>保质期</span>365天</div>
            <div className="parameter-unit"><span>净含量</span>500g</div>
            <div className="parameter-unit"><span>包装方式</span>散装</div>
            <div className="parameter-unit"><span>产地</span>中国大陆/河北省/邢台市</div>
            <div className="parameter-unit"><span>山楂种类</span>山楂糕</div>
            <div className="parameter-unit"><span>生成日期</span>2020-07-01</div>
            <div className="parameter-unit"><span>保质期</span>365天</div>
            <div className="parameter-unit"><span>净含量</span>500g</div>
            <div className="parameter-unit"><span>包装方式</span>散装</div>
            <div className="parameter-unit"><span>产地</span>中国大陆/河北省/邢台市</div>
            <div className="parameter-unit"><span>山楂种类</span>山楂糕</div>
            <div className="parameter-unit"><span>生成日期</span>2020-07-01</div>
            <div className="parameter-unit"><span>保质期</span>365天</div>
          </div>
        </PopupBox>
      </Popup>
    </div>
  )
}

export default DetailedParameter;
// 评价

import React, { Fragment, useState, useEffect } from 'react';
import "./evaluate.scss";
import { Popup } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框
import InputComponents from "common/inputComponents/InputComponents"; // 输入框

const Evaluate = (props) => {
  // 发送提交
  const sendSubmit = (val) => {
    console.log(val, "666666")
  }


  return (<Fragment>
    <Popup
      visible={props.visibleState}
      onMaskClick={() => {props.setVisibleState(false)}}
      destroy={false}
    >
      <PopupBox title={`共有${ props.evaluatePopupData.length }条评论`} className="evaluate-popup" closeBut={()=>{props.setVisibleState(false)}}>
        <div className="evaluate-box">
          {
            props.evaluatePopupData.map((itemEvaluate, index) => {
              return (<div className="evaluate-info" key={itemEvaluate.sponsorId}>
                <img src={ itemEvaluate.headPortrait } alt="" />
                <div className="info-box">
                  <div className="name">
                    <b>{ itemEvaluate.sponsor }</b>
                    {
                      itemEvaluate.remind != null && (<Fragment>&nbsp;回复&nbsp;<b>asdf4545</b></Fragment>)
                    }
                  </div>
                  <p className="text">{ itemEvaluate.text }</p>
                  <div className="time">{ itemEvaluate.creationTime }</div>
                </div>
              </div>)
            })
          }
          <div className="evaluate-info-tips">欢迎你来加入谈论</div>
        </div>
        <InputComponents className="evaluate-fun" sendSubmit={sendSubmit}/>
      </PopupBox>
    </Popup>
  </Fragment>)
}

export default Evaluate;
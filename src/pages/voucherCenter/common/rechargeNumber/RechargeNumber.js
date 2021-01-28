// 充值数量选择

import React, { useState } from 'react';
import "./rechargeNumber.scss";
import { ActionSheet, Cell, Button } from 'zarm';

const RechargeNumber = (props) => {
  const [couponData, setCouponData] = useState(props.couponJson); // 优惠券信息

  // 充值数据
  const [numberOption, setNumberOption] = useState([
    {
      "id": 0,
      "originalPrice": 10,
      "discountPrice": 10,
      "state":0
    }, {
      "id": 1,
      "originalPrice": 20,
      "discountPrice": 20,
      "state":0
    }, {
      "id": 2,
      "originalPrice": 30,
      "discountPrice": 29.99,
      "state":0
    }, {
      "id": 3,
      "originalPrice": 50,
      "discountPrice": 49.99,
      "state":0
    }, {
      "id": 4,
      "originalPrice": 100,
      "discountPrice": 99.8,
      "state":1
    }, {
      "id": 5,
      "originalPrice": 200,
      "discountPrice": 199.8,
      "state":0
    }, {
      "id": 6,
      "originalPrice": 300,
      "discountPrice": 299.8,
      "state":0
    }, {
      "id": 7,
      "originalPrice": 400,
      "discountPrice": 399.8,
      "state":0
    }
  ]);

  // 充值方式数据
  const [optionData, setOptionData] = useState([]);

  // 充值弹窗状态
  const [actionSheetState, setActionSheetState] = useState(false);

  const choiceRecharge = (data) => {
    setOptionData([
      {
        text: <div className="option-val"><b>¥{data.originalPrice >= couponData.condition ? (data.discountPrice - couponData.price).toFixed(2): data.discountPrice.toFixed(2)}</b>({data.originalPrice}元话费)</div>,
        onClick: () => console.log('点击操作一'),
      },
      {
        text: <div className="option-pay"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5062"><path d="M0 488.96v-30.72C2.56 430.08 7.68 404.48 15.36 378.88c20.48-66.56 53.76-122.88 99.84-171.52C179.2 138.24 256 94.72 340.48 66.56c48.64-15.36 97.28-23.04 145.92-25.6 40.96-2.56 79.36 0 120.32 7.68 33.28 5.12 64 12.8 97.28 25.6 79.36 28.16 148.48 71.68 207.36 133.12 7.68 7.68 12.8 15.36 20.48 23.04-2.56 0-2.56 2.56-5.12 2.56-20.48 10.24-40.96 20.48-61.44 28.16-143.36 66.56-286.72 133.12-430.08 197.12-28.16 12.8-56.32 10.24-81.92-5.12-20.48-12.8-38.4-25.6-58.88-38.4-12.8-10.24-25.6-17.92-40.96-28.16-12.8-7.68-20.48-2.56-20.48 12.8v2.56c2.56 12.8 5.12 25.6 10.24 38.4 25.6 61.44 51.2 120.32 76.8 181.76 7.68 17.92 20.48 25.6 35.84 23.04 10.24 0 20.48-2.56 28.16-7.68 30.72-15.36 58.88-33.28 87.04-51.2 156.16-92.16 309.76-184.32 465.92-276.48 10.24-7.68 23.04-12.8 33.28-20.48 0 2.56 2.56 2.56 2.56 5.12 5.12 10.24 10.24 17.92 12.8 28.16 28.16 61.44 40.96 125.44 35.84 192-2.56 28.16-7.68 56.32-15.36 84.48-17.92 61.44-48.64 115.2-92.16 163.84-51.2 56.32-115.2 99.84-184.32 128-40.96 15.36-81.92 28.16-122.88 35.84-28.16 5.12-56.32 7.68-81.92 7.68h-46.08c-20.48-2.56-40.96-2.56-58.88-5.12-30.72-5.12-61.44-12.8-89.6-23.04H322.56c-12.8 7.68-23.04 15.36-35.84 23.04-28.16 17.92-53.76 33.28-81.92 48.64-5.12 2.56-12.8 5.12-17.92 5.12s-10.24-2.56-10.24-10.24c0-5.12 0-12.8 2.56-17.92 5.12-38.4 12.8-74.24 20.48-112.64 0-5.12 0-7.68-5.12-10.24-15.36-12.8-30.72-23.04-46.08-38.4-51.2-46.08-92.16-102.4-117.76-166.4C20.48 599.04 12.8 568.32 7.68 537.6c-2.56-12.8-2.56-25.6-2.56-40.96-5.12 0-5.12-2.56-5.12-7.68z" fill="#6BCC03" p-id="5063"></path></svg>微信支付</div>,
        onClick: () => console.log('点击操作二'),
      },
      {
        text: <div className="option-pay"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5623"><path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z" fill="#02A9F1" p-id="5624"></path></svg>支付宝</div>,
        onClick: () => console.log('点击操作三'),
      },
    ]);
    setActionSheetState(true);
  }

  return(<div className="recharge-number">
    {
      numberOption.map((itme, index) => {
        if (itme.originalPrice < couponData.condition) {
          return(
            <div className="number-option" key={itme.id} onClick={() => {choiceRecharge(itme)}}>
              <dl>
                <dt>{itme.originalPrice}元</dt>
                <dd>优惠价&nbsp;{itme.discountPrice.toFixed(2)}</dd>
              </dl>
              {itme.state == 1 ? <div className="tag-box">推荐</div> : ''}
            </div>
          )
        } else if (itme.originalPrice >= couponData.condition) {
          return(
            <div className="number-option discount" key={itme.id} onClick={() => {choiceRecharge(itme)}}>
              <dl>
              <dt>{itme.originalPrice}元</dt>
                <dd>券后价&nbsp;{(itme.discountPrice - couponData.price).toFixed(2)}</dd>
              </dl>
              {itme.state == 1 ? <div className="tag-box">推荐</div> : ''}
            </div>
          )
        }
        
      })
    }
    {/* 选择弹窗 */}
    <ActionSheet
      className="recharge-number-action-sheet"
      visible={actionSheetState}
      actions={optionData}
      cancelText="取消"
      onMaskClick={() => {
        setActionSheetState(false);
      }}
      onCancel={() => {
        setActionSheetState(false);
      }}
    />
  </div>)
}

export default RechargeNumber;
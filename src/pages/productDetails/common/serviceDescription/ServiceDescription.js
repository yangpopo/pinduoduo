// 服务说明

import React, { Fragment, useState } from 'react';
import "./serviceDescription.scss";
import { Popup, Cell } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框

const ServiceDescription = (props) => {
  const [serviceDescriptionVisible, setServiceDescriptionVisible] = useState(false); // 服务说明
  return (<Fragment>
    <Cell hasArrow className="service-info" onClick={() => {setServiceDescriptionVisible(true)}}>退货包运费<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="108629"><path d="M563.2 512c0 28.16-23.04 51.2-51.2 51.2s-51.2-23.04-51.2-51.2 23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2" p-id="108630"></path></svg>极速退款<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="108629"><path d="M563.2 512c0 28.16-23.04 51.2-51.2 51.2s-51.2-23.04-51.2-51.2 23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2" p-id="108630"></path></svg>全场包邮<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="108629"><path d="M563.2 512c0 28.16-23.04 51.2-51.2 51.2s-51.2-23.04-51.2-51.2 23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2" p-id="108630"></path></svg>7天无理由退货</Cell>
    {/* 服务说明 */}
    <Popup
      visible={serviceDescriptionVisible}
      onMaskClick={() => {setServiceDescriptionVisible(false)}}
      destroy={false}
    >
      <PopupBox title="优惠详情" className="service-description-popup" closeBut={()=>{setServiceDescriptionVisible(false)}}>
        <dl className="service-description-box">
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>退货包邮费</dt>
          <dd>订单发货后90天内如果申请退货退款或换货,拼多多将补贴退货运费</dd>
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>全场包邮</dt>
          <dd>所有商品包邮(偏远地区除外)</dd>
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>7天无理由退货</dt>
          <dd>满足相应条件时,消费者可申请7天无理由退货</dd>
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>48小时发货</dt>
          <dd>若超时未发货,消费者将会收到至少3元无门槛代金券</dd>
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>假一赔十</dt>
          <dd>若收到商品是假冒品牌,可获得十倍现金券赔偿</dd>
          <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120953"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="120954"></path></svg>极速退款</dt>
          <dd>拼单成功6小时内,待发货状态下,提交退款申请将立即退款</dd>
        </dl>
      </PopupBox>
    </Popup>
  </Fragment>)
}

export default ServiceDescription;
// 申请售后

import React, { Fragment, useState, useEffect } from 'react';
import "./applyAfterSales.scss";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { NavBar, Icon, Cell, Input, Picker } from "zarm";
import { WhiteSpace } from 'antd-mobile';

const ApplyAfterSales = (props) => {
  let getData = new URLSearchParams(useLocation().search);
  const [type, setType] = useState(getData.get("type") || 0);
  // 传递id值
  const { id } = useParams();

  // 点击跳转跳转
  let history = useHistory();
  const linkGoClick = (url = null) => {
    if (url == null) {
      history.go(-1);
    } else {
      history.push(url);
    }
  }

  // 申请类型
  const [applyType, setApplyType] = useState({label:"我要退货退款", value:"0"});

  // 申请类型--弹窗状态
  const [typePicker, setTypePicker] = useState(false);
  const [typeData, setTypeData] = useState([
    { value: '0', label: '我要退货退款' },
    { value: '1', label: '我要退款(无需退货)' }
  ]);

  // 申请原因
  const [applyReason, setApplyReason] = useState({label:"", value:""});

  // 申请原因--弹窗状态
  const [reasonPicker, setReasonPicker] = useState(false);
  const [reasonData, setReasonData] = useState([
    { value: '0', label: '多拍、拍错、不想要' },
    { value: '1', label: '重量/数量/大小等描述不符' },
    { value: '2', label: '图片/品种/口味/标签等描述不符' },
    { value: '3', label: '包装/商品破损' },
    { value: '4', label: '少件/漏发' },
    { value: '5', label: '商品变质/发霉/有异物' },
    { value: '6', label: '生产日期/保质期与产品描述不符' },
    { value: '7', label: '质量问题' },
    { value: '8', label: '商家发错货' },
    { value: '9', label: '假冒品牌' },
    { value: '10', label: '其他' },
  ]);

  // 收货状态
  const [receivingStatus, setReceivingStatus] = useState({label:"", value:""});

  // 收货状态--弹窗状态
  const [receivingStatusPicker, setReceivingStatusPicker] = useState(false);
  const [receivingStatusData, setReceivingStatusData] = useState([
    { value: '0', label: '未收到货' },
    { value: '1', label: '已收到货' },
  ]);

  // 退款金额
  const [refundAmount, setRefundAmount] = useState(515.54)

  return(<div className="apply-after-sales">
    <NavBar
      className="apply-after-sales-navbar"
      left={<Fragment>
      <Icon 
        type="arrow-left"
        theme="default"
        size="sm"
        onClick={ () => { linkGoClick() } }
      />
      </Fragment>}
      title="申请退货退款"
    />
    <div className="apply-after-sales-box">
      { type == 0 && <Cell className="service-explain" title="因您信誉良好 尊享：7天无理由退款" hasArrow /> }
      <Cell className="option-box" title="申请类型" hasArrow onClick={() => {setTypePicker(true)}} ><Input type="text" value={applyType.label} readOnly={true} /></Cell>
      { type == 1 && <Cell className="option-box" title="收货状态" hasArrow onClick={() => {setReceivingStatusPicker(true)}} ><Input type="text" value={receivingStatus.label} placeholder="点击选择收货状态" readOnly={true} /></Cell> }
      <Cell className="option-box" title="申请原因" hasArrow onClick={() => {setReasonPicker(true)}} ><Input type="text" value={applyReason.label} placeholder="点击选择收货状态" readOnly={true} /></Cell>
      <WhiteSpace />
      <div className="price-box">
        <div className="title-box">退款金额</div>
        <div className="input-box">
          ¥<Input className="input" type="number" value={refundAmount} placeholder="请输入" onChange={ (e) => { setRefundAmount(e) } } />
        </div>
        <div className="info-box">若退款成功，将退还给您¥14.9(实付金额)和¥14无门槛现金券</div>
      </div>
      <div className="describe-box">
        <div className="title-box">
          <span className="title">退款金额</span>
          <span className="describe">您还可以输入170字</span>
        </div>
        <Input className="describe-content" autoHeight type="text" rows={3} placeholder="请您详细填写申请说明" />
        <div className="file-but">
          <svg className="icon-camera" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5570" data-spm-anchor-id="a313x.7781069.1998910419.i3"><path d="M845.75 233.87h-83.43l-27.82-55.62c-16.39-32.36-24.9-55.63-55.63-55.63H345.13c-30.72 0-40.88 26.54-55.63 55.63l-27.81 55.62h-83.44A111.25 111.25 0 0 0 67 345.12v445a111.25 111.25 0 0 0 111.25 111.26h667.5A111.25 111.25 0 0 0 957 790.12v-445a111.25 111.25 0 0 0-111.25-111.25z m55.62 556.25a55.63 55.63 0 0 1-55.62 55.63h-667.5a55.63 55.63 0 0 1-55.62-55.63v-445a55.63 55.63 0 0 1 55.62-55.62H289.5l27.81-55.63c19.66-32.36 24.9-55.62 55.62-55.62h278.13c30.72 0 36 23.26 55.63 55.62l27.81 55.63h111.25a55.62 55.62 0 0 1 55.62 55.62zM512 345.12c-122.88 0-222.5 99.62-222.5 222.5s99.62 222.5 222.5 222.5 222.5-99.62 222.5-222.5-99.62-222.5-222.5-222.5z m0 389.38a166.88 166.88 0 1 1 166.87-166.88A166.87 166.87 0 0 1 512 734.5z" p-id="5571"></path></svg>
          上传图片
        </div>
      </div>
      <WhiteSpace />
      <Cell className="option-box" title="联系电话" ><Input type="text" value="15558787878" readOnly={true} /></Cell>
      <WhiteSpace />
      <div className="submit-but">提交申请</div>
    </div>

    {/* 申请类型--弹窗 */}
    <Picker
      visible={ typePicker }
      value={ type }
      dataSource={ typeData }
      onOk={(selected) => {
        setType(selected[0].value); // 弹窗值
        setApplyType(selected[0]);
        setTypePicker(false);
      }}
      onCancel={() => {setTypePicker(false)}}
    />

    {/* 申请原因--弹窗 */}
    <Picker
      visible={ reasonPicker }
      value={ receivingStatus.value }
      dataSource={ reasonData }
      onOk={(selected) => {
        setApplyReason(selected[0]); // 弹窗值
        setReasonPicker(false);
      }}
      onCancel={() => {setReasonPicker(false)}}
    />

    {/* 收货状态--弹窗 */}
    <Picker
      visible={ receivingStatusPicker }
      value={ receivingStatus.value }
      dataSource={ receivingStatusData }
      onOk={(selected) => {
        setReceivingStatus(selected[0]); // 弹窗值
        setReceivingStatusPicker(false);
      }}
      onCancel={() => {setReceivingStatusPicker(false)}}
    />

  </div>)
}

export default ApplyAfterSales;
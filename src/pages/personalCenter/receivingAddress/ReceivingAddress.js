// 收货地址

import React, { Fragment, useState, useEffect, useRef } from 'react';
import "./receivingAddress.scss";
import { Checkbox, Modal, Button, Cell, Select, Input } from "zarm";
import { WhiteSpace, NavBar ,Icon } from 'antd-mobile';
import { getQueryVariable } from "assets/js/utils";

const ReceivingAddress = (props) => {
  // 选择状态
  const [state, setState] = useState(getQueryVariable(props, "state"));

  // 选择对象id
  const [stateObjectId, setStateObjectId] = useState(null);

  const focusInput = useRef();
  // 级联数据
  const dataSource = [
    {
      value: '1',
      label: '北京市',
      children: [
        { value: '11', label: '海淀区' },
        { value: '12', label: '西城区' },
      ],
    },
    {
      value: '2',
      label: '上海市',
      children: [
        { value: '21', label: '杨浦区' },
        { value: '22', label: '静安区' },
      ],
    },
  ];

  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      props.history.goBack();
    } else {
      props.history.replace(url);
    }
  }

  // 地址数据
  const [dataJosn, setDataJosn] = useState([
    {
      name: "XXX",
      phone: 1548488878787,
      province: "重庆市",
      city: "重庆市",
      county: "渝中区",
      detailedAddress: "撒打发斯蒂芬阿斯顿发生阿萨德发54545",
      id: 0,
    }, {
      name: "YYY",
      phone: 1884878323,
      province: "重庆市",
      city: "重庆市",
      county: "渝北区",
      detailedAddress: "水电费呵呵是的法规我",
      id: 2,
    }, {
      name: "KKK",
      phone: 1555345345,
      province: "重庆市",
      city: "重庆市",
      county: "江北区",
      detailedAddress: "干活就发鬼地方大幅提高问题233",
      id: 3,
    },
  ]);

  // 选中默认id
  const [selectedId, setSelectedId] = useState(0);

  // 修改弹窗
  const [modifyPopup, setModifyPopup] = useState(false);

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });

  return(<div className="receiving-address">
    <NavBar
      mode="light"
      className="receiving-address-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >收货地址</NavBar>
    <div className="receiving-address-box">
      {
        dataJosn.map((item, index) => {
          return(<Fragment key={item.id}>
            <div className="address-unit">
              <div className="info-box">
                <dl className="info">
                  <dt>{item.name}，{item.phone}</dt>
                  <dt>{item.province}&nbsp;{item.city}&nbsp;{item.county}&nbsp;{item.detailedAddress}</dt>
                </dl>
                {
                  state === "select" && 
                  <span className="state">
                    {
                      stateObjectId == item.id ?
                      <svg className="icon-hook" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1111"><path d="M431.47 793.782c-11.365 0-22.332-4.378-30.589-12.286l-235.495-225.535c-17.64-16.894-18.245-44.891-1.35-62.528 16.894-17.64 44.891-18.245 62.532-1.351l201.055 192.552 364.692-443.171c15.519-18.86 43.39-21.567 62.253-6.049 18.861 15.519 21.568 43.39 6.048 62.251l-394.992 479.993c-7.821 9.504-19.248 15.319-31.534 16.047-0.874 0.052-1.748 0.078-2.621 0.078z" p-id="1112"></path></svg>
                      :
                      <b onClick={() => {setStateObjectId(item.id)}}>使用</b>
                    }
                  </span>
                }
                
              </div>
              <div className="operate-box">
                <Checkbox className="radio-box" value={item.id} checked={item.id == selectedId} onChange={() => {setSelectedId(item.id)}}>{item.id == selectedId ? '已设为默认' : '设为默认'}</Checkbox>
                <div className="but-box">
                  <span onClick={() => {
                    Modal.confirm({
                      title: '删除',
                      content: '确定要删除改地址吗?',
                      onCancel: () => {
                        console.log('点击cancel');
                      },
                      onOk: () => {
                        console.log('点击ok');
                      },
                    });
                  }}>删除</span>
                  <span onClick={() => {setModifyPopup(true)}}>修改</span>
                </div>
              </div>
            </div>
            <WhiteSpace />
          </Fragment>)
        })
      }
      <div onClick={() => {setModifyPopup(true)}} className="add-address-but"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7321"><path d="M512 512m-469.5 0a469.5 469.5 0 1 0 939 0 469.5 469.5 0 1 0-939 0Z" fill="#FFFFFF" p-id="7322"></path><path d="M553 471.1V259c0-22.6-18.3-41-41-41-22.6 0-41 18.3-41 41v212.1H258.9c-22.6 0-41 18.3-41 41 0 22.6 18.3 41 41 41H471V765c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V553h212.1c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41l-212.1 0.1z" fill="#e02e24" p-id="7323"></path></svg>添加收货地址
      </div>
    </div>
    {/* 修改收货地址弹窗 */}
    <Modal
      className="modal-box"
      visible={modifyPopup}
      title="修改收货地址"
      closable
      onCancel={() => setModifyPopup(false)}
      footer={
        <Button
          block
          theme="primary"
          onClick={() => setModifyPopup(false)}
        >保存</Button>
      }
      mountContainer={() => {
        return document.querySelector(".receiving-address")
      }}
    >
      <Cell title="收货人">
        <Input
          clearable
          type="text"
          placeholder="请输入"
          onChange={(value) => {
            console.log(`onChange: ${value}`);
          }}
          onBlur={(value) => console.log(`onBlur: ${value}`)}
        />
      </Cell>
      <Cell title="手机号">
        <Input
          ref={focusInput}
          type="number"
          placeholder="请输入手机号"
          // value={value}
          onChange={(val) => {
            console.log(val);
          }}
        />
      </Cell>
      <Cell title="地区">
        <Select
          dataSource={dataSource}
          onOk={(selected) => {
            console.log('Select onOk: ', selected);
            this.setState({
              value: selected.map(item => item.value),
            });
          }}
        />
      </Cell>
      <Cell title="详细地址">
        <Input
          clearable
          type="text"
          placeholder="请输入"
          onChange={(value) => {
            console.log(`onChange: ${value}`);
          }}
          onBlur={(value) => console.log(`onBlur: ${value}`)}
        />
      </Cell>
    </Modal>
  </div>)
}

export default ReceivingAddress;
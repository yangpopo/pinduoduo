// 聊天单元

import React, { Fragment, useState, useEffect } from 'react';
import "./chatUnit.scss";
import { useHistory } from "react-router-dom";
import { SwipeAction, List, Badge } from 'antd-mobile';

const ChatUnit = (props) => {
  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = (val) => {
    history.push("/dialogue/" + val);
  }

  const [dataJson, setDataJson] = useState(props.dataJson);
  

  // 时间格式转换
  const timeFormatConversion = (val) => {
    // 指定日期和时间
    let EndTime = new Date(val);
    // 当前系统时间
    let NowTime = new Date();
    let t = NowTime.getTime() - EndTime.getTime();
    let d = Math.floor(t / 1000 / 60 / 60 / 24);
    let h = Math.floor(t / 1000 / 60 / 60 % 24);
    let m = Math.floor(t / 1000 / 60 % 60);
    if (d === 0) {
      return h + ":" + m;
    } else if (d === 1) {
      return "昨天";
    } else {
      return EndTime.getFullYear().toString() + "-" + (EndTime.getMonth() + 1).toString() + "-" +  EndTime.getDate().toString();
    }
  }

  useEffect(() => {

  }, [dataJson]);

  return (
    <List className="chat-unit">
      {
        dataJson.map((item, index) => {
          return (<SwipeAction
            key={ item.id.toString() + index.toString() }
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                text: '删除',
                onPress: () => console.log('delete'),
                style: { backgroundColor: '#e02e24', color: 'white' },
              },
            ]}
          >
            <List.Item 
              onClick={() => {linkGoClick(item.id)}} 
              extra={<Fragment><span>{ timeFormatConversion(item.time.replace(/-/g, "/")) }</span><Badge text={item.messagesNumber} overflowCount={10} /></Fragment>}
            >
              <img src={ item.userImg } alt="" />
              <dl>
                <dt>{ item.name }</dt>
                <dd>{ item.messages }</dd>
              </dl>
            </List.Item>
          </SwipeAction>)
        })
      }
    </List>
  )
}

export default ChatUnit;
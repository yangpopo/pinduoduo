// 产品橱窗列表

import React from 'react';
import "./windowList.scss";
import stationImg from "assets/img/public/station-img.jpg"; // 站位图片

const WindowList = (props) => {
  // 点击跳转跳转
  const linkGoClick = (url) => {
    props.history.replace("/product-details/" + url);
  }
  
  // 数字格式
  const numberFormat = (val) => {
    if (val < 1000) {
      return val
    } else if (val >= 1000 && val < 10000) {
      return (val / 1000).toFixed(2) + "千"
    } else if (val >= 10000 && val <100000) {
      return (val / 10000).toFixed(2) + "万"
    } else {
      return "10万+"
    }
  }

  let leftFormatData = [], rightFormatData = [];
  for (let i = 0; i < props.dataJson.length; i++){
    if (!(i % 2)) {
      leftFormatData.push(props.dataJson[i]);
    } else {
      rightFormatData.push(props.dataJson[i]);
    }
  }
  let leftData = leftFormatData;
  let rightData = rightFormatData;
  
  return (<div className="window-list">
      <div className="list-left">
        {
          leftData.map((item, index) => {
            return (
              <div className="unit-box" onClick={ () => {linkGoClick(item.id)} } key={item.id.toString() + index.toString()}>
                <img imgurl={item.imgUrl} src={stationImg} alt="" className="img-box"/>
                <div className="box">
                  <div className="title-box"><span>活动标签</span>{item.title}</div>
                  <div className="tag-box">
                    {
                      item.tag.map((title, index) => {
                        return (<b key={index}>{title}</b>)
                      })
                    }
                  </div>
                  <div className="info-box">
                    <div className="info"><b className="price">¥<span>{item.price}</span></b>总售{numberFormat(item.quantitySold)}件</div>
                    <div className="user-box">
                      {
                        item.userImg.map((img, index) => {
                          return (<img imgurl={img} src={stationImg} alt="" key={index} />)
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="list-right"  key="right">
        {
          rightData.map((item, index) => {
            return (
              <div className="unit-box" onClick={ () => {linkGoClick(item.id)} } key={item.id.toString() + index.toString()}>
                <img imgurl={item.imgUrl} src={stationImg} alt="" className="img-box"/>
                <div className="box">
                  <div className="title-box"><span>活动标签</span>{item.title}</div>
                  <div className="tag-box">
                    {
                      item.tag.map((title, index) => {
                        return (<b key={index}>{title}</b>)
                      })
                    }
                  </div>
                  <div className="info-box">
                    <div className="info"><b className="price">¥<span>{item.price}</span></b>总售{numberFormat(item.quantitySold)}件</div>
                    <div className="user-box">
                      {
                        item.userImg.map((img, index) => {
                          return (<img imgurl={img} src={stationImg} alt="" key={index} />)
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
  </div>)
}

export default WindowList;
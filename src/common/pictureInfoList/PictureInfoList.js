// 图片信息列表

import React from 'react';
import "./pictureInfoList.scss";
import { useHistory } from "react-router-dom"; // 路由
import stationImg from "assets/img/public/station-img.jpg"; // 站位图片


const PictureInfoList = (props) => {
  const imgUrl = props.dataJson.imgUrl;
  const price = props.dataJson.price;
  const id = props.dataJson.id;
  const title = props.dataJson.title;
  const tag = props.dataJson.tag;
  const activity = props.dataJson.activity;
  const quantitySold = props.dataJson.quantitySold;

  let history = useHistory();
  // 点击跳转跳转
  const linkGoClick = () => {
    history.push("/product-details/" + id);
  }

  return (
    <div className="picture-info-list" onClick={linkGoClick}>
      <img className="cover-img" imgurl={imgUrl} src={stationImg} alt="" />
      <div className="info">
        <b className="title">{title}</b>
        <dl>
          <dd>{
            tag.map((item, index) => {
              return (<b key={index}>{item}</b>)
            })
          }</dd>
          <dt><b><i>¥</i>{price}</b>已拼{quantitySold}件</dt>
        </dl>
      </div>
    </div>
  )
}

export default PictureInfoList;
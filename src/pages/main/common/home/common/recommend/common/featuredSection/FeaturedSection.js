// 特色栏目

import React from 'react';
import "./featuredSection.scss";
import { useHistory } from "react-router-dom";
import FeaturedSectionIcon01 from "assets/img/recommend/featured-section-icon-01.jpg";


const FeaturedSection = (props) => {
  const icon = props.dataJson.icon;
  const title = props.dataJson.title;
  const description = props.dataJson.description;
  const url = props.dataJson.url;
  const data = props.dataJson.data;
  
  let history = useHistory();

  // 点击跳转跳转
  const linkGoClick = (val) => {
    history.push("/" + url + "/" + val);
  }

  return (
    <div className="featured-section">
      <div className="title-box" onClick={linkGoClick}>
        { icon }
        <b>{ title }</b>
        <i>{ description }</i>
      </div>
      <img className="dividing-line" src={FeaturedSectionIcon01} alt="" />
      {
        data.map((item, index) => {
          return (
            <dl className="commodity" onClick={ () => { linkGoClick(item.id) } } key={item.id}>
              <dt><img src={ item.imgUrl } alt="" /></dt>
              <dd>¥<b>{ item.price }</b></dd>
            </dl>
          )
        })
      }
    </div>
  );
}

export default FeaturedSection
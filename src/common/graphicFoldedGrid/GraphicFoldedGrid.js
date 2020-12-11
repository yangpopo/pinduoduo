// 图文折叠格子

import React, { useState, useEffect } from 'react';
import "./graphicFoldedGrid.scss";
import { Link } from "react-router-dom";

const GraphicFoldedGrid = (props) => {
  const [dataJson, setDataJson] = useState([]);
  const [switchStatus, setSwitchStatus] = useState(false); // 状态
  const switchStatusClick = () => {
    setSwitchStatus(!switchStatus);
  };

  useEffect(() => {
    setDataJson(props.dataJson);
  })

  return (<div className="graphic-golded-grid">
    {
      // eslint-disable-next-line array-callback-return
      dataJson.map((item, index) => {
        if (!switchStatus){
          if(index < 9){
            return (
              <Link className="unit-box" to={ item.id } key={ item.id } >
                <img src={ item.imgUrl } alt=""/>
                <b>{ item.title }</b>
              </Link>
            )
          }
        } else {
          return (
            <Link className="unit-box" to={ item.id } key={ item.id } >
              <img src={ item.imgUrl } alt=""/>
              <b>{ item.title }</b>
            </Link>
          )
        }
      })
    }
    
    {
      switchStatus ? 
        <div className="unit-box but-close" onClick={switchStatusClick}>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="63542"><path d="M510.046 0.734c-279.953 0-506.899 226.946-506.899 506.9s226.946 506.899 506.899 506.9 506.899-226.946 506.9-506.9-226.946-506.899-506.9-506.9zM824.287 637.572c-8.193 8.201-18.946 12.303-29.69 12.304s-21.498-4.101-29.69-12.304l-241.61-241.603c-4.314-4.297-11.336-4.314-15.65 0l-241.61 241.603c-16.387 16.406-42.994 16.406-59.381 0-16.406-16.396-16.406-42.985 0-59.381l241.61-241.603c37.072-37.057 97.374-37.057 134.411 0l241.61 241.603c16.406 16.396 16.406 42.986 0 59.381z" p-id="63543"></path></svg>
          <b>收起</b>
        </div>
      :
        <div className="unit-box but-open" onClick={switchStatusClick}>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="63542"><path d="M510.046 0.734c-279.953 0-506.899 226.946-506.899 506.9s226.946 506.899 506.899 506.9 506.899-226.946 506.9-506.9-226.946-506.899-506.9-506.9zM824.287 637.572c-8.193 8.201-18.946 12.303-29.69 12.304s-21.498-4.101-29.69-12.304l-241.61-241.603c-4.314-4.297-11.336-4.314-15.65 0l-241.61 241.603c-16.387 16.406-42.994 16.406-59.381 0-16.406-16.396-16.406-42.985 0-59.381l241.61-241.603c37.072-37.057 97.374-37.057 134.411 0l241.61 241.603c16.406 16.396 16.406 42.986 0 59.381z" p-id="63543"></path></svg>
          <b>展开全部</b>
        </div>
        
    }
  </div>)
}

export default GraphicFoldedGrid;
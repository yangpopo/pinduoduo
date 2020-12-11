// 商品详情

import React, { Fragment, useState, useEffect } from 'react';
import "./commodityDetails.scss";
import { Cell, Icon, Popper, ImagePreview } from 'zarm';
import { Link } from 'react-router-dom';

import stationImg from "assets/img/public/station-img.jpg"; // 站位图片

import product01 from "assets/img/picture/product-01.jpg";
import product02 from "assets/img/picture/product-02.jpg";
import product03 from "assets/img/picture/product-03.jpg";
import product04 from "assets/img/picture/product-04.jpg";
import product05 from "assets/img/picture/product-05.jpg";
import product06 from "assets/img/picture/product-06.jpg";
import product07 from "assets/img/picture/product-07.jpg";
import product08 from "assets/img/picture/product-08.jpg";
import product09 from "assets/img/picture/product-09.jpg";
import product10 from "assets/img/picture/product-10.jpg";
import product11 from "assets/img/picture/product-11.jpg";
import product12 from "assets/img/picture/product-12.jpg";
import product13 from "assets/img/picture/product-13.jpg";
import product14 from "assets/img/picture/product-14.jpg";


import DetailedParameter from "./common/detailedParameter/DetailedParameter"; // 明细参数

const CommodityDetails = (props) => {
  const [visible, setVisible] = useState(false); // 显示状态
  const [ImagePreviewVisible, setImagePreviewVisible] = useState(false); // 图片预览状态
  const [originImages, setOriginImages] = useState(['']); // 图片地址
  

  const closePopper = (e) => {
      setVisible(false);
  }

  return(<div className="commodity-details">
    <Cell title="商品详情" className="commodity-details-title"
      description={
        <Popper
          content={
            <Fragment>
              <Cell onClick={(e) => {closePopper(e)}} title={<Link to="/asdfasfas" className="help-link"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8795"><path d="M511.996655 32.584263C247.168238 32.584263 32.480572 247.271929 32.480572 512.100346c0 264.835106 214.687666 479.522772 479.516083 479.522772 264.835106 0 479.522772-214.687666 479.522773-479.522772 0-264.828417-214.687666-479.516083-479.522773-479.516083z m3.429148 753.52814c-28.112858 0.005352-51.003724-22.583139-51.379686-50.689307 0.37061-28.222569 23.157117-51.009076 51.379686-51.381024 28.107506 0.375962 50.695997 23.268166 50.690645 51.381024a50.697335 50.697335 0 0 1-50.690645 50.689307z m86.313377-290.448687a141.136927 141.136927 0 0 0-51.381024 84.944661v34.247326c-4.363032 15.292688-18.344536 25.839692-34.247326 25.839693a35.629421 35.629421 0 0 1-34.254016-25.839693v-26.032356a194.536907 194.536907 0 0 1 71.93049-128.782362 177.447362 177.447362 0 0 0 64.393857-112.344395 89.073553 89.073553 0 0 0-26.017639-70.389179 89.064187 89.064187 0 0 0-70.576492-25.514573c-68.501342 0-106.862843 44.52808-108.916585 128.102687-1.740664 17.304954-16.17573 30.563969-33.568989 30.824868-17.251437-0.298361-31.472432-13.625611-32.87861-30.824868v-4.797863a165.094134 165.094134 0 0 1 175.364184-178.108305 144.551358 144.551358 0 0 1 113.088291 39.490724 144.551358 144.551358 0 0 1 44.470549 111.216509 210.303227 210.303227 0 0 1-77.40669 147.967126z m0 0" p-id="8796"></path></svg>常见问题</Link>} />
              <Cell onClick={(e) => {closePopper(e)}} title={<Link to="/asdfasfas" className="help-link"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12901"><path d="M780.839385 354.304L426.141538 708.923077a2.835692 2.835692 0 0 1-1.575384 0.866461l0.393846 0.393847-151.867077 40.644923 40.723692-151.867077 0.393847 0.472615h-0.07877a2.914462 2.914462 0 0 1 0.787693-1.654154l354.776615-354.776615a2.835692 2.835692 0 0 1 2.993231-0.708923 31.744 31.744 0 0 1 36.864 5.907692l66.166154 66.244923a31.822769 31.822769 0 0 1 5.907692 36.785231 2.993231 2.993231 0 0 1-0.787692 2.993231zM512 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024z" p-id="12902"></path></svg>意见反馈</Link>} />
              <Cell onClick={(e) => {closePopper(e)}} title={<Link to="/asdfasfas" className="help-link"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14053"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 256c28.3 0 51.2 32.8 51.2 73.1l-25.6 219.4c-4.8 25-14 36.6-25.6 36.6-11.6 0-21.6-10.5-25.6-36.6l-25.6-219.4c0-40.4 22.9-73.1 51.2-73.1z m0 512c-28.3 0-51.2-33-51.2-73.6s22.9-73.6 51.2-73.6 51.2 33 51.2 73.6S540.3 768 512 768z" p-id="14054"></path></svg>举报商品</Link>} />
            </Fragment>
          }
          visible={visible}
          trigger="click"
          destroy={false}
          direction="bottomRight"
          animationType="fade"
          className="commodity-popper"
          mountContainer={() => document.querySelector(".product-details")}
        >
          <Icon size="sm" 
          type="question-round" 
          onClick={() => {
            setVisible(true);
          }}/>
        </Popper>
      }
    />
    <DetailedParameter />
    <div className="img-list-box">
      <img imgurl={product01} src={stationImg} alt="" onClick={ () => {setOriginImages([product01]); setImagePreviewVisible(true); } }/>
      <img imgurl={product02} src={stationImg} alt="" onClick={ () => {setOriginImages([product02]); setImagePreviewVisible(true); } }/>
      <img imgurl={product03} src={stationImg} alt="" onClick={ () => {setOriginImages([product03]); setImagePreviewVisible(true); } }/>
      <img imgurl={product04} src={stationImg} alt="" onClick={ () => {setOriginImages([product04]); setImagePreviewVisible(true); } }/>
      <img imgurl={product05} src={stationImg} alt="" onClick={ () => {setOriginImages([product05]); setImagePreviewVisible(true); } }/>
      <img imgurl={product06} src={stationImg} alt="" onClick={ () => {setOriginImages([product06]); setImagePreviewVisible(true); } }/>
      <img imgurl={product07} src={stationImg} alt="" onClick={ () => {setOriginImages([product07]); setImagePreviewVisible(true); } }/>
      <img imgurl={product08} src={stationImg} alt="" onClick={ () => {setOriginImages([product08]); setImagePreviewVisible(true); } }/>
      <img imgurl={product09} src={stationImg} alt="" onClick={ () => {setOriginImages([product09]); setImagePreviewVisible(true); } }/>
      <img imgurl={product10} src={stationImg} alt="" onClick={ () => {setOriginImages([product10]); setImagePreviewVisible(true); } }/>
      <img imgurl={product11} src={stationImg} alt="" onClick={ () => {setOriginImages([product11]); setImagePreviewVisible(true); } }/>
      <img imgurl={product12} src={stationImg} alt="" onClick={ () => {setOriginImages([product12]); setImagePreviewVisible(true); } }/>
      <img imgurl={product13} src={stationImg} alt="" onClick={ () => {setOriginImages([product13]); setImagePreviewVisible(true); } }/>
      <img imgurl={product14} src={stationImg} alt="" onClick={ () => {setOriginImages([product14]); setImagePreviewVisible(true); } }/>
    </div>
    <ImagePreview visible={ImagePreviewVisible} images={originImages} onClose={ () => {setImagePreviewVisible(false)} }  maxScale={5} />
  </div>)
}




export default CommodityDetails;
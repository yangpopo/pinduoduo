// 幻灯片

import React, { Fragment, useState, useEffect } from 'react';
import "./slidePictureBox.scss";
import { Carousel, ImagePreview } from 'zarm';


// import ImagesView from 'images-mview';
// import "images-mview/es/index.css"

import ProductMap01 from "assets/img/picture/product-map-01.jpg";
import ProductMap02 from "assets/img/picture/product-map-02.jpg";
import ProductMap03 from "assets/img/picture/product-map-03.jpg";
import ProductMap04 from "assets/img/picture/product-map-04.jpg";
import ProductMap05 from "assets/img/picture/product-map-05.jpg";
import ProductMap06 from "assets/img/picture/product-map-06.jpg";
import ProductMap07 from "assets/img/picture/product-map-07.jpg";
import ProductMap08 from "assets/img/picture/product-map-08.jpg";

const SlideBox = (props) => {
  const [data, setData] = useState({
    imgList: [ProductMap01, ProductMap02, ProductMap03, ProductMap04, ProductMap05,ProductMap06, ProductMap07, ProductMap08],
    info:{
      name:"善存佳维片60片成人男女补充多钟维生素矿物质远离亚健康",
      price:39.8,
      id:0
    }
  }); // 展示数据

  const [imgIndex, setImgIndex] = useState(0); // 图片位置
  const [visible, setVisible] = useState(false); // 显示状态
  
  const hide = (w) => {
    console.log(w)
  }

  useEffect(() => {

  });

  return (<Fragment>
    <Carousel
      className="carousel-box"
      activeIndex={imgIndex}
      loop={true}
      onChange={(index) => {
        setImgIndex(index);
      }}
    >
      {data.imgList.map((val, index) => (
        <img src={val} alt={data.info.name} draggable={false} key={index} onClick={() => {setVisible(true)}} />
      ))}
    </Carousel>
    <ImagePreview visible={visible} images={data.imgList} onChange={(e) => {setImgIndex(e)}} onClose={() => {setVisible(false)}} activeIndex={imgIndex} /> 

    
  </Fragment>)
}

export default SlideBox;
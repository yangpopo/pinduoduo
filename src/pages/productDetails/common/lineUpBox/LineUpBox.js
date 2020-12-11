// 等待拼单的框

import React, { Fragment, useState, useEffect } from 'react';
import "./lineUpBox.scss";
import { Cell, Button, Popup } from 'zarm';
import { connect } from "react-redux"; // 链接全局状态
import { productOptionsPopupStateFun } from "../../../../store/global/";
import ProductOptions from "common/productOptions/ProductOptions"; // 弹窗状态

import Swiper from "swiper";
import "../../../../../node_modules/swiper/dist/css/swiper.min.css";
import headPortrait from "assets/img/picture/head-portrait.jpg";

const LineUpBox = (props) => {
  const [PopupVisible, setPopupVisible] = useState(false); // 弹窗状态
  const [productOptionsType, setProductOptionsType] = useState("collage"); // collage:拼单 alone:单独购买

  const openProductOptionsPopup = () => {
    setPopupVisible(false)
    props.productOptionsPopupStateFun();
  }

  useEffect(() => {
    let lineUpSwiper = new Swiper('.line-up-swiper-container', {
      direction: 'vertical',
      spaceBetween: 0,
      loop : true,
      autoplay : {
        delay:5000
      },
    });
    return () => {
      lineUpSwiper.destroy(true);
    }
  });
  return (
    <div className="line-up-box">
      <Cell onClick={() => setPopupVisible(true)} hasArrow className="line-up-title" description="查看全部" >3人在拼单,可直接参与</Cell>
      <div className="swiper-container line-up-swiper-container swiper-no-swiping">
          <div className="swiper-wrapper">
            <div className="swiper-slide line-up-slide">
              <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
                <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
            </div>
            <div className="swiper-slide line-up-slide">
              <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
                <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
            </div>
            <div className="swiper-slide line-up-slide">
              <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
                <Cell title={<Fragment><img src={headPortrait} alt="" />大风歌</Fragment>}
                description={<Fragment>
                  <dl>
                    <dt>还差<b>1人</b>拼成</dt>
                    <dd>剩余14:56:10.2</dd>
                  </dl>
                  <Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button>
                </Fragment>} />
            </div>
          </div>
        </div>
        {/* 弹窗 */}
        <Popup
          visible={PopupVisible}
          onMaskClick={() => setPopupVisible(false)}
          direction="center"
          className="popup-line-up"
        >
          <div className="popup-box">
            <i className="close-but" onClick={() => setPopupVisible(false)}><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2517"><path d="M583.238 523.293l399.297-397.137c18.87-18.828 18.954-49.295 0.166-68.123-18.828-18.994-49.21-18.994-68.081-0.251l-399.339 397.301-395.931-397.095c-18.703-18.745-49.251-18.911-68.081-0.083-18.828 18.745-18.87 49.251-0.083 68.081l395.764 397.055-399.049 396.971c-18.87 18.745-18.954 49.21-0.207 68.123 9.436 9.519 21.737 14.214 34.122 14.214 12.304 0 24.606-4.697 33.999-14.048l399.173-397.055 399.465 400.711c9.436 9.519 21.737 14.214 34.122 14.214 12.304 0 24.606-4.697 33.957-14.048 18.828-18.828 18.87-49.295 0.083-68.123l-399.38-400.711zM583.238 523.293z" p-id="2518"></path></svg></i>
            <h6 className="title-box">正在拼单</h6>
            <div className="line-box" onTouchMove={(e) => {e.stopPropagation()}}>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
              <div className="line-up-slide">
                <Cell title={<Fragment><img src={headPortrait} alt="" />
                    <dl>
                      <dt>还差<b>1人</b>拼成</dt>
                      <dd>剩余14:56:10.2</dd>
                    </dl></Fragment>}
                  description={<Fragment><Button size="xs" onClick={ () => {openProductOptionsPopup()} }>去拼单</Button></Fragment>} />
              </div>
            </div>
          </div>
      </Popup>
      <ProductOptions type={ productOptionsType } />
    </div>
  )
}


// 链接redux数据
const mapStateToProps = (state) => {
  return {
    productOptionsPopupState: state.get("global").get("productOptionsPopupState"), // 商品选项弹窗状态
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 商品选项弹窗状态
    productOptionsPopupStateFun() {
      dispatch(productOptionsPopupStateFun());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineUpBox)
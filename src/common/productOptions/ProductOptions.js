// 商品选项

import React, { Fragment, useState, useEffect } from 'react';
import "./productOptions.scss";
import { connect } from "react-redux"; // 链接全局状态
import { productOptionsPopupStateFun } from "../../store/global/";
import { Popup, Stepper } from 'zarm';

import PictureInfoList01 from "assets/img/picture/picture-info-list-01.jpg";
import PictureInfoList02 from "assets/img/picture/picture-info-list-02.jpg";
import PictureInfoList03 from "assets/img/picture/picture-info-list-03.jpg";
import PictureInfoList04 from "assets/img/picture/picture-info-list-04.jpg";

const ProductOptions = (props) => {
  const [numberValue, setNumberValue] = useState(0); // 数量值
  // 产品信息
  const [commodityInfo, setCommodityInfo] = useState({
    defaultImgUrl: PictureInfoList01,
    price: [32.00,54.00],
    info:"再售912件后恢复市场价",
    type:[
      {
        title: "颜色",
        typeId: 0,
        detailed: [
          { name: "苹果新紫色", id: 0, imgUrl: PictureInfoList01, price: 32.00, stock: 10, info:"再售912件后恢复35",},
          { name: "古董白", id: 1, imgUrl: PictureInfoList02, price: 35.00, stock: 20, info:"再售912件后恢复25",},
          { name: "黑色", id: 2, imgUrl: PictureInfoList03, price: 46.00, stock: 30, info:"再售912件后恢复30",},
          { name: "冰蓝色", id: 3, imgUrl: PictureInfoList04, price: 54.00, stock: 45, info:"再售912件后恢复48",},
        ]
      },
      {
        title: "型号",
        typeId: 1,
        detailed: [
          { name: "苹果6/6s(4.7寸)", id: 0, imgUrl: PictureInfoList01, price: 32.00, stock: 10},
          { name: "苹果6P/6sp(5.5寸)", id: 1, imgUrl: PictureInfoList02, price: 35.00, stock: 20},
          { name: "苹果7/8(4.7寸)", id: 2, imgUrl: PictureInfoList03, price: 46.00, stock: 30},
          { name: "苹果7P/8plus(5.5寸)", id: 3, imgUrl: PictureInfoList04, price: 54.00, stock: 45},
        ]
      }
    ]
  });

  // 商品类型选择
  const [selectArray, setSelectArray] = useState(["0", "0"]);
  const labelSelectClick = (index, val) => {
    let a = [];
    for (let i = 0; i < selectArray.length; i++) {
      if (i == index) {
        if (selectArray[i] == index.toString() + val.toString()){
          a.push("0");
        } else {
          a.push(index.toString() + val.toString());
        }
      } else {
        a.push(selectArray[i])
      }
    }
    setSelectArray(a);
  }

  // 点击跳转跳转
  const linkGoClick = () => {
    props.productOptionsPopupStateFun();
    props.history.replace("/confirm-order/?asdfa={asdfasdfasdf:asdfasf}");
  }

  return(<Popup
      visible={ props.productOptionsPopupState }
      afterClose={() => console.log('关闭')}
      className="product-options"
      onMaskClick={ () => { props.productOptionsPopupStateFun() } }
      destroy={false}>
        <div className="product-options-box" onTouchMove={(e) => {e.stopPropagation()}}>
          <img className="head-img" src={ commodityInfo.defaultImgUrl } alt="" />
          <dl className="head-info">
          <dt><b>¥{ commodityInfo.price.length == 1 ? commodityInfo.price[0] : commodityInfo.price[0] - commodityInfo.price[1] }</b>&nbsp;券后¥18.99</dt>
            <dd>请选择:品种&nbsp;重量</dd>
            {/* <dd>已选择:平和老树白柚&nbsp;精选大果净重8.5-9斤(2-3个)</dd> */}
          </dl>
          <i className="close-but" onClick={ () => { props.productOptionsPopupStateFun() } }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15046"><path d="M512 432.46249999L865.92499999 78.49999973a56.13749998 56.13749998 0 0 1 79.53750003-5e-8 56.17500029 56.17500029 0 0 1 0 79.53750002L591.49999971 512l353.925 353.92499999c21.97500029 21.97500029 22.12499972 57.4125003 0 79.53750003a56.17500029 56.17500029 0 0 1-79.53750004 0L512 591.49999971 158.07500001 945.50000027a56.13749998 56.13749998 0 0 1-79.53750003 5e-8 56.17500029 56.17500029 0 0 1 0-79.53750002L432.50000029 512 78.49999973 158.07500001a56.13749998 56.13749998 0 0 1-5e-8-79.53750003 56.17500029 56.17500029 0 0 1 79.53750002 0L512 432.50000029z" p-id="15047"></path></svg></i>
          <hr className="hr-line"/>
          <div className="class-menu">
            {
              commodityInfo.type.map((item, index) => {
                return (<Fragment key={index}>
                  <div className="class-box">
                    <h6 className="title">{item.title}</h6>
                    <div className="option-box">
                      {
                        item.detailed.map((itemDetailed, indexDetailed) => {
                          return (<span className={ (item.typeId.toString() + itemDetailed.id.toString()) == selectArray[index] ? "select" : ""} onClick={ () => {labelSelectClick(index, itemDetailed.id)} } key={indexDetailed}>{ itemDetailed.name }</span>)
                        })
                      }
                    </div>
                  </div>
                  <hr className="hr-line"/>
                </Fragment>)
              })
            }
            <div className="class-box">
              <h6 className="title">数量
                <Stepper
                  className="stepper-box"
                  value={numberValue}
                  min={0} max={3}
                  onChange={ (val) => { setNumberValue(val) }}
                  defaultValue={0}
                  step={1}
                  onInputChange={(value) => {
                    setNumberValue(value)
                  }}
                />
              </h6>
            </div>
          </div>
          <div onClick={ linkGoClick } className="submit-but">确定</div>
        </div>
    </Popup>)
}



// 指定 props 的默认值：
ProductOptions.defaultProps = {
  type: "collage",
  commodityId: ""
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions)
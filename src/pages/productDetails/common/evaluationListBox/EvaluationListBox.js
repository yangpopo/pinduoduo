// 评价列表框

import React, { Fragment, useState, useEffect } from 'react';
import "./evaluationListBox.scss";
import { Cell, Popup } from 'zarm';
import EvaluationList from "./common/evaluationList/EvaluationList"; // 评价列表
import { connect } from "react-redux"; // 链接全局状态
import { modifyReturnButtonStatus } from "../../store/";

import headPortrait from "assets/img/picture/head-portrait.jpg";
import live01 from "assets/img/picture/live-01.jpg";
import live02 from "assets/img/picture/live-02.jpg";
import live03 from "assets/img/picture/live-03.jpg";
import live04 from "assets/img/picture/live-04.jpg";

const EvaluationListBox = (props) => {
  const [PopupVisible, setPopupVisible] = useState(false); // 弹窗状态
  // 标签数据
  const [tapAllData, setTapAllData]= useState([
    {name: "划算", id:0, count: 45, type:"green", icon:<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6982"><path d="M509.305263 990.046316c-144.006737 0-409.923368-217.896421-409.923368-423.828211V156.294737h39.989894s91.998316-1.994105 185.936843-39.936C421.295158 78.362947 483.274105 32.336842 483.274105 32.336842L509.305263 14.389895 533.288421 32.336842s61.978947 46.026105 159.959579 84.021895c93.938526 37.941895 183.942737 39.936 185.936842 39.936h39.989895v411.917474c0 203.937684-265.916632 421.888-409.923369 421.888zM181.301895 234.334316v331.937684c0 159.959579 231.962947 341.854316 327.949473 341.854316 93.938526 0 327.895579-181.894737 327.895579-341.854316V234.280421a709.955368 709.955368 0 0 1-173.97221-41.984 915.994947 915.994947 0 0 1-151.983158-77.985684c-27.971368 18.000842-81.92 50.014316-151.929263 77.985684a733.507368 733.507368 0 0 1-177.960421 42.037895z m305.906526 465.866105l-173.918316-147.941053 54.002527-61.978947 111.939368 93.992421 211.914105-241.987368 61.978948 54.002526-265.916632 303.966316z" p-id="6983"></path></svg>},
    {name: "有图", id:1, count: 545, type:"gules",icon:<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5260"><path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" p-id="5261"></path></svg>},
    {name: "视频", id:2, count: 51, type:"gules",icon:<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6321"><path d="M585.412 189c70.955 0 128.715 56.54 129.863 126.852l0.017 2.135v127.82l192.82-152.874c20.763-16.462 51.27-1.997 51.879 24.255l0.009 0.799v388.028c0 26.487-30.3 41.382-51.256 25.543l-0.632-0.49-192.82-152.876v127.823c0 70.582-57.05 127.83-127.734 128.968l-2.146 0.017h-391.53c-70.955 0-128.716-56.542-129.865-126.85L64 706.014V317.987c0-70.585 57.052-127.832 127.736-128.97l2.146-0.017h391.53z m0 63.96h-391.53c-36.08 0-65.293 28.593-65.873 63.953l-0.009 1.074v388.028c0 35.492 28.852 64.44 64.791 65.016l1.091 0.009h391.53c36.08 0 65.29-28.593 65.871-63.952l0.01-1.073V317.987c0-35.495-28.85-64.442-64.79-65.018l-1.091-0.009zM896 384.178L734.78 512 896 639.822V384.178z" p-id="6322"></path></svg>},
    {name: "回头客", id:3, count: 62, type:"gules",icon:<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7527"><path d="M345.6 659.2l-22.4 211.2 169.6-96c9.6-6.4 22.4-6.4 32 0l169.6 96-22.4-211.2c-48 28.8-105.6 44.8-166.4 44.8s-108.8-16-160-44.8z m-57.6-48c-57.6-57.6-96-137.6-96-227.2 0-176 144-320 320-320s320 144 320 320c0 89.6-35.2 169.6-96 227.2l32 313.6c3.2 25.6-25.6 44.8-48 32l-208-118.4-208 118.4c-22.4 12.8-51.2-6.4-48-32l32-313.6z m224 28.8c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z" p-id="7528"></path></svg>},
    {name: "质量很好", id:4, count: 62, type:"green",icon:null},
    {name: "舒服", id:5, count: 32, type:"grey",icon:null},
    {name: "质量很好", id:6, count: 62, type:"gules",icon:null},
    {name: "物流很快", id:7, count: 545, type:"gules",icon:null},
    {name: "追加", id:8, count: 545, type:"gules",icon:null},
    {name: "好吃", id:9, count: 545, type:"gules",icon:null},
  ]);
  // 评价列表数据
  const [evaluateListData, setEvaluateListData] = useState([{
    evaluateTypeId: 1,
    evaluateId: 45,
    name: "阿萨德发",
    headPortrait: headPortrait,
    goodsInfo: {title: "款式", value: "实惠装重大果"},
    favor: true,
    favorNumber: 444,
    content: {
      text: "阿萨德刚阿斯顿发生切尔奇若,阿斯顿发生啥都过去通过沃尔asdfg,astgqe阿萨德发as,asdf",
      imgList: [live01, live02, live03, live04]
    },
    evaluate: [
      {sponsor: "沃尔沃是", sponsorId: 1, remind: "打到我", text: "沃特人工湖东港市撒旦法", headPortrait: headPortrait, creationTime: "2020-11-19 11:24:25"},
      {sponsor: "打到我", sponsorId: 0, remind: null, text: "沃特人工湖东港市撒旦法", headPortrait: headPortrait, creationTime: "2020-11-19 11:24:20"}
    ],
    creationTime: "2020-11-19 11:24:20"
  },{
    evaluateTypeId: 1,
    evaluateId: 54,
    name: "规划局认同感我",
    headPortrait: headPortrait,
    goodsInfo: {title: "款式", value: "3-5个&nbsp;【带箱9-10斤】"},
    favor: false,
    favorNumber: 0,
    content: {
      text: "的发高烧维尔切,儿童袜的,我钱而且我伤亡,请问而且我人",
      imgList: [live03, live04]
    },
    evaluate: [],
    creationTime: "2020-11-19 11:24:22"
  }]);
  const [selectEvaluateListData, setSelectEvaluateListData] = useState([...evaluateListData]); // 选中的数据评价类型
  const [tapConciseArray, setTapConciseArray] = useState([]); // 标签简洁数据
  const [tapStretchStateArray, setTapStretchStateArray] = useState([]); // 复杂简洁数据
  const [stretchState, setStretchState] = useState(false); // 标签伸缩展示
  const [tapSelectId, setTapSelectId] = useState(null); // 选中的标签
  const [loadingStatus, setLoadingStatus] = useState(0); // 加载状态
  

  // 数据转标签
  const dataOrLabel = (val) => {
    let tapClass = "";
    if (val.type == "green") {
      tapClass = "tap-0";
    } else if (val.type == "gules") {
      tapClass = "tap-1";
    } else if (val.type == "grey") {
      tapClass = "tap-2";
    }
    return (<span key={val.id} onClick={() => {tapSelectClick(val.id)}}  className={ tapSelectId == val.id ? 'select ' + tapClass : tapClass  }>{ val.icon != null ? val.icon : ''}{ val.name }{ val.count != null ? '(' + val.count + ')':'' }</span>)
  }

  // 标签状态选择
  const tapSelectClick = (id) => {
    if ((tapSelectId === id) || (id == null)) {
      setTapSelectId(null);
      setSelectEvaluateListData(evaluateListData);
    } else if (tapSelectId != id) {
      setTapSelectId(id);
      props.modifyReturnButtonStatus("evaluation"); // 打开评论弹窗
      // 选中的评价数据
      let selectEvaluateData = [];
      for (let i = 0 ; i < evaluateListData.length; i++) {
        if (id === evaluateListData[i].evaluateTypeId) {
          selectEvaluateData.push(evaluateListData[i]);
        }
      }
      setSelectEvaluateListData(selectEvaluateData);
    }
  }

  // 绑定下拉事件
  const bindDropDownEvent = () => {
    props.modifyReturnButtonStatus("evaluation"); // 打开评论弹窗
    setTimeout(() => {
      document.querySelector("#popupRollBox").addEventListener("scroll", dropDownFun);
    }, 200);
  }
  
  // 滚动事件
  const dropDownFun = (e) => {
    let boxHeight = e.target.clientHeight; // 框的高度
    let scrollHeight = e.target.scrollHeight; // 总高度
    let scrollTop = e.target.scrollTop; // 滚动条位置
    if ((boxHeight + scrollTop) == scrollHeight) {
      // 正在加载
      setLoadingStatus(1);
      setTimeout(() => {
        let listData = [{
          evaluateTypeId: 1,
          evaluateId: 45,
          name: "阿萨德发",
          headPortrait: headPortrait,
          goodsInfo: {title: "款式", value: "实惠装重大果"},
          favor: true,
          favorNumber: 444,
          content: {
            text: "阿萨德刚阿斯顿发生切尔奇若,阿斯顿发生啥都过去通过沃尔asdfg,astgqe阿萨德发as,asdf",
            imgList: [live01, live02, live03, live04]
          },
          evaluate: [
            {sponsor: "沃尔沃是", sponsorId: 1, remind: "打到我", text: "沃特人工湖东港市撒旦法", creationTime: "2020-11-19 11:24:25"},
            {sponsor: "打到我", sponsorId: 0, remind: null, text: "沃特人工湖东港市撒旦法", creationTime: "2020-11-19 11:24:20"}
          ],
          creationTime: "2020-11-19 11:24:20"
        },{
          evaluateTypeId: 1,
          evaluateId: 54,
          name: "规划局认同感我",
          headPortrait: headPortrait,
          goodsInfo: {title: "款式", value: "3-5个&nbsp;【带箱9-10斤】"},
          favor: false,
          favorNumber: 0,
          content: {
            text: "的发高烧维尔切,儿童袜的,我钱而且我伤亡,请问而且我人",
            imgList: [live03, live04]
          },
          evaluate: [],
          creationTime: "2020-11-19 11:24:22"
        }];
        setEvaluateListData((val) => {
          return [...val, ...listData]
        });
        console.log("5454464646");
      }, 1000);
    } else if ((boxHeight + scrollTop) >= (scrollHeight - 10)) {
      // 上拉加载
      setLoadingStatus(0);
    }
  }

  useEffect(() => {
    // 简洁标签数据
    let tapConcise = [];
    for (let i = 0; i < tapAllData.length; i++) {
      if (i < 5) {
        tapConcise.push(tapAllData[i]);
      } else {
        break
      }
    }
    setTapConciseArray(tapConcise);

    // 复杂数据标签
    let tapStretchState = [{name: "全部", id:null, count: 4545, type:"gules", icon: null}];
    for (let i = 0; i < tapAllData.length; i++) {
      if (stretchState) {
        tapStretchState.push(tapAllData[i]);
      } else if (i < 5 ) {
        tapStretchState.push(tapAllData[i]);
      } else {
        break
      }
    }
    setTapStretchStateArray(tapStretchState);

    // // 解除事件
    // return  () => {
    //   document.querySelector("#popupRollBox").removeEventListener("scroll", dropDownFun);
    // }
  },[tapAllData, stretchState])

  return (<div className="evaluation-list-box">
    <Cell onClick={ bindDropDownEvent }  hasArrow className="evaluation-list-title" description="查看全部" >商品评价(54564)</Cell>
    <div className="evaluation-key" >{
      tapConciseArray.map((item, index) => {
        return dataOrLabel(item)
      })
    }</div>
    {
      evaluateListData.map((item, index) => {
        if (index < 2) {
          return (<Cell className="evaluation-cell" key={ item.evaluateId }
            title={<Fragment>
                <div className="box-title"><img src={ item.headPortrait} alt="" />{ item.name }</div>
                <div className="box-description">{ item.content.text }</div>
              </Fragment>
            }
          />)
        }
      })
    }
    
    {/* <Cell className="evaluation-cell"
      title={<Fragment>
          <div className="box-title"><img src={headPortrait} alt="" />标题文字</div>
          <div className="box-description">阿萨团委 阿斯顿发斯蒂芬 发送到gas发阿斯顿发 阿萨德发安师大 放沙发编程序啊</div>
        </Fragment>
      }
    /> */}
    {/* 弹窗 */}
    <Popup
      visible={props.evaluationPopupVisible}
      onMaskClick={() => setPopupVisible(false)}
      direction="right"
      className="popup-evaluate-list"
    >
      <div className="popup-box" onTouchMove={(e) => {e.stopPropagation()}}>
        <div className="popup-roll-box" id="popupRollBox">
          <div className="popup-evaluation-key-box">
            <div className="popup-evaluation-key">{
              tapStretchStateArray.map((item, index) => {
                return dataOrLabel(item)
              })
            }</div>
            <div className="open-shrink-but" onClick={() => {setStretchState((val) => { return !val});}}><svg style={{ transform: stretchState ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)'}} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3078"><path d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z" p-id="3079"></path></svg></div>
          </div>
          <EvaluationList dataJson={selectEvaluateListData} />
          <div className="drop-down-state">
            {(loadingStatus === 0 && selectEvaluateListData.length != 0) && '上拉加载'}
            {(loadingStatus === 1 && selectEvaluateListData.length != 0) && '正在加载...'}
            {(loadingStatus === 2 && selectEvaluateListData.length != 0) && '没有了'}
            {selectEvaluateListData.length == 0 && '没有数据!'}
          </div>
        </div>
      </div>
    </Popup>
  </div>)
}


// 链接redux数据
const mapStateToProps = (state) => {
  return {
    backType: state.get("productDetails").get("backType"),
    evaluationPopupVisible: state.get("productDetails").get("evaluationPopupVisible"), // 评论弹窗状态
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 修改全局返回按钮状态
    modifyReturnButtonStatus(val) {
      dispatch(modifyReturnButtonStatus(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationListBox)
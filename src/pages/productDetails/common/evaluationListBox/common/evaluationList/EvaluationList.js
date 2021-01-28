// 评价内容列表

import React, { Fragment } from 'react';
import "./evaluationList.scss";
import { ImagePreview } from 'zarm';
import Evaluate from "../evaluate/Evaluate"; // 评价


class EvaluationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: props.dataJson,
      previewVisible: false,// 图片预览显示状态
      previewData: [""], // 图片预览数据
      pictureIndex: 0, // 图片预览索引
      visibleState: false, // 评论状态显示状态
      evaluatePopupData:[] // 评论数据
    }
    this.favorClick = this.favorClick.bind(this);
    this.setVisibleState = this.setVisibleState.bind(this);
  }

  // 点赞
  favorClick = (index) => {
    this.state.dataJson[index].favor = !this.state.dataJson[index].favor;
    if (this.state.dataJson[index].favor){
      this.state.dataJson[index].favorNumber++
    } else {
      this.state.dataJson[index].favorNumber--
    }
    this.setState({
      dataJson: this.state.dataJson
    })
  }

  // 评论弹窗控制
  setVisibleState(val, evaluateData) {
    if (val) {
      this.setState({
        evaluatePopupData: evaluateData
      })
    }
    this.setState({
      visibleState: val
    })
  }

  // 在组件接收到一个新的 prop (更新后)时被调用
  componentWillReceiveProps(newProps) {
    this.setState({
      dataJson: newProps.dataJson
    })
  }

  render() {
    return (<Fragment>
      {this.state.dataJson.map((item, index) => {
        return (
        <div className="evaluate-unit" key={ item.evaluateId + index.toString()}>
          <div className="head-box">
            <dl className="user-info">
              <dt><img src={ item.headPortrait } alt="" />{ item.name }</dt>
              <dd>{ `${ item.goodsInfo.title }:${ item.goodsInfo.value }` }</dd>
            </dl>
            <svg className="more-but" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1406"><path d="M117.15584 498.81088m-81.79712 0a81.79712 81.79712 0 1 0 163.59424 0 81.79712 81.79712 0 1 0-163.59424 0Z" p-id="1407"></path><path d="M485.4784 498.81088m-81.79712 0a81.79712 81.79712 0 1 0 163.59424 0 81.79712 81.79712 0 1 0-163.59424 0Z" p-id="1408"></path><path d="M853.80096 498.81088m-81.79712 0a81.79712 81.79712 0 1 0 163.59424 0 81.79712 81.79712 0 1 0-163.59424 0Z" p-id="1409"></path></svg>
          </div>
          <p className="text-box">{ item.content.text }</p>
          <div className="img-box">
            {
              item.content.imgList.map((itemImg, index) => {
                return (<div className="img-unit" key={itemImg} onClick={() => {this.setState({previewData:[...item.content.imgList], pictureIndex: index, previewVisible: true}); }}><img src={itemImg} alt="" /></div>)
                })
            }
          </div>
          {
            item.evaluate.length != 0 &&
            (<div className="evaluate-box">
              {
                item.evaluate.map((itemEvaluate, index) => {
                return (<div className="evaluate-info" key={itemEvaluate.sponsorId}><span className="head">
                    <b>{ itemEvaluate.sponsor }</b>
                    {
                      itemEvaluate.remind != null && (<Fragment>回复<b>asdf4545</b></Fragment>)
                    }
                    <b>:</b>
                    </span>{ itemEvaluate.text }
                  </div>)
                })
              }
              <div className="evaluate-info" onClick={() => {this.setVisibleState(true, item.evaluate)}}><span className="head"><b>查看全部</b>&nbsp; {item.evaluate.length}&nbsp; <b>条评论&nbsp;&rsaquo;</b></span></div>
            </div>)
          }
          
          <div className="fun-box">
            {/* 点赞 */}
            {
              item.favor ? 
              <span style={{ color: "#db3124"}} onClick={ () => {this.favorClick(index)} }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4561"><path d="M844.231111 391.39555600000006H659.9111109999999c-13.653333-2.275556-18.204444-15.928889-20.48-22.755556V202.52444400000002c0-45.511111-36.408889-81.92-81.92-81.92-40.96 0-75.093333 31.857778-81.92 70.542223-25.031111 157.013333-120.604444 209.351111-182.044444 225.28 2.275556 6.826667 2.275556 11.377778 2.275555 15.928889v441.457777c0 9.102222-2.275556 18.204444-6.826666 27.306666999999997h446.008888c43.235556-9.102222 72.817778-25.031111 93.297778-68.266667l93.297778-327.68c18.204444-59.16444400000001-11.377778-116.053333-77.368889-113.77777699999999zM257.137778 876.0888889999999V432.355556c0-13.653333-18.204444-25.031111-38.684445-25.031112H157.013333c-31.857778 0-59.16444400000001 27.306666999999997-59.16444400000001 59.16444500000001v373.191111c0 34.133333 25.031111 61.44 59.16444400000001 61.44h61.44c20.48 0 38.684444-11.377778 38.684445-25.031111z m0 0" p-id="4562"></path></svg>{ item.favorNumber }</span>
              :
              <span onClick={ () => {this.favorClick(index)} }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4572"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="4573"></path></svg>{ item.favorNumber == 0 ? "赞" : item.favorNumber}</span>
            }
            {/* 评论 */}
            <span onClick={() => {this.setVisibleState(true, item.evaluate)}}><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5393" data-spm-anchor-id="a313x.7781069.1998910419.i3"><path d="M291.636 385.404c-30.49 0-55.207 25.633-55.207 57.266 0 31.637 24.717 57.272 55.207 57.272 30.486 0 55.203-25.635 55.203-57.272C346.839 411.038 322.122 385.404 291.636 385.404L291.636 385.404zM512.461 385.404c-30.49 0-55.208 25.633-55.208 57.266 0 31.637 24.722 57.272 55.208 57.272 30.486 0 55.204-25.635 55.204-57.272C567.665 411.038 542.947 385.404 512.461 385.404L512.461 385.404zM733.287 385.404c-30.492 0-55.208 25.633-55.208 57.266 0 31.637 24.716 57.272 55.208 57.272 30.486 0 55.202-25.635 55.202-57.272C788.489 411.038 763.773 385.404 733.287 385.404L733.287 385.404zM843.697 99.077 181.221 99.077c-60.972 0-110.41 51.287-110.41 114.539l0 429.487c0 63.256 50.543 121.56 112.92 121.56l168.257 0c29.33 31.245 150.716 156.912 150.716 156.912 5.389 5.606 14.124 5.606 19.514 0 0 0 88.87-100.764 146.775-156.912l172.193 0c62.376 0 112.92-58.308 112.92-121.56L954.106 213.615C954.107 150.363 904.673 99.077 843.697 99.077zM899.451 643.298c0 31.669-26.565 64.899-57.799 64.899L672.075 708.197c-20.543 0-39.009 21.123-39.009 21.123L514 852.815 394.955 729.32c0 0-22.676-21.123-42.112-21.123L183.267 708.197c-31.235 0-57.794-33.23-57.794-64.899L125.473 213.205c0-31.677 24.751-57.353 55.28-57.353l663.411 0c30.53 0 55.287 25.676 55.287 57.353L899.451 643.298zM898.905 643.103" p-id="5394"></path></svg>评论</span></div>
            </div>
            )
      })}
      <ImagePreview visible={this.state.previewVisible} images={this.state.previewData} onClose={() => {this.setState({previewVisible: false}); }} activeIndex={this.state.pictureIndex} /> 
      <Evaluate visibleState={this.state.visibleState} setVisibleState={ this.setVisibleState } evaluatePopupData={ this.state.evaluatePopupData } />
    </Fragment>)
  }
}

export default EvaluationList;
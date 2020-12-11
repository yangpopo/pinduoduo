// 上拉刷新下拉加载框

import React, { Fragment } from 'react';
import "./upDownLoad.scss";
import PropTypes from 'prop-types'; // 校验传参类型

import topIcon from "assets/img/public/top-icon.png";
import "assets/css/mescroll.min.css";
import MeScroll from "assets/js/mescroll.min.js";

class UpDownLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mescroll: Object
    }
  }

  // 第一次渲染后调用
  componentDidMount() {
    /*下拉刷新的回调 */
    const downCallback = () => {
      // 联网成功的回调,隐藏下拉刷新的状态;
      this.props.getAjaxData(undefined, this.state.mescroll); // 获取数据
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    const upCallback = (page) => {
      //联网成功的回调,隐藏下拉刷新的状态;
      this.props.getAjaxData(page, this.state.mescroll); // 获取数据
      //联网失败的回调,隐藏下拉刷新的状态
      // mescroll.endErr();
    }

    // 创建MeScroll对象
    this.setState({
      mescroll: new MeScroll(this.props.id, {
        down: {
          auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
          callback: downCallback //下拉刷新的回调
        },
        up: {
          lazyLoad: {
            use: true, // 是否开启懒加载,默认false
            attr: 'imgurl', // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
            showClass: 'mescroll-lazy-in', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
            delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
            offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
          },
          auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
          isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          callback: upCallback, //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 10 //每页数据条数,默认10
          },
          htmlNodata: '<p class="upwarp-nodata">-- 暂无数据 --</p>',
          toTop: {
            //回到顶部按钮
            use: true,
						src: topIcon, //图片路径,默认null,支持网络图
						offset: 1000 //列表滚动1000px才显示回到顶部按钮	
					},
        }
      })
    })
  }

  // 卸载时执行
  componentWillUnmount() {
    this.state.mescroll.destroy();
  }
  render() {
    return (<div id={ this.props.id } className={ this.props.className === undefined ? "mescroll" : "mescroll " + this.props.className}>
      {this.props.children}
    </div>)
  }
}

UpDownLoad.propTypes = {
  id: PropTypes.string.isRequired,
  getAjaxData: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default UpDownLoad;
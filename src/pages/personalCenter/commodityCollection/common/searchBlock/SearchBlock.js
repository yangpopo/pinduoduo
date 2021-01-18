// 搜索

import React, { Fragment, useState, useEffect } from 'react';
import "./searchBlock.scss";
import UpDownLoad from "common/upDownLoad/UpDownLoad"; // 下拉刷新上拉加载
import CollectionCommodityUnit from "../collectionCommodityUnit/CollectionCommodityUnit"; // 收藏商品单元
import { connect } from "react-redux"; // 链接全局状态
import { productOptionsPopupStateFun } from "../../../../../store/global/"; // 弹窗状态
import ProductOptions from "common/productOptions/ProductOptions"; // 商品选择弹窗

const SearchBlock = (props) => {
  const [searchState, setSearchState] = useState(false); // 搜索状态
  const inputRef = React.createRef(); // 搜索框焦点

  const [searchData, setSearchData] = useState([0, 1, 2]);

  // 上拉加载-下拉刷新---加载数据
  const getAjaxData = (page, obj) => {
    if (page === undefined) {
      obj.resetUpScroll();
    } else {
      setTimeout(() => {
        obj.endByPage(page.num * page.size, 5); // 总的页码数
      }, 1000);
    }
  }

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus(); // 输入框活动焦点
    }
  })

  return(<Fragment>
    {
      searchState ?
      <div className="collection-search-box">
        <div className="search-box">
          <div className="return-but" onClick={ () => { setSearchState((val) => { return !val }) } }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5827"><path d="M290.89 483.13c8.41-0.05 16.49 3.25 22.47 9.18L756.31 935.26c12.41 12.41 12.41 32.52 0 44.93-12.41 12.4-32.52 12.4-44.93 0l-442.96-442.96a31.64 31.64 0 0 1-9.36-22.46c0-8.44 3.38-16.53 9.36-22.46a31.636 31.636 0 0 1 22.47-9.18z m0 0" p-id="5828"></path><path d="M733.85000001 40.18c8.41-0.05 16.49 3.25 22.45999999 9.17a31.657 31.657 0 0 1 9.35999999 22.46c0 8.44-3.37 16.53-9.35999999 22.46L313.36 537.24c-12.41 12.4-32.52 12.4-44.93 0-12.41-12.4-12.41-32.52 0-44.93l442.96-442.96000001a31.594 31.594 0 0 1 22.46000001-9.16999999z m0 0" p-id="5829"></path></svg></div>
          <div className="search-input-box">
            <svg className="icon-search" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15873" data-spm-anchor-id="a313x.7781069.1998910419.i7"><path d="M463 67c214.286 0 388 173.714 388 388 0 96.938-35.55 185.572-94.322 253.579a40.375 40.375 0 0 1 3.896 3.426L938.057 889.49c15.621 15.62 15.621 40.947 0 56.568-15.62 15.621-40.947 15.621-56.568 0L704.005 768.574a40.218 40.218 0 0 1-4.781-5.762l0.009 0.008C633.807 813.105 551.895 843 463 843 248.714 843 75 669.286 75 455S248.714 67 463 67z m0 64c-178.94 0-324 145.06-324 324s145.06 324 324 324 324-145.06 324-324-145.06-324-324-324z" p-id="15874"></path></svg>
            <input ref={ inputRef } className="input-box" type="text" placeholder="输入商品名称或订单号"  />
          </div>
          <div className="search-but">搜索</div>
        </div>
        {/* 搜索历史 */}
        <div className="history-box">
          <div className="head-box">
            <div className="title"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2401"><path d="M502.897778 75.093333C257.137778 75.093333 59.164444 273.066667 59.164444 518.826667s200.248889 443.733333 443.733334 443.733333c245.76 0 443.733333-197.973333 443.733333-443.733333S746.382222 75.093333 502.897778 75.093333z m288.995555 577.991111c-6.826667 13.653333-18.204444 20.48-31.857777 20.48-4.551111 0-9.102222 0-13.653334-2.275555l-261.688889-118.328889c-11.377778-4.551111-20.48-18.204444-20.48-31.857778V275.342222c0-18.204444 15.928889-34.133333 34.133334-34.133333s34.133333 15.928889 34.133333 34.133333V500.622222L773.688889 609.848889c18.204444 6.826667 25.031111 25.031111 18.204444 43.235555z" fill="" p-id="2402"></path></svg>搜索历史</div>
            <svg className="delete-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3328"><path d="M783.72 958.39h-539c-41.75 0-75.72-33.46-75.72-74.6V242.5c0-21.18 17.17-38.36 38.36-38.36s38.36 17.17 38.36 38.36v639.17h537V242.5c0-21.18 17.17-38.36 38.36-38.36s38.36 17.17 38.36 38.36v641.29c0 41.14-33.97 74.6-75.72 74.6z" p-id="3329"></path><path d="M706.01 244.51c-21.19 0-38.36-17.17-38.36-38.36v-63.82H360.79v63.82c0 21.18-17.17 38.36-38.36 38.36-21.19 0-38.36-17.17-38.36-38.36v-65.93c0-41.83 27.11-74.6 61.71-74.6h336.87c34.6 0 61.71 32.77 61.71 74.6v65.93c0.01 21.18-17.16 38.36-38.35 38.36z" p-id="3330"></path><path d="M921.14 256.01H102.86c-21.18 0-38.36-17.17-38.36-38.36s17.17-38.36 38.36-38.36h818.29c21.19 0 38.36 17.17 38.36 38.36s-17.18 38.36-38.37 38.36zM514.22 763.27c-21.19 0-38.36-17.17-38.36-38.36V405.27c0-21.18 17.17-38.36 38.36-38.36 21.19 0 38.36 17.17 38.36 38.36v319.64c0 21.18-17.17 38.36-38.36 38.36zM360.79 699.34c-21.19 0-38.36-17.17-38.36-38.36V469.2c0-21.18 17.17-38.36 38.36-38.36s38.36 17.17 38.36 38.36v191.79c0 21.18-17.17 38.35-38.36 38.35zM667.65 699.34c-21.19 0-38.36-17.17-38.36-38.36V469.2c0-21.18 17.17-38.36 38.36-38.36 21.19 0 38.36 17.17 38.36 38.36v191.79c0 21.18-17.17 38.35-38.36 38.35z" p-id="3331"></path></svg>
          </div>
          {
            searchData.length == 0 ?
            <ul className="search-key">
              {/* 搜索历史 */}
              <li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li><li>手机</li><li>苹果</li>
            </ul>
            :
            <UpDownLoad id="collection-search-history-mescroll" className="collection-search-history-mescroll" getAjaxData={getAjaxData}>
              {/* 搜索结果列表 */}
              <CollectionCommodityUnit />
              <CollectionCommodityUnit />
            </UpDownLoad>
          }
        </div>
      </div>
      :
      <div onClick={() => {setSearchState(true)}} className={props.className ? "collection-search-icon " + props.className : "collection-search-icon"}>
        <svg className="search-but" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1822"><path d="M798.386532 434.840666c0 90.322122-32.875059 173.048241-87.325366 236.740866 0 0 195.358181 195.621353 232.072842 231.577263 30.171373 29.522384-4.434167 75.370595-43.419638 33.901111-23.467419-24.980951-228.233239-225.844701-228.233239-225.844701-63.803709 54.933123-146.802359 88.132246-237.587665 88.132246-201.30588 0-364.492043-163.235758-364.492043-364.506784 0-201.271026 163.186162-364.477109 364.492043-364.477109C635.200369 70.363558 798.386532 233.56964 798.386532 434.840666zM433.893466 128.136356c-169.349788 0-306.69027 137.333832-306.69027 306.676681 0 169.398108 137.340482 306.732963 306.69027 306.732963 169.404026 0 306.744508-137.334855 306.744508-306.732963C740.637974 265.470187 603.297491 128.136356 433.893466 128.136356z" p-id="1823"></path></svg>
      </div>
    }
    <ProductOptions type="collage" />
  </Fragment>)
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock)
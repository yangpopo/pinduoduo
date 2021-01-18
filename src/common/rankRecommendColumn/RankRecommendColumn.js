// 排行榜||小编推荐

import React, {useEffect} from 'react';
import "./rankRecommendColumn.scss";

const RankRecommendColumn = (props) => {
  const titleRank = props.dataJson.rank.title;
  const infoRank = props.dataJson.rank.info;
  const iconRank = props.dataJson.rank.icon;
  const listRank = props.dataJson.rank.list;
  const urlRank = props.dataJson.rank.url;

  const titleRecommend = props.dataJson.recommend.title;
  const infoRecommend = props.dataJson.recommend.info;
  const iconRecommend = props.dataJson.recommend.icon;
  const listRecommend = props.dataJson.recommend.list;
  const urlRecommend = props.dataJson.recommend.url;


  // 点击跳转跳转
  const linkGoClick = (url) => {
    props.history.replace("/" + url);
  }

  return (<div className="rank-recommend-column">
    <div className="unit-box" onClick={ () => {linkGoClick(urlRank)} }>
      <dl>
      <dt>{iconRank}{titleRank}</dt>
      <dd>{infoRank}</dd>
      </dl>
      {
        listRank.map((item, index) => {
          return (
            <img src={item} alt="" key={index} />
          )
        })
      }
    </div>
    <div className="unit-box" onClick={ () => {linkGoClick(urlRecommend)} }>
      <dl>
        <dt>{iconRecommend}{titleRecommend}</dt>
        <dd>{infoRecommend}</dd>
      </dl>
      {
        listRecommend.map((item, index) => {
          return (
            <img src={item} alt="" key={index} />
          )
        })
      }
    </div>
  </div>)
}

export default RankRecommendColumn;
// 首页

import React, { useState, useEffect, Suspense } from 'react';
import { Tabs } from 'antd-mobile';
import "./home.scss";
import Loading from "common/loading/Loading"; // 组件加载
import SearchBlock from "common/searchBlock/SearchBlock"; // 搜索框

const Recommend = React.lazy(() => import('./common/recommend/Recommend')); // 推荐
const CategoryList = React.lazy(() => import('./common/categoryList/CategoryList')); // 类型列表页面

const Home = () => {
  const [tabs, setTabs] = useState([
    { title: '推荐', id:"0",  common:"recommend" },
    { title: '女装', id:"1",  common:"womens" },
    { title: '百货', id:"2",  common:"numerous" },
    { title: '男装', id:"3",  common:"mens" },
    { title: '内衣', id:"4",  common:"undies" },
    { title: '食品', id:"5",  common:"food" },
    { title: '水果', id:"6",  common:"fruit" },
    { title: '运动', id:"7",  common:"sports" },
    { title: '电器', id:"8",  common:"device" },
    { title: '鞋包', id:"9",  common:"shoeBag" },
    { title: '手机', id:"10",  common:"phone" },
    { title: '母婴', id:"11",  common:"motherBaby" },
    { title: '珠宝', id:"12",  common:"jewelry" },
    { title: '家纺', id:"13",  common:"textiles" },
    { title: '电脑', id:"14",  common:"computer" },
    { title: '美妆', id:"15",  common:"makeup" },
    { title: '车辆', id:"16",  common:"car" },
    { title: '家具', id:"17",  common:"furnishing" },
    { title: '家装', id:"18",  common:"homeImprovement" },
    { title: '医药', id:"19",  common:"medicine" },
    { title: '海淘', id:"20",  common:"haitao"},
  ]);

  const renderContent = (tab) => {
    if (tab.common === "recommend") {
      // 推荐
      return (<Suspense fallback={<Loading />}><Recommend /></Suspense>);
    } else {
      return (<Suspense fallback={<Loading />}><CategoryList idCommon={tab.common} /></Suspense>);
    }
  }
  return (
    <div className="home">
      <SearchBlock />
      <Tabs tabs={tabs} destroyInactiveTab={true} prerenderingSiblingsNumber={0} tabBarBackgroundColor="transparent" tabBarActiveTextColor="#fff" tabBarInactiveTextColor="#fff" tabBarUnderlineStyle={{"border": "1px #fff solid"}}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={8} />}>
        {renderContent}
      </Tabs>
    </div>
  )
}

export default Home;
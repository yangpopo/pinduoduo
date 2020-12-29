
import React, {Suspense} from 'react';
import './App.scss';
import 'zarm/dist/zarm.min.css'; // 加载css
import {Switch,  Route} from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Loading from "common/loading/Loading"; // 组件加载


const Main = React.lazy(() => import('./pages/main/Main')); // 首页
const ProductDetails = React.lazy(() => import('./pages/productDetails/ProductDetails')); // 产品详情
const ConfirmOrder = React.lazy(() => import('./pages/confirmOrder/ConfirmOrder')); // 订单详情
const Shop = React.lazy(() => import('./pages/shop/Shop')); // 店铺
const Dialogue = React.lazy(() => import('./pages/dialogue/Dialogue')); // 聊天
const MyOrder = React.lazy(() => import('./pages/personalCenter/myOrder/MyOrder')); // 个人中心-我的订单
const CouponManage = React.lazy(() => import('./pages/personalCenter/couponManage/CouponManage')); // 个人中心-优惠券
const CommodityCollection = React.lazy(() => import('./pages/personalCenter/commodityCollection/CommodityCollection')); // 个人中心-商品收藏
const ShopFollow = React.lazy(() => import('./pages/personalCenter/shopFollow/ShopFollow')); // 个人中心-店铺关注
const MyFollow = React.lazy(() => import('./pages/personalCenter/myFollow/MyFollow')); // 个人中心-店铺关注-我的关注
const HistoryBrowsing = React.lazy(() => import('./pages/personalCenter/historyBrowsing/HistoryBrowsing')); // 个人中心-历史浏览
const AfterSales = React.lazy(() => import('./pages/personalCenter/afterSales/AfterSales')); // 个人中心-退款/售后
const RefundDetails = React.lazy(() => import('./pages/personalCenter/afterSales/common/refundDetails/RefundDetails')); // 个人中心-退款/售后-退货详情
const ApplySelectAfterSales = React.lazy(() => import('./pages/personalCenter/applySelectAfterSales/ApplySelectAfterSales')); // 个人中心-申请售后选择
const ApplyAfterSales = React.lazy(() => import('./pages/personalCenter/applyAfterSales/ApplyAfterSales')); // 个人中心-申请售后
const LogisticsInformation = React.lazy(() => import('./pages/personalCenter/logisticsInformation/LogisticsInformation')); // 个人中心-物流信息



function App() {
  document.documentElement.style.setProperty('--theme-primary', '#db3124');
  return (
    <CacheSwitch>
      <CacheRoute exact cacheKey="index" path="/">
        <Suspense fallback={<Loading/>}>
            <Main />
        </Suspense>
      </CacheRoute>
      <CacheRoute exact cacheKey="productDetails" path="/product-details/:id"
        render={props => 
            <Suspense fallback={<Loading/>}>
              <ProductDetails {...props} />
            </Suspense>
          }
      />
      <CacheRoute exact cacheKey="confirmOrder" path="/confirm-order/"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <ConfirmOrder {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="shop" path="/shop/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <Shop {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="dialogue" path="/dialogue/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <Dialogue {...props} />
          </Suspense>
        }
      />
      <CacheRoute exact cacheKey="myOrder" path="/my-order/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <MyOrder {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="CouponManage" path="/coupon-manage"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <CouponManage {...props} />
          </Suspense>
        }
      />
      <CacheRoute exact cacheKey="CommodityCollection" path="/commodity-collection"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <CommodityCollection {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="shopFollow" path="/shop-follow"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <ShopFollow {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="MyFollow" path="/my-follow"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <MyFollow {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="HistoryBrowsing" path="/history-browsing"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <HistoryBrowsing {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="AfterSales" path="/after-sales"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <AfterSales {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="RefundDetails" path="/after-sales/refund-details/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <RefundDetails {...props} />
          </Suspense>
        }
      />
      <Route exact cacheKey="ApplySelectAfterSales" path="/apply-select-after-sales/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <ApplySelectAfterSales {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="ApplyAfterSales" path="/apply-select-after-sales/:id/apply-after-sales/"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <ApplyAfterSales {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="LogisticsInformation" path="/logistics-information/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <LogisticsInformation {...props} />
          </Suspense>
        }
       />


    </CacheSwitch>
  );
}

export default App;

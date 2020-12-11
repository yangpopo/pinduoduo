
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
    </CacheSwitch>
  );
}

export default App;

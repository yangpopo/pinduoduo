
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
const OrderDetails = React.lazy(() => import('./pages/personalCenter/orderDetails/OrderDetails')); // 个人中心-订单详情
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
const SetUp = React.lazy(() => import('./pages/personalCenter/setUp/SetUp')); // 个人中心-设置
const BindingPhone = React.lazy(() => import('./pages/personalCenter/setUp/common/bindingPhone/BindingPhone')); // 个人中心-设置-绑定电话
const ReceivingAddress = React.lazy(() => import('./pages/personalCenter/receivingAddress/ReceivingAddress')); // 个人中心-设置-收货地址
const CouponCenter = React.lazy(() => import('./pages/couponCenter/CouponCenter')); // 卡券中心
const CouponRules = React.lazy(() => import('./pages/couponRules/CouponRules')); // 月卡规则介绍
const VoucherCenter = React.lazy(() => import('./pages/voucherCenter/VoucherCenter')); // 充值中心

const Redirect404 = React.lazy(() => import('./pages/redirect404/Redirect404')); // 重定向404



function App() {
  document.documentElement.style.setProperty('--theme-primary', '#db3124');
  return (
    <CacheSwitch>
      <CacheRoute exact cacheKey="index" path="/"
        render={props => {
            // 修改状态栏字体颜色
            try {
              // eslint-disable-next-line no-undef
              plus.navigator.setStatusBarStyle('light'); // 白色
            } catch (e) {

            }
            return (<Suspense fallback={<Loading/>}>
              <Main {...props} />
            </Suspense>)
          }
        }
      />
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
       <Route exact cacheKey="OrderDetails" path="/order-details/:id"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <OrderDetails {...props} />
          </Suspense>
        }
       />
      <Route exact cacheKey="SetUp" path="/set-up"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <SetUp {...props} />
          </Suspense>
        }
       />
      <Route exact cacheKey="SetUpBindingPhone" path="/set-up/binding-phone/"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <BindingPhone {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="ReceivingAddress" path="/receiving-address"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <ReceivingAddress {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="CouponCenter" path="/coupon-center"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <CouponCenter {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="CouponRules" path="/coupon-rules"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <CouponRules {...props} />
          </Suspense>
        }
       />
       <Route exact cacheKey="VoucherCenter" path="/voucher-center"
        render={props => 
          <Suspense fallback={<Loading/>}>
            <VoucherCenter {...props} />
          </Suspense>
        }
       />


       <Route path="*" cacheKey="*" render={props => 
          <Suspense fallback={<Loading/>}>
            <Redirect404 {...props} />
          </Suspense>
        }/>
    </CacheSwitch>
  );
}

export default App;

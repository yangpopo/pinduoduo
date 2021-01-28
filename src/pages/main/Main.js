import React, { useState, Suspense } from 'react';
import "./main.scss";
import { TabBar } from 'zarm';
import { connect } from "react-redux"; // 链接全局状态
import Loading from "common/loading/Loading"; // 组件加载
import { modifyMainMenuStatusFun } from "../../store/global/";

const Home = React.lazy(() => import('./common/home/Home')); // 首页
const LiveBroadcast = React.lazy(() => import('./common/liveBroadcast/LiveBroadcast')); // 直播
const ClassList = React.lazy(() => import('./common/classList/ClassList')); // 直播
const ChatList = React.lazy(() => import('./common/chatList/ChatList')); // 聊天
const PersonalCenter = React.lazy(() => import('./common/personalCenter/PersonalCenter')); // 聊天

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-box">
        {
          props.mainMenu === "home" && 
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
        {
          props.mainMenu === "live" && 
          <Suspense fallback={<Loading />}>
            <LiveBroadcast />
          </Suspense>
        }
        {
          props.mainMenu === "sort" && 
          <Suspense fallback={<Loading />}>
            <ClassList />
          </Suspense>
        }
        {
          props.mainMenu === "chat" && 
          <Suspense fallback={<Loading />}>
            <ChatList />
          </Suspense>
        }
        {
          props.mainMenu === "individual" && 
          <Suspense fallback={<Loading />}>
            <PersonalCenter />
          </Suspense>
        }
      </div>
      <TabBar
        activeKey={ props.mainMenu }
        onChange={ props.modifyMainMenuStatusFun }>
        <TabBar.Item
          itemKey="home"
          title="首页"
          badge={{ shape: 'circle', text: '3' }}
          icon={<svg className="main-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10147" ><path d="M511.536986 0v54.465715a100.462676 100.462676 0 0 1 65.535982 24.742047c3.51481 4.704864 7.66616 8.883889 12.315673 12.454051l357.043795 390.226922 1.107027 1.134702a33.459883 33.459883 0 0 1-1.605189 45.581826c-5.424431 5.036972-12.592429 7.749187-19.981832 7.527781h-30.969073a54.410364 54.410364 0 0 0-54.327337 54.465715v323.058075c0 30.830694-23.635021 55.877174-52.694472 55.877174H614.130688V670.553765a54.410364 54.410364 0 0 0-54.327337-54.465715H449.737219a54.410364 54.410364 0 0 0-54.327337 54.465715v298.980243H224.872415c-29.059452 0-52.694472-25.04648-52.694472-55.90485V590.598759a54.410364 54.410364 0 0 0-54.327337-54.465715H97.425963a30.415559 30.415559 0 0 1-29.419235-31.910045 29.280857 29.280857 0 0 1 7.859889-21.199562l1.107027-1.134702L438.445546 87.150679a98.608406 98.608406 0 0 1 73.063764-32.657288V0m0 0A153.129472 153.129472 0 0 0 398.537233 50.065284L37.176033 445.024745A83.44214 83.44214 0 0 0 13.845445 504.27835a84.770572 84.770572 0 0 0 83.635869 86.320409h20.147887v323.058075C117.629201 974.432602 165.701836 1023.999723 224.65101 1023.999723h189.439948a35.618585 35.618585 0 0 0 35.701612-36.753287V670.553765h110.093808v316.692671a35.646261 35.646261 0 0 0 34.483883 36.725612l1.217729 0.027675h192.37357c58.949173 0 107.021809-49.567122 107.021809-110.342889V590.598759h31.024424a81.919978 81.919978 0 0 0 58.949173-23.967128 87.814895 87.814895 0 0 0 1.577513-121.496184L625.034901 50.037608a12.287997 12.287997 0 0 1-6.033295-6.503782A154.790012 154.790012 0 0 0 511.730716 0h-0.166054z" p-id="10148"></path></svg>}
          activeIcon={<svg className="main-icon-selected" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2662"><path d="M562.805 80.6975a72.135 72.135 0 0 0-96.93 0L73.925 452.87a36.1575 36.1575 0 0 0 48.42 53.7075l6.2325-5.9175V889.1a72.315 72.315 0 0 0 72.315 72.405h210.4425v-217.71a50.9175 50.9175 0 0 1 50.94-50.985h99.0225a50.9175 50.9175 0 0 1 50.94 50.985v217.71h215.4375a72.315 72.315 0 0 0 72.3375-72.405V505.4075c16.065 14.535 38.8575 13.4325 52.2225-1.4625a36.1575 36.1575 0 0 0-2.61-51.075L562.805 80.72z" p-id="2663"></path></svg>}
        />
        <TabBar.Item
          itemKey="live"
          title="直播"
          icon={<svg className="main-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16980"><path d="M729.372749 536.301476l-0.318248-0.201592c-15.578814-9.795087-91.724051-54.18918-187.422623-108.733446-27.040866-15.633049-52.474119-30.474059-71.877028-41.796942l-0.723477-0.420579c-18.420535-10.749832-31.731702-18.516726-34.464953-19.98517-10.055007-5.248537-20.107967-7.925507-29.826306-7.925507-30.694069 0-55.664787 27.511587-55.664787 61.328788v345.679997c0 33.139771 23.931039 58.128909 55.664787 58.128908 10.234085 0 18.246573-2.891863 23.813359-8.586562l2.095731-2.15099 2.784416-0.98135c2.996241-1.063215 17.863856-9.978259 32.244378-18.602684 20.837584-12.491499 48.812729-29.268604 79.195714-45.937238 54.68446-31.914874 100.290147-59.075467 133.590577-78.907141l1.760087-1.052982c27.5341-16.399505 44.153616-26.293853 49.79101-29.243022 15.526625-9.243525 25.715685-29.043477 25.715684-50.311872-0.155543-21.038152-10.500145-40.800241-26.358321-50.300616z m-61.758575 65.309448c-36.159548 22.119787-102.640682 59.863413-152.48695 87.457887-24.370037 13.843286-47.218418 27.796066-65.576531 39.011503l-1.112334 0.677428c-5.957689 3.638877-11.483542 7.014764-16.505929 10.036587l-19.333324 11.662621v-320.745095l19.264762 11.443634c21.978571 13.057387 48.987714 28.739555 80.272232 46.607504 52.866045 32.409131 119.848599 70.535473 155.083077 90.388636l20.167319 11.367909-19.772322 12.091386z" p-id="16981"></path><path d="M870.015953 157.931962H660.497079l58.204633-104.254435c8.562003-15.719007 3.941775-35.976376-10.758018-47.210232-15.690354-8.92323-34.45779-2.901073-44.734854 14.370289l-76.417437 137.094378H422.231487L345.618599 20.50501c-10.267854-17.033955-28.981055-22.986527-44.489261-14.069437-14.921851 11.522428-19.445888 31.388894-10.742668 47.36168l58.137095 104.133686h-194.540741c-81.905428 0-151.099347 72.254627-151.099347 157.779489v548.192294c0 85.526909 69.195965 157.778466 151.099347 157.778466h716.032929c84.729753 0 151.099347-69.307506 151.099347-157.778466V315.710428c0.002047-85.523839-69.193919-157.778466-151.099347-157.778466z m87.393419 706.160072c0 51.173496-38.390355 91.263563-87.397512 91.263563H153.97586c-49.007157 0-87.397512-40.090067-87.397512-91.263563V315.90281c0-51.172473 38.390355-91.261517 87.397512-91.261517h716.036c49.007157 0 87.397512 40.089044 87.397512 91.261517v548.189224z" p-id="16982"></path></svg>}
          activeIcon={<svg className="main-icon-selected" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16957"><path d="M691.245332 647.659456l-245.743021 169.181039C418.88015 835.271221 398.401565 822.937528 398.401565 791.288806V439.522564c0-31.695265 21.455972-44.028958 47.054204-25.598231l245.743021 169.181038c26.622161 17.45334 26.622161 47.100746 0 64.554085m219.213945-442.98903H673.931619L802.853621 105.256204c25.598231-19.54774 30.717878-56.409194 11.21668-82.053967a55.990313 55.990313 0 0 0-79.866482-11.170137l-222.239191 171.228897L289.771979 11.939015c-25.598231-19.54774-60.458368-14.428094-79.819939 11.21668a60.830706 60.830706 0 0 0 11.170137 82.053967l130.085558 99.460764H113.609605C51.243005 204.670426 0 256.983903 0 321.677615v585.408281C0 971.639981 51.196463 1024 113.609605 1024H910.366193C972.686251 1024 1023.929256 971.733066 1023.929256 907.039354V321.677615c0.139627-64.554085-51.103378-116.960646-113.516521-116.960646" p-id="16958"></path></svg>}
        />
        <TabBar.Item
          itemKey="sort"
          title="分类"
          icon={<svg className="main-icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28405"><path d="M333.787794 221.683316l587.512363 0c47.837766 0 48.601189-66.276582 0-66.276582L333.787794 155.406734C286.716521 155.406734 285.186604 221.683316 333.787794 221.683316zM125.659842 128.878295c-33.777888 0-61.173109 27.420805-61.173109 61.248837 0 33.852593 27.396244 61.271351 61.173109 61.271351 33.780958 0 61.176179-27.418758 61.176179-61.271351C186.836021 156.2991 159.4408 128.878295 125.659842 128.878295zM921.300157 477.698154 333.787794 477.698154c-47.071273 0-48.601189 66.274535 0 66.274535l587.512363 0C969.13997 543.970642 969.901346 477.698154 921.300157 477.698154zM125.659842 451.170738c-33.777888 0-61.173109 27.420805-61.173109 61.247814 0 33.852593 27.396244 61.273398 61.173109 61.273398 33.780958 0 61.176179-27.420805 61.176179-61.273398C186.836021 478.591543 159.4408 451.170738 125.659842 451.170738zM921.300157 799.985481 333.787794 799.985481c-47.071273 0-48.601189 66.277605 0 66.277605l587.512363 0C969.13997 866.263086 969.901346 799.985481 921.300157 799.985481zM125.659842 773.460112c-33.777888 0-61.173109 27.420805-61.173109 61.248837 0 33.852593 27.396244 61.273398 61.173109 61.273398 33.780958 0 61.176179-27.420805 61.176179-61.273398C186.836021 800.880917 159.4408 773.460112 125.659842 773.460112z" p-id="28406"></path></svg>}
          activeIcon={<svg className="main-icon-selected" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28405"><path d="M333.787794 221.683316l587.512363 0c47.837766 0 48.601189-66.276582 0-66.276582L333.787794 155.406734C286.716521 155.406734 285.186604 221.683316 333.787794 221.683316zM125.659842 128.878295c-33.777888 0-61.173109 27.420805-61.173109 61.248837 0 33.852593 27.396244 61.271351 61.173109 61.271351 33.780958 0 61.176179-27.418758 61.176179-61.271351C186.836021 156.2991 159.4408 128.878295 125.659842 128.878295zM921.300157 477.698154 333.787794 477.698154c-47.071273 0-48.601189 66.274535 0 66.274535l587.512363 0C969.13997 543.970642 969.901346 477.698154 921.300157 477.698154zM125.659842 451.170738c-33.777888 0-61.173109 27.420805-61.173109 61.247814 0 33.852593 27.396244 61.273398 61.173109 61.273398 33.780958 0 61.176179-27.420805 61.176179-61.273398C186.836021 478.591543 159.4408 451.170738 125.659842 451.170738zM921.300157 799.985481 333.787794 799.985481c-47.071273 0-48.601189 66.277605 0 66.277605l587.512363 0C969.13997 866.263086 969.901346 799.985481 921.300157 799.985481zM125.659842 773.460112c-33.777888 0-61.173109 27.420805-61.173109 61.248837 0 33.852593 27.396244 61.273398 61.173109 61.273398 33.780958 0 61.176179-27.420805 61.176179-61.273398C186.836021 800.880917 159.4408 773.460112 125.659842 773.460112z" p-id="28406"></path></svg>}
        />
        <TabBar.Item
          itemKey="chat"
          title="聊天"
          icon={<svg className="main-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32209"><path d="M511.957358 896.074623h-85.283584L191.888065 1024v-234.529858A414.734072 414.734072 0 0 1 0 447.99467C0 200.586991 229.242275 0 511.957358 0s511.957358 200.416424 511.957358 447.952028S794.757725 896.074623 511.957358 896.074623z m0-827.71983c-244.891813 0-443.47464 170.183393-443.47464 380.151578a376.782877 376.782877 0 0 0 190.09711 316.743233v140.717915l168.90414-77.437495h84.47339c244.891813 0 443.47464-170.183393 443.47464-380.108936s-198.582827-380.151578-443.47464-380.151579z m255.850754 443.730491a63.962688 63.962688 0 1 1 63.962688-63.962689 63.962688 63.962688 0 0 1-63.962688 63.962689z m-255.850754 0a63.962688 63.962688 0 1 1 63.962689-63.962689 63.962688 63.962688 0 0 1-63.962689 63.962689z m-255.850754 0a63.962688 63.962688 0 1 1 63.962689-63.962689 63.962688 63.962688 0 0 1-63.962689 63.962689H255.850754z m0 0" p-id="32210"></path></svg>}
          activeIcon={<svg className="main-icon-selected" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32502"><path d="M512 0C229.23 0 0 200.606 0 447.976c0 141.41 75.045 267.361 192.024 349.476V1024L416.33 887.954c31.013 5.072 62.903 8.095 95.671 8.095 282.77 0 512-200.607 512-448.073C1024 200.606 794.77 0 512 0zM256 512.049a64.024 64.024 0 1 1 0.049-128A64.024 64.024 0 0 1 256 512z m256 0a64.024 64.024 0 1 1 0-128.098 64.024 64.024 0 0 1 0 128.098z m256 0a64.024 64.024 0 1 1 0.049-128 64.024 64.024 0 0 1-0.049 128z" fill="" p-id="32503"></path></svg>}
          badge={{ shape: 'dot' }}
        />
        <TabBar.Item
          itemKey="individual"
          title="个人中心"
          icon={<svg className="main-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49778"><path d="M978.013091 312.645818a510.231273 510.231273 0 0 0-269.265455-272.011636 505.018182 505.018182 0 0 0-393.821091 0 505.157818 505.157818 0 0 0-160.791272 109.498182A512.069818 512.069818 0 0 0 6.004364 511.627636a511.953455 511.953455 0 0 0 308.992 471.016728 499.828364 499.828364 0 0 0 196.933818 40.122181 500.433455 500.433455 0 0 0 357.608727-149.666909c46.405818-46.545455 83.269818-101.725091 108.474182-162.397091a517.376 517.376 0 0 0 0-398.056727z m-31.697455 198.912c-0.116364 241.966545-195.025455 438.853818-434.385454 438.853818-239.499636 0-434.338909-196.887273-434.338909-438.853818 0-242.036364 194.839273-438.877091 434.338909-438.877091 239.499636-0.023273 434.385455 196.840727 434.385454 438.877091z m0 0M312.180364 458.170182c39.424 0 71.563636-32.395636 71.563636-72.192s-32.139636-72.168727-71.563636-72.168727c-39.400727 0-71.354182 32.325818-71.354182 72.052363a71.517091 71.517091 0 0 0 71.354182 72.308364z m399.569454 1.396363c39.284364 0 71.307636-32.395636 71.307637-72.122181 0-39.936-32.023273-72.331636-71.307637-72.331637-39.400727 0-71.540364 32.395636-71.540363 72.331637 0 39.726545 32.139636 72.122182 71.540363 72.122181z m58.577455 161.512728a36.398545 36.398545 0 0 0-50.082909 7.400727c-47.918545 65.024-125.858909 103.68-208.314182 103.68-82.478545 0-160.418909-38.656-208.244364-103.563636a36.445091 36.445091 0 0 0-50.152727-7.540364 36.235636 36.235636 0 0 0-7.284364 50.455273 325.981091 325.981091 0 0 0 114.082909 96.721454 334.801455 334.801455 0 0 0 302.987637 0 327.074909 327.074909 0 0 0 114.292363-96.791272c11.636364-15.965091 8.401455-38.330182-7.284363-50.362182z m0 0" p-id="49779"></path></svg>}
          activeIcon={<svg className="main-icon-selected" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49801"><path d="M978.106182 312.948364a510.231273 510.231273 0 0 0-269.265455-272.011637 505.018182 505.018182 0 0 0-393.821091 0 505.134545 505.134545 0 0 0-160.814545 109.498182A512.116364 512.116364 0 0 0 6.074182 511.930182a512 512 0 0 0 308.992 470.993454A499.805091 499.805091 0 0 0 512 1023.022545a500.154182 500.154182 0 0 0 357.608727-149.666909c46.405818-46.545455 83.269818-101.701818 108.474182-162.397091a517.166545 517.166545 0 0 0 0.023273-398.010181z m-266.263273 2.490181c39.284364 0 71.284364 32.395636 71.284364 72.308364 0 39.726545-32 72.122182-71.284364 72.122182-39.400727 0-71.540364-32.395636-71.540364-72.122182 0-39.936 32.139636-72.308364 71.540364-72.308364z m-399.592727-1.349818c39.424 0 71.563636 32.395636 71.563636 72.192S351.674182 458.472727 312.250182 458.472727a71.517091 71.517091 0 0 1-71.354182-72.308363c0.023273-39.749818 31.953455-72.075636 71.354182-72.075637z m465.454545 357.678546a326.981818 326.981818 0 0 1-114.269091 96.791272 334.801455 334.801455 0 0 1-302.987636 0 326.283636 326.283636 0 0 1-114.106182-96.721454 36.212364 36.212364 0 0 1 7.284364-50.455273 36.398545 36.398545 0 0 1 50.152727 7.540364c47.848727 64.907636 125.765818 103.563636 208.244364 103.563636 82.478545 0 160.418909-38.656 208.337454-103.68a36.375273 36.375273 0 0 1 50.059637-7.400727c15.685818 12.008727 18.920727 34.373818 7.284363 50.362182z" p-id="49802"></path></svg>}
        />
      </TabBar>
    </div>
  )
}

// 链接redux数据
const mapStateToProps = (state) => {
  return {
    mainMenu: state.get("global").get("mainMenu"),
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modifyMainMenuStatusFun(mainMenu) {
      dispatch(modifyMainMenuStatusFun(mainMenu));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
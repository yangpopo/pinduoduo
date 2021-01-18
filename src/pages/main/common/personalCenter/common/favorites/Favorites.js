// 收藏相关

import React, { Fragment } from 'react';
import "./favorites.scss";
import { Grid, Badge } from 'antd-mobile';

const Favorites = (props) => {
  // 点击跳转跳转
  const linkGoClick = (val) => {
    props.history.replace(val.routingPath);
  }

  const Favorites = [{
    icon: <svg className="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44823"><path d="M1331.2 649.386667c25.6 16.64 34.133333 33.28 34.133333 66.56v208.213333c0 58.197333-51.2 99.84-110.933333 99.84H110.933333C51.2 1024 0 974.08 0 924.16V715.946667c0-16.64 8.533333-49.92 42.666667-66.56 42.666667-16.64 110.933333-50.005333 110.933333-141.568 0-74.922667-59.733333-116.565333-110.933333-133.12C0 357.888 0 332.885333 0 308.053333V99.84C0 41.728 51.2 0 110.933333 0h1134.933334c59.733333 0 110.933333 49.92 110.933333 99.84v208.213333c0 33.28 0 49.92-34.133333 66.56-85.333333 41.642667-110.933333 74.922667-110.933334 133.205334 0 66.56 34.133333 99.925333 119.466667 141.568z m-418.133333-50.005334c0-8.277333-8.533333-16.64-17.066667-16.64h-170.666667v-74.922666h170.666667c8.533333 0 17.066667-8.277333 17.066667-16.64v-33.28c0-8.362667-8.533333-16.64-17.066667-16.64H750.933333l153.6-149.845334c8.533333-8.362667 8.533333-16.64 0-25.002666l-25.6-25.002667-8.533333-8.277333c-8.533333 0-8.533333 0-8.533333 8.277333l-170.666667 166.485333-170.666667-166.4-8.533333-8.362666c-8.533333 0-8.533333 0-8.533333 8.277333l-42.666667 25.002667c-8.533333 8.362667-8.533333 16.64 0 25.002666L614.4 441.173333H477.866667c-8.533333 0-17.066667 8.277333-17.066667 16.64v33.28c0 8.362667 8.533333 16.64 17.066667 16.64h170.666666v66.56h-170.666666c-8.533333 0-17.066667 8.362667-17.066667 16.725334v33.28c0 8.362667 8.533333 16.64 17.066667 16.64h170.666666v116.565333c0 8.362667 8.533333 16.64 17.066667 16.64h34.133333c8.533333 0 17.066667-8.277333 17.066667-16.64V649.386667h170.666667c8.533333 0 17.066667-8.362667 17.066666-16.64v-33.28h8.533334z" fill="#e02e24" p-id="44824"></path></svg>,
    text: "优惠券",
    newNews: 2,
    id: 0,
    routingPath:"/coupon-manage"
  },{
    icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53355"><path d="M0 0m170.666667 0l682.666666 0q170.666667 0 170.666667 170.666667l0 682.666666q0 170.666667-170.666667 170.666667l-682.666666 0q-170.666667 0-170.666667-170.666667l0-682.666666q0-170.666667 170.666667-170.666667Z" fill="#e02e24" p-id="53356"></path><path d="M512 691.2l-129.3824 68.027733a34.133333 34.133333 0 0 1-49.527467-35.9936l24.712534-144.059733-104.669867-102.0416a34.133333 34.133333 0 0 1 18.909867-58.2144l144.657066-21.026133 64.682667-131.072a34.133333 34.133333 0 0 1 61.218133 0l64.699734 131.072 144.657066 21.026133a34.133333 34.133333 0 0 1 18.909867 58.2144l-104.669867 102.0416 24.712534 144.059733a34.133333 34.133333 0 0 1-49.527467 35.9936L512 691.2z" fill="#fff" p-id="53357"></path></svg>,
    text: "商品收藏",
    newNews: 0,
    id: 1,
    routingPath:"/commodity-collection"
  },{
    icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="61573"><path d="M146.285714 0h731.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v731.428572a146.285714 146.285714 0 0 1-146.285714 146.285714H146.285714a146.285714 146.285714 0 0 1-146.285714-146.285714V146.285714a146.285714 146.285714 0 0 1 146.285714-146.285714z m398.628572 479.085714V292.571429a36.571429 36.571429 0 0 0-73.142857 0v186.514285H245.028571a32.914286 32.914286 0 1 0 0 65.828572h226.742858V731.428571a36.571429 36.571429 0 0 0 73.142857 0v-186.514285h219.428571a32.914286 32.914286 0 1 0 0-65.828572h-219.428571z" fill="#e02e24" p-id="61574"></path></svg>,
    text: "店铺关注",
    newNews: 0,
    id: 2,
    routingPath:"/shop-follow"
  },{
    icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="63546"><path d="M252.587703 8.983347A91.800621 91.800621 0 1 1 161.146379 100.963617 91.441323 91.441323 0 0 1 252.587703 8.983347zM486.131357 0.000898a78.865896 78.865896 0 1 1-78.506597 79.225194A78.686247 78.686247 0 0 1 486.131357 0.000898zM668.654706 42.757352a70.422394 70.422394 0 1 1-70.242745 70.602043 70.422394 70.422394 0 0 1 70.242745-70.422394zM804.469324 153.780412a57.846967 57.846967 0 1 1-57.30802 58.385914 57.487669 57.487669 0 0 1 57.128371-57.846967zM352.113229 222.047019s-130.604798 24.791557-135.814617 158.09109c-3.233681 84.255365 84.973961 161.684069 84.97396 161.684068a250.07136 250.07136 0 0 1 8.443502 161.684069c-26.588047 84.255365-98.627282 247.017327 67.907308 307.559029s294.265005-128.987957 373.669848-286.180802 96.651143-269.473448 46.708731-367.382134c-54.792934-106.711485-163.480558-194.38018-445.888732-136.712862z" fill="#e02e24" p-id="63547"></path></svg>,
    text: "历史浏览",
    newNews: 0,
    id: 3,
    routingPath:"/history-browsing"
  },{
    icon: <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69680"><path d="M958.484078 316.656941c30.559373 0 55.496784 24.053961 55.496785 53.50902v600.325019c0 29.475137-24.937412 53.50902-55.496785 53.50902H65.515922C34.956549 1024 10.019137 999.966118 10.019137 970.49098V370.165961c0-29.455059 24.83702-53.50902 55.496785-53.50902h892.968156z m-290.053019 123.482353c-12.850196-12.850196-34.093176-12.408471-47.445334 0.963765l-95.432784 95.432784-91.617882-91.637961c-12.850196-12.850196-34.073098-12.408471-47.445334 0.963765-13.372235 13.372235-13.793882 34.615216-0.963764 47.445333l110.310902 110.310902h-113.443138a30.117647 30.117647 0 0 0-30.117647 30.117647v8.232157a30.117647 30.117647 0 0 0 30.117647 30.117647h106.777099v68.427294h-106.777099a30.117647 30.117647 0 0 0-30.117647 30.117648v8.232156a30.117647 30.117647 0 0 0 30.117647 30.117647h106.777099v61.158902a30.117647 30.117647 0 0 0 30.117647 30.117647h8.232156a30.117647 30.117647 0 0 0 30.117648-30.117647V808.96l106.777098 0.020078a30.117647 30.117647 0 0 0 30.117647-30.117647v-8.232156a30.117647 30.117647 0 0 0-30.117647-30.117648h-106.797177v-68.447372h106.817255a30.117647 30.117647 0 0 0 30.117647-30.117647v-8.212079a30.117647 30.117647 0 0 0-30.117647-30.117647h-113.041569l116.053334-116.053333c13.372235-13.352157 13.813961-34.595137 0.983843-47.425255z m-178.898824-406.507921l0.080314 0.160627 4.015686 7.027451a30.117647 30.117647 0 0 1-10.982902 41.020235l-129.204706 75.093334H801.310118a30.117647 30.117647 0 0 1 30.117647 30.117647v8.232157a30.117647 30.117647 0 0 1-30.117647 30.117647l-567.17553 0.020078a30.117647 30.117647 0 0 1-35.016784-13.613176l-0.100392-0.160628-4.015687-7.027451a30.117647 30.117647 0 0 1 10.982902-41.020235l242.346667-140.870275a30.117647 30.117647 0 0 1 41.160784 10.902589z" fill="#e02e24" p-id="69681"></path></svg>,
    text: "退款售后",
    newNews: 1,
    id: 4,
    routingPath:"/after-sales"
  }];

  return (<Grid data={Favorites} columnNum={5} hasLine={false} 
    renderItem={dataItem => (
      <Fragment>
        { dataItem.icon }
        { dataItem.text }
        {
          dataItem.newNews === 0 ?
          ""
          :
          <Badge dot />
        }
        
      </Fragment>
    )}
    className="favorites"
    onClick={(el) => {linkGoClick(el)}}
  />)
}

export default Favorites;
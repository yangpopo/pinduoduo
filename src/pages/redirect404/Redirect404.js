import React, {useEffect} from 'react';
import "./redirect404.scss";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';

const Redirect404 = (props) => {
  // 点击跳转跳转
  const linkGoClick = (url = null) => {
    if (url == null) {
      props.history.goBack();
    } else {
      props.history.replace(url);
    }
  }

  useEffect(() => {
    // 修改状态栏字体颜色
    try {
      // eslint-disable-next-line no-undef
      plus.navigator.setStatusBarStyle('dark'); // 黑色
    } catch (e) {

    }
  });
  return (<div className="redirect-404">
    <NavBar
      mode="light"
      className="redirect-404-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >404</NavBar>
  </div>)
}

export default Redirect404;
// 设置

import React, { Fragment, useState, useEffect } from 'react';
import "./setUp.scss";
import { Cell} from "zarm";
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';

const SetUp = (props) => {
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

  return(<div className="set-up">
    <NavBar
      mode="light"
      className="set-up-navbar"
      icon={<Icon type="left" color="#868480" />}
      onLeftClick={() => {linkGoClick()}}
    >设置</NavBar>
    <div className="set-up-box">
      <WhiteSpace />
      <Cell hasArrow title="绑定手机号" className="cell-box" description={<span className="important">完善我的资料</span>} icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2567"><path d="M752.941176 0H271.058824C237.748706 0 210.823529 28.611765 210.823529 63.969882v896.060236C210.823529 995.388235 237.748706 1024 271.058824 1024h481.882352c33.249882 0 60.235294-28.672 60.235295-63.969882V63.969882C813.176471 28.611765 786.191059 0 752.941176 0zM512 963.764706a60.235294 60.235294 0 1 1 0-120.470588 60.235294 60.235294 0 0 1 0 120.470588z m240.941176-180.705882H271.058824V120.470588h481.882352v662.588236z" p-id="2568"></path></svg></i>} onClick={() => {linkGoClick("/set-up/binding-phone")}}/>
      <Cell hasArrow title="账号与安全" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3436"><path d="M771.2 375l-275 266.3c-1.9 2.9-3.8 5.8-6.7 7.7-7.7 7.7-18.2 11.5-28.7 11.5-10.6 0-21.1-3.8-29.7-11.5-1.9-1.9-4.8-4.8-5.8-7.7L277.7 498.6c-15.3-15.3-15.3-39.3 0-54.6 15.3-15.4 41.2-15.4 56.5 0l126.5 121.7 253.9-245.3c16.3-15.3 41.2-15.3 56.5 0 16.4 14.4 16.4 39.3 0.1 54.6z m147.6-227.1c-12.5-11.5-28.8-17.3-45-17.3H869c-1 0-11.5 1-27.8 1-27.8 0-80.5-1.9-131.3-14.4-65.2-15.3-140.9-87.1-163-101.5-10.5-6.7-24-10.5-36.4-10.5S485.6 9 474.1 15.7C471.3 17.6 392.7 99 316 117.2c-50.8 12.4-105.4 14.4-132.2 14.4-17.3 0-27.8-1-28.7-1h-3.8c-17.3 0-32.6 5.8-45 17.3-13.4 11.5-21.1 28.7-21.1 46v159c0 586.4 397.6 662.1 413.9 665 3.8 1 7.7 1 11.5 1s7.7 0 11.5-1c17.2-2.9 416.8-78.6 416.8-665v-159c0-17.3-7.7-34.5-20.1-46z" p-id="3437"></path></svg></i>} onClick={() => {}}/>
      <WhiteSpace />
      <Cell hasArrow title="免密支付设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3872"><path d="M418.133333 499.2c-21.333333-34.133333-29.866667-72.533333-29.866666-115.2 0-119.466667 93.866667-213.333333 213.333333-213.333333s213.333333 93.866667 213.333333 213.333333-93.866667 213.333333-213.333333 213.333333c-46.933333 0-85.333333-12.8-123.733333-38.4l-98.133334 98.133334 46.933334 46.933333-59.733334 59.733333-46.933333-46.933333-29.866667 29.866667 46.933334 46.933333L277.333333 853.333333 170.666667 746.666667l247.466666-247.466667zM601.6 256c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128 128-55.466667 128-128-59.733333-128-128-128z" p-id="3873"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="先用后付设置" className="cell-box" description={<span className="important">领取0元下单资格</span>} icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5617"><path d="M389.631 872.243H118.096q-27.443 0-47.075-19.66t-19.66-48.012V68.58q0-28.35 19.66-48.45T118.096 0h691.2q27.443 0 46.636 20.129t19.192 48.45v278.85h-65.828V68.579l-691.2-1.843V804.57l271.535 1.844v65.828z m-176.45-711.329H680.39v66.736H213.182v-66.736z m0 161.822h376.686v65.828H213.182v-65.828z m0 160.914h253.25v66.735h-253.25V483.65z m0 160.914h253.25V711.3h-253.25v-66.736zM982.09 837.486L881.503 650.064q16.471-35.664 16.471-75.893 0-78.643-55.325-134.407T708.709 384t-134.406 55.325-55.765 133.94q0 39.321 16.472 77.706l-102.4 184.7q-5.5 9.158 1.375 18.286t17.818 6.408l86.864-19.193 29.257 82.3q3.658 10.972 14.629 11.879h1.843q10.065 0 14.629-9.158l89.614-164.571q17.38 1.843 19.193 1.843t5.5-0.907h5.5q3.658-0.907 6.408-0.907l89.615 165.479q4.564 9.157 15.535 9.157h0.907q10.972-0.907 15.536-10.971l29.257-82.3 86.864 20.128q10.065 1.843 17.38-6.407 6.406-9.158 1.842-19.193z m-398.629-22.85l-10.971-30.164q-2.75-7.315-10.065-5.5l-32.007 7.314 45.729-82.3q16.471 17.378 48.45 34.757zM707.803 693.95q-50.293 0-85.49-35.664t-35.196-85.958 35.665-85.49 85.957-35.195 85.49 35.664 34.757 85.957-36.103 85.49-85.022 35.196z m148.129 97.836q-9.158-1.843-11.879 7.314l-12.814 35.665-48.45-89.615q37.478-21.036 57.607-41.135l53.95 96.929z" p-id="5618"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="免拼设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6698"><path d="M843.7 263.4l-157-99.4c-2.9-1.9-6-3.5-9-5-11.5-20.7-31.2-36.6-56-42.6L459.2 77.3C445.8 68.9 429.9 64 412.8 64H227c-48.3 0-87.4 39.2-87.4 87.4V785c0 48.3 39.1 87.4 87.4 87.4h67.4l116.8 74c40.8 25.8 94.8 13.7 120.6-27.1l339-535.4c25.9-40.7 13.7-94.7-27.1-120.5zM205.1 680.3v-507c0-24.1 19.6-43.7 43.7-43.7H338c-0.9 2.6-1.7 5.2-2.3 8L205.1 680.3z m189.2-506.2c5.6-23.5 29.2-37.9 52.7-32.3l133.4 32.1c-5.3 5-10.1 10.7-14.2 17.2L282.5 639.2l111.8-465.1z m409.5 193.3L488.2 865.9c-12.9 20.4-39.9 26.4-60.3 13.5l-120.1-76c-20.4-12.9-26.5-39.9-13.5-60.3l315.6-498.4c12.9-20.4 39.9-26.5 60.3-13.6l120.1 76c20.3 12.9 26.4 39.9 13.5 60.3zM428.7 716.6h-8.1c-21.5 0-39 17.4-39 39v8.1c0 21.5 17.5 39 39 39h8.1c21.5 0 39-17.4 39-39v-8.1c0-21.6-17.5-39-39-39z" p-id="6699"></path></svg></i>} description="还剩100次免拼机会" onClick={() => {}} />
      <Cell hasArrow title="拼小圈设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7744"><path d="M801.7 303.5c-0.9-8.4-7.8-14.7-15.9-14.7H683.4c0-94.5-76.9-171.4-171.5-171.4s-171.4 76.9-171.5 171.4H240.2c-8.1 0-15 6.3-15.9 14.7l-61.2 542.4c-1.1 9.9 6.3 18.5 15.9 18.5h668c9.6 0 17-8.7 15.9-18.5l-61.2-542.4zM411 408.7c0 8.9-7.2 16.1-16.1 16.1h-38.2c-8.9 0-16.1-7.2-16.1-16.1v-38.2c0-8.9 7.2-16.1 16.1-16.1h38.2c8.9 0 16.1 7.2 16.1 16.1v38.2z m0-119.9c0-55.7 45.3-101 101-101s101 45.3 101 101H411z m272.5 120.1c0 8.8-7.1 15.9-15.9 15.9H629c-8.8 0-15.9-7.1-15.9-15.9v-38.6c0-8.8 7.1-15.9 15.9-15.9h38.6c8.8 0 15.9 7.1 15.9 15.9v38.6z" p-id="7745"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="快递助手设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8471"><path d="M739.328 0h-512L0 153.6h1024l-284.672-153.6zM0 972.8h1024V204.8H0z m614.4-256h256v102.4h-256z" p-id="8472"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="消息接受设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9348"><path d="M935.563 231.031a37.473 37.473 0 0 1-12.188 18.844L530.469 579.781c-0.188 0.188-0.375 0.375-0.657 0.469-15.375 12.375-37.78 10.875-51.375-3.094l-327.75-274.312c-16.125-13.5-18.28-37.781-4.78-54 13.5-16.125 37.78-18.281 54-4.781l306 256.218 368.156-309A37.648 37.648 0 0 1 890 183.312c-6.094-1.78-12.469-2.812-19.125-2.812h-732.75c-36.656 0-66.656 30-66.656 66.656v555.469c0 36.656 30 66.656 66.656 66.656h732.75c36.656 0 66.656-30 66.656-66.656V247.156c0-5.531-0.656-10.969-1.968-16.125z" p-id="9349"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="直播设置" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10050"><path d="M746 98.55371094c12.28710938 12.91113281 12.45410156 33.14355469 0.36914063 46.25683594l-0.36914063 0.39550781-71.60449219 74.17089844h133.01367188c70.51464844 1.32714844 126.59765625 59.54589844 125.32324218 130.05175781v455.26464844c1.29199219 70.5234375-54.79980469 128.75097655-125.32324218 130.078125H212.19628906c-70.5234375-1.32714844-126.61523438-59.56347655-125.32324219-130.078125V349.4375c-1.29199219-70.5234375 54.79980469-128.75097655 125.32324219-130.078125h133.21582031l-71.578125-74.17089845c-12.41894531-13.06054688-12.41894531-33.56542969 0-46.62597655 11.83886719-12.41015625 31.50878906-12.8671875 43.91015625-1.02832031 0.34277344 0.33398438 0.69433594 0.67675781 1.02832032 1.02832031l116.62207031 120.80566406h148.921875L700.94726563 98.5625c11.80371094-12.4453125 31.46484375-12.96386719 43.91015624-1.16015625 0.38671875 0.37792969 0.76464844 0.75585938 1.14257813 1.15136719z m-290.0390625 340.3125c-28.07226563 0.59765625-50.38769531 23.765625-49.93066406 51.83789062V663.43554688a55.24189453 55.24189453 0 0 0 6.84667968 26.42871093c13.68457031 24.12597655 44.33203125 32.58984375 68.46679687 18.9140625 0.3515625-0.20214844 0.71191406-0.40429687 1.05468751-0.61523437l135.10546875-85.35058594a49.9921875 49.9921875 0 0 0 16.64648438-17.28808594c14.78320313-24.38085938 7.90136719-56.08300781-15.67089844-72.13183593l-136.07226563-86.38769532a45.95273437 45.95273437 0 0 0-26.44628906-8.13867187z" p-id="10051"></path></svg></i>} onClick={() => {}}/>
      <WhiteSpace />
      <Cell hasArrow title="常见问题" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11027"><path d="M535.272727 744.727273h-93.090909v-46.545455c0-97.745455 55.854545-195.490909 167.563637-297.890909 93.090909-83.781818 97.745455-130.327273 97.745454-144.290909-4.654545-93.090909-37.236364-153.6-190.836364-162.909091-69.818182 0-125.672727 13.963636-153.6 46.545455-32.581818 32.581818-46.545455 93.090909-46.545454 176.872727h-93.090909c0-111.709091 23.272727-190.836364 74.472727-242.036364C344.436364 23.272727 423.563636 0 525.963636 0c181.527273 4.654545 269.963636 88.436364 279.272728 251.345455 0 65.163636-41.890909 134.981818-130.327273 214.10909-93.090909 83.781818-139.636364 158.254545-139.636364 228.072728V744.727273zM442.181818 889.018182h93.090909V1024h-93.090909z" p-id="11028"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="反馈意见" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20668"><path d="M79.36 916.48h343.04v51.2H79.36z" p-id="20669"></path><path d="M550.4 916.48h376.32v51.2H550.4z" p-id="20670"></path><path d="M629.76 158.72l215.04 215.04L373.76 844.8l-215.04-215.04L629.76 158.72z m0 0" p-id="20671"></path><path d="M716.8 74.24l215.04 215.04-64 64-215.04-215.04L716.8 74.24z m0 0" p-id="20672"></path><path d="M138.24 652.8l215.04 215.04L51.2 952.32l87.04-299.52z m0 0" p-id="20673"></path><path d="M798.72 71.68L931.84 204.8c23.04 23.04 20.48 58.88-2.56 81.92-23.04 23.04-61.44 25.6-81.92 2.56l-133.12-133.12c-23.04-20.48-23.04-58.88 2.56-81.92 23.04-23.04 58.88-25.6 81.92-2.56z m0 0" p-id="20674"></path></svg></i>} onClick={() => {}}/>
      <WhiteSpace />
      <Cell hasArrow title="商家免费入驻" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21148"><path d="M776.3 574.9c-54 0-101.9-26.3-131.6-66.7-29.8 40.4-77.7 66.7-131.6 66.7-53.9 0-101.8-26.3-131.6-66.7-6.3 8.6-13.4 16.5-21.3 23.8-33.6 30.8-79.1 46.2-124.9 42.3-83.5-7.3-148.9-80.7-148.9-167.1 0-21.3 5-42.7 14.6-61.8l73.1-146.3c26.4-52.7 79.3-85.4 138.2-85.4h401c58.9 0 111.9 32.7 138.2 85.4l73.3 146.7c9.4 18.7 14.4 39.7 14.6 60.6v4.8c0.2 90.4-73.1 163.7-163.1 163.7zM776.3 630.7c-54 0-101.9-26.3-131.6-66.7-29.8 40.4-77.7 66.7-131.6 66.7-53.9 0-101.8-26.3-131.6-66.7-6.3 8.6-13.4 16.5-21.3 23.8-33.6 30.8-79.1 46.2-124.9 42.3-34.9-3-66.6-17.8-91.7-40.1v171.8c0 82.5 67.1 149.6 149.6 149.6h439.7c82.5 0 149.6-67.1 149.6-149.6V591.2c-28.6 24.6-65.7 39.5-106.2 39.5z" p-id="21149"></path></svg></i>} onClick={() => {}}/>
      <WhiteSpace />
      <Cell hasArrow title="清除缓存" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21869"><path d="M384 256V128h256v128h192v192H192V256h448z m320 640v-192h-64v192H544v-192h-64v192H384v-192H320v192H174.464L192 829.76V512h640v321.536l18.56 62.464H704z" p-id="21870"></path></svg></i>} onClick={() => {}}/>
      <Cell hasArrow title="关于多多" className="cell-box" icon={<i><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21927"><path d="M579.534628 100.4549c51.650357 2.830465 91.234911 47.115064 88.410586 98.9138-2.823302 51.794643-46.985104 91.488691-98.636484 88.658226-51.653427-2.830465-91.234911-47.117111-88.411609-98.9138C483.720422 137.315412 527.881201 97.622388 579.534628 100.4549zM346.952478 476.020554c0 0 181.473121-133.343961 240.850463-107.345844 59.374272 26.000164-20.908192 190.372815-26.762527 214.69271-5.853311 24.321942-43.48642 210.497155 80.285534 107.343797 0 0 61.884442-41.09393-26.762527 53.671387-88.647993 94.764294-200.708208 124.954897-214.087936 53.673433-10.087753-53.736878 42.903136-248.626567 53.520961-322.035484 3.467985-23.972994-26.76048 0-26.76048 0s-87.010703 61.262272-107.044991 26.838252C317.000306 497.375931 338.46006 480.553801 346.952478 476.020554z" p-id="21928"></path></svg></i>} onClick={() => {}}/>
      <WhiteSpace />
      <div className="sign-out-but">退出登录</div>
      <WhiteSpace />
    </div>
  </div>)
}

export default SetUp;
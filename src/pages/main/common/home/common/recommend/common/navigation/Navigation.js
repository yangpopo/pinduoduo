// 首页导航

import React, { useEffect } from 'react';
import "./navigation.scss";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "../../../../../../../../../node_modules/swiper/dist/css/swiper.min.css";

const Navigation = (props) => {
  useEffect(() => {
    // 解决手机事件冲突
    document.querySelector(".navigation").addEventListener("touchmove", (e) => {
      e.stopPropagation();
    })

    let navigationSwiper = new Swiper('.navigation-swiper-container', {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 5,
      scrollbar: {
        el: '.navigation-swiper-pagination',
      },
    });
    
    return () => {
      navigationSwiper.destroy(true);
    }
  })
  return (
    <div className="navigation" >
      <div className="swiper-container navigation-swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1062 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36651"><path d="M586.467099 542.725346m-402.015513 0a402.015513 402.015513 0 1 0 804.031026 0 402.015513 402.015513 0 1 0-804.031026 0Z" fill="#FF5500" opacity=".2" p-id="36652"></path><path d="M447.324819 826.073629l78.68584-269.478088H372.293665l180.312544-344.024885-47.334795 259.262578h183.482874z" fill="#FF5500" p-id="36653"></path><path d="M530.67809 1012.946995a493.382675 493.382675 0 1 1 493.382675-493.382675 493.822998 493.822998 0 0 1-493.382675 493.382675z m0-901.518686a408.091979 408.091979 0 1 0 407.959882 408.136011 408.444238 408.444238 0 0 0-407.959882-408.091979z" fill="#FF5500" p-id="36654"></path><path d="M171.285909 1023.999119a42.535267 42.535267 0 0 1-30.206204-72.609373l85.290695-85.290696a42.579299 42.579299 0 1 1 60.192246 60.192246L201.271951 1011.581992a41.654619 41.654619 0 0 1-29.986042 12.417127z" fill="#FF5500" p-id="36655"></path><path d="M890.070271 1023.999119a42.579299 42.579299 0 0 1-30.206204-12.417127l-85.290695-85.290696a42.579299 42.579299 0 0 1 60.192246-60.192246l85.290695 85.290696a42.667364 42.667364 0 0 1 0 60.192246 41.654619 41.654619 0 0 1-29.986042 12.417127z" fill="#FF5500" p-id="36656"></path><path d="M120.604654 361.44409a44.736885 44.736885 0 0 1-19.990695-4.887593 188.854823 188.854823 0 1 1 247.549969-268.59744 42.711396 42.711396 0 0 1-71.860824 46.057856 103.60816 103.60816 0 1 0-135.97195 147.332301 42.491234 42.491234 0 0 1-19.7265 80.138908z" fill="#FF5500" p-id="36657"></path><path d="M940.971688 361.44409a42.667364 42.667364 0 0 1-19.990695-80.403103 103.60816 103.60816 0 1 0-135.97195-147.156171 42.711396 42.711396 0 0 1-71.860823-46.101889 188.898855 188.898855 0 1 1 247.549968 268.59744 40.421713 40.421713 0 0 1-19.7265 5.063723z" fill="#FF5500" p-id="36658"></path></svg>限时秒杀</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1323 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8055"><path d="M663.497 64c-247.019 0-448 200.96-448 448s200.981 448 448 448 448-200.96 448-448-200.981-448-448-448z m0 960c-282.304 0-512-229.696-512-512s229.696-512 512-512 512 229.696 512 512-229.696 512-512 512z" fill="#4E9DFA" p-id="8056"></path><path d="M859.58 897.282c-101.397 0-210.496-16.896-319.019-50.069-168.533-51.52-316.373-136.469-416.235-239.189C19.665 500.355-20.869 385.112 10.193 283.523c22.891-74.859 82.816-134.848 173.333-173.504 16.192-6.933 35.008 0.619 41.984 16.853 6.955 16.256-0.619 35.072-16.875 42.005-72.576 30.997-120.064 77.12-137.237 133.355-23.915 78.251 11.179 171.008 98.837 261.184 92.459 95.125 230.613 174.165 389.035 222.592 158.421 48.448 317.163 60.16 446.997 33.003 123.093-25.728 204.053-83.008 227.968-161.259 26.155-85.504-19.371-189.888-124.885-286.421a690.323 690.323 0 0 0-30.144-26.005c-13.717-11.157-15.765-31.317-4.608-45.013 11.179-13.717 31.339-15.744 45.013-4.608a752.882 752.882 0 0 1 32.917 28.395c124.48 113.877 176.576 242.304 142.933 352.363-31.061 101.589-129.109 174.464-276.096 205.205-49.941 10.432-103.68 15.616-159.787 15.616z" fill="#4E9DFA" p-id="8057"></path><path d="M823.497 480h-320c-17.664 0-32-14.315-32-32s14.336-32 32-32h320c17.664 0 32 14.315 32 32s-14.336 32-32 32zM823.497 608h-320c-17.664 0-32-14.315-32-32s14.336-32 32-32h320c17.664 0 32 14.315 32 32s-14.336 32-32 32zM652.83 393.655L504.35 269.922c-13.589-11.328-15.424-31.488-4.096-45.077 11.328-13.568 31.488-15.424 45.056-4.096l107.52 89.6 107.52-89.6c13.589-11.328 33.749-9.472 45.056 4.096 11.328 13.589 9.493 33.749-4.096 45.077L652.83 393.655z" fill="#4E9DFA" p-id="8058"></path><path d="M663.497 746.667c-17.664 0-32-14.315-32-32V352c0-17.685 14.336-32 32-32s32 14.315 32 32v362.667c0 17.685-14.336 32-32 32z" fill="#4E9DFA" p-id="8059"></path></svg>全球购</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4899"><path d="M606.032 498.347V370.734l0.54-1.582c15.371-43.196 31.482-86.17 47.235-129.252h112.117c-6.315 17.238-12.584 34.47-18.87 51.707h-44.88a16237.744 16237.744 0 0 1-17.886 49.02h41.978a2526.202 2526.202 0 0 0-17.567 49.198h-41.984c-6.537 18.916-13.073 37.888-19.627 56.815h49.425c-6.058 17.238-11.992 34.475-17.897 51.701h-72.584v0.006z m0-195.061l3.47-5.023c13.471-19.41 26.965-38.895 40.584-58.363h-44.054v63.386z m0-63.386v63.386c-12.334 17.766-24.724 35.544-37.03 53.265-1.484 23.672-2.497 47.292-3.714 70.9-1.257 23.621-2.27 47.281-3.448 70.896h-69.398c1.866-18.484 3.675-36.916 5.518-55.348 1.854-18.483 3.806-36.972 5.746-55.415-6.446 18.443-12.778 36.932-19.155 55.415-6.389 18.427-12.806 36.859-19.149 55.348h-29.121v-110.91a1822.322 1822.322 0 0 1 6.44-18.29c15.32-43.196 31.408-86.17 47.235-129.252h67.225c-6.121 16.736-12.214 33.485-18.324 50.216-6.132 16.714-12.163 33.49-18.324 50.176a28157.338 28157.338 0 0 1 66.475-100.392h19.024v0.005z m0 130.834c-15.053 42.427-29.39 85.077-44.072 127.613h44.072V370.734zM436.27 344.12c12.526-34.793 25.48-69.484 38.178-104.22H436.27v104.22zM391.777 239.9c-12.67 34.736-25.578 69.427-38.178 104.22V239.9h38.178z m44.493 0h-29.002c-15.776 43.076-31.904 86.055-47.247 129.251a1647.957 1647.957 0 0 0-6.422 18.29v110.905h29.07c14.825-43.082 29.315-86.267 44.612-129.195 2.987-8.357 5.95-16.68 8.989-25.025V239.9z m0 147.535v110.91h-38.241c12.84-36.966 25.315-74.063 38.24-110.91z m-82.671-43.315c-2.998 8.351-6.002 16.674-8.949 25.025-15.269 42.929-29.838 86.113-44.67 129.195h-58.97c1.024-19.575 1.883-39.162 2.81-58.732 0.984-19.587 1.9-39.157 2.89-58.732-6.82 19.575-13.534 39.145-20.287 58.732-6.82 19.57-13.562 39.157-20.275 58.732h-56.183c14.882-43.082 29.4-86.266 44.606-129.195 15.32-43.195 31.488-86.17 47.173-129.251h56.172c-0.757 19.41-1.644 38.82-2.378 58.191-0.83 19.405-1.548 38.821-2.355 58.18 7.07-19.353 14.182-38.77 21.213-58.18 7.083-19.37 14.183-38.78 21.254-58.191H353.6V344.12z m0 43.315c-12.926 36.847-25.418 73.939-38.19 110.905h38.19V387.436z" p-id="4900"></path><path d="M142.814 391.407s-46.131 104.317-1.081 165.296c44.982 60.911 233.853 3.488 285.451-10.57 51.644-14.08 595.126-168.8 595.126-168.8L249.333 724.298s-175.719 74.98-237.17-49.249c-61.543-124.245 130.65-283.642 130.65-283.642z" p-id="4901"></path></svg>断码清仓</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10710"><path d="M874.46 607.47c-0.52 23.92-5.71 139.72-96.71 226.38-86.9 82.76-194.18 83.82-246.17 84.34-53.18 0.53-156.15 1.55-241.77-75.46-93.98-84.53-100.59-203.28-101.11-235.26C185.68 421 342.28 276.53 439.27 261.24c7-1.1 47.63-6.88 101.11-4.44 47.81 2.19 83.74 9.93 90.73 11.55 90.46 20.96 247.36 154.53 243.35 339.12z" fill="#E83200" p-id="10711"></path><path d="M477.46 933.41c-25.88 0-59.93-1.11-96.75-8.99-53.66-11.47-100.5-34.78-139.23-69.28-93.14-82.96-104.93-197.62-105.67-243.07-1.41-85.75 30.96-172.53 91.13-244.35 51.1-60.99 116.59-104.14 170.93-112.62 4.71-0.74 47.68-7.12 104.23-4.56 49.86 2.26 86.65 10.24 93.52 11.81 24.72 5.67 52.74 18.6 81.03 37.39 30.02 19.94 58.85 45.63 83.35 74.28 27.91 32.64 49.79 68.28 65.04 105.94 17.32 42.79 25.61 87.25 24.62 132.16-0.46 20.95-3.44 54-15.02 92.51-16.8 55.87-45.73 103.45-85.99 141.42-90.79 85.63-202.25 86.72-255.81 87.25-4.73 0.06-9.87 0.11-15.38 0.11z m-2.38-662.07c-41.1 0-70.18 4.32-73.92 4.91-48.69 7.6-110.64 48.91-157.83 105.23-56.87 67.87-87.46 149.65-86.14 230.26 0.7 42.63 11.7 150.12 98.51 227.45 83.37 74.26 183.25 73.27 236.92 72.75 50.85-0.5 156.64-1.54 241.34-81.42 84.8-79.98 93.62-187.72 94.3-218.84 2.2-100.63-44.75-177.21-84.53-223.73-45-52.63-105.02-93.74-152.91-104.73-4.02-0.92-40.67-9.07-89.7-11.29-9.09-0.42-17.81-0.59-26.04-0.59z" p-id="10712"></path><path d="M489.66 443.49c-6.35 0-12.69-0.5-18.93-1.5-26.63-4.29-48.57-17.31-61.79-36.66-3.6-5.27-2.25-12.47 3.03-16.07 5.27-3.6 12.47-2.25 16.07 3.03 20.35 29.79 69.42 37.09 109.4 16.28 5.67-2.95 12.65-0.75 15.6 4.92 2.95 5.67 0.75 12.65-4.92 15.6-18.22 9.47-38.45 14.4-58.46 14.4z" p-id="10713"></path><path d="M478.09 431.96h-0.06c-6.39-0.03-11.54-5.24-11.51-11.63 0.01-2.13 0.46-52.88 17.32-116.4 9.93-37.43 23.55-71.5 40.46-101.27 21.33-37.54 47.99-68.3 79.23-91.43 5.13-3.8 12.38-2.72 16.18 2.41 3.8 5.13 2.72 12.38-2.42 16.18-65.12 48.21-96.36 124.52-111.1 180.05-16.11 60.69-16.54 110.09-16.55 110.58-0.02 6.37-5.19 11.51-11.55 11.51z" p-id="10714"></path><path d="M468.31 210.19s-171.87-29.9-129.66-96.35 129.66 96.35 129.66 96.35z" fill="#39B54A" p-id="10715"></path><path d="M468.31 218.1c-0.45 0-0.9-0.04-1.36-0.12-1.19-0.21-29.55-5.2-60.77-15.67-43.34-14.54-69.83-32.12-78.73-52.25-5.77-13.05-4.25-26.67 4.51-40.47C342.62 92.81 355.6 89.68 364.63 90c21 0.77 46.16 20.95 74.77 59.98 20.51 27.99 35.25 55.31 35.87 56.46a7.913 7.913 0 0 1-0.55 8.37 7.878 7.878 0 0 1-6.41 3.29z m-104.9-112.29c-6.92 0-12.83 4.02-18.07 12.27-5.83 9.18-6.95 17.55-3.4 25.58 12.17 27.55 73.75 46.83 110.8 55.28-6.25-10.47-15.48-25.14-26.18-39.73-24.84-33.86-47.03-52.82-62.48-53.38-0.24-0.01-0.46-0.02-0.67-0.02z m378.91 585.95c-2.21 0-4.42-0.85-6.1-2.56-3.31-3.37-3.26-8.78 0.11-12.08 36.69-36.05 25.23-107.42-25.54-159.1a8.547 8.547 0 0 1 0.11-12.09c3.37-3.31 8.78-3.26 12.08 0.11 27.47 27.96 45.39 62.14 50.46 96.22 5.21 35.09-3.71 66-25.13 87.04a8.48 8.48 0 0 1-5.99 2.46zM698.34 723a10 10 0 1 0 20 0 10 10 0 1 0-20 0z" p-id="10716"></path></svg>多多果园</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1257 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14787"><path d="M1061.416844 50.303556c-134.504614-73.100334-295.325348-64.328294-412.285881 17.54408 26.31612 17.54408 52.63224 40.936187 73.100333 64.328294 87.7204-49.708227 198.832907-52.63224 292.401335 0 140.352641 78.94836 190.060867 254.389161 108.188494 388.893775-78.94836 134.504614-254.389161 184.212841-394.741802 108.188493l-46.784214 78.948361c99.416454 52.63224 216.376988 58.480267 315.793442 26.31612L827.495777 1024H935.684271l280.705281-473.690162c90.644414-178.364814 26.31612-400.589828-154.972708-500.006282zM608.194776 1024H701.763203l70.17632-122.808561h-93.568427L608.194776 1024z" fill="#100A07" p-id="14788"></path><path d="M681.295109 129.251916c-20.468093-23.392107-46.784214-43.8602-73.100333-64.328293l-26.31612-17.54408C394.741802-52.036911 157.896721 9.367369 52.63224 190.656197-52.63224 371.945024 11.696053 602.942078 195.908894 705.282545c102.340467 55.556254 219.301001 64.328294 321.641468 29.240134L347.957588 1024h108.188494L643.282936 708.206559l46.784214-78.948361 46.784213-81.872373c73.100334-137.428627 46.784214-304.097388-55.556254-418.133909z m-438.602001 497.082269C102.340467 547.385825 52.63224 371.945024 134.504614 234.516397s260.237188-184.212841 400.589828-105.264481c29.240133 14.620067 52.63224 35.08816 73.100334 58.480267 81.872374 90.644414 99.416454 222.225014 35.08816 333.337522-11.696053 17.54408-23.392107 32.164147-35.08816 46.784213-20.468093 23.392107-46.784214 43.8602-73.100334 58.480267-87.7204 49.708227-198.832907 52.63224-292.401334 0z" fill="#100A07" p-id="14789"></path><path d="M380.121735 380.717064m-204.680934 0a204.680934 204.680934 0 1 0 409.361868 0 204.680934 204.680934 0 1 0-409.361868 0Z" fill="#FC6565" p-id="14790"></path></svg>9块9 特卖</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16419"><path d="M486.4 512h-102.4a25.6 25.6 0 0 0 0 51.2h102.4v76.8h-102.4a25.6 25.6 0 0 0 0 51.2h102.4v102.4a25.6 25.6 0 0 0 51.2 0v-102.4h102.4a25.6 25.6 0 0 0 0-51.2h-102.4V563.2h102.4a25.6 25.6 0 0 0 0-51.2h-153.6z m0-396.793679h-38.406321a25.6 25.6 0 0 0 0 51.2h38.406321V204.8a25.6 25.6 0 0 0 51.2 0v-38.393679h38.406321a25.6 25.6 0 0 0 0-51.2h-38.406321V76.8a25.6 25.6 0 0 0-51.2 0v38.406321z m210.236049 166.393679a216.569679 216.569679 0 0 0 32.970272-115.193679 216.708741 216.708741 0 0 0-49.493333-138.17679C880.311309 97.823605 1024 288.135901 1024 512 1024 794.763062 794.763062 1024 512 1024S0 794.763062 0 512C0 288.123259 143.688691 97.810963 343.887012 28.242173a216.708741 216.708741 0 0 0-49.493333 138.164148c0 42.325333 12.085728 81.79358 32.995556 115.193679H307.2a25.6 25.6 0 0 0 0 51.2h409.6a25.6 25.6 0 0 0 0-51.2h-20.163951z m-64.524642 0H392.331062c-28.92484-29.936198-46.737383-70.276741-46.737383-115.193679C345.593679 74.49916 420.09284 0 512 0c91.90716 0 166.406321 74.49916 166.406321 166.406321 0 44.676741-17.622914 85.308049-46.294914 115.193679zM473.606321 460.8a25.6 25.6 0 0 0-51.2 0v51.2h51.2v-51.2z m127.987358 0a25.6 25.6 0 0 0-51.2 0v51.2h51.2v-51.2z" fill="#29ABFF" p-id="16420"></path></svg>充值中心</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17037"><path d="M802.304 587.776h-291.84l-42.496 45.056h82.944v265.216H352.256c-59.392 0-111.104-40.448-125.44-101.888h-4.608c-14.336 0-28.672-2.56-40.448-2.56 14.336 82.944 85.504 146.944 167.936 148.992h452.608c97.28-2.56 175.104-85.504 170.496-182.272-2.56-94.208-75.776-169.984-170.496-172.544z m-26.112 307.712H619.52c-9.728 0-18.944-11.776-18.944-28.672 0-14.336 9.728-28.672 18.944-28.672h156.16c9.728 0 21.504 11.776 21.504 28.672s-9.216 28.672-20.992 28.672z m82.944 0h-9.728c-9.728 0-21.504-11.776-21.504-28.672 0-14.336 9.728-28.672 21.504-28.672h7.168c9.728 0 21.504 11.776 21.504 28.672s-9.728 28.672-18.944 28.672z m-514.048-184.32l317.44-326.656c33.28-33.28 52.224-78.336 52.224-125.44-2.56-45.056-18.944-90.112-52.224-125.44-33.28-33.28-75.776-52.224-120.832-52.224S451.584 99.84 420.864 133.12l-320 326.656c-66.56 68.608-66.56 180.224 0 248.832 64 66.56 173.056 71.168 239.104 4.608 2.56-2.048 5.12-2.048 5.12-2.048zM624.64 306.176l4.608-4.608c7.168-7.168 18.944-7.168 26.112 0 7.168 7.168 7.168 18.944 0 26.112l-4.608 4.608c-2.56 2.56-9.728 4.608-14.336 4.608s-9.728-2.56-14.336-4.608c-4.608-7.168-4.608-19.456 2.56-26.112zM477.696 457.728l99.328-101.888c9.728-7.168 18.944-4.608 26.112 2.56a21.79 21.79 0 0 1 0 23.552L501.248 485.888c-2.56 2.56-9.728 7.168-14.336 4.608-4.608 0-9.728-2.56-14.336-4.608-4.608-9.216-4.608-21.504 5.12-28.16zM131.584 679.936c-26.112-26.112-40.448-59.392-37.888-94.72 0-33.28 14.336-68.608 37.888-94.72L271.36 346.112l182.272 186.88-139.776 144.384c-47.616 52.224-128 52.224-180.224 2.56 0.512 2.56-2.048 0-2.048 0z" fill="#FF594A" p-id="17038"></path></svg>医药馆</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17825"><path d="M453.586039 810.465728c-7.751858 0.012792-15.18392-3.134002-20.65883-8.73683L286.86992 652.48644c-11.410326-11.653371-11.410326-30.546926 0-42.213089a28.785489 28.785489 0 0 1 41.31766 0l125.398459 128.135913 242.226381-247.522205a28.785489 28.785489 0 0 1 41.31766 0c11.410326 11.653371 11.410326 30.546926 0 42.21309l-262.885211 268.628749c-5.487702 5.61562-12.919764 8.749622-20.65883 8.73683z m0 0" fill="#F35D5C" p-id="17826"></path><path d="M862.515746 959.708186H161.484254c-48.365967-0.063959-87.572972-40.115227-87.62414-89.542916V213.52148c0.051167-49.42769 39.258173-89.491749 87.636932-89.542916h58.420357c16.130517 0 29.216574 13.367478 29.216574 29.856166 0 16.475897-13.073266 29.843375-29.216574 29.843375h-58.420357c-16.117725 0.012792-29.190991 13.367478-29.203783 29.856167v656.643789c0.012792 16.475897 13.086058 29.830583 29.216574 29.843375h701.031493c16.117725-0.012792 29.190991-13.367478 29.203782-29.843375V213.52148c-0.012792-16.475897-13.086058-29.830583-29.203782-29.856167H804.095389c-16.130517 0-29.216574-13.367478-29.216574-29.843374 0-16.488688 13.086058-29.856167 29.216574-29.856167h58.420357c48.365967 0.063959 87.572972 40.115227 87.62414 89.542916v656.64379c-0.051167 49.440482-39.258173 89.504541-87.62414 89.555708z m0 0" fill="#4C4C4C" p-id="17827"></path><path d="M628.834318 183.678105H395.15289c-16.130517 0-29.203783-13.367478-29.203783-29.856166 0-16.475897 13.073266-29.843375 29.216575-29.843375h233.668636c16.130517 0 29.216574 13.367478 29.216575 29.843375 0 16.488688-13.086058 29.856167-29.216575 29.856166z m87.636932 59.68675c-7.751858 0-15.171128-3.146794-20.65883-8.749622-5.47491-5.590036-8.544953-13.188392-8.544953-21.106545V94.122397c0-16.475897 13.073266-29.843375 29.203783-29.843375 16.130517 0 29.216574 13.367478 29.216574 29.843375v119.399083c0 7.918152-3.082835 15.503716-8.557744 21.106545-5.487702 5.602828-12.919764 8.73683-20.65883 8.73683z m-408.9425 0c-7.751858 0-15.171128-3.146794-20.65883-8.749622-5.47491-5.590036-8.544953-13.188392-8.544952-21.106545V94.122397c0-16.475897 13.073266-29.843375 29.203782-29.843375 16.130517 0 29.203783 13.367478 29.203783 29.843375v119.399083c0 7.918152-3.070043 15.503716-8.544953 21.106545-5.487702 5.602828-12.906972 8.73683-20.65883 8.73683z m613.407353 149.242458H103.063897c-16.130517 0-29.203783-13.354686-29.203783-29.843375 0-16.488688 13.073266-29.843375 29.203783-29.856167h817.872206c16.130517 0 29.203783 13.367478 29.203783 29.856167 0 16.475897-13.073266 29.843375-29.203783 29.843375z m0 0" fill="#4C4C4C" p-id="17828"></path></svg>现金签到</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18945"><path d="M960.318408 529.830846h-33.114428c-17.830846-109.532338-89.154229-203.781095-185.950249-262.368159-38.208955 50.945274-96.79602 84.059701-163.024875 84.059701-89.154229 0-165.572139-58.587065-193.59204-137.552239l-101.890547-76.41791c-12.736318-10.189055-22.925373-5.094527-25.472637 12.736318l-15.283582 150.288557c-53.492537 40.756219-94.248756 94.248756-119.721393 155.383085H50.945274c-25.472637 0-48.39801 22.925373-48.39801 48.39801v147.741293c0 28.0199 22.925373 48.39801 48.39801 48.39801h58.587064c28.0199 86.606965 89.154229 157.930348 168.119403 206.328359v94.248756c0 12.736318 10.189055 22.925373 22.925373 22.925373h106.985075c12.736318 0 22.925373-10.189055 22.925373-22.925373v-38.208955c25.472637 5.094527 53.492537 7.641791 81.512438 7.641791s56.039801-2.547264 81.512438-7.641791v38.208955c0 12.736318 10.189055 22.925373 22.925373 22.925373h106.985075c12.736318 0 22.925373-10.189055 22.925373-22.925373v-94.248756c101.890547-61.134328 170.666667-160.477612 183.402985-277.651742h30.567164c28.0199 0 48.39801-22.925373 48.39801-48.39801s-22.925373-50.945274-48.39801-50.945273z m-675.024876-43.303483c-30.567164 0-53.492537-20.378109-61.134328-48.39801 7.641791 10.189055 20.378109 17.830846 35.661692 17.830846 25.472637 0 43.303483-20.378109 43.303482-43.303483s-20.378109-43.303483-43.303482-43.303482h-5.094528c10.189055-5.094527 20.378109-7.641791 30.567164-7.641791 35.661692 0 63.681592 28.0199 63.681592 63.681592 0 33.114428-28.0199 61.134328-63.681592 61.134328z" fill="#03B8F7" p-id="18946"></path><path d="M575.681592 0c-81.512438 0-147.741294 66.228856-147.741293 147.741294s66.228856 147.741294 147.741293 147.741293 145.19403-66.228856 145.19403-147.741293S657.19403 0 575.681592 0z m12.736318 219.064677v25.472636h-30.567164v-22.925373c-17.830846 0-35.661692-5.094527-45.850746-10.189054l7.641791-33.114428c12.736318 5.094527 28.0199 10.189055 45.850746 10.189054 12.736318 0 22.925373-2.547264 22.925373-10.189054 0-7.641791-7.641791-12.736318-28.0199-17.830846-28.0199-10.189055-48.39801-22.925373-48.39801-45.850746s17.830846-40.756219 45.850746-45.850747v-22.925373H588.41791v20.37811c17.830846 0 30.567164 5.094527 40.756219 7.641791l-7.641791 33.114428c-7.641791-2.547264-20.378109-7.641791-40.756219-7.641791-15.283582 0-20.378109 5.094527-20.378109 10.189054s10.189055 10.189055 30.567164 17.830846c33.114428 10.189055 45.850746 22.925373 45.850746 45.850746s-17.830846 40.756219-48.39801 45.850747z" fill="#FECC00" p-id="18947"></path></svg>多多赚大钱</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21300"><path d="M121.344 902.656c-161.792-161.826133-161.792-619.485867 0-781.312 161.826133-161.792 619.485867-161.792 781.312 0 161.792 161.826133 161.792 619.485867 0 781.312-161.826133 161.792-619.485867 161.792-781.312 0zM549.12 785.066667c8.533333 0 17.1008-3.242667 23.6032-9.762134l202.5984-202.5984a33.416533 33.416533 0 0 0 0-47.189333l-66.6624-66.679467a20.804267 20.804267 0 1 0-29.422933 29.44l60.842666 60.8256-190.958933 190.958934-61.354667-61.371734a20.804267 20.804267 0 1 0-29.422933 29.44l67.191467 67.1744c6.485333 6.5024 15.035733 9.762133 23.586133 9.762134zM378.368 619.554133a20.821333 20.821333 0 0 0 14.711467-35.515733l-112.145067-112.162133 19.1488-171.793067 171.793067-19.1488 111.633066 111.616a20.804267 20.804267 0 1 0 29.422934-29.405867l-114.432-114.449066a33.536 33.536 0 0 0-27.904-9.489067l-182.050134 20.292267a33.536 33.536 0 0 0-29.047466 29.047466l-20.292267 182.050134c-1.3312 10.205867 2.218667 20.616533 9.489067 27.904l114.961066 114.961066c4.061867 4.061867 9.386667 6.0928 14.711467 6.0928z m-23.688533 112.2304c5.3248 0 10.6496-2.048 14.711466-6.109866L725.674667 369.390933a20.821333 20.821333 0 1 0-29.422934-29.422933L339.968 696.251733a20.821333 20.821333 0 0 0 14.711467 35.5328z m53.230933-262.144a61.781333 61.781333 0 0 0 61.713067-61.730133 61.781333 61.781333 0 0 0-61.713067-61.713067 61.781333 61.781333 0 0 0-61.713067 61.713067 61.781333 61.781333 0 0 0 61.713067 61.713067z m0-88.7808c14.916267 0 27.0336 12.1344 27.0336 27.050667s-12.117333 27.0336-27.0336 27.0336c-14.916267 0-27.050667-12.117333-27.050667-27.0336 0-14.916267 12.1344-27.050667 27.050667-27.050667z" fill="#FFA940" p-id="21301"></path></svg>砍价免费拿</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1047 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24539"><path d="M640.177215 73.142857l62.693877 129.567347c16.718367 37.616327 54.334694 62.693878 96.130612 68.963265l140.016327 20.89796c104.489796 14.628571 144.195918 142.106122 71.053061 217.338775l-102.4 98.220408c-29.257143 29.257143-43.885714 71.053061-37.616326 110.759184l22.987755 140.016326c16.718367 104.489796-89.861224 181.812245-183.902041 133.746939l-125.387755-64.783673c-37.616327-18.808163-79.412245-18.808163-117.028572 0l-127.477551 66.873469c-94.040816 48.065306-200.620408-29.257143-183.90204-133.746939l22.987755-140.016326c8.359184-41.795918-6.269388-83.591837-37.616327-110.759184l-102.4-100.310204C-36.916663 434.677551 4.879256 309.289796 109.369051 292.571429l140.016327-20.89796c41.795918-6.269388 77.322449-31.346939 96.130612-68.963265l62.693878-129.567347c52.244898-94.040816 183.902041-94.040816 231.967347 0" fill="#FED44A" p-id="24540"></path><path d="M412.38946 73.142857l-62.693878 129.567347c-16.718367 37.616327-54.334694 62.693878-96.130612 68.963265l-140.016327 20.89796c-64.783673 10.44898-106.579592 62.693878-108.669387 117.028571 18.808163-102.4 229.877551-22.987755 326.008163-14.628571 98.220408 10.44898 125.387755-77.322449 125.387755-77.322449s20.897959-104.489796 45.97551-236.146939c18.808163-106.579592 89.861224-60.604082 114.938776-41.795919-58.514286-60.604082-163.004082-48.065306-204.8 33.436735" fill="#FFDE73" p-id="24541"></path><path d="M590.022113 798.302041c-77.322449-52.244898-146.285714 0-146.285715 0s-75.232653 66.873469-163.004081 150.465306c-89.861224 83.591837-123.297959-35.526531-123.297959-35.526531 18.808163 75.232653 106.579592 121.208163 181.812244 79.412245l127.477551-64.783673c37.616327-18.808163 79.412245-18.808163 117.028572 0l127.477551 66.873469c58.514286 31.346939 123.297959 12.538776 158.82449-33.436735 2.089796-8.359184 4.179592-14.628571 8.359183-20.897959-71.053061 68.963265-208.979592-89.861224-288.391836-142.106122" fill="#FEC54A" p-id="24542"></path><path d="M477.173133 87.771429c16.718367 4.179592 27.167347 18.808163 22.987755 37.616326l-29.257143 131.657143c-4.179592 16.718367-18.808163 27.167347-37.616326 22.987755-16.718367-4.179592-27.167347-18.808163-22.987755-37.616326l29.257143-133.746939c4.179592-16.718367 20.897959-25.077551 37.616326-20.897959" fill="#FFF2CA" p-id="24543"></path></svg>多多爱消除</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24788"><path d="M627.5 894.1L295.1 959c-50.1 9.8-98.6-22.9-108.4-73L80.9 343.7c-9.8-50.1 22.9-98.6 73-108.4l332.4-64.9c50.1-9.8 98.6 22.9 108.4 73l105.9 542.3c9.6 50.1-23 98.6-73.1 108.4z" fill="#FF7E71" p-id="24789"></path><path d="M796.8 947.2L289.2 905c-50.8-4.2-88.6-48.9-84.4-99.7l54.5-655.8c4.2-50.8 48.9-88.6 99.7-84.4l507.6 42.2c50.8 4.2 88.6 48.9 84.4 99.7l-54.5 655.8c-4.3 50.8-48.9 88.6-99.7 84.4z" fill="#d81e06" p-id="24790"></path><path d="M838.8 129.8L382.6 91.9c-34.1-2.8-66 9.2-89.4 30.6-3.7 165.8 122.3 307.9 289.8 321.9s315.3-105.5 338.9-269.6c-19.6-25-49-42.2-83.1-45z" fill="#5B79FB" p-id="24791"></path><path d="M840.8 105.1L384.7 67.2c-34.1-2.8-66 9.2-89.4 30.6-3.8 165.8 122.2 307.9 289.7 321.9S900.3 314.2 923.9 150c-19.5-24.9-49-42.1-83.1-44.9z" fill="#d81e06" p-id="24792"></path><path d="M597.4 420.7m-148.7 0a148.7 148.7 0 1 0 297.4 0 148.7 148.7 0 1 0-297.4 0Z" fill="#F7554D" p-id="24793"></path><path d="M586.1 407.3m-148.7 0a148.7 148.7 0 1 0 297.4 0 148.7 148.7 0 1 0-297.4 0Z" fill="#FF7E71" p-id="24794"></path><path d="M560.7 489.2l3.1-37.1-37.1-3.1 1.5-18.5 37.1 3.1 1.5-18.5-37.1-3.1 1.6-18.7 37.1 3.1c-12.2-2.4-21.2-6.9-26.9-13.7-5.7-6.7-8.1-15.5-7.2-26.4l3.1-37.1 37.1 3.1-3.1 37.1c-0.4 5.1 1 9.5 4.4 13.5 3.3 3.9 7.5 6.1 12.6 6.5 5.2 0.4 9.7-1 13.7-4.3 3.9-3.3 6.1-7.5 6.5-12.6l3.1-37.1 36.9 3.1-3.1 37.1c-0.9 10.8-4.7 19.1-11.4 24.8-6.7 5.7-16.2 8.7-28.6 9l36.9 3.1-1.6 18.7-36.9-3.1-1.5 18.5 36.9 3.1-1.5 18.5-36.9-3.1-3.1 37.1-37.1-3z" fill="#FFFFFF" p-id="24795"></path></svg>天天领现金</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25419"><path d="M959.333 848.435c0 12.261-2.136 23.679-6.389 34.312-4.259 10.605-10.33 19.952-18.199 28.026-7.875 8.061-17.059 14.346-27.56 18.827-10.493 4.495-21.977 6.758-34.446 6.773H158.321c-12.468 0-24.27-2.248-35.421-6.773-11.145-4.51-20.986-10.797-29.535-18.827-8.549-8.046-15.27-17.393-20.181-28.026-4.918-10.648-7.372-22.082-7.372-34.312V366.082c0-24.506 8.689-45.294 26.067-62.368 17.384-17.074 38.55-25.608 63.485-25.608h714.418c24.935 0 46.1 8.534 63.476 25.608 17.385 17.074 26.074 37.862 26.074 62.368v131.459H735.957c-24.943 0-46.106 8.379-63.484 25.142-17.386 16.765-26.074 37.396-26.074 61.872 0.651 16.766 4.259 31.592 10.833 44.481 5.251 10.952 13.94 20.935 26.074 29.971 12.127 9.035 29.684 13.548 52.651 13.548h223.377v175.939-0.059zM825.51 233.654H378.748c35.436-18.043 68.898-35.45 100.386-52.216a9784.117 9784.117 0 0 0 81.684-42.527c26.887-14.168 47.874-25.128 62.974-32.885 22.968-12.254 43.468-17.888 61.496-16.92 18.036 0.969 33.284 4.03 45.752 9.185 14.442 7.099 26.91 16.439 37.41 28.033l57.06 107.33zM691.677 584.556c0-12.253 4.267-22.569 12.787-30.932 8.526-8.37 19.019-12.564 31.494-12.564 12.469 0 22.962 4.194 31.479 12.564 8.527 8.363 12.787 18.68 12.787 30.932 0 12.246-4.259 22.725-12.787 31.422-8.518 8.704-19.011 13.06-31.479 13.06-12.474 0-22.967-4.355-31.494-13.06-8.52-8.698-12.787-19.176-12.787-31.422z" fill="#ed4269" p-id="25420"></path></svg>省钱月卡</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28930"><path d="M844.353333 0H179.646667A116.906667 116.906667 0 0 0 62.873333 116.773333v790.453334A116.906667 116.906667 0 0 0 179.646667 1024h664.706666a116.906667 116.906667 0 0 0 116.773334-116.773333V116.773333A116.906667 116.906667 0 0 0 844.353333 0z m38.92 907.226667a38.973333 38.973333 0 0 1-38.92 38.92H179.646667a38.973333 38.973333 0 0 1-38.92-38.92V370.6H883.273333z m0-614.48H140.726667v-176a38.973333 38.973333 0 0 1 38.92-38.893334h664.706666a38.973333 38.973333 0 0 1 38.92 38.92z" fill="#1EB9FF" p-id="28931"></path><path d="M511.993333 866.413333c113.92 0 206.666667-92.68 206.666667-206.666666s-92.68-206.666667-206.666667-206.666667-206.6 92.68-206.6 206.666667 92.68 206.666667 206.6 206.666666z m0-335.346666a128.746667 128.746667 0 1 1-128.746666 128.746666 128.893333 128.893333 0 0 1 128.746666-128.746666z" fill="#ED533A" p-id="28932"></path><path d="M369.633333 134.786667H264.206667a38.92 38.92 0 1 0 0 77.853333h105.333333a38.92 38.92 0 0 0 0-77.853333zM643.913333 134.8a38.893333 38.893333 0 1 0 27.52 11.373333 39.16 39.16 0 0 0-27.52-11.373333zM776.673333 134.8a38.893333 38.893333 0 1 0 27.533334 11.373333 39.173333 39.173333 0 0 0-27.533334-11.373333z" fill="#1EB9FF" p-id="28933"></path></svg>电器城</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31083"><path d="M934.403362 82.482164c0-45.484213-37.656948-82.482164-83.840504-82.482164H515.120147c-46.237352 0-83.867402 37.0114-83.867402 82.482164v941.504387h503.217862V493.413607zM711.380089 263.316207h-40.83089v-127.966378h-50.594799V105.170475a96.011768 96.011768 0 0 0 20.549934-1.533175 54.481534 54.481534 0 0 0 17.846704-6.495824 41.691621 41.691621 0 0 0 20.549934-31.147675h32.479117zM0 362.421224v579.352141c0 45.336275 37.656948 82.226635 83.840504 82.226635h274.196375V279.428001H85.696454C38.423536 279.428001 0 316.654584 0 362.421224z m202.446441 22.042763c-5.648542-5.379564-12.897505-8.069346-21.693092-8.069346a26.722984 26.722984 0 0 0-15.116575 4.034673 30.771106 30.771106 0 0 0-9.925295 10.759128 49.505437 49.505437 0 0 0-5.379564 14.672761 82.603205 82.603205 0 0 0-1.573523 15.896612H109.716207a93.039559 93.039559 0 0 1 4.034673-31.403205 72.260993 72.260993 0 0 1 13.81203-25.351195 62.766063 62.766063 0 0 1 23.132125-16.90528 79.886525 79.886525 0 0 1 32.075651-6.078907 81.500394 81.500394 0 0 1 26.27917 4.249855 68.038035 68.038035 0 0 1 22.002416 12.104019 57.49409 57.49409 0 0 1 15.089677 19.460573 58.785185 58.785185 0 0 1 5.608195 25.929498c0 9.952193-1.613869 18.492251-4.881954 25.66052a67.015918 67.015918 0 0 1-12.937851 19.016759 107.187812 107.187812 0 0 1-18.250171 15.062779q-10.207723 6.724455-20.563383 13.44891t-20.173365 14.228946a89.636985 89.636985 0 0 0-17.241502 17.752562h95.164486V543.33596H105.11668q0-17.228054 5.029892-29.910376a79.899974 79.899974 0 0 1 13.650644-22.701759 121.040189 121.040189 0 0 1 20.267507-18.465354q11.687103-8.419018 24.584607-17.174258 6.616864-4.505385 14.107907-9.185605a95.688994 95.688994 0 0 0 13.650643-10.261518 55.234673 55.234673 0 0 0 10.342212-12.695771 30.932493 30.932493 0 0 0 4.169162-16.071448q0-14.390334-8.472813-22.405884zM1280.026898 489.002364H1007.71337v534.997636H1281.815603c46.250801 0 83.840504-36.89036 83.840504-82.226635v-369.172577c0-46.089414-38.396638-83.598424-85.629209-83.598424z m-24.745994 232.962017a60.762175 60.762175 0 0 1-16.555608 20.294405 73.296559 73.296559 0 0 1-23.844918 12.372998 93.954085 93.954085 0 0 1-28.242711 4.249855 95.204833 95.204833 0 0 1-30.932492-4.801261 64.783399 64.783399 0 0 1-23.683531-13.946519 61.864986 61.864986 0 0 1-15.04933-22.365537 77.573312 77.573312 0 0 1-5.029892-30.448333h38.800105a56.714053 56.714053 0 0 0 2.582191 15.089677 37.428316 37.428316 0 0 0 6.630312 12.426793 31.699081 31.699081 0 0 0 10.759128 8.284529 35.061308 35.061308 0 0 0 15.385553 3.093249c9.212503 0 16.959075-2.689782 23.293512-8.27108s9.414237-13.112687 9.414237-22.70176q0-11.270186-4.451589-17.201155a25.673969 25.673969 0 0 0-11.364329-8.620752 49.613029 49.613029 0 0 0-15.089677-3.093249c-5.460257-0.268978-10.691883-0.416916-15.66798-0.416916v-28.242711a87.834831 87.834831 0 0 0 14.081009 0 44.757972 44.757972 0 0 0 13.946519-3.227738 26.89782 26.89782 0 0 0 10.638088-7.760021q4.155713-5.083688 4.155713-13.543053 0-12.682322-8.6342-19.460572a31.295613 31.295613 0 0 0-19.837142-6.724455c-10.355661 0-18.142579 3.348779-23.44145 10.005989s-7.813817 15.089677-7.612083 25.216706h-38.692514a82.899081 82.899081 0 0 1 5.594747-27.75855 61.986026 61.986026 0 0 1 35.800998-35.53202 76.847071 76.847071 0 0 1 28.242711-4.93575 85.602312 85.602312 0 0 1 24.208037 3.550512 68.858419 68.858419 0 0 1 21.706541 10.557394A57.588232 57.588232 0 0 1 1248.058839 585.256212a44.731074 44.731074 0 0 1 6.052009 23.401103 45.954925 45.954925 0 0 1-7.060677 25.351196q-7.03378 11.014657-21.141687 14.941739v0.578303q16.542159 3.685001 26.063988 15.78902t9.414237 29.036196a60.103178 60.103178 0 0 1-6.105805 27.610612z" fill="#FED261" p-id="31084"></path></svg>多多排行榜</Link></div>
          <div className="swiper-slide"><Link to="keke"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33236"><path d="M601.6 915.2v44.8h89.6v-44.8c0-74.24 60.16-134.4 134.4-134.4v-89.6a224 224 0 0 0-224 224zM198.4 691.2v89.6c74.24 0 134.4 60.16 134.4 134.4v44.8h89.6v-44.8a224 224 0 0 0-224-224z" fill="#00B600" p-id="33237"></path><path d="M467.2 640h89.6v320H467.2z" fill="#00B600" p-id="33238"></path><path d="M770.944 108.8c-57.6 17.536-109.44 50.176-150.08 94.528A336.896 336.896 0 0 0 512 64a336.896 336.896 0 0 0-108.416 139.328A336.896 336.896 0 0 0 253.056 108.8 336 336 0 0 0 198.4 288v44.8a313.6 313.6 0 0 0 268.8 310.016h89.6A313.6 313.6 0 0 0 825.6 332.8v-44.8a336 336 0 0 0-54.656-179.2z" fill="#FF0020" p-id="33239"></path></svg>跟着好评买</Link></div>
        </div>
        <div className="swiper-scrollbar navigation-swiper-pagination"></div>
      </div>
    </div>
  )
}

export default Navigation;
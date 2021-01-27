// 更多充值

import React from 'react';
import "./moreRecharge.scss";
import { useHistory } from "react-router-dom"; // 路由


const MoreRecharge = (props) => {
  // 点击跳转跳转
  let history = useHistory();
  const linkGoClick = (val) => {
    history.push("/more-recharge/" + val);
  }

  return(<div className="more-recharge">
    <h1 className="title-box">更多充值</h1>
    <div className="recharge-box">
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6412"><path d="M821.718971 65.09967 209.132064 65.09967c-48.254004 0-90.907453 41.21468-90.907453 89.468684L118.224612 712.459544c0 48.254004 42.654472 85.327364 90.907453 85.327364l39.283702 0-85.160565 126.389572c-6.788613 9.988492-4.192485 24.143886 5.801123 30.93864 3.765767 2.553149 8.04421 4.054339 12.274558 4.054339 7.002484 0 13.882172-4.310166 18.117636-10.538007l101.875249-150.844543 428.879907 0L836.231499 949.08887c4.26207 6.03546 11.024078 9.80839 17.893532 9.80839 4.358261 0 8.759501-1.030469 12.594853-3.733021 9.870812-6.964622 12.226462-21.573341 5.255701-31.444153l-88.217181-125.932154 37.960567 0c48.254004 0 84.451414-37.074384 84.451414-85.327364L906.170384 154.568355C906.170384 106.314351 869.972974 65.09967 821.718971 65.09967zM862.168218 711.052498c0 24.165376-19.590174 43.756573-43.756573 43.756573L205.983351 754.809071c-24.165376 0-43.756573-19.590174-43.756573-43.756573L162.226778 152.85841c0-24.165376 19.590174-43.756573 43.756573-43.756573l612.429317 0c24.165376 0 43.756573 19.590174 43.756573 43.756573L862.169241 711.052498zM806.909683 228.971925c0-36.248575-29.385261-65.633836-65.633836-65.633836L282.096866 163.338089c-36.248575 0-65.633836 29.385261-65.633836 65.633836l0 197.212594c0 36.248575 29.385261 65.633836 65.633836 65.633836l459.178981 0c36.248575 0 65.633836-29.385261 65.633836-65.633836L806.909683 228.971925zM763.930823 425.938925c0 12.0832-9.795087 21.878287-21.878287 21.878287l-459.710077 0c-12.0832 0-21.878287-9.795087-21.878287-21.878287l0-196.720384c0-12.0832 9.795087-21.878287 21.878287-21.878287l459.710077 0c12.0832 0 21.878287 9.795087 21.878287 21.878287L763.930823 425.938925zM274.334066 560.167023c-33.174564 0-60.164265 26.994818-60.164265 60.164265s26.989701 60.164265 60.164265 60.164265 60.164265-26.994818 60.164265-60.164265S307.508629 560.167023 274.334066 560.167023zM274.334066 647.680169c-15.078417 0-27.347858-12.263301-27.347858-27.347858s12.269441-27.347858 27.347858-27.347858c15.078417 0 27.347858 12.263301 27.347858 27.347858S289.412482 647.680169 274.334066 647.680169zM744.713132 560.167023c-33.174564 0-60.164265 26.994818-60.164265 60.164265s26.989701 60.164265 60.164265 60.164265 60.164265-26.994818 60.164265-60.164265S777.887696 560.167023 744.713132 560.167023zM744.713132 647.680169c-15.078417 0-27.347858-12.263301-27.347858-27.347858s12.269441-27.347858 27.347858-27.347858c15.078417 0 27.347858 12.263301 27.347858 27.347858S759.791549 647.680169 744.713132 647.680169z" p-id="6413"></path></svg><span className="tag">春运特惠</span></dt>
        <dd>火车票</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6915"><path d="M714.94656 957.18912a20.21888 20.21888 0 0 1-19.33312-14.27968l-114.24256-371.76832-136.41216 115.58912 1.65376 201.04192a20.21888 20.21888 0 0 1-5.79584 14.336l-33.77152 34.37568a20.21376 20.21376 0 0 1-33.28-6.87616L300.672 740.6592l-196.17792-84.27008a20.22912 20.22912 0 0 1-6.5024-32.6912l33.6384-34.49344a20.25472 20.25472 0 0 1 15.46752-6.08256l205.76768 10.07616 115.89632-142.19264-374.35904-118.90176a20.21376 20.21376 0 0 1-8.33024-33.41824l64.26112-65.63328a20.2752 20.2752 0 0 1 16.47616-5.97504l461.64992 46.47936 130.82112-131.1232c52.10112-52.71552 102.05184-60.98944 127.18592-60.98944h0.36864c23.34208 0 43.96544 6.90176 55.23968 18.18112 27.22304 27.22304 25.87648 104.88832-47.46752 179.71712-0.05632 0.0512-0.10752 0.1536-0.1536 0.2048l-131.97312 131.75808 36.92544 458.3936a20.23936 20.23936 0 0 1-5.7088 15.78496l-64.3072 65.62816a20.22912 20.22912 0 0 1-14.44352 6.07744z m-123.24352-441.5232a20.21888 20.21888 0 0 1 19.31776 14.27968l113.25952 368.5888 34.06336-34.75968L721.408 405.248a20.20352 20.20352 0 0 1 5.86752-15.93344l138.52672-138.27072c33.99168-34.70336 45.952-65.15712 50.00704-84.59264 4.99712-23.9616-0.67584-36.28032-2.34496-38.05184-7.43936-7.33184-63.90784-19.62496-125.48096 42.71104a1.3568 1.3568 0 0 1-0.08704 0.08192l-137.61536 137.73824a20.21376 20.21376 0 0 1-16.32768 5.82656L172.43136 268.288l-34.47296 35.21024 371.38432 117.9392a20.21376 20.21376 0 0 1 9.55392 32.04608l-141.13792 173.16352c-4.06016 4.98688-10.24 7.72608-16.6656 7.424l-206.86848-10.12736-6.72256 6.89152 176.94208 76.0064a20.23936 20.23936 0 0 1 10.88 11.28448l64.84992 167.64928 5.93408-6.04672-1.65888-202.1376a20.18816 20.18816 0 0 1 7.14752-15.5904l167.03488-141.54752a20.23936 20.23936 0 0 1 13.07136-4.7872z" p-id="6916"></path></svg></dt>
        <dd>飞机票</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8015"><path d="M491.8 182.4H309.3c-30.8 0-55.9 25.1-55.9 55.9v100.6c0 30.8 25.1 55.9 55.9 55.9h182.5c30.8 0 55.9-25.1 55.9-55.9V238.3c0-30.8-25.1-55.9-55.9-55.9zM503 338.9c0 6.2-5 11.2-11.2 11.2H309.3c-6.2 0-11.2-5-11.2-11.2V238.3c0-6.2 5-11.2 11.2-11.2h182.5c6.2 0 11.2 5 11.2 11.2v100.6zM920.9 278.6l-68.1-65.4c-8.9-8.5-23-8.3-31.6 0.6-8.5 8.9-8.3 23 0.6 31.6l68.1 65.4c17.5 16.8 27.5 40.3 27.5 64.5v388.2c0 12.3-10 22.4-22.4 22.4h-68c-12.3 0-22.4-10-22.4-22.4V401.8c0-37-30.1-67.1-67.1-67.1h-64.2V178c0-61.6-50.1-111.8-111.8-111.8H239.4c-61.6 0-111.8 50.1-111.8 111.8v735.3H84.5c-12.3 0-22.4 10-22.4 22.4s10 22.4 22.4 22.4h633.2c12.3 0 22.4-10 22.4-22.4s-10-22.4-22.4-22.4h-44.3V379.4h64.2c12.3 0 22.4 10 22.4 22.4v361.8c0 37 30.1 67.1 67.1 67.1h68c37 0 67.1-30.1 67.1-67.1V375.3c-0.1-36.3-15.1-71.5-41.3-96.7zM628.7 913.3H172.4V178c0-37 30.1-67.1 67.1-67.1h322.2c37 0 67.1 30.1 67.1 67.1v735.3z" p-id="8016"></path></svg></dt>
        <dd>加油卡</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8748"><path d="M534.377148 64.11832c302.340933 0 317.210595 288.721751 317.210595 288.721751 45.862537 60.731176 21.084201 115.245767 21.084201 115.245767 147.456377 231.735875 52.05047 298.68466 26.02677 303.621089-26.02677 4.937452-50.829665-28.51852-50.829665-28.51852s-8.650007 33.429367-29.740348 50.823526c76.854389 35.897581 63.201437 80.536244 63.201437 80.536244s-16.117073 134.765333-335.797929 49.576115l-27.27111-4.964058c-306.406528 110.594841-344.484775-38.423101-344.484775-38.423101s-12.401448-61.926398 47.078225-85.505419c-34.707476-21.084201-47.078225-65.669652-47.078225-65.669652s-30.992875 50.79692-71.881121 32.212656c-40.895409-18.587334-65.668629-183.380564 87.973634-302.33991 0 0-22.280446-70.63678 28.517497-112.778576C218.386334 346.656231 232.035192 64.11832 534.377148 64.11832M265.464559 362.773304c-66.916039 56.986899-22.303982 114.024963-22.303982 114.024963C95.705224 567.267744 121.729947 713.472618 121.729947 713.472618s23.52274-11.789511 40.251749-45.857421c16.731056-34.07098 42.754756 5.574972 42.754756 5.574972s16.117073 78.070076 65.462944 108.651582c49.348941 30.582529-2.174526 50.095955-2.174526 50.095955s-54.318116 0.788969-49.63956 37.673018c4.673439 36.885072 179.871647 83.065857 285.004079 1.24741l55.757908 7.437389c183.415356 63.783699 273.856182 4.298909 279.895735-7.111978 6.0416-11.411911-27.704992-33.809013-58.724473-46.788629-31.022551-12.986779-39.003316-26.66736-11.562337-44.936445 27.445072-18.262946 38.281885-54.513568 54.342676-92.036159 16.054651-37.525662 40.250726-19.197224 43.3626-8.650007 3.105734 10.541077 26.02063 45.825698 26.02063 45.825698s59.743686-63.312978-64.446801-250.297626c0 0 26.951839-56.026014-18.591427-101.592816 0 0-11.124362-262.724657-280.062534-262.724657C260.442172 109.98188 265.464559 362.773304 265.464559 362.773304" p-id="8749"></path></svg></dt>
        <dd>Q币充值</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22789"><path d="M812.221666 596.623329c39.231513 0 71.148433-31.917944 71.148433-71.151503 0-39.23049-31.91692-71.14741-71.148433-71.14741-39.23356 0-71.151503 31.91692-71.151503 71.14741C741.069139 564.705386 772.988106 596.623329 812.221666 596.623329zM812.221666 491.163439c18.917862 0 34.30941 15.391549 34.30941 34.308387 0 18.919908-15.391549 34.31248-34.30941 34.31248-18.919908 0-34.31248-15.392572-34.31248-34.31248C777.908162 506.553964 793.300734 491.163439 812.221666 491.163439zM664.837944 467.568045c39.231513 0 71.14741-31.917944 71.14741-71.151503 0-39.23049-31.915897-71.14741-71.14741-71.14741s-71.14741 31.91692-71.14741 71.14741C593.690534 435.649078 625.606431 467.568045 664.837944 467.568045zM664.837944 362.107131c18.917862 0 34.308387 15.391549 34.308387 34.308387 0 18.919908-15.390525 34.31248-34.308387 34.31248s-34.308387-15.392572-34.308387-34.31248C630.529557 377.49868 645.920082 362.107131 664.837944 362.107131zM981.344504 494.64575l0-95.1685c0-38.181601-6.478552-71.91796-19.254529-100.272751-11.484565-25.486464-28.085662-46.812165-49.343825-63.382563-44.128033-34.399461-96.464005-39.535435-123.733069-39.535435L530.602683 196.286502l0-47.291073c0-10.172687-8.246825-18.419512-18.419512-18.419512s-18.419512 8.246825-18.419512 18.419512l0 47.291073L220.949204 196.286502c-27.269064 0-79.605036 5.136997-123.733069 39.535435-21.25714 16.570397-37.859259 37.896098-49.342802 63.382563-12.777001 28.354791-19.254529 62.09115-19.254529 100.272751l0 95.158267-0.01535 27.733645 0 151.796218c0 65.411779 53.218062 118.628818 118.631888 118.628818l47.955198 0c3.240811 0.156566 17.126053 0.596588 33.735335-2.153036 26.479071-4.379751 46.794769-14.349823 60.382229-29.635971 14.512529-16.32685 22.955828-28.534893 24.713868-31.140231 14.757099-19.72525 36.772508-31.719422 65.444525-35.655058 5.853311-0.803295 11.965519-1.336438 18.674315-1.626034l70.296019 0 0.316202 0.002047 0.37453-0.01535c0.423649-0.008186 42.156122-1.160429 61.145615 22.577205 6.353708 7.942903 17.944697 9.234315 25.889647 2.877537 7.943926-6.354731 9.231245-17.945721 2.877537-25.889647-29.641087-37.052894-84.874039-36.561707-90.896196-36.390815l-70.39528 0-0.76748 0.016373c-8.03193 0.334621-15.400758 0.974188-22.526039 1.952468-39.023782 5.354961-69.39858 22.364357-90.282213 50.554396l-0.567935 0.811482c-0.075725 0.113587-7.688099 11.539824-21.830191 27.450189-16.142655 18.159592-52.369741 20.199041-64.925708 19.462261l-0.587378-0.037862-49.0266 0c-45.101197 0-81.792864-36.68962-81.792864-81.789795L65.442478 522.379395l0.01535-27.733645 0-95.1685c0-61.172221 18.305925-106.458637 54.407144-134.601604 35.43914-27.626197 78.543867-31.751145 101.084233-31.751145l568.062853 0c22.540366 0 65.645093 4.124947 101.084233 31.751145 36.102243 28.142967 54.408167 73.429383 54.408167 134.601604l0 95.178733 0.01535 27.713178 0 151.796218c0 45.099151-36.691667 81.789795-81.792864 81.789795l-48.439222 0-1.174756 0.037862c-11.68718 0.750083-48.713468-1.222851-64.924685-19.462261-14.143115-15.910365-21.75549-27.336602-21.816888-27.429723l-0.581238-0.831948c-20.883633-28.190039-51.259454-45.199435-90.278119-50.553373-5.613858-0.772596-19.290345-1.197268-36.586267-1.673106-4.142343-0.113587-7.53358-0.205685-9.326413-0.280386-10.161431-0.423649-18.74697 7.472182-19.170618 17.635659s7.472182 18.74697 17.635659 19.170618c1.973958 0.081864 5.449106 0.178055 9.849322 0.298805 8.532327 0.234337 28.514427 0.784876 32.586163 1.343601 28.6669 3.934612 50.682309 15.928784 65.440431 35.653011 1.75804 2.604314 10.200316 14.813381 24.714891 31.142278 13.586436 15.284101 33.902134 25.255197 60.381206 29.634948 11.480472 1.899256 21.658276 2.275833 27.919886 2.275833 2.797719 0 4.814656-0.074701 5.815449-0.122797l47.956222 0c65.413825 0 118.631888-53.217039 118.631888-118.628818L981.359854 522.358929 981.344504 494.64575zM268.360004 585.593112c0.013303 0 0.025583 0 0.039909 0 10.153244 0 18.396999-8.221242 18.418488-18.380626l0.220011-105.304348 105.065917-0.23843c10.172687-0.022513 18.400069-8.28878 18.377556-18.461467-0.022513-10.159384-8.264221-18.377556-18.418488-18.377556-0.014326 0-0.028653 0-0.042979 0l-104.905258 0.23843 0.220011-105.146758c0.021489-10.172687-8.207939-18.436908-18.380626-18.458397-0.013303 0-0.025583 0-0.039909 0-10.154267 0-18.396999 8.222265-18.418488 18.380626l-0.220011 105.307418-105.065917 0.23843c-10.172687 0.022513-18.400069 8.28878-18.377556 18.461467 0.022513 10.159384 8.264221 18.377556 18.418488 18.377556 0.013303 0 0.028653 0 0.042979 0l104.905258-0.23843-0.220011 105.142665C249.957889 577.307402 258.187317 585.572646 268.360004 585.593112z" p-id="22790"></path></svg></dt>
        <dd>游戏充值</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766"><path d="M512 960C264.97 960 64 759.03 64 512S264.97 64 512 64s448 200.97 448 448-200.97 448-448 448z m0-843.29c-217.97 0-395.3 177.33-395.3 395.29S294.04 907.29 512 907.29 907.29 729.96 907.29 512 729.96 116.71 512 116.71z" p-id="11767"></path><path d="M435.95 687.31a26.35 26.35 0 0 1-23.66-14.76l-56.91-116.13-39.16 58.74a26.371 26.371 0 0 1-21.93 11.74h-50c-14.55 0-26.35-11.8-26.35-26.35s11.8-26.35 26.35-26.35h35.89l56.76-85.13a26.38 26.38 0 0 1 23.67-11.68c9.41 0.63 17.77 6.24 21.92 14.71l49.93 101.89L520.58 354a26.364 26.364 0 0 1 24.74-17.27h0.14c11.09 0.05 20.97 7.06 24.69 17.53l76.99 216.58 132.18-1.83h0.37c14.39 0 26.13 11.56 26.34 25.99 0.19 14.55-11.44 26.51-25.99 26.71L629 623.79c-11.12 0.42-21.41-6.9-25.2-17.53l-58.88-165.63-84.22 229.41a26.342 26.342 0 0 1-23.37 17.23c-0.46 0.03-0.92 0.04-1.38 0.04z" p-id="11768"></path></svg></dt>
        <dd>流量充值</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14851"><path d="M768 1024h-512c-58.026667 0-102.4-44.373333-102.4-102.4V221.866667c0-3.413333 3.413333-10.24 3.413333-13.653334l204.8-204.8c3.413333 0 10.24-3.413333 13.653334-3.413333h392.533333c58.026667 0 102.4 44.373333 102.4 102.4v819.2c0 58.026667-44.373333 102.4-102.4 102.4zM187.733333 228.693333V921.6c0 37.546667 30.72 68.266667 68.266667 68.266667h512c37.546667 0 68.266667-30.72 68.266667-68.266667V102.4c0-37.546667-30.72-68.266667-68.266667-68.266667H382.293333L187.733333 228.693333z" p-id="14852"></path><path d="M682.666667 887.466667H341.333333c-27.306667 0-51.2-23.893333-51.2-51.2v-443.733334c0-27.306667 23.893333-51.2 51.2-51.2h341.333334c27.306667 0 51.2 23.893333 51.2 51.2v443.733334c0 27.306667-23.893333 51.2-51.2 51.2zM341.333333 375.466667c-10.24 0-17.066667 6.826667-17.066666 17.066666v443.733334c0 10.24 6.826667 17.066667 17.066666 17.066666h341.333334c10.24 0 17.066667-6.826667 17.066666-17.066666v-443.733334c0-10.24-6.826667-17.066667-17.066666-17.066666H341.333333z" p-id="14853"></path><path d="M716.8 614.4H307.2c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066666h409.6c10.24 0 17.066667 6.826667 17.066667 17.066666s-6.826667 17.066667-17.066667 17.066667zM409.6 512c-10.24 0-17.066667-6.826667-17.066667-17.066667v-136.533333c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066667 17.066667v136.533333c0 10.24-6.826667 17.066667-17.066667 17.066667z" p-id="14854"></path><path d="M512 614.4c-10.24 0-17.066667-6.826667-17.066667-17.066667v-102.4c0-10.24 6.826667-17.066667 17.066667-17.066666s17.066667 6.826667 17.066667 17.066666v102.4c0 10.24-6.826667 17.066667-17.066667 17.066667zM614.4 512c-10.24 0-17.066667-6.826667-17.066667-17.066667v-136.533333c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066667 17.066667v136.533333c0 10.24-6.826667 17.066667-17.066667 17.066667zM512 887.466667c-10.24 0-17.066667-6.826667-17.066667-17.066667v-136.533333c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066667 17.066667v136.533333c0 10.24-6.826667 17.066667-17.066667 17.066667zM409.6 750.933333c-10.24 0-17.066667-6.826667-17.066667-17.066666V614.4c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066667 17.066667v119.466667c0 10.24-6.826667 17.066667-17.066667 17.066666zM614.4 750.933333c-10.24 0-17.066667-6.826667-17.066667-17.066666v-136.533334c0-10.24 6.826667-17.066667 17.066667-17.066666s17.066667 6.826667 17.066667 17.066666v136.533334c0 10.24-6.826667 17.066667-17.066667 17.066666z" p-id="14855"></path></svg><span className="tag">送话费</span></dt>
        <dd>免费领卡</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20726"><path d="M56 512h928a24 24 0 0 1 24 24v80a24 24 0 0 1-24 24H880v328a24 24 0 0 1-24 24h-672a24 24 0 0 1-24-24V640H56A24 24 0 0 1 32 616v-80A24 24 0 0 1 56 512zM960 592v-32H80v32h104a24 24 0 0 1 24 24V944h624V616a24 24 0 0 1 24-24H960z m-688-120c0-100.416 60.368-175.008 156.864-203.344A135.584 135.584 0 0 1 384 168C384 93.008 445.008 32 520 32c74.992 0 136 61.008 136 136a135.584 135.584 0 0 1-44.864 100.656C707.632 296.992 768 371.584 768 472a24 24 0 0 1-48 0C720 348 612.272 304 520 304S320 348 320 472a24 24 0 0 1-48 0z m160-304c0 48.512 39.488 88 88 88s88-39.488 88-88S568.512 80 520 80a88.112 88.112 0 0 0-88 88z" p-id="20727"></path></svg></dt>
        <dd>游戏服务</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17321"><path d="M763.58 255.66a254.79 254.79 0 0 0-498.58 0 135.82 135.82 0 0 0-92.13 128.44c0 74.75 60.82 135.56 135.57 135.56h4.3l154.82 404.08A53 53 0 0 0 517.41 958h0.28a53 53 0 0 0 49.78-34.8l149.87-403.54h2.81c74.75 0 135.56-60.81 135.56-135.56a135.82 135.82 0 0 0-92.13-128.44zM530 909.3a12.87 12.87 0 0 1-12.51 8.7h-0.07a12.88 12.88 0 0 1-12.51-8.6L355.58 519.66h319.09z m190.15-429.64H308.44a95.57 95.57 0 1 1 83.18-142.39l34.86-19.62a135.67 135.67 0 0 0-118-69.12H308a214.8 214.8 0 0 1 412.62 0h-0.45a135.5 135.5 0 0 0-118.71 70.27l35 19.28a95.52 95.52 0 1 1 83.64 141.58z" p-id="17322"></path></svg></dt>
        <dd>吃喝玩乐</dd>
      </dl>
      <dl onClick={() => {linkGoClick()}}>
        <dt><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21762"><path d="M754.22 219.87h-76.41V112.55c0-26.32-26.3-45.43-62.53-45.43H408.92c-36.24 0-62.53 19.11-62.53 45.43v107.32h-76.41c-51.06 0-92.59 41.53-92.59 92.59v505.52c0 51.06 41.53 92.59 92.59 92.59h60.11v17.87c0 15.84 12.84 28.69 28.69 28.69s28.69-12.84 28.69-28.69v-17.87h249.26v17.87c0 15.84 12.84 28.69 28.69 28.69s28.69-12.84 28.69-28.69v-17.87h60.11c51.06 0 92.59-41.53 92.59-92.59V312.46c0-51.06-41.53-92.59-92.59-92.59z m-350.45-95.03c1.48-0.21 3.2-0.34 5.16-0.34h206.36c1.95 0 3.67 0.13 5.16 0.34v95.03H403.77v-95.03z m385.66 693.14c0 19.42-15.79 35.21-35.21 35.21H269.97c-19.42 0-35.21-15.79-35.21-35.21V312.46c0-19.42 15.79-35.21 35.21-35.21h484.25c19.42 0 35.21 15.79 35.21 35.21v505.52z" p-id="21763"></path><path d="M343.03 353.05c-15.84 0-28.69 12.84-28.69 28.69v359.92c0 15.84 12.84 28.69 28.69 28.69s28.69-12.84 28.69-28.69V381.74c0-15.85-12.84-28.69-28.69-28.69zM512.1 353.05c-15.84 0-28.69 12.84-28.69 28.69v359.92c0 15.84 12.84 28.69 28.69 28.69s28.69-12.84 28.69-28.69V381.74c0-15.85-12.84-28.69-28.69-28.69zM681.17 353.05c-15.84 0-28.69 12.84-28.69 28.69v359.92c0 15.84 12.84 28.69 28.69 28.69s28.69-12.84 28.69-28.69V381.74c0-15.85-12.85-28.69-28.69-28.69z" p-id="21764"></path></svg></dt>
        <dd>旅游出行</dd>
      </dl>
    </div>
  </div>)
}

export default MoreRecharge;
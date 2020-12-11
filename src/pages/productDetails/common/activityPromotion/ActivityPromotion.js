// 活动促销

import React, { Fragment, useState, useEffect } from 'react';
import "./activityPromotion.scss";
import { Popup, Cell } from 'zarm';
import PopupBox from "common/popupBox/PopupBox"; // 弹框
import OfficialCoupon from "common/officialCoupon/OfficialCoupon"; // 官方活动优惠券


const ActivityPromotion = (props) => {
  const [activityVisible, setActivityVisible] = useState(false); // 活动促销
  return (<Fragment>
    <Cell hasArrow className="activity-box" 
        onClick={() => {setActivityVisible(true)}}
      >点击查看可叠加红包，每满80可用8个红包<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="108046"><path d="M159.44038086 355.94448242V801.90722656c0 85.24775391 17.82553711 92.0465332 98.25996094 92.04653321h508.5993164c80.42255859 0 98.25205078-6.80273438 98.25205078-92.08212891V351.71650391l-705.11132812 4.22797851z" fill="#EB4B29" p-id="108047"></path><path d="M766.31547852 149.78603516H257.70429688c-80.43442383 0-98.25996094 22.54394531-98.25996094 107.82333984v106.43115234s131.26904297 78.65859375 348.46611328 78.65859375c217.21289063 0 356.64521484-80.01914063 356.64521484-80.01914062V257.58564453c0.01977539-85.25566406-17.82949219-107.79960938-98.24018554-107.79960937z" fill="#CF2709" p-id="108048"></path><path d="M766.31547852 130.04228516H257.70429688c-80.43442383 0-98.25996094 22.54394531-98.25996094 107.82333984v106.43115234s131.26904297 78.65463867 348.46611328 78.65463868c217.21289063 0 356.64521484-80.00727539 356.64521484-80.0072754V237.84189453c0.01977539-85.25566406-17.82949219-107.79960938-98.24018554-107.79960937z" fill="#FF583F" p-id="108049"></path><path d="M676.32558594 421.24282227c0 90.75322266-73.58818359 164.32163086-164.32558594 164.32163086S347.67836914 511.99208984 347.67836914 421.24282227c0-90.7453125 73.58027344-164.31767578 164.32163086-164.31767579 90.73344727 0 164.32558594 73.57236328 164.32558594 164.31767579z" fill="#FED848" p-id="108050"></path><path d="M553.45317383 314.74443359L520.09208984 388.99707031a404.54121094 404.54121094 0 0 0-6.08291015 14.34902344h-0.5972168l-40.30620117-88.63330078H423.87294922l55.14960937 98.87695312H437.2015625v28.16806641h50.98491211v24.31977539H437.2015625v28.16806641h50.98491211v40.83618164h46.73320312v-40.81640625h49.36333008v-28.16411133h-49.36333008v-24.31582031h49.36333008v-28.16806641h-40.93505859l56.77119141-98.87299805h-46.6659668z" fill="#EB4B29" p-id="108051"></path></svg></Cell>

    {/* 活动促销弹窗 */}
    <Popup
      visible={activityVisible}
      onMaskClick={() => {setActivityVisible(false)}}
      destroy={false}
    >
      <PopupBox title="11.11大促销" className="activity-popup" closeBut={()=>{setActivityVisible(false)}}>
        <div className="activity-box">
          <div className="describe">11.11大促特惠详情</div>
          <OfficialCoupon dataJson={{price: 1, name: "11.11补贴红包", explain: "该商品每满80可用8个红包", term:"2020.10.29-2020.10.29", state:0}} />
          <p className="explain">你还未领取大促补贴红包,参与大促主会场的红包雨活动可获得,活动详情可查看规则></p>
        </div>
      </PopupBox>
    </Popup>
  </Fragment>)
}

export default ActivityPromotion;
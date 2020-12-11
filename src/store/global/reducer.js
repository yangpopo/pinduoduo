// 全局状态
import { PRODUCT_OPTIONS_POPUP_STATE, MODIFY_MAIN_MENU_STATUS } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  productOptionsPopupState: false, // 商品选项弹窗状态
  // 默认地址
  defaultAddress: {
    name: "新垣结衣",
    tel: "85486554",
    country: "中国",
    province: "重庆市",
    city: "重庆市",
    areaCounty: "渝中区",
    detailedAddress: "阿斯顿发生阿斯顿发放 2026",
  },
  // main页面的当前菜单
  mainMenu:"home"
});

export default (state = defaultState, action) => {
  // 商品选项弹窗状态
  if (action.type === PRODUCT_OPTIONS_POPUP_STATE) {
    return state.set("productOptionsPopupState", !state.get("productOptionsPopupState"));
  }

  // 修改main菜单状态
  if(action.type === MODIFY_MAIN_MENU_STATUS) {
    return state.set("mainMenu", action.menuName);
  }
  return state;
}
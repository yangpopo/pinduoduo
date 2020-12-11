// 全局状态
import axios from "../../axios";

export const PRODUCT_OPTIONS_POPUP_STATE = "PRODUCT_OPTIONS_POPUP_STATE";
export const MODIFY_MAIN_MENU_STATUS = "MODIFY_MAIN_MENU_STATUS";

// 商品选项弹窗状态
export const productOptionsPopupStateFun = () => {
    return{
        type: MODIFY_MAIN_MENU_STATUS,
    }
}

// 修改main菜单状态
export const modifyMainMenuStatusFun = (menuName) =>{
    return{
        type: MODIFY_MAIN_MENU_STATUS,
        menuName
    }
}


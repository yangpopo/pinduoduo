import axios from "../../../axios";

export const MODIFY_RETURN_BUTTON_STATUS = "MODIFY_RETURN_BUTTON_STATUS";

// 修改返回按钮状态
export const modifyReturnButtonStatus = (val) => {
    return{
        type: MODIFY_RETURN_BUTTON_STATUS,
        data: val
    }
}


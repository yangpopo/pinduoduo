import { MODIFY_RETURN_BUTTON_STATUS } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  backType: "back", // 返回按钮类型
  evaluationPopupVisible: false, // 评论弹窗状态
});

export default (state = defaultState, action) => {
  if(action.type === MODIFY_RETURN_BUTTON_STATUS){
    if (action.data === "back") {
      return state.set("backType", action.data).set("evaluationPopupVisible", false);
    } else if (action.data === "evaluation") {
      return state.set("backType", action.data).set("evaluationPopupVisible", true);
    }
  }
  return state;
}
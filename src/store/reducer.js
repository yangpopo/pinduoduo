import { combineReducers } from "redux-immutable";
import productDetails from "../pages/productDetails/store/reducer";
import global from "./global/reducer";

export default combineReducers({
    global,
    productDetails,
})
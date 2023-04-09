import { combineReducers } from "redux";
import userReducer from "./user";
//import listsReducer from "./lists";

export default combineReducers({
    user: userReducer,
    //lists: listsReducer
});
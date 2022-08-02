import { combineReducers, createStore, applyMiddleware } from "redux";
import laptopReducer from "./reducer/laptopReducesr";
import mobileReducer from "./reducer/mobileReducer";
import usersReducer from "./reducer/usersReducer";
import thunk from "redux-thunk";

const mainReducer = combineReducers({
  laptop: laptopReducer,
  mobile: mobileReducer,
  users: usersReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;

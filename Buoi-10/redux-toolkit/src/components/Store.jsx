import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducerSlice from "../reducers/CounterReducerSlice";
// Import thêm các reducer khác nếu có

const rootReducer = combineReducers({
  counter: CounterReducerSlice, // Đảm bảo tên của key và slice là đúng
  // thêm các reducer khác nếu có
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

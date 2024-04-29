import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import { userApi } from "../redux/user/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware),
  });
  
  setupListeners(store.dispatch);
  
  export default store;
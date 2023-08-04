import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "../slice/bookSlice";

/**
 *this is for combining all the reducers
 * @returns store
 */
const rootReducer = combineReducers({
  books: bookReducer,
});

const persistConfig = {
  key: "compare",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const makeStore = () => {
  return store;
};

export const persistedStore = persistStore(store);

export const wrapper = createWrapper(makeStore);

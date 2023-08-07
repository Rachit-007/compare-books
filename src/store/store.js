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

/**
 * this is the config for the persist.the key represents the key of the localstorage on which this store the data
 */
const persistConfig = {
  key: "compare",
  storage,
};

/**
 * this reducer will bind the persistconfig and rootreducer
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * i want to access this store outside the makestore function thats why i wrote this config outside the makestore function
 * configure the store
 */
const store = configureStore({
  reducer: persistedReducer,
});

/**
 *
 * @returns store instance
 */
const makeStore = () => {
  return store;
};

/**
 * exporting the persistent store to main file _app.js and it is used to wrap the app component with PersistGate component
 */
export const persistedStore = persistStore(store);

export const wrapper = createWrapper(makeStore);

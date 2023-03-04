import { combineReducers, configureStore } from '@reduxjs/toolkit'
import brand from "./brandSlice"

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  //reducer 추가
  brand: brand.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
const persistor = persistStore(store)

export {store, persistor}
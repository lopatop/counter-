import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { startReducer } from "../model/startReducer.ts"
import { maxReducer } from "../model/maxReducer.ts"
import { countReducer } from "../model/countReducer.ts"
import { modeReducer } from "../model/modeReducer.ts"

const RootReducer = combineReducers({
  start:startReducer,
  max:maxReducer,
  count:countReducer,
  mode:modeReducer,


})


export const store = configureStore({
  reducer: RootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
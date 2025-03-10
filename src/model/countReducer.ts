import { initialStartState } from "./startReducer.ts"
import { createAction, createReducer } from "@reduxjs/toolkit"

export const initialCountState: number = initialStartState

export const incrementCountAC = createAction("count/incrementCount")
export const resetCountAC = createAction<number>("count/resetCount")

export const countReducer = createReducer(initialCountState, builder => {
  builder.addCase(incrementCountAC, state => state + 1)
  builder.addCase(resetCountAC, (_, action) => action.payload)
})



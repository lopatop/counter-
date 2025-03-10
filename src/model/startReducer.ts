import { createAction, createReducer } from "@reduxjs/toolkit"

export const initialStartState: number = 0


export const setStartAC = createAction<{ value: number }>("start/setStart")

export const startReducer = createReducer(initialStartState, builder => {
  builder.addCase(setStartAC, (_, action) => action.payload.value)
})


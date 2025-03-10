import { createAction, createReducer } from "@reduxjs/toolkit"

const initialMaxState: number = 5

export const setMaxAC = createAction<{ value: number }>("max/setMax")

export const maxReducer = createReducer(initialMaxState, builder => {
  builder.addCase(setMaxAC, (_, action) => action.payload.value)
})


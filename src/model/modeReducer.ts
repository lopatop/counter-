import { createAction, createReducer } from "@reduxjs/toolkit"

const initialModeState: boolean = true

export const setModeAC = createAction<boolean>("mode/setMode")

export const modeReducer = createReducer(initialModeState, builder => {
  builder.addCase(setModeAC, (_, action) => action.payload)
})
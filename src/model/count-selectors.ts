import { RootState } from "../app/store.ts"

export const selectCount = (state:RootState):number => state.count
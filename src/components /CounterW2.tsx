import { ChangeEvent, useEffect } from "react"
import { Button, CssBaseline, Grid2 } from "@mui/material"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import { S } from "../styles.ts"
import { useAppDispatch } from "../common/hooks/useAppDispatch.ts"
import { useAppSelector } from "../common/hooks/useAppSelector.ts"
import { selectStart } from "../model/start-selectors.ts"
import { selectMax } from "../model/max-selectors.ts"
import { selectMode } from "../model/mode-selectors.ts"
import { selectCount } from "../model/count-selectors.ts"
import { setStartAC } from "../model/startReducer.ts"
import { setModeAC } from "../model/modeReducer.ts"
import { setMaxAC } from "../model/maxReducer.ts"
import { incrementCountAC, resetCountAC } from "../model/countReducer.ts"

export const CounterW2 = () => {

  const dispatch = useAppDispatch()

  const start = useAppSelector(selectStart)
  const max = useAppSelector(selectMax)
  const count = useAppSelector(selectCount)
  const mode = useAppSelector(selectMode)


  useEffect(() => {
    const valueStart = localStorage.getItem("counterValue")
    const valueMax = localStorage.getItem("counterValueMax")
    const valueCount = localStorage.getItem("counterValueCount")

    if (valueStart) {
      const newValueStart = JSON.parse(valueStart)
      dispatch(setStartAC({ value: newValueStart }))
    }
    if (valueMax) {
      const newValueMax = JSON.parse(valueMax)
      dispatch(setMaxAC({ value: newValueMax }))
    }
    if (valueCount) {
      const newValueCount = JSON.parse(valueCount)
      dispatch(resetCountAC(newValueCount))
    }
  }, [])

  useEffect(() => {

    localStorage.setItem("counterValueCount", JSON.stringify(count))
  }, [count])


  const onClickButtonIncHandler = () => {
    dispatch(incrementCountAC())
  }
  const onClickButtonResetHandler = () => {
    dispatch(resetCountAC(start))
  }
  const onClickButtonSetHandler = () => {
    dispatch(setModeAC(!mode))
    dispatch(resetCountAC(start))
    localStorage.setItem("counterValue", JSON.stringify(start))
    localStorage.setItem("counterValueMax", JSON.stringify(max))
  }
  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxAC({ value: +e.currentTarget.value}))
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartAC({ value: +e.currentTarget.value }))
  }

  const errorMax = start >= max
  const errorStart = start < 0 || start === max
  const countMax = count === max

  const disabledButtonInc =  count >= max
  const disabledButtonSet = errorStart || errorMax

  const inputLabelStart = errorStart ? "Incorrect" : "Enter start"
  const inputLabelMax = errorMax ? "Incorrect" : "Enter max"





  return (
    <ThemeProvider theme={S.theme}>
      <CssBaseline />
      <Container
        sx={S.containerModalStyled}>
        <Container
          sx={S.containerCountStyled}
        >
          {mode ? (
            <Box sx={S.containerModalCountStyled}>
              <Box sx={{ ...S.countModalStyled, ...(countMax && S.countMaxErrorStyled) }}>
                {count}
              </Box>

              <Grid2 sx={S.containerButtonStyled}>
                <Button size="small" variant="contained" onClick={onClickButtonIncHandler}
                        disabled={disabledButtonInc}>inc</Button>
                <Button size="small" variant="contained" onClick={onClickButtonResetHandler}>reset</Button>
                <Button size="small" variant="contained" onClick={onClickButtonSetHandler}>set</Button>
              </Grid2>
            </Box>
          ) : (
            <Box sx={S.containerInputsStyled}>
              <Box sx={S.containerInputValueMaxStyled}>
                <Box sx={S.wrapperInput}>Max value:</Box>
                <TextField
                  sx={S.styledInput}
                  error={errorMax}
                  size="small"
                  type="number"
                  label={inputLabelMax}
                  variant="outlined"
                  value={max}
                  onChange={onChangeMaxValueHandler}
                />
              </Box>

              <Box sx={S.containerInputValueStartStyled}>
                <Box sx={S.wrapperInput}>
                  Start value:
                </Box>
                <TextField
                  sx={S.styledInput}
                  error={errorStart}
                  size="small"
                  type="number"
                  label={inputLabelStart}
                  variant="outlined"
                  value={start}
                  onChange={onChangeStartValueHandler}
                />
              </Box>

              <Button
                fullWidth
                size="small"
                variant="contained"
                onClick={onClickButtonSetHandler}
                disabled={disabledButtonSet}
              >
                Set
              </Button>
            </Box>
          )}
        </Container>
      </Container>
    </ThemeProvider>

  )
}
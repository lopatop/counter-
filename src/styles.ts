import { createTheme } from "@mui/material/styles"
import { teal } from "@mui/material/colors"


const theme = createTheme({
    palette: {
      primary: teal,
      secondary: {
        main: "#b2dfdb"
      }
    }
  }
)


const containerModalStyled = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}
const containerCountStyled = {
  minWidth: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  width: "350px",
  padding: "15px",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "12px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
}

const containerModalCountStyled = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "10px"
}

const countModalStyled = {
  color: "#333",
  width: "100%",
  height: "70px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "28px",
  fontWeight: "bold",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
}

const containerButtonStyled = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: `${theme.palette.secondary.main}`,
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
}

const containerInputValueMaxStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px"
}
const containerInputValueStartStyled = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
}

const styledInput = {
  "& input": { textAlign: "center" },
  width: "120px"
}
const wrapperInput = {
  fontSize: "16px",
  fontWeight: "bold"
}
const countMaxErrorStyled = {
  color: "red"
}
const containerInputsStyled = {
  width: "100%"
}

export const S = {
  theme,
  containerModalStyled,
  containerCountStyled,
  containerModalCountStyled,
  countModalStyled,
  containerButtonStyled,
  containerInputValueMaxStyled,
  containerInputValueStartStyled,
  styledInput,
  wrapperInput,
  countMaxErrorStyled,
  containerInputsStyled


}
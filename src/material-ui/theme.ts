import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00647D',
    },
    secondary: {
      main: red[800],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Rubik'].join(','),
  },
})

export default theme

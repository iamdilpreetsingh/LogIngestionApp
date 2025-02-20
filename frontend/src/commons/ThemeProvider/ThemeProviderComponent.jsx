import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'

const ThemeProviderComponent = (props) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a73e8'
      },
      secondary: {
        main: '#1a73e8'
      },
      background: {
        default: '#F1EAFF'
      }
    },
    typography: {
      fontFamily: 'sans-serif',
    }
  })

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default ThemeProviderComponent;
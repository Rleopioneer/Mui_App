import React from 'react'
import ReactDOM from 'react-dom/client'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {pink, deepPurple } from '@material-ui/core/colors'

import { AuthProvider } from './state/auth'

import App from './App'
import './index.css'

const theme = createMuiTheme ({
  palette: {
    primary:{
      main: pink[300],
    },
    secondary:{
      main: deepPurple[500],
    }
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  
)



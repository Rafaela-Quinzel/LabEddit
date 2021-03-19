import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../constants/theme'

function App() {
  window.document.title = "LabEddit"
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../constants/theme'
import Router from '../routes/Router'
import MainAppBar from '../components/MainAppBar/MainAppBar'
import '../styles/global.css'

function App() {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path={[
          "/posts",
          "/posts/:id",
          "/criar_post"
        ]}>
          <MainAppBar />
        </Route>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
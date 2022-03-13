import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Items from './pages/Items'

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB631AD3'
    },
    secondary: {
      main: '#787A91',
      dark: '#787A91',
      light: '#787A913f',
      lightest: '#787A911f'
    }
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif'
    ].join(',')
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/items' element={<Items />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

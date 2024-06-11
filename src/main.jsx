import React from 'react'
import ReactDOM from 'react-dom/client'
import { background, ChakraProvider } from '@chakra-ui/react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

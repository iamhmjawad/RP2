import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import ColorModeSwitcher from './ColorModeSwitcher'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ColorModeScript />
    {/* Import it from chakra-ui and wrap main App here to use chakra-ui */}
    <ChakraProvider theme={theme}>
      {/* Adds a button to toggle Theme (dark etc) */}
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);


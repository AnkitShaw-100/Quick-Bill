import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'orange',
  colors: {
    orange: [
      '#fff4e6', '#ffe8cc', '#ffd08a', '#ffb74d', '#ffa726',
      '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100',
    ],
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)

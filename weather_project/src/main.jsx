import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Weather from './components/weather.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Weather />
  </StrictMode>,
)

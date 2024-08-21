import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Advice from './components/Advice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Advice />
  </StrictMode>,
)

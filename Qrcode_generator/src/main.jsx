import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Qrcode from './components/Qrcode'
// import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <Qrcode/>

  </StrictMode>,
)

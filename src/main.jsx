import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './authprovider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  </StrictMode>,
)

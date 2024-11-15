import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routes from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AllDataContext from './Provider/AllDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllDataContext>
    <RouterProvider router={Routes} />
    </AllDataContext>
  </StrictMode>,
)

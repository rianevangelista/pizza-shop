import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import './global.css'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Pizza Shop'/>
      <Toaster richColors />
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}
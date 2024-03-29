import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import Routes from './Routes/Routes'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
    <div className='max-w-[1500px] mx-auto'>
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={Routes} />
            <Toaster />
        </AuthProvider>
    </QueryClientProvider>
    </div>
  </React.StrictMode>,
)

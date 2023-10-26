import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { SidebarContextProvider } from './contexts/SidebarContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <SidebarContextProvider>
      <ProductContextProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ProductContextProvider>
    </SidebarContextProvider>
  </CartContextProvider>
)

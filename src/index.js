import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import CartProvider from './context/CartProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <PayPalScriptProvider options={{ "client-id": 
  "AYNq5FM4a-T3v5pgcS2wvg6u7uWIK7OhPmBCcuFtmSXuN6OtquLmzcqfeb6KktufGUbXFB1j37D_BUf3"}} >
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </PayPalScriptProvider>,
);



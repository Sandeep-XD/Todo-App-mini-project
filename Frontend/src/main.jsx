import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./store";
import { ClerkProvider } from '@clerk/clerk-react';
import conf from './conf'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={conf.clerkPublishableKey}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </StrictMode>,
)

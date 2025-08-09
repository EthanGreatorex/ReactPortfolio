import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppWrapper from './components/AppWrapper'
import React from "react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)

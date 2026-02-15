/**
 * Main Entry Point - Professional Portfolio
 * @author Mouad Maafi
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Performance monitoring
if (import.meta.env.PROD) {
  // Google Analytics is in index.html
  console.log('Portfolio v2.0 - Production Mode');
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

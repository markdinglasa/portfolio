import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './AppRouter';
import './styles/GlobalStyles.css';
import { RouterProvider } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Analytics/>
      <RouterProvider router={ AppRouter } />
  </StrictMode>,
);

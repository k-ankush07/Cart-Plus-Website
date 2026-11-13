import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import preloadImages from './components/preloadImages'

preloadImages.forEach((src) => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = src
  link.fetchPriority = "high"
  document.head.appendChild(link)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
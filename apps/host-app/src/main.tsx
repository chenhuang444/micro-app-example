import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  fetch: async (url, options) => {
    console.log('xxx fetch ', url, options)
    if (url.includes('LazyComp')) {
      // make LazyComp request slow
      await new Promise(resolve => setTimeout(resolve, 10000))
    }

    const res = await fetch(url, options)
    return res.text();
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

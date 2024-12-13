import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Nav from '../src/components/nav'
import Hero from '../src/components/hero'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Footer/>
  </StrictMode>,
)

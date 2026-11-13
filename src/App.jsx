import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetailPage from './pages/CaseStudyDetail'
import BlogDetailPage from './pages/BlogDetail'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/casestudie" element={<CaseStudies />} />
          <Route path="/casestudie/:slug" element={<CaseStudyDetailPage />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
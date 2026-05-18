import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Hero from './pages/Hero.jsx'

const Work = lazy(() => import('./pages/Work.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const BackToTopButton = lazy(() => import('./components/BackToTopButton.jsx'))
const SocialLinks = lazy(()=> import('./components/SocialLinks.jsx'));

function App() {
  return (
    <main>
      <Suspense fallback={<div className='flex items-center justify-center w-screen text-gray-700 h-screen'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

        <SocialLinks />
        <BackToTopButton />
      </Suspense>
    </main>
  )
}

export default App
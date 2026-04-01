import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Hero from './pages/Hero.jsx'

const Contact = lazy(() => import('./pages/Contact.jsx'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const BackToTopButton = lazy(() => import('./components/BackToTopButton.jsx'))

function App() {
  return (
    <main>
      <Suspense fallback={<div className='flex items-center justify-center w-screen text-gray-700 h-screen'>Loading CodeWeave...</div>}>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

        <BackToTopButton />
      </Suspense>
    </main>
  )
}

export default App
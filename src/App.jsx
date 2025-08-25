import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/hero' element={<Hero />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App

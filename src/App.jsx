import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </main>
  )
}

export default App
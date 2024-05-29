import './App.css'
import Index from './pages/Index'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Index /> } />
        <Route path="/about" element={<About />}/>
      </Routes>

    </>
  )
}

export default App

import './App.css';
import Home from './pages/Home.jsx';
import DetailPortfolio from './pages/DetailPortfolio.jsx';
import NotFound from './pages/NotFound.jsx';
import Experience from './pages/Experience.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/page-not-found' element={<NotFound />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

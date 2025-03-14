import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

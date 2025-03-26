import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
         </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
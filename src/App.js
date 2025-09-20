import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Certifications from './pages/certifications/Certifications';
import Services from './pages/services/Services';
import Testing from './pages/Testing/Testing';
import ChatBox from './components/ChatBox';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* <ChatBox /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={< About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

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

// function About(){
//   return <h1>About Me</h1>
// }
// function Projects(){
//   return <h1>Projects</h1>
// }
// function Certifications(){
//   return <h1>Certifi556cations</h1>
// }
function Services(){
  return <h1>Services</h1>
}
function Testimonials(){
  return <h1>Testimonials</h1>
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={< About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

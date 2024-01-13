import { Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;

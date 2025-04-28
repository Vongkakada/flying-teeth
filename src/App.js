import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Information from './pages/Information';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Contact from './pages/Contact';
import MobileBottomMenu from './components/MobileBottomMenu';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/video" element={<Video />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        <Team />
        <MobileBottomMenu />
      </div>
    </Router>
  );
}

export default App;
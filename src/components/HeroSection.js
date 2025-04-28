import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

function HeroSection() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  
  const isInStandaloneMode = () => (
    window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
  );
  
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      if (!isInStandaloneMode()) {
        setDeferredPrompt(e);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
  
    const handleInstallClick = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          setDeferredPrompt(null);
        });
      }
    };
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      title: 'ស្វាគមន៍មកកាន់ថ្នាលសុខភាពធ្មេញ',
      description: 'ស្វែងយល់ពីការថែទាំធ្មេញជាមួយធនធានអប់រំរបស់យើង',
      buttons: [
        { text: 'ស្វែងយល់បន្ថែម', link: '/information' },
        { text: 'មើលវីដេអូ', link: '/video' },
      ],
    },
    {
      image: banner2,
      title: 'ធ្មេញស្អាត សុខភាពល្អ',
      description: 'ចូលរួមជាមួយវគ្គអប់រំរបស់យើងដើម្បីសុខភាពមាត់ធ្មេញ',
      buttons: [{ text: 'ស្តាប់សម្លេង', link: '/audio' }],
    },
    {
      image: banner3,
      title: 'ទំនាក់ទំនងជាមួយអ្នកជំនាញ',
      description: 'សួរសំណួរអំពីសុខភាពធ្មេញរបស់អ្នកជាមួយ ChatBot ឬអ្នកជំនាញ',
      buttons: [{ text: 'ទំនាក់ទំនងឥឡូវ', link: '/contact' }],
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleIndicatorClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            className={index === activeSlide ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '40vh',
            }}
          >
            <div className="container">
              <div className="carousel-caption">
                <div className="caption-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
                {/* ដាក់ Button Install App */}
                {deferredPrompt && (
  <button onClick={handleInstallClick} className="floating-install-button">
    <i className="fas fa-download"></i> ទាញយក
  </button>
)}
                <p className="caption-buttons">
                  
                  {slide.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.link}
                      className={`btn ${btnIndex === 0 ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      {button.text}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
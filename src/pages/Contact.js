
import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';

function Contact() {
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
  const contactLinks = [
    {
      id: 1,
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/yourpage',
      color: '#2563eb',
      hoverColor: '#1e40af',
    },
    {
      id: 2,
      name: 'App',
      icon: 'fas fa-mobile-alt',
      url: 'https://yourappdownloadlink.com',
      color: '#22c55e',
      hoverColor: '#16a34a',
    },
    {
      id: 3,
      name: 'Call Center',
      icon: 'fas fa-phone',
      url: 'tel:+85512345678',
      color: '#ef4444',
      hoverColor: '#dc2626',
    },
    {
      id: 4,
      name: 'Chatbot',
      icon: 'fas fa-robot',
      url: 'https://yourchatbotlink.com',
      color: '#8b5cf6',
      hoverColor: '#7c3aed',
    },
    {
      id: 5,
      name: 'Location',
      icon: 'fas fa-map-marker-alt',
      url: 'https://maps.google.com/?q=Your+Location',
      color: '#eab308',
      hoverColor: '#ca8a04',
    },
    {
      id: 6,
      name: 'Mail',
      icon: 'fas fa-envelope',
      url: 'mailto:contact@yourdomain.com',
      color: '#4b5563',
      hoverColor: '#374151',
    },
  ];

  return (
    <div className="contact-page">
      <h2>ទំនាក់ទំនង</h2>
      <div className="contact-grid">
                {/* ដាក់ Button Install App */}
                {deferredPrompt && ( 
          <button onClick={handleInstallClick} className="contact-card">
            <i className="fas fa-download"></i> ទាញយក App
          </button>
        )}
        {contactLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ backgroundColor: link.color }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = link.hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = link.color)}
          >
            <i className={`${link.icon} contact-icon`}></i>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
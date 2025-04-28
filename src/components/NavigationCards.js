import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationCards.css';
import toothIcon from '../assets/icons/tooth.svg';
import videoIcon from '../assets/icons/video.svg';
import audioIcon from '../assets/icons/audio.svg';
import chatIcon from '../assets/icons/chat.svg';

function NavigationCards() {
  const cards = [
    { title: 'ព័ត៌មានធ្មេញ', icon: toothIcon, link: '/information' },
    { title: 'មើលវីដេអូ', icon: videoIcon, link: '/video' },
    { title: 'ស្តាប់សម្លេង', icon: audioIcon, link: '/audio' },
    { title: 'សួរបញ្ហា', icon: chatIcon, link: '/contact' },
  ];

  return (
    <div className="navigation-cards">
      {cards.map((card, index) => (
        <Link to={card.link} key={index} className="nav-card">
          <img src={card.icon} alt={card.title} className="nav-card-icon" />
          <h3>{card.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default NavigationCards;
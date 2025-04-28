
import React, { useState } from 'react';
import '../styles/ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot">
      <button className="chatbot-icon" onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <h3>សួរបញ្ហាអំពីធ្មេញ</h3>
          <p>សួស្តី! សូមសួរសំណួរអំពីសុខភាពធ្មេញរបស់អ្នក។</p>
          <input type="text" placeholder="វាយសំណួរនៅទីនេះ..." />
          <button>ផ្ញើ</button>
        </div>
      )}
    </div>
  );
}

export default ChatBot;

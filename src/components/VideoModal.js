import React from 'react';
import '../styles/VideoModal.css';

function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{video.title}</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
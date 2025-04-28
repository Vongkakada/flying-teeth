import React from 'react';
import '../styles/VideoCard.css';

function VideoCard({ video, onVideoClick }) {
  return (
    <div className="video-card">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="video-thumbnail" 
        onClick={() => onVideoClick(video)}
        style={{ cursor: 'pointer' }}
      />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button 
        className="play-button" 
        onClick={() => onVideoClick(video)}
      >
        ▶️ ចាក់វីដេអូ
      </button>
    </div>
  );
}

export default VideoCard;
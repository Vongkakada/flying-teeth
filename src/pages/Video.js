import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { videoData } from '../data';
import '../styles/VideoCard.css';

function Video() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-page">
      <h2>វីដេអូអប់រំ</h2>
      <div className="video-grid">
        {videoData.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onVideoClick={handleVideoClick}
          />
        ))}
      </div>
      <VideoModal video={selectedVideo} onClose={handleCloseModal} />
    </div>
  );
}

export default Video;
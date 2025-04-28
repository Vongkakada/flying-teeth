import React, { useRef, useState } from 'react';
import '../styles/AudioList.css';

function AudioList({ audioData }) {
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    // ផ្អាកឯកសារសម្លេងទាំងអស់លើកលែងតែឯកសារដែលកំពុងចាក់
    audioRefs.current.forEach((otherAudio, otherIndex) => {
      if (otherIndex !== index && otherAudio) {
        otherAudio.pause();
        otherAudio.currentTime = 0; // កំណត់ឡើងវិញទៅដើម
      }
    });

    if (playingIndex === index) {
      // ផ្អាកបើកំពុងចាក់
      audio.pause();
      setPlayingIndex(null);
    } else {
      // ចាក់ឯកសារថ្មី
      audio.play().catch((error) => console.error('Playback failed:', error));
      setPlayingIndex(index);
    }
  };

  return (
    <div className="audio-list">
      {audioData.map((audio, index) => (
        <div key={audio.id} className="audio-item">
          <span>🔊 {audio.title}</span>
          <audio
            ref={(el) => (audioRefs.current[index] = el)}
            src={audio.src}
            type="audio/mp3"
          />
          <button
            className="play-button"
            onClick={() => handlePlayPause(index)}
          >
            {playingIndex === index ? '⏸️ ផ្អាក' : '▶️ ចាក់សម្លេង'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AudioList;
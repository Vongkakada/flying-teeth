// File: src/pages/Audio.js
import React from 'react';
import AudioList from '../components/AudioList';
import { audioData } from '../data';


function Audio() {
  return (
    <div className="audio-page">
      <h2>សម្លេងអប់រំ</h2>
      <AudioList audioData={audioData} />
    </div>
  );
}

export default Audio;

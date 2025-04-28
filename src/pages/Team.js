import React from 'react';
import TeamCard from '../components/TeamCard';
import { teamData } from '../data';
import '../styles/TeamCard.css';

function Team() {
  return (
    <section className="team-page">
      <div className="container">
        <h2 className="team-title">ក្រុមការងារវិជ្ជាជីវៈ</h2>
        <h3 className="team-subtitle">
          យើងជាក្រុមដែលប្តេជ្ញាផ្តល់សេវាកម្មថែទាំធ្មេញដ៏ល្អបំផុត
        </h3>
        <div className="team-grid">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
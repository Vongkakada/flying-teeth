import React from 'react';
import '../styles/TeamCard.css';

function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="card-img">
        <img src={member.photo} alt={member.name} className="team-photo" />
      </div>
      <div className="card-box">
        <h4 className="card-title">{member.name}</h4>
        <h5 className="team-role">{member.role}</h5>
        <p className="team-bio">{member.bio}</p>
        <div className="social-links">
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          )}
          {member.social.facebook && (
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
              <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          )}
          {member.social.instagram && (
            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
              <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="socicon-linkedin socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
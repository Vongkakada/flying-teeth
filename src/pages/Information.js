
import React from 'react';
import '../styles/Information.css';

function Information() {
  return (
    <div className="information-page">
      <h2>ព័ត៌មានអំពីសុខភាពធ្មេញ</h2>
      <div className="info-topics">
        <div className="info-card">
          <h3>របៀបដុសធ្មេញ</h3>
          <p>រៀនវិធីដុសធ្មេញឱ្យត្រឹមត្រូវជាមួយជំហានសាមញ្ញ។</p>
          <button className="info-button">🔊ស្តាប់អត្ថបទ</button>
        </div>
        <div className="info-card">
          <h3>សញ្ញានៃជំងឺធ្មេញ</h3>
          <p>ស្វែងយល់ពីសញ្ញាដែលបង្ហាញថាអ្នកត្រូវការពិនិត្យធ្មេញ។</p>
          <button className="info-button">🔊ស្តាប់អត្ថបទ</button>
        </div>
        <div className="info-card">
          <h3>ពេលណាត្រូវទៅពិនិត្យ</h3>
          <p>ដឹងពីពេលវេលាដែលគួរទៅជួបទន្តបណ្ឌិត។</p>
          <button className="info-button">🔊ស្តាប់អត្ថបទ</button>
        </div>
      </div>
    </div>
  );
}

export default Information;

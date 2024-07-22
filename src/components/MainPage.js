import React from 'react';
import './MainPage.css';
import image1 from '../assets/Rectangle1.svg';
import image2 from '../assets/Rectangle2.svg';
import image3 from '../assets/Rectangle3.svg';
import image4 from '../assets/Rectangle4.svg';
import image5 from '../assets/Rectangle5.svg';
import image6 from '../assets/Rectangle6.svg';
import comingSoon from '../assets/coming_soon.svg'

function MainPage() {
  return (
    <div className="container">
      <h1>EMPOWERING THE DIGITAL ERA:<br />DECENTRALIZING ENTERTAINMENT</h1>
      <p>Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer and Cheaper Access</p>
      <button className="coming-soon-button">
        <img src={comingSoon} alt="Coming Soon" />
      </button>
      <div className="images-container">
        <img src={image1} alt="content1" />
        <img src={image2} alt="content2" />
        <img src={image3} alt="content3" />
        <img src={image4} alt="content4" />
        <img src={image5} alt="content5" />
        <img src={image6} alt="content5" />

      </div>
      <div className="stats">
        <div className="stat">
          <h2>No. of Node Operators</h2>
          <p>2000</p>
        </div>
        <div className="stat">
          <h2>Data Transferred in TB (last 30 days)</h2>
          <p>12,000</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

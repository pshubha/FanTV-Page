import React, { useEffect, useRef, useState } from 'react';
import './Globe.css';
import imageUrl from '../assets/globe.svg';
import network from '../assets/Subtract.svg';
import eclipse1 from '../assets/eclipse1.jpg';
import eclipse2 from '../assets/eclipse2.jpg';
import eclipse3 from '../assets/eclipse3.jpg';
import eclipse4 from '../assets/eclipse3.jpg';
import deploy from '../assets/deploy.svg';
import com1 from '../assets/com1.svg';
import com2 from '../assets/com2.svg'



const Globe = () => {
  const globeRef = useRef(null);
  const [peopleData, setPeopleData] = useState([]);
  const personImages = [eclipse1, eclipse2, eclipse3, eclipse3]; // Array of person image imports

  useEffect(() => {
    // Fetch or generate data for people positions (longitude, latitude)
    const peoplePositions = [
      { longitude: -74, latitude: 40 }, // Example data for New York City
      { longitude: 31, latitude: 26 }, // Example data for Cairo
      // Add more people data as needed
    ];
    setPeopleData(peoplePositions);
  }, []);

  const getPosition = (longitude, latitude, globeWidth, globeHeight) => {
    const projectionRatio = globeWidth / 360; // Assuming a 360-degree globe image

    const x = projectionRatio * (longitude + 180); // Adjust for negative longitudes
    const y = globeHeight - (projectionRatio * (latitude + 90)); // Adjust for map orientation

    return { x, y };
  };

  return (
    <div class="globe-section">
      <h2>FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation</h2>
      <p>FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community-driven consumption</p>
    <div className="globe-container" style={{ position: 'relative' }}>
      <img className="subtract" src={network} alt="Network" style={{ position: 'absolute', top: 0, left: "10px", width: '90%', height: '90%' }} />
      <img ref={globeRef} src={imageUrl} alt="Globe" style={{ }} />
      {peopleData.map((person, index) => {
        const angle = (index / peopleData.length) * 2 * Math.PI; // Distribute positions evenly
        const radius = Math.min(globeRef.current?.clientWidth || 0, globeRef.current?.clientHeight || 0) / 2 * 0.8; // Adjust radius as needed

        const x = (globeRef.current?.clientWidth || 0) / 2 + radius * Math.cos(angle);
        const y = (globeRef.current?.clientHeight || 0) / 2 + radius * Math.sin(angle);

        const { x: posX, y: posY } = getPosition(person.longitude, person.latitude, globeRef.current?.clientWidth || 0, globeRef.current?.clientHeight || 0);

        return (
          <div
            key={index}
            className="person"
            style={{
              position: 'absolute',
              left: `${posX}px`,
              top: `${posY}px`,
              transform: `translate(-50%, -50%)` 
            }}
          >
            <img
              src={personImages[index % personImages.length]} 
              alt="Person"
              style={{ width: '20px', height: '20px' }} 
            />
          </div>
        );
      })}
    </div>
    <div class="info-boxes">
        <div class="info-box box1">
          <h3>Content Nodes</h3>
          <p>Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
          <button class="deploy-button">
                <img src={deploy} alt="Coming Soon" />
            </button>
        </div>
        <div class="info-box box2">
          <h3>Orchestrators</h3>
          <p>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>
          <button class="coming-soon-button">
          <img src={com2} alt="Coming Soon" />
        </button>
        </div>
        <div class="info-box box3">
          <h3>Validators</h3>
          <p>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
          <button class="coming-soon-button"><img src={com1} alt="Coming Soon" /></button>
        </div>
      </div>
    </div>
  );
};

export default Globe;

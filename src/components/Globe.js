import React, { useEffect, useRef, useState } from 'react';
import './Globe.css';
import imageUrl from '../assets/globe.svg';
import network from '../assets/Subtract.svg';
import eclipse1 from '../assets/eclipse1.jpg';
import eclipse2 from '../assets/eclipse2.jpg';
import eclipse3 from '../assets/eclipse3.jpg';
import eclipse4 from '../assets/eclipse3.jpg';


// Assuming your SVG globe image is named 'globe.svg' and resides in the public folder

const Globe = () => {
  const globeRef = useRef(null);
  const peopleRef = useRef([]); // Array to store people elements/components
  const [peopleData, setPeopleData] = useState([]); // State to hold data for people positions
//   const imageUrl = '../../public/globe.svg'

  useEffect(() => {
    // Fetch or generate data for people positions (longitude, latitude)
    const peoplePositions = [
      { longitude: -74, latitude: 40 }, // Example data for New York City
      { longitude: 31, latitude: 26 }, // Example data for Cairo
      // Add more people data as needed
    ];
    setPeopleData(peoplePositions);
  }, []);

  useEffect(() => {
    const globeImage = globeRef.current;

    if (globeImage) {
      const globeWidth = globeImage.clientWidth;
      const globeHeight = globeImage.clientHeight;

      // Function to calculate SVG positioning based on longitude and latitude
      const getPosition = (longitude, latitude) => {
        const projectionRatio = globeWidth / 180; // Assuming a 180-degree globe image

        const x = projectionRatio * (longitude + 180); // Adjust for negative longitudes
        const y = globeHeight - (projectionRatio * (latitude + 90)); // Adjust for map orientation

        return { x, y };
      };

      // Create people elements/components based on data
      peopleData.forEach((person, index) => {
        const angle = (index / peopleData.length) * 2 * Math.PI; // Distribute positions evenly
        const radius = Math.min(globeWidth, globeHeight) / 2 * 0.8; // Adjust radius as needed

        const x = globeWidth / 2 + radius * Math.cos(angle);
        const y = globeHeight / 2 + radius * Math.sin(angle);

        const { left, top } = getPosition(x, y); // Reuse getPosition function

        const personElement = (
          <div
            className="person"
            style={{
              position: 'absolute',
              left: `${left}px`,
              top: `${top}px`,
            }}
          >
            <img
              src={`/${personImages[index % personImages.length]}`} // Use modulo for image rotation
              alt="Person"
            />
          </div>
        );

        peopleRef.current.push(personElement);
      });
    }
  }, [peopleData, globeRef]);

  const personImages = [eclipse1, eclipse2, eclipse3,eclipse3]; // Array of person image names

  return (
    <div className="globe-container">
        <img className="subtract" src={`${network}`} alt="Network" /> {/* Network image */}
    <img ref={globeRef} src={imageUrl} alt="Globe" />
    {peopleRef.current}
    </div>
  );
};

export default Globe;

// CSS for styling (optional)

import React, { useEffect, useRef, useState } from "react";
import "./Globe.css";
import imageUrl from "../assets/globe.svg";
import network from "../assets/Subtract.svg";
import network1 from "../assets/network1.svg";
import network2 from "../assets/network2.svg";

import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import person5 from "../assets/person5.svg";
import person6 from "../assets/person6.svg";
import person7 from "../assets/person7.svg";
import person8 from "../assets/person8.svg";
import person9 from "../assets/person9.svg";
import person10 from "../assets/person10.svg";
import person11 from "../assets/person11.svg";
import smile0 from "../assets/smile0.svg";
import smile from "../assets/smile.svg";
import dot1 from "../assets/dot1.svg";
import dot2 from "../assets/dot2.svg";
import dot3 from "../assets/dot3.svg";
import dot4 from "../assets/dot4.svg";
import dot5 from "../assets/dot5.svg";

import deploy from "../assets/deploy.svg";
import com1 from "../assets/com1.svg";
import com2 from "../assets/com2.svg";

const Globe = () => {
  const personImages = [
    {
      src: person1,
      alt: "Person 1",
      style: { top: "80%", left: "18%", width: "44px", height: "44px" },
    },
    {
      src: dot1,
      alt: "dot 1",
      style: { top: "73%", left: "21%", width: "14px", height: "14px" },
    },
    {
      src: dot2,
      alt: "dot 2",
      style: { top: "86%", left: "22%", width: "10px", height: "10px" },
    },

    {
      src: person2,
      alt: "Person 2",
      style: { top: "71%", left: "23%", width: "64px", height: "64px" },
    },
    {
      src: dot3,
      alt: "dot 3",
      style: { top: "56%", left: "25.4%", width: "10px", height: "10px" },
    },

    {
      src: person3,
      alt: "Person 3",
      style: { top: "34%", left: "26%", width: "64px", height: "64px" },
    },
    {
      src: person4,
      alt: "Person 4",
      style: { top: "22%", left: "30%", width: "44px", height: "44px" },
    },
    {
      src: smile0,
      alt: "Smile 0",
      style: { top: "7%", left: "30%", width: "70px", height: "70px" },
    },

    {
      src: person5,
      alt: "Person 5",
      style: { top: "6%", left: "35%", width: "64px", height: "64px" },
    },
    {
      src: dot4,
      alt: "dot 4",
      style: { top: "2%", right: "55%", width: "10px", height: "10px" },
    },

    {
      src: person6,
      alt: "Person 6",
      style: { top: "-2%", right: "47%", width: "44px", height: "44px" },
    },
    {
      src: person7,
      alt: "Person 7",
      style: { top: "10%", right: "33%", width: "64px", height: "64px" },
    },
    {
      src: smile,
      alt: "Smile",
      style: { top: "16%", right: "27%", width: "69px", height: "69px" },
    },
    {
      src: person8,
      alt: "Person 8",
      style: { top: "41%", right: "25%", width: "64px", height: "64px" },
    },
    {
      src: person9,
      alt: "Person 9",
      style: { top: "31%", right: "21%", width: "32px", height: "32px" },
    },
    {
      src: person10,
      alt: "Person 10",
      style: { top: "44%", right: "19%", width: "32px", height: "32px" },
    },
    {
      src: dot5,
      alt: "dot 5",
      style: { top: "61%", right: "25.2%", width: "10px", height: "10px" },
    },

    {
      src: person11,
      alt: "Person 11",
      style: { top: "72%", right: "24%", width: "44px", height: "44px" },
    },

  ];

  return (
    <div class="globe-section">
      <h2>
        FanCloud CDN network revolutionizes video infrastructure with
        community-driven Innovation
      </h2>
      <p>
        FanCloud pioneers a new era of connectivity with its decentralised
        content delivery network (dCDN), leveraging a global network of
        community-powered nodes. By harnessing a decentralised architecture,
        dCDN drastically reduces data transfer and compute costs while enhancing
        load time. Join FanCloud’s dCDN network and experience the future of
        seamless, secure and community-driven consumption
      </p>
      <div className="globe-container" style={{ position: "relative" }}>
        <img
          className="subtract"
          style={{
            position: "",
            top: "9px",
            left: "10px",
            width: "100%",
            height: "79%",
          }}
          src={network}
          alt="Network"
        />
        <img
          src={network1}
          style={{ position: "absolute", top: "73%", right: "74%" }}
          alt="Sub Network"
        />
        <img
          src={network2}
          style={{ position: "absolute", top: "33%", right: "20%" }}
          alt="Sub Network"
        />
        {personImages.map((person, index) => (
          <img
            key={index}
            className="person"
            src={person.src}
            alt={person.alt}
            style={person.style}
          />
        ))}
        <img className="globe" src={imageUrl} alt="Globe" />
      </div>
      {/* <div className="globe-container" style={{ position: "relative" }}>
        <img
          className="subtract"
          src={network}
          alt="Network"
          style={{
            position: "absolute",
            top: 0,
            left: "10px",
            width: "90%",
            height: "90%",
          }}
        />
        <img ref={globeRef} src={imageUrl} alt="Globe" style={{}} />
        {peopleData.map((person, index) => {
          const angle = (index / peopleData.length) * 2 * Math.PI; // Distribute positions evenly
          const radius =
            (Math.min(
              globeRef.current?.clientWidth || 0,
              globeRef.current?.clientHeight || 0
            ) /
              2) *
            0.8; // Adjust radius as needed

          const x =
            (globeRef.current?.clientWidth || 0) / 2 + radius * Math.cos(angle);
          const y =
            (globeRef.current?.clientHeight || 0) / 2 +
            radius * Math.sin(angle);

          const { x: posX, y: posY } = getPosition(
            person.longitude,
            person.latitude,
            globeRef.current?.clientWidth || 0,
            globeRef.current?.clientHeight || 0
          );

          return (
            <div
              key={index}
              className="person"
              style={{
                position: "absolute",
                left: `${posX}px`,
                top: `${posY}px`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <img
                src={personImages[index % personImages.length]}
                alt="Person"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          );
        })}
      </div> */}
      <div class="info-boxes">
        <div class="info-box box1">
          <h3>Content Nodes</h3>
          <p>
            Earn rewards for supplying their GPU, Storage and bandwidth for dCDN
          </p>
          <button class="deploy-button">
            <img src={deploy} alt="Coming Soon" />
          </button>
        </div>
        <div class="info-box box2">
          <h3>Orchestrators</h3>
          <p>
            Orchestrators will be responsible for connecting the client with the
            content node for seamless streaming. Traffic distribution will be
            based on multiple factors like job type, performance
          </p>
          <button class="coming-soon-button">
            <img src={com2} alt="Coming Soon" />
          </button>
        </div>
        <div class="info-box box3">
          <h3>Validators</h3>
          <p>
            Validators will be responsible for validating the execution of dCDN
            Network. Validators will earn rewards from Staking and earn a cut on
            the executions validated.
          </p>
          <button class="coming-soon-button">
            <img src={com1} alt="Coming Soon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Globe;

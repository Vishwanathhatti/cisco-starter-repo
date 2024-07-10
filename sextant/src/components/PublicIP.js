// src/PublicIP.js
import React, { useState, useEffect } from 'react';

const PublicIP = () => {
  const [ip, setIP] = useState('');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div>
      <h2>Your Public IP Address</h2>
      <p>{ip ? ip : 'Loading...'}</p>
    </div>
  );
};

export default PublicIP;

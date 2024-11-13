// PrayerTimes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [times, setTimes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      
        const response = await axios.get(
          'https://api.aladhan.com/v1/timingsByCity?city=Riyadh&country=Saudi%20Arabia&method=2'
        );
        setTimes(response.data.data.timings);
        setLoading(false);
    
    };

    fetchPrayerTimes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="prayer-container">
      <h1>Prayer Times</h1>
      <ul className="prayer-list">
        {Object.entries(times).map(([name, time]) => (
          <li key={name} className="prayer-item">
            <span className="prayer-name">{name}</span>
            <span className="prayer-time">{time}</span>
            
          </li>
        ))}
      </ul>
      
    </div>
    
  );
};

export default Header;

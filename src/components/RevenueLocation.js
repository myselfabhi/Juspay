import React from 'react';
import { MapPin } from 'lucide-react';
import './RevenueLocation.css';

const RevenueLocation = () => {
  const locations = [
    { name: 'New York', revenue: '72K', percentage: 85 },
    { name: 'San Francisco', revenue: '39K', percentage: 65 },
    { name: 'Sydney', revenue: '25K', percentage: 45 },
    { name: 'Singapore', revenue: '61K', percentage: 80 }
  ];

  return (
    <div className="revenue-location">
      <div className="location-header">
        <h3 className="location-title">Revenue by Location</h3>
        <MapPin size={20} className="location-icon" />
      </div>
      
      <div className="location-map">
        <div className="world-map">
          <div className="map-dot" style={{ top: '30%', left: '25%' }}></div>
          <div className="map-dot" style={{ top: '25%', left: '15%' }}></div>
          <div className="map-dot" style={{ top: '60%', left: '80%' }}></div>
          <div className="map-dot" style={{ top: '40%', left: '70%' }}></div>
        </div>
      </div>
      
      <div className="location-list">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <div className="location-info">
              <span className="location-name">{location.name}</span>
              <span className="location-revenue">{location.revenue}</span>
            </div>
            <div className="location-bar">
              <div 
                className="location-bar-fill" 
                style={{ width: `${location.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueLocation;

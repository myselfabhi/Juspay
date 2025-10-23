import React from 'react';
import { Search, Sun, RotateCcw, Bell, Grid, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="breadcrumbs">
          <span>Dashboards</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Default</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-actions">
          <button className="action-btn">
            <Sun size={20} />
          </button>
          <button className="action-btn">
            <RotateCcw size={20} />
          </button>
          <button className="action-btn">
            <Bell size={20} />
          </button>
          <button className="action-btn">
            <Grid size={20} />
          </button>
          <button className="action-btn user-btn">
            <User size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

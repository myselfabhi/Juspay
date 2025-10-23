import React from 'react';
import { 
  Home, 
  ShoppingCart, 
  Folder, 
  BookOpen, 
  User, 
  BarChart3, 
  FileText, 
  Users, 
  Settings, 
  Building, 
  Globe, 
  Share2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">ByeWind</h2>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">Favorites</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <Home size={20} />
              <span>Overview</span>
            </li>
            <li className="nav-item">
              <Folder size={20} />
              <span>Projects</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Dashboards</h3>
          <ul className="nav-list">
            <motion.li 
              className="nav-item active"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Home size={20} />
              <span>Default</span>
            </motion.li>
            <li className="nav-item">
              <ShoppingCart size={20} />
              <span>eCommerce</span>
              <span className="nav-arrow">›</span>
            </li>
            <li className="nav-item">
              <Folder size={20} />
              <span>Projects</span>
              <span className="nav-arrow">›</span>
            </li>
            <li className="nav-item">
              <BookOpen size={20} />
              <span>Online Courses</span>
              <span className="nav-arrow">›</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Pages</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <User size={20} />
              <span>User Profile</span>
            </li>
            <li className="nav-item">
              <BarChart3 size={20} />
              <span>Overview</span>
            </li>
            <li className="nav-item">
              <Folder size={20} />
              <span>Projects</span>
            </li>
            <li className="nav-item">
              <FileText size={20} />
              <span>Campaigns</span>
            </li>
            <li className="nav-item">
              <FileText size={20} />
              <span>Documents</span>
            </li>
            <li className="nav-item">
              <Users size={20} />
              <span>Followers</span>
            </li>
            <li className="nav-item">
              <Settings size={20} />
              <span>Account</span>
              <span className="nav-arrow">›</span>
            </li>
            <li className="nav-item">
              <Building size={20} />
              <span>Corporate</span>
              <span className="nav-arrow">›</span>
            </li>
            <li className="nav-item">
              <Globe size={20} />
              <span>Blog</span>
              <span className="nav-arrow">›</span>
            </li>
            <li className="nav-item">
              <Share2 size={20} />
              <span>Social</span>
              <span className="nav-arrow">›</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

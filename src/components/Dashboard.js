import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('ecommerce');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="dashboard">
      <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <MainContent currentPage={currentPage} />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

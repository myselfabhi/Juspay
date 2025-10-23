import React, { useState } from 'react';
import MetricsCards from './MetricsCards';
import ChartsSection from './ChartsSection';
import RevenueLocation from './RevenueLocation';
import ProductsTable from './ProductsTable';
import SalesDonut from './SalesDonut';
import OrderList from './OrderList';
import './MainContent.css';

const MainContent = ({ currentPage }) => {

  const renderContent = () => {
    switch (currentPage) {
      case 'ecommerce':
        return (
          <>
            <div className="content-header">
              <h1 className="content-title">eCommerce</h1>
            </div>
            
            <div className="content-body">
              <MetricsCards />
              <ChartsSection />
              <div className="content-grid">
                <RevenueLocation />
                <ProductsTable />
                <SalesDonut />
              </div>
            </div>
          </>
        );
      case 'orderlist':
        return <OrderList />;
      default:
        return (
          <>
            <div className="content-header">
              <h1 className="content-title">eCommerce</h1>
            </div>
            
            <div className="content-body">
              <MetricsCards />
              <ChartsSection />
              <div className="content-grid">
                <RevenueLocation />
                <ProductsTable />
                <SalesDonut />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default MainContent;

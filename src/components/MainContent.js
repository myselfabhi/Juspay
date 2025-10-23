import React from 'react';
import MetricsCards from './MetricsCards';
import ChartsSection from './ChartsSection';
import RevenueLocation from './RevenueLocation';
import ProductsTable from './ProductsTable';
import SalesDonut from './SalesDonut';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
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
    </div>
  );
};

export default MainContent;

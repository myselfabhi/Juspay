import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './SalesDonut.css';

const SalesDonut = () => {
  const data = [
    { name: 'Direct', value: 300.56, color: '#3b82f6' },
    { name: 'Affiliate', value: 135.18, color: '#10b981' },
    { name: 'Sponsored', value: 154.02, color: '#8b5cf6' },
    { name: 'E-mail', value: 48.96, color: '#06b6d4' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const percentage = ((data[0].value / total) * 100).toFixed(1);

  return (
    <div className="sales-donut">
      <div className="donut-header">
        <h3 className="donut-title">Total Sales</h3>
      </div>
      
      <div className="donut-container">
        <div className="donut-chart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center">
            <span className="donut-percentage">{percentage}%</span>
          </div>
        </div>
        
        <div className="donut-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="legend-name">{item.name}</span>
              <span className="legend-value">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDonut;

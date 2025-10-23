import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import './ChartsSection.css';

const ChartsSection = () => {
  const projectionsData = [
    { month: 'Jan', actual: 15, projection: 12 },
    { month: 'Feb', actual: 18, projection: 15 },
    { month: 'Mar', actual: 22, projection: 18 },
    { month: 'Apr', actual: 25, projection: 22 },
    { month: 'May', actual: 28, projection: 25 },
    { month: 'Jun', actual: 30, projection: 28 }
  ];

  const revenueData = [
    { month: 'Jan', current: 15, previous: 12, target: 18 },
    { month: 'Feb', current: 18, previous: 15, target: 20 },
    { month: 'Mar', current: 22, previous: 18, target: 22 },
    { month: 'Apr', current: 25, previous: 22, target: 25 },
    { month: 'May', current: 28, previous: 25, target: 28 },
    { month: 'Jun', current: 30, previous: 28, target: 30 }
  ];

  return (
    <div className="charts-section">
      <div className="chart-container">
        <h3 className="chart-title">Projections vs Actuals</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="actual" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="projection" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Revenue</h3>
          <div className="revenue-stats">
            <div className="revenue-stat">
              <span className="revenue-label">Current Week</span>
              <span className="revenue-value">$58,211</span>
            </div>
            <div className="revenue-stat">
              <span className="revenue-label">Previous Week</span>
              <span className="revenue-value">$68,768</span>
            </div>
          </div>
        </div>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#1e293b" 
                strokeWidth={3}
                dot={{ fill: '#1e293b', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#64748b" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#64748b', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;

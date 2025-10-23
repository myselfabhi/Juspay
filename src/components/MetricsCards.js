import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './MetricsCards.css';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      trend: 'up',
      color: '#10b981'
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      trend: 'down',
      color: '#ef4444'
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      trend: 'up',
      color: '#10b981'
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      trend: 'up',
      color: '#10b981'
    }
  ];

  return (
    <div className="metrics-cards">
      {metrics.map((metric, index) => (
        <motion.div 
          key={index} 
          className="metric-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="metric-content">
            <h3 className="metric-title">{metric.title}</h3>
            <motion.div 
              className="metric-value"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {metric.value}
            </motion.div>
            <div className="metric-change">
              <div className="metric-trend">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: metric.trend === 'up' ? 0 : 180 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  {metric.trend === 'up' ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                </motion.div>
                <span style={{ color: metric.color }}>{metric.change}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsCards;

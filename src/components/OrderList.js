import React, { useState } from 'react';
import { Plus, Filter, ArrowUpDown, Search, MoreHorizontal, Calendar, FileText } from 'lucide-react';
import './OrderList.css';

const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState(['#CM9804']);
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { text: 'In Progress', color: '#8b5cf6', dot: 'purple' }
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { text: 'Complete', color: '#10b981', dot: 'green' }
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { text: 'Pending', color: '#3b82f6', dot: 'blue' }
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { text: 'Approved', color: '#f59e0b', dot: 'yellow' }
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { text: 'Rejected', color: '#6b7280', dot: 'gray' }
    }
  ];

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map(order => order.id));
    }
  };

  return (
    <div className="order-list-page">
      <div className="order-list-header">
        <h1 className="order-list-title">Order List</h1>
        <div className="order-list-actions">
          <div className="action-buttons">
            <button className="action-btn">
              <Plus size={16} />
            </button>
            <button className="action-btn">
              <Filter size={16} />
            </button>
            <button className="action-btn">
              <ArrowUpDown size={16} />
            </button>
          </div>
          <div className="order-search">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="order-list-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  checked={selectedOrders.length === orders.length}
                  onChange={handleSelectAll}
                  className="table-checkbox"
                />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="order-row">
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="table-checkbox"
                  />
                </td>
                <td className="order-id">{order.id}</td>
                <td className="user-cell">
                  <div className="user-info">
                    <div className="user-avatar">{order.user.avatar}</div>
                    <span className="user-name">{order.user.name}</span>
                  </div>
                </td>
                <td className="project-cell">
                  <div className="project-info">
                    <FileText size={14} className="project-icon" />
                    <span>{order.project}</span>
                  </div>
                </td>
                <td className="address-cell">{order.address}</td>
                <td className="date-cell">
                  <div className="date-info">
                    <Calendar size={14} className="date-icon" />
                    <span>{order.date}</span>
                  </div>
                </td>
                <td className="status-cell">
                  <div className="status-info">
                    <div 
                      className={`status-dot ${order.status.dot}`}
                      style={{ backgroundColor: order.status.color }}
                    ></div>
                    <span>{order.status.text}</span>
                  </div>
                </td>
                <td className="actions-cell">
                  {order.status.text === 'Rejected' && (
                    <button className="more-btn">
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="pagination-btn" disabled>
            ←
          </button>
          <div className="pagination-numbers">
            {[1, 2, 3, 4, 5].map((page) => (
              <button 
                key={page}
                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="pagination-btn">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

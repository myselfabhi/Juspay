import React from 'react';
import { Bug, User, Speaker } from 'lucide-react';
import './RightSidebar.css';

const RightSidebar = () => {
  const notifications = [
    { icon: Bug, text: 'You have a bug that needs...', time: 'Just now' },
    { icon: User, text: 'New user registered', time: '59 minutes ago' },
    { icon: Bug, text: 'You have a bug that needs...', time: '12 hours ago' },
    { icon: Speaker, text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ];

  const activities = [
    { text: 'You have a bug that needs...', time: 'Just now' },
    { text: 'Released a new version', time: '59 minutes ago' },
    { text: 'Submitted a bug', time: '12 hours ago' },
    { text: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { text: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
  ];

  const contacts = [
    'Natali Craig',
    'Drew Cano',
    'Orlando Diggs',
    'Andi Lane',
    'Kate Morrison',
    'Koray Okumus'
  ];

  return (
    <div className="right-sidebar">
      <div className="sidebar-section">
        <h3 className="section-title">Notifications</h3>
        <div className="notifications-list">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <div className="notification-icon">
                <notification.icon size={16} />
              </div>
              <div className="notification-content">
                <p className="notification-text">{notification.text}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Activities</h3>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-avatar">
                <User size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">{activity.text}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Contacts</h3>
        <div className="contacts-list">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-avatar">
                <User size={16} />
              </div>
              <span className="contact-name">{contact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiMenu, FiStar, FiSettings, FiCreditCard, FiUser, FiHelpCircle } from 'react-icons/fi';
import Button from '../Button/Button';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  // مصفوفة لتسهيل كتابة الروابط وتقليل تكرار الكود
  const menuLinks = [
    { to: "/dashboard", icon: FiHome, text: "Dashboard" },
    { to: "/orders", icon: FiShoppingBag, text: "Food Order" },
    { to: "/menu", icon: FiMenu, text: "Manage Menu" },
    { to: "/reviews", icon: FiStar, text: "Customer Review" },
    { to: "/settings", icon: FiSettings, text: "Settings" },
    { to: "/payment", icon: FiCreditCard, text: "Payment" },
    { to: "/accounts", icon: FiUser, text: "Accounts" },
    { to: "/help", icon: FiHelpCircle, text: "Help" },
  ];

  return (
    <div className={styles['sidebar-neo']}>
      <div>
        <p className={styles['menu-label']}>MENU</p>
        
        {menuLinks.map((link) => (
          <NavLink 
            key={link.to}
            to={link.to} 
            className={({ isActive }) => 
              `${styles['menu-item']} ${isActive ? styles.active : ''}`
            }
          >
            <link.icon className={styles.icon} /> 
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className={styles['sign-out-container']}>
        <Button 
          text="Sign Out" 
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }} 
          variant="primary" 
        />
      </div>
    </div>
  );
};

export default Sidebar;

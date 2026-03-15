import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiMenu, FiStar, FiSettings, FiCreditCard, FiUser, FiHelpCircle } from 'react-icons/fi';
import Button from '../Button/Button';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-neo">
      <div>
        <p className="menu-label">MENU</p>
        <NavLink to="/dashboard" className="menu-item"><FiHome className="icon" /> Dashboard</NavLink>
        <NavLink to="/orders" className="menu-item"><FiShoppingBag className="icon" /> Food Order</NavLink>
        <NavLink to="/menu" className="menu-item"><FiMenu className="icon" /> Manage Menu</NavLink>
        <NavLink to="/reviews" className="menu-item"><FiStar className="icon" /> Customer Review</NavLink>
        <NavLink to="/settings" className="menu-item"><FiSettings className="icon" /> Settings</NavLink>
        <NavLink to="/payment" className="menu-item"><FiCreditCard className="icon" /> Payment</NavLink>
        <NavLink to="/accounts" className="menu-item"><FiUser className="icon" /> Accounts</NavLink>
        <NavLink to="/help" className="menu-item"><FiHelpCircle className="icon" /> Help</NavLink>
      </div>

      <div className="sign-out-container">
        <Button text="Sign Out" onClick={() => navigate('/login')} variant="primary" />
      </div>
    </div>
  );
};

export default Sidebar;

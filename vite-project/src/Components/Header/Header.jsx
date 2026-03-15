import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiLogOut, FiUser } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="main-header-neo">
      {/* القسم الأيمن: الشعار */}
      <div className="header-section logo-section">
        <NavLink to="/dashboard" className="logo-link">
          <div className="logo-icon-neo">G</div>
          <span className="logo-text-neo">GOODFOOD</span>
        </NavLink>
      </div>

      {/* القسم الأوسط: البحث (نمط غائر) */}
      <div className="header-section search-section">
        <div className="search-wrapper-neo">
          <FiSearch className="search-icon-neo" />
          <input type="search" placeholder="Search..." className="search-input-neo" />
        </div>
      </div>

      {/* القسم الأيسر: البروفايل والتنبيه (نمط غائر) */}
      <div className="header-section profile-section">
        <div className="profile-dropdown-wrapper">
          <button className="user-profile-neo" onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <span className="user-name-neo"> Notification </span>
            <FiChevronDown />
          </button>
          {isProfileOpen && (
            <div className="dropdown-menu-neo">
              <button className="menu-item"><FiUser /> Profile</button>
              <button className="menu-item" onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
        <button className="notification-btn-neo">
          <FiBell />
          <span className="bell-dot-neo"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

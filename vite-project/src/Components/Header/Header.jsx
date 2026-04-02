import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiLogOut, FiUser } from 'react-icons/fi';
import styles from './Header.module.css'; // استيراد الموديول

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles['main-header-neo']}>
      {/* القسم الأيمن: الشعار */}
      <div className={`${styles['header-section']} ${styles['logo-section']}`}>
        <NavLink to="/dashboard" className={styles['logo-link']}>
          <div className={styles['logo-icon-neo']}>G</div>
          <span className={styles['logo-text-neo']}>GOODFOOD</span>
        </NavLink>
      </div>

      {/* القسم الأوسط: البحث */}
      <div className={`${styles['header-section']} ${styles['search-section']}`}>
        <div className={styles['search-wrapper-neo']}>
          <FiSearch className={styles['search-icon-neo']} />
          <input type="search" placeholder="Search..." className={styles['search-input-neo']} />
        </div>
      </div>

      {/* القسم الأيسر: البروفايل والتنبيه */}
      <div className={`${styles['header-section']} ${styles['profile-section']}`}>
        <div className={styles['profile-dropdown-wrapper']}>
          <button className={styles['user-profile-neo']} onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <span className={styles['user-name-neo']}> Notification </span>
            <FiChevronDown />
          </button>
          
          {isProfileOpen && (
            <div className={styles['dropdown-menu-neo']}>
              <button className={styles['menu-item']}><FiUser /> Profile</button>
              <button className={styles['menu-item']} onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
        
        <button className={styles['notification-btn-neo']}>
          <FiBell />
          <span className={styles['bell-dot-neo']}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

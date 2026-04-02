import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import styles from './Layout.module.css'; // استيراد الموديول

const Layout = () => {
  return (
    <div className={styles['layout-container']}>
      {/* الهيدر في الأعلى */}
      <Header /> 

      <div className={styles['main-content']}>
        {/* الحاوية الخارجية للسايد بار بنمط النيومورفيزم */}
        <aside className={styles['sidebar-container-neo']}>
          <Sidebar />
        </aside>

        {/* منطقة عرض الصفحات (Dashboard, Orders, etc.) */}
        <main className={styles['content-area']}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;

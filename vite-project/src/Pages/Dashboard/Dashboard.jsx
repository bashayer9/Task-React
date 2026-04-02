import React from 'react';
import RevenueChart from '../../Components/RevenueChart/RevenueChart';
import OrderTimeChart from '../../Components/OrderTmeChart/OrderTimeChart';
import OrderStatisticsChart from '../../Components/OrderStatisticsChart/OrderStatisticsChart'
import FoodList from '../../Components/FoodList/FoodList';
import RatingCircles from '../../Components/RatingCircles/RatingCircles';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.pageTitle}>Dashboard</h1>
      
      <div className={styles.chartsGrid}>
        <div className={styles.revenueSection}>
          <RevenueChart />
        </div>

        <div className={styles.orderTimeSection}>
          <OrderTimeChart />
        </div>
        
        {/* الجزء السفلي الأيسر المقسم لقطعتين */}
        <div className={styles.bottomLeftSection}>
          <div className={styles.subGrid}>
            <div className={styles.ratingBox}>
              <RatingCircles />
            </div>
            <div className={styles.foodListBox}>
              <FoodList />
            </div>
          </div>
        </div>
        
        <div className={styles.bottomRightSection}>
            <OrderStatisticsChart />
        </div>
      </div>
    </div>
  );
};


export default Dashboard;


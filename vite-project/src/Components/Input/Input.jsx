import React from 'react';
import styles from './Input.module.css'; // استيراد كائن التنسيق

const Input = ({ icon: Icon, label, error, ...props }) => {
  return (
    // حاوية خارجية لترتيب العناصر فوق بعضها
    <div className={styles['input-wrapper']}>
      
      {/* 1. الليبل يظهر هنا فوق كل شيء */}
      {label && <label className={styles['custom-label']}>{label}</label>}
      
      <div className={styles['input-group']}>
        {Icon && <Icon className={styles['input-icon']} />}
        <input 
          {...props} 
          className={`${styles['neo-input']} ${error ? styles['error-border'] : ''}`} 
        />
      </div>

      {/* 2. رسالة الخطأ تظهر في الأسفل */}
      {error && <span className={styles['error-message']}>{error}</span>}
    </div>
  );
};

export default Input;

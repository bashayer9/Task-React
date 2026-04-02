import React from 'react';
import styles from './FormModel.module.css'; // تأكد أن اسم ملف الـ CSS يطابق هذا الاسم

const FormModel = ({ title, subtitle, children }) => {
  return (
    <div className={styles['form-container']}>
      <div className={styles['form-card']}>
        {/* العنوان الرئيسي */}
        <h1 className={styles['form-title']}>{title}</h1>
        
        {/* النص الفرعي */}
        {subtitle && <div className={styles['form-subtitle']}>{subtitle}</div>}

        {/* محتوى النموذج (الحقول والأزرار) */}
        <div className={styles['form-content']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormModel;

import React from 'react';
import styles from './Button.module.css'; // استيراد styles ككائن

const Button = ({ text, onClick, type = "button", variant = "primary", disabled, loading }) => {
  return (
    <button
      // الوصول للكلاسات عن طريق الكائن styles
      className={`${styles['main-btn']} ${styles[variant]} ${disabled || loading ? styles.disabled : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : text} 
    </button>
  );
};

export default Button;

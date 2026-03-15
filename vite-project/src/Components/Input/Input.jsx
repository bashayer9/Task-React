import React from 'react';
import './Input.css';

const Input = ({ icon: Icon, label, error, ...props }) => {
  return (
    // حاوية خارجية لترتيب العناصر فوق بعضها
    <div className="input-wrapper">
      
      {/* 1. الليبل يظهر هنا فوق كل شيء */}
      {label && <label className="custom-label">{label}</label>}
      
      <div className="input-group">
        {Icon && <Icon className="input-icon" />}
        <input 
          {...props} 
          className={`neo-input ${error ? 'error-border' : ''}`} 
        />
      </div>

      {/* 2. رسالة الخطأ تظهر في الأسفل */}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};



export default Input;

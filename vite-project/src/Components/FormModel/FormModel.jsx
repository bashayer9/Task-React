import React from 'react';
import './FormModel.css';

const FormModel = ({ title, subtitle, children }) => {
  return (
    <div className="form-container">
      <div className="form-card">
        {/* العنوان الرئيسي مثل Welcom! */}
        <h1 className="form-title">{title}</h1>
        
        {/* النص الفرعي مثل Sign In */}
        {subtitle && <div className="form-subtitle">{subtitle}</div>}

        {/* هنا سيتم عرض الحقول والأزرار التي نمررها للمكون */}
        <div className="form-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormModel;

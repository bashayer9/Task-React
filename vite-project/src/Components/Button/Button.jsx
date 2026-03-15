import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type = "button", variant = "primary", secondary, disabled, loading }) => {
  return (
    <button
      className={`main-btn ${variant} ${disabled || loading ? 'disabled' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading} // يمنع النقر برمجياً
    >
      {loading ? "Loading..." : text} 
    </button>
  );
};


export default Button;

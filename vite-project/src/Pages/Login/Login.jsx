import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormModel from '../../Components/FormModel/FormModel';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { FiUser, FiLock } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();

  // تعريف حالات الإدخال
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // منطق التحقق البسيط
    if (username === "admin" && password === "123456") {
      localStorage.setItem('token', 'fake-jwt-token');
      navigate('/dashboard');
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
  };

  return (
    <FormModel title="Welcom Back" subtitle="Login to access your account">
      
      {/* ربط حقول الإدخال بالـ State */}
      <Input 
        label="Username" 
        icon={FiUser} 
        placeholder="Username" 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      
      <Input 
        label="Password" 
        icon={FiLock} 
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      {/* زر تسجيل الدخول */}
      <Button text="Submit" onClick={handleLogin} />

      {/* جزء التسجيل */}
      <p>Don't have an account? Create account</p>
      <Button 
        text="Sign up" 
        variant="primary" 
        onClick={() => navigate('/register')} 
      />
    </FormModel>
  );
};

export default Login;

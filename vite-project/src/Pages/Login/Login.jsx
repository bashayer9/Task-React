import React from 'react'; // حذفنا useState لأننا لم نعد بحاجة لإدارة الحالة يدوياً
import { useNavigate } from 'react-router-dom';
// إضافة المكتبات الجديدة مع الحفاظ على الـ imports الأصلية
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './LoginSchema.js'; 

import FormModel from '../../Components/FormModel/FormModel.jsx';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { FiUser, FiLock } from 'react-icons/fi';
import styles from './Login.module.css'; 

const Login = () => {
  const navigate = useNavigate();

  // إعداد React Hook Form بدلاً من useState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // دالة تسجيل الدخول تستقبل "data" التي تحتوي على username و password تلقائياً
  const handleLogin = (data) => {
    if (data.username === "admin" && data.password === "123456") {
      localStorage.setItem('token', 'fake-jwt-token');
      navigate('/dashboard');
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
  };

  return (
    <FormModel title="Welcome Back" subtitle="Login to access your account">
      
      <div className={styles['input-wrapper']}>
        <Input 
          label="Username" 
          icon={FiUser} 
          placeholder="Enter your username" 
          type="text" 
          {...register("username")} // الربط مع السكيما
        />
        {/* عرض رسالة الخطأ تحت الحقل مباشرة */}
        {errors.username && <p className={styles.error}>{errors.username.message}</p>}
      </div>
      
      <div className={styles['input-wrapper']}>
        <Input 
          label="Password" 
          icon={FiLock} 
          placeholder="Enter your password" 
          type="password" 
          {...register("password")} // الربط مع السكيما
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      {/* نستخدم handleSubmit لتغليف الدالة الأساسية */}
      <Button text="Submit" onClick={handleSubmit(handleLogin)} variant="primary" />

      <p className={styles['footer-text']}>
        Don't have an account? {' '}
        <span 
          className={styles.link} 
          onClick={() => navigate('/register')}
        >
          Create account
        </span>
      </p>

    </FormModel>
  );
};

export default Login;

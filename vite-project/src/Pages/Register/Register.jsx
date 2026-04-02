import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// المكتبات الجديدة للربط مع السكيما
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './Register.Schema';

import FormModel from '../../Components/FormModel/FormModel';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import styles from './Register.module.css'; 

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // إعداد React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // دالة التسجيل (تنفذ فقط إذا كانت البيانات مطابقة للسكيما)
  const handleRegister = (data) => {
    setIsLoading(true);
    
    // محاكاة عملية التسجيل
    setTimeout(() => {
      setIsLoading(false);
      console.log("Registered successfully with:", data);
      navigate('/Login');
    }, 2000);
  };

  return (
    <FormModel title="Sign Up" subtitle="Fill The Required Information">
      
      <div className={styles.inputWrapper}>
        <Input label="Username" icon={FiUser} placeholder="Username" {...register("username")} />
        {errors.username && <p className={styles['error-text']}>{errors.username.message}</p>}
      </div>

      <div className={styles.inputWrapper}>
        <Input label="Email" icon={FiMail} placeholder="Email" type="email" {...register("email")} />
        {errors.email && <p className={styles['error-text']}>{errors.email.message}</p>}
      </div>

      <div className={styles.inputWrapper}>
        <Input label="Password" icon={FiLock} placeholder="Password" type="password" {...register("password")} />
        {errors.password && <p className={styles['error-text']}>{errors.password.message}</p>}
      </div>

      <div className={styles.inputWrapper}>
        <Input label="Confirm Password" icon={FiLock} placeholder="Confirm Password" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p className={styles['error-text']}>{errors.confirmPassword.message}</p>}
      </div>

      <Button 
        type="button" 
        onClick={handleSubmit(handleRegister)} // استخدام handleSubmit هنا
        text={isLoading ? "Loading..." : "Submit"} 
        disabled={isLoading} 
        variant="primary"
      />

      <Button 
        text="Sign In" 
        onClick={() => navigate('/Login')} 
        variant="secondary" 
      />

    </FormModel>
  );
};

export default Register;

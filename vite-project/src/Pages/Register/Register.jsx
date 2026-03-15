import React, { useState } from 'react';
import FormModel from '../../Components/FormModel/FormModel';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  // حالات الحقول
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // حالات النظام
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    // 1. التحقق من طول اسم المستخدم
    if (username.length < 3) {
      setErrorMessage("اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل.");
      return;
    }
    // 2. التحقق من صيغة الإيميل
    if (!email.includes("@")) {
      setErrorMessage("يرجى إدخال بريد إلكتروني صحيح.");
      return;
    }
    // 3. التحقق من طول كلمة المرور
    if (password.length < 8) {
      setErrorMessage("كلمة المرور يجب أن تكون 8 أحرف على الأقل.");
      return;
    }
    // 4. التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      setErrorMessage("كلمة المرور غير متطابقة.");
      return;
    }

    // إذا اجتاز كل الاختبارات:
    setErrorMessage(""); 
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/Login');
    }, 2000);
  };

  return (
    <FormModel title="Sign Up" subtitle="Fill The Required Information">
      <Input label="Username" icon={FiUser} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input label="Email" icon={FiMail} placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" icon={FiLock} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input label="Confirm Password" icon={FiLock} placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      {/* عرض رسالة الخطأ في حال وجودها */}
      {errorMessage && <p style={{ color: 'red', textAlign: 'center', fontSize: '14px' }}>{errorMessage}</p>}

      <Button 
        type="button" 
        onClick={handleRegister} 
        text={isLoading ? "Loading..." : "Submit"} 
        disabled={isLoading} 
      />
    </FormModel>
  );
};

export default Register;

import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // السطر الناقص: جلب التوكن من متصفح المستخدم
  const token = localStorage.getItem('token'); 

  // إذا لم يجد التوكن، يعيده لصفحة تسجيل الدخول
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // إذا وجد التوكن، يسمح له بالدخول للمسارات الداخلية
  return <Outlet />;
}

export default ProtectedRoute;

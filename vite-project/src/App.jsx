import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard.jsx'; 
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'; 
import Layout from './Layout/Layout.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* المسارات العامة (بدون تسجيل دخول) */}
        {/* جعلت المسار الرئيسي يوجه تلقائياً لصفحة اللوجن */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* المسارات المحمية (تحتاج تسجيل دخول) */}
        <Route element={<ProtectedRoute />}>
          {/* الـ Layout يغلف الصفحات الداخلية للداشبورد */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* أي صفحة إضافية تضعها هنا ستأخذ الهيدر والسايدبار تلقائياً */}
          </Route>
        </Route>

        {/* صفحة الخطأ في حال كان الرابط غير صحيح */}
        <Route path="*" element={<div style={{ padding: "20px" }}>404 - الصفحة غير موجودة</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

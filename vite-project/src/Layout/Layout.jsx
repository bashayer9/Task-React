import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header /> 

      <div className="main-content">
        {/* الحاوية الخارجية للسايد بار (بنفس ستايل الهيدر) */}
        <aside className="sidebar-container-neo">
          <Sidebar />
        </aside>

        <main className="content-area">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;

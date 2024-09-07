import "../../../assets/css/styles.min.css";
import "../../../assets/libs/jquery/dist/jquery.min.js";
import "../../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../assets/js/sidebarmenu.js";
import "../../../assets/js/app.min.js";
import "../../../assets/libs/apexcharts/dist/apexcharts.min.js";
import "../../../assets/libs/simplebar/dist/simplebar.js";
import "../../../assets/js/dashboard.js";
import LeftMenu from "../LeftMenu/LeftMenu.jsx";
import Header from "../Header/Header.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Users from "../Users/Users.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Admin = () => {
  const isUserRoute = location.pathname === "/admin/users";
  const isDashboardRoute = location.pathname === "/admin/dashboard";
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      {/* Sidebar Start  */}
      <LeftMenu></LeftMenu>
      {/* Sidebar End  */}
      {/* Main wrapper  */}
      <div className="body-wrapper">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Admin;

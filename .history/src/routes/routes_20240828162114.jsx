import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound/Notfound";
import Footer from "../components/Footer/Footer";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";
import Navbar from "../components/Navbar/Navbar";
import VoiceControl from "../VoiControl";
const Admin = lazy(() => import("../pages/Admin/Layout/Admin"));

export default function routes() {
  var isAdminRoute = location.pathname.includes("admin");
  var isAdminRoute = location.pathname === "/login";
  return (
    <BrowserRouter>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <VoiceControl></VoiceControl>
      {!isAdminRoute && <Footer />}
    </BrowserRouter>
  );
}
import "../assets/css/styles.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound/Notfound";
import Footer from "../components/Footer/Footer";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";
import Navbar from "../components/Navbar/Navbar";
import VoiceControl from "../VoiControl";
import Profile from "../pages/Profile/Profile";
import Policy from "../pages/Policy/Policy";
const Admin = lazy(() => import("../pages/Admin/Layout/Admin"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/register"));

export default function routes() {
  var isAdminRoute = location.pathname.includes("admin");
  var isSignInRoute = location.pathname === "/sign-in";
  var isSignUpRoute = location.pathname === "/sign-up";
  return (
    <BrowserRouter>
      {!isAdminRoute && !isSignInRoute && !isSignUpRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <VoiceControl></VoiceControl>
      {!isAdminRoute && !isSignInRoute && !isSignUpRoute && <Footer />}
    </BrowserRouter>
  );
}
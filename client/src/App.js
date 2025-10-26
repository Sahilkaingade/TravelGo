import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout components
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

// Pages
import HomePage from "./pages/Home/home.jsx";
import AboutPage from "./pages/About/about.jsx";
import Tours from "./pages/Tours/tours.jsx";
import ContactPage from "./pages/Contact/contact.jsx";
import NewsPage from "./pages/News/news.jsx";
import DestinationPage from "./pages/Destination/destination.jsx";
import PlanningPage from "./pages/Planning/planning.jsx";
import CartPage from "./pages/Cart/cart.jsx";

// Auth pages
import RegisterPage from "./features/auth/Register/register.jsx";
import LoginPage from "./features/auth/Login/login.jsx";
import ForgotPasswordPage from "./features/auth/Forgotpassword/forgotpassword.jsx";

// Destination subpages
import Maharashtra from "./pages/Subpages/Maharashtra/maharashtra.jsx";
import Kerala from "./pages/Subpages/Kerala/kerala.jsx";
import Kashmir from "./pages/Subpages/Kashmir/kashmir.jsx";
import Goa from "./pages/Subpages/Goa/goa.jsx";

// Cultural Festival Pages
import Thrissur from "./pages/Destinationpages/Thissur/thissur.jsx";
import Holi from "./pages/Destinationpages/Holi/holi.jsx";
import Ganesh from "./pages/Destinationpages/Ganesh/ganesh.jsx";
import Navratri from "./pages/Destinationpages/Navratri/navratri.jsx";
import Diwali from "./pages/Destinationpages/Diwali/diwali.jsx";
import DurgaPuja from "./pages/Destinationpages/DurgaPuja/durgapuja.jsx";
import MakarSankranti from "./pages/Destinationpages/MakarSankranti/makarsankranti.jsx";
import Onam from "./pages/Destinationpages/Onam/onam.jsx";
import Bihu from "./pages/Destinationpages/Bihu/bihu.jsx";
import Pongal from "./pages/Destinationpages/Pongal/pongal.jsx";
import Pushkar from "./pages/Destinationpages/Pushkar/pushkar.jsx";
import Hornbill from "./pages/Destinationpages/Hornbill/hornbill.jsx";
import Lohri from "./pages/Destinationpages/Lohri/lohri.jsx";

function AppContent() {
  const location = useLocation();

  // Hide header/footer for specific pages
  const hideHeaderAndFooter = [
    "/login",
    "/register",
    "/forgot-password",
    "/maharashtra",
    "/kerala",
    "/kashmir",
    "/goa",
    "/thrissur",
    "/holi-festival",
    "/ganesh-chaturthi",
    "/navratri-festival",
    "/diwali-celebration",
    "/durga-puja",
    "/makar-sankranti",
    "/onam-festival",
    "/bihu-festival",
    "/pongal-festival",
    "/pushkar-fair",
    "/hornbill-festival",
    "/lohri-festival",
  ].includes(location.pathname);

  const hideFooterOnly = location.pathname === "/tours";

  return (
    <>
      {!hideHeaderAndFooter && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Destination subpages */}
        <Route path="/maharashtra" element={<Maharashtra />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/kashmir" element={<Kashmir />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/thrissur" element={<Thrissur />} />

        {/* Cultural festival pages */}
        <Route path="/holi-festival" element={<Holi />} />
        <Route path="/ganesh-chaturthi" element={<Ganesh />} />
        <Route path="/navratri-festival" element={<Navratri />} />
        <Route path="/diwali-celebration" element={<Diwali />} />
        <Route path="/durga-puja" element={<DurgaPuja />} />
        <Route path="/makar-sankranti" element={<MakarSankranti />} />
        <Route path="/onam-festival" element={<Onam />} />
        <Route path="/bihu-festival" element={<Bihu />} />
        <Route path="/pongal-festival" element={<Pongal />} />
        <Route path="/pushkar-fair" element={<Pushkar />} />
        <Route path="/hornbill-festival" element={<Hornbill />} />
        <Route path="/lohri-festival" element={<Lohri />} />
      </Routes>

      {!hideHeaderAndFooter && !hideFooterOnly && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

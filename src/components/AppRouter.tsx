import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage/MainPage";
import AboutFund from "../pages/AboutFundPage/AboutFundPage";
import Business from "../pages/BusinessPage";
import Contact from "../pages/ContactPage/ContactPage";
import Info from "../pages/InfoDisclosurePage/InfoDisclosurePage";
import Investment from "../pages/InvestmentPage";
import Management from "../pages/ManagementPage/ManagementPage";
import News from "../pages/News/News";
import NewsPage from "../pages/NewsPage/NewsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ServiceSupport from "../pages/ServiceSupportPage/ServiceSupportPage";
import Taxation from "../pages/TaxationPage/TaxationPage";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutFund />} />
        <Route path="business" element={<Business />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="info" element={<Info />} />
        <Route path="investment" element={<Investment />} />
        <Route path="managment" element={<Management />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="support" element={<ServiceSupport />} />
        <Route path="taxation" element={<Taxation />} />
        <Route path="adminpanel" element={<AdminPanel />} />

        <Route />
      </Route>
    </Routes>
  );
};

export default AppRouter;

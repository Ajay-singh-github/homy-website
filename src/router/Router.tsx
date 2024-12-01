import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import About from "@/pages/About";
import BlogDetail from "@/pages/BlogDetail";
import Blogs from "@/pages/Blogs";
import ContactUs from "@/pages/ContactUs";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Plans from "@/pages/Plans";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import TermsAndConditions from "@/pages/TermsCondition";
import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-screen min-h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensure this is placed here */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/plans"
          element={
            <Layout>
              <Plans />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
        <Route
          path="/refund"
          element={
            <Layout>
              <RefundPolicy />
            </Layout>
          }
        />
        <Route
          path="/menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <Layout>
              <BlogDetail />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

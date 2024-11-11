import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import ContactUs from "@/pages/ContactUs";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Plans from "@/pages/Plans";
import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-screen min-h-screen flex flex-col justify-between">
        <Header />
        {/* <div className=" w-full h-full"> */}
        {children}
        {/* </div> */}
        <Footer />
      </div>
    </SidebarProvider>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={
            <Layout>
              <Home/>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

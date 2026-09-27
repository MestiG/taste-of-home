import {  } from "react";
import { Route, Routes,  } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";
import AddRecipePage from "./pages/AddRecipePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Toast from "./components/Toast.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";



export default function App() {
  return (
    <>
      

      <Header />

      <main id="main-content">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <Toast />
    </>
  );
}


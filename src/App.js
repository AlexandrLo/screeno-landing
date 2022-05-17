import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "blocks/Footer";
import HomePage from "containers/HomePage";
import NavBar from "blocks/NavBar";
import NotFoundPage from "containers/NotFoundPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

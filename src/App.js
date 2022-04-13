import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "containers/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "containers/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </div>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Comics } from "../pages/Comics";
import { Series } from "../pages/Series";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personagens" element={<Characters />} />
      <Route path="/quadrinhos" element={<Comics />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  );
};

export { AppRoutes };

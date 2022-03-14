import { AppRoutes } from "./router";
import { GlobalStyle } from "./global/styles.global";
import React from "react";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;

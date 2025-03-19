import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/RouterController";
import RequestQuote from "./pages/UserSide/request-quote/RequestQuote";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <RequestQuote />
    </>
  );
};

export default App;
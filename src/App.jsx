import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/RouterController";
import RequestQuote from "./pages/UserSide/request-quote/RequestQuote";
import JoinUs from "./pages/UserSide/join-us/JoinUs";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <RequestQuote /> */}
      <JoinUs />
    </>
  );
};

export default App;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../pages/UserSide/UserDashboard";
import RequestQuote from "../pages/UserSide/request-quote/RequestQuote";
import UserSideLayout from "../layout/UserSideLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UserDashboard />
      </>
    ),
  },

  // user side
  {
    path: "/request-quote",
    element: (
      <UserSideLayout>
        <RequestQuote />
      </UserSideLayout>
    ),
  },
]);

export default router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";

// page imports
import UserDashboard from "../pages/UserSide/UserDashboard";
import RequestQuote from "../pages/UserSide/request-quote/RequestQuote";
import UserSideLayout from "../layout/UserSideLayout";
import AboutUs from "../pages/UserSide/aboutus/AboutUs";
import JoinUs from "../pages/UserSide/join-us/JoinUs";

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
  {
    path: "/about-us",
    element: (
      <UserSideLayout>
        <AboutUs />
      </UserSideLayout>
    ),
  },
  {
    path: "/join-us",
    element: (
      <UserSideLayout>
        <JoinUs />
      </UserSideLayout>
    ),
  },
]);

export default router;

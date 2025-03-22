import React from "react";
import { createBrowserRouter } from "react-router-dom";

// page imports
import UserDashboard from "../pages/UserSide/UserDashboard";
import RequestQuote from "../pages/UserSide/request-quote/RequestQuote";
import UserSideLayout from "../layout/UserSideLayout";
import AboutUs from "../pages/UserSide/aboutus/AboutUs";
import JoinUs from "../pages/UserSide/join-us/JoinUs";
import ContactUs from "../pages/UserSide/contact-us/ContactUs";
import Blogs from "../pages/UserSide/blogs/Blogs";
import DetailedBlog from "../pages/UserSide/blogs/DetailedBlog";
import Services from "../pages/UserSide/services/Services";
import ServiceBooking from "../pages/UserSide/services/ServiceBooking";
import BookingUserDetails from "../pages/UserSide/services/BookingUserDetails";
import SuccessBooking from "../pages/UserSide/services/SuccessBooking";
import MyAccount from "../pages/UserSide/user-dashboard/UserAccount/MyAccount";
import Login from "../pages/UserSide/Login-SignUp/Login";
import Signup from "../pages/UserSide/Login-SignUp/SignUp";
import ForgotPassword from "../pages/UserSide/Login-SignUp/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UserDashboard />
      </>
    ),
  },


  // login-signup
  {
    path: "/log-in",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <>
        <ForgotPassword />
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
  {
    path: "/contact-us",
    element: (
      <UserSideLayout>
        <ContactUs />
      </UserSideLayout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <UserSideLayout>
        <Blogs />
      </UserSideLayout>
    ),
  },
  {
    path: "/blog1",
    element: (
      <UserSideLayout>
        <DetailedBlog />
      </UserSideLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <UserSideLayout>
        <Services />
      </UserSideLayout>
    ),
  },
  {
    path: "/service-booking",
    element: (
      <UserSideLayout>
        <ServiceBooking />
      </UserSideLayout>
    ),
  },
  {
    path: "/booking-user-details",
    element: (
      <UserSideLayout>
        <BookingUserDetails />
      </UserSideLayout>
    ),
  },
  {
    path: "/success-booking",
    element: (
      <>
        <SuccessBooking />
      </>
    ),
  },



  // user account
  {
    path: "/my-account",
    element: (
      <>
        <MyAccount />
      </>
    ),
  },
]);

export default router;

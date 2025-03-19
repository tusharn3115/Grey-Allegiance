import React from "react";
import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Login from "./components/Login-SignUp/Login";
import SignInPage from "./components/Login-SignUp/SignUp";
import ForgotPassword from "./components/Login-SignUp/ForgotPassword";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <SignInPage />
      {/* <ForgotPassword /> */}
      {/* <UtilityBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Footer /> */}
    </>
  );
};

export default App;

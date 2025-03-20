import React from 'react'
import UtilityBar from "./user-dashboard/UtilityBar";
import Navbar from "../../components/user/Navbar";
import Banner from "./user-dashboard/Banner";
import AboutUs from "./user-dashboard/AboutUs";
import Services from "./user-dashboard/Services";
import WhyChooseUs from "./user-dashboard/WhyChooseUs";
import Footer from "../../components/user/Footer";
import FooterAll from '../../components/user/FooterAll';

const UserDashboard = () => {
  return (
    <div>
      <UtilityBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <FooterAll />
    </div>
  )
}

export default UserDashboard
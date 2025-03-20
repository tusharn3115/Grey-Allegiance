import Loader from "../components/Loader";
// import SuccessAlert from "../components/alerts/SuccessAlert";
// import BlackAlert from "../components/alerts/BlackAlert";
// import BlueAlert from "../components/alerts/BlueAlert";
// import ErrorAlert from "../components/alerts/ErrorAlert";
// import GrayAlert from "../components/alerts/GrayAlert";
// import WarningAlert from "../components/alerts/WarningAlert";
import React, { useEffect, useState } from "react";
import Navbar from "../components/user/Navbar";
import FooterAll from "../components/user/FooterAll";

const UserSideLayout = ({ children }) => {
  // const { isVisible, message, alertType } = useSelector((state) => state.alert);
  // const isVisibleLoader = useSelector((state) => state.loader.isVisible);
  // const [isManuallyVisible, setIsManuallyVisible] = useState(false);

  // useEffect(() => {
  //   if (isVisible) {
  //     setIsManuallyVisible(false);

  //     setTimeout(() => {
  //       setIsManuallyVisible(true);
  //     }, 300);
  //   }
  // }, [isVisible]);

  // const renderAlert = () => {
  //   switch (alertType) {
  //     case "success":
  //       return <SuccessAlert message={message} initialState={true} />;
  //     case "failed":
  //       return <ErrorAlert message={message} initialState={true} />;
  //     case "black":
  //       return <BlackAlert message={message} initialState={true} />;
  //     case "blue":
  //       return <BlueAlert message={message} initialState={true} />;
  //     case "gray":
  //       return <GrayAlert message={message} initialState={true} />;
  //     case "warning":
  //       return <WarningAlert message={message} initialState={true} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className={"main"}>
      {/* {isManuallyVisible && (
        <div className="fixed top-0 left-0 w-full z-50">{renderAlert()}</div>
      )}

      {isVisibleLoader && <Loader />} */}
      <div>
        <Navbar />

        <div>{children}</div>
        <FooterAll />
      </div>
    </div>
  );
};

export default UserSideLayout;
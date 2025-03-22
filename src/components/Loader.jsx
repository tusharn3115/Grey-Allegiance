import React from "react";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Watch visible={true} height="80" width="80" color="#BAC4C8" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
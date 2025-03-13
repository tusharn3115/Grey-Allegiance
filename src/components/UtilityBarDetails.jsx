import React from "react";

const UtilityBarDetails = ({ logo, title, desc }) => {
  return (
    <div className="timings flex items-center gap-4">
      {logo}
      <div>
        <h1 className="font-semibold text-sm">{title}</h1>
        <p className="text-zinc-600 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default UtilityBarDetails;

import React from "react";

const UtilityBarDetails = ({ logo, title, desc }) => {
  return (
    <div className="timings flex items-center gap-2">
      {logo}
      <div>
        <h1 className="font-semibold text-sm md:text-xs">{title}</h1>
        <p className="text-zinc-600 text-sm md:text-xs">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default UtilityBarDetails;

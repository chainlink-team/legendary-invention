import React from "react";

export const GradientBgButton = ({ children }) => {
  return (
    <button className="w-[120px] magic-gradient rounded-sm py-1 font-display">
      {children}
    </button>
  );
};
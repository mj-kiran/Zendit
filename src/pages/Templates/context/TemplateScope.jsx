import React, { createContext } from "react";
import { useTemplate } from "../hook";


export const TemplateContexte = createContext();
export const TemplateScope = ({ children }) => {
  const Template = useTemplate({ load: true });
  return (
    <TemplateContexte.Provider value={Template}>
      {children}
    </TemplateContexte.Provider>
  );
};

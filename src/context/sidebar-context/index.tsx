// contexts/SidebarContext.tsx
import React, { createContext, memo, useState } from "react";
import { useLocation } from "react-router-dom";

type SidebarContextType = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const location = useLocation().pathname.replace("/", "");
    const [activeMenu, setActiveMenu] = useState(location);

    return (
      <SidebarContext.Provider value={{ activeMenu, setActiveMenu }}>
        {children}
      </SidebarContext.Provider>
    );
  }
);

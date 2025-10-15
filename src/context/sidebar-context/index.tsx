// contexts/SidebarContext.tsx
import React, { createContext, memo,  useState } from 'react';

type SidebarContextType = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const [activeMenu, setActiveMenu] = useState('Home');

    return (
      <SidebarContext.Provider value={{ activeMenu, setActiveMenu }}>
        {children}
      </SidebarContext.Provider>
    );
  }
   
);


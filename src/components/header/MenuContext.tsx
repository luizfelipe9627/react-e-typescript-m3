import { createContext, useState } from "react";

interface MenuContextData {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuContextChildren {
  children: React.ReactNode;
}

export const MenuContext = createContext({} as MenuContextData);

export const MenuProvider: React.FC<MenuContextChildren> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isOpened: isOpened, setIsOpened: setIsOpened }}
    >
      {children}
    </MenuContext.Provider>
  );
};
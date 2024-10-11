import { createContext, useState, FC, ReactNode } from "react";

interface AppContextType {
  users: any[];
  products: any[];
  setUsers: (users: any[]) => void;
  setProducts: (products: any[]) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ users, products, setUsers, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

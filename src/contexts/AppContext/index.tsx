import { createContext, useState, FC, ReactNode } from "react";

interface AppContextType {
  users: any[];
  setUsers: (users: any[]) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};

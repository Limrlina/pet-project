import { createContext, PropsWithChildren, useContext, useState } from "react";

export type AuthStatus = "unauthenticated" | "signing-in" | "authenticated";

interface AuthContextType {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
}

const AuthContext = createContext<AuthContextType>({
  status: "unauthenticated",
  setStatus: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("unauthenticated");

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

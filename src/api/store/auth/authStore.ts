import { create } from "zustand";

type authDataType = {
  id: number;
};

interface IAuthStoreProps {
  authData: authDataType | null;
  setAuthData: (data: authDataType | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<IAuthStoreProps>((set) => ({
  authData: null,
  setAuthData: (data) => set({ authData: data }),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

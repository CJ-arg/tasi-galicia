import { create } from "zustand";

interface IUseStore {
  user?: any;
  setUser: (value: any) => void;
}

const initialState = { user: {} };
export const useStore = create<IUseStore>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, user: value })),
}));

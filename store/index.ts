import { create } from "zustand";

interface IUseStore {
  user?: any;
  amountOperation?: string;
  setUser: (value: any) => void;
  setAmountOperation: (value: string) => void;
}

const initialState = { user: {}, amountOperation: "" };
export const useStore = create<IUseStore>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, user: value })),
  setAmountOperation: (value) =>
    set((state) => ({ ...state, amountOperation: value })),
}));

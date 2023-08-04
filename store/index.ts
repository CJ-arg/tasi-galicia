import { create } from "zustand";

interface IUseStore {
  user?: any;
  amountOperation?: number;
  amount?: number;
  setUser: (value: any) => void;
  setAmountOperation: (value: number) => void;
  setBalance: (value: any) => void;
}

const initialState = { user: {}, amountOperation: 0 };
export const useStore = create<IUseStore>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, user: value })),
  setAmountOperation: (value) =>
    set((state) => ({ ...state, amountOperation: value })),
  setBalance: (value) => set((state) => ({ ...state, balance: value })),
}));

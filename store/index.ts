import { create } from "zustand";

interface IUseStore {
  user?: any;
  amountOperation?: number;
  amount?: number;
  setUser: (value: any) => void;
  setAmountOperation: (value: number) => void;
  setAmount: (value: any) => void;
}

const initialState = { user: {}, amountOperation: 0 };
export const useStore = create<IUseStore>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, user: value })),
  setAmountOperation: (value) =>
    set((state) => ({ ...state, amountOperation: value })),
  setAmount: (value) => set((state) => ({ ...state, balance: value })),
}));

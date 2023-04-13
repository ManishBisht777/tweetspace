import { getAllSpaces } from "@/server/lib/getSpaces";
import { space } from "@/types/type";
import { create } from "zustand";
import { produce } from "immer";

type StoreValues = {
  spaces: space[] | [];
  getSpaces: (start: number, end: number, time: string) => Promise<void>;
  setSpaces: (spaces: space[]) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  spaces: [],

  getSpaces: async (start: number, end: number, time: string) => {
    const response: any = await getAllSpaces(start, end, time);
    const newData = response ? response : [];
    console.log(newData, time);
    set((state) => ({
      spaces: [...state.spaces, ...newData],
    }));
  },

  setSpaces: (spaces: space[]) => {
    set({ spaces: spaces });
  },
}));

export default useStore;

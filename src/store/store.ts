import { getAllSpaces } from "@/server/lib/getSpaces";
import { space } from "@/types/type";
import { create } from "zustand";
import { produce } from "immer";

type StoreValues = {
  spaces: space[] | undefined;
  getSpaces: (start: number, end: number, time: string) => Promise<void>;
  setSpaces: (spaces: space[]) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  spaces: undefined,

  getSpaces: async (start: number, end: number, time: string) => {
    const response = await getAllSpaces(start, end, time);

    set((state) =>
      produce(state, (draftState) => {
        const newData = response ? response : [];

        // fix newData === draftState.spaces important

        //@ts-ignore
        draftState.spaces =
          state.spaces && newData === draftState.spaces
            ? //@ts-ignore
              state.spaces.concat(newData)
            : newData;
      })
    );
  },

  setSpaces: (spaces: space[]) => {
    set({ spaces: spaces });
  },
}));

export default useStore;

import { Session } from "next-auth";
import { create } from "zustand";

interface userSession extends Session {
  id: string;
}

type StoreValues = {
  session: userSession;
  setSession: (session: userSession) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  session: {
    id: "",
    expires: "",
  },

  setSession: (session: userSession) => {
    set({
      session: session,
    });
  },
}));

export default useStore;

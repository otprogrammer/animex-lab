import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UsePlayerStoreProps = {
  isAutoNext: boolean;
  isAutoPlay: boolean;
  isAutoSkip: boolean;
  enableAutoNext: () => void;
  disableAutoNext: () => void;
  enableAutoPlay: () => void;
  disableAutoPlay: () => void;
  enableAutoSkip: () => void;
  disableAutoSkip: () => void;
};

export const usePlayerStore = create<UsePlayerStoreProps>(
  persist(
    (set) => ({
      isAutoNext: false,
      isAutoPlay: false,
      isAutoSkip: false,
      enableAutoNext: () => {
        set(() => ({ isAutoNext: true }));
      },
      disableAutoNext: () => {
        set(() => ({ isAutoNext: false }));
      },
      enableAutoPlay: () => {
        set(() => ({ isAutoPlay: true }));
      },
      disableAutoPlay: () => {
        set(() => ({ isAutoPlay: false }));
      },
      enableAutoSkip: () => {
        set(() => ({ isAutoSkip: true }));
      },
      disableAutoSkip: () => {
        set(() => ({ isAutoSkip: false }));
      },
    }),
    {
      name: "player-storage", // name of the item in the storage (must be unique)
      //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  ),
  {}
  
);

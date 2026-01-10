import { create } from "zustand";

interface IPopup {
  isOpen: boolean;
  openWithTimeout: () => void;
}

export const usePopupStore = create<IPopup>((set) => ({
  isOpen: false,
  openWithTimeout: (duration = 2000) => {
    set({ isOpen: true });
    setTimeout(() => {
      set({ isOpen: false });
    }, duration);
  },
}));

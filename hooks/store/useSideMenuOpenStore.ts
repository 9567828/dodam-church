import { create } from "zustand";

interface SideMenuState {
  isOpen: boolean;
  toggleSideMenu: () => void;
}

export const useSideMenuOpenStore = create<SideMenuState>((set) => ({
  isOpen: true,
  toggleSideMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

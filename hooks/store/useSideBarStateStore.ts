import { create } from "zustand";

interface SideBarState {
  isClose: boolean;
  toggleSideBar: () => void;
}

export const useSideBarStateStore = create<SideBarState>((set) => ({
  isClose: false,
  toggleSideBar: () => set((state) => ({ isClose: !state.isClose })),
}));

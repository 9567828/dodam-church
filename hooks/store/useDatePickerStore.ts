import { filterDateType } from "@/utils/propType";
import { tablesName } from "@/utils/supabase/sql";
import { create } from "zustand";

const INITIAL_DATE: filterDateType = { startDate: null, endDate: null };

interface ISelectDates {
  draftRange: filterDateType;
  applyRange: filterDateType;
  setDraftRange: (range: filterDateType) => void;
  applyDate: () => void;
  resetDraft: () => void;
  resetAll: () => void;
}

export const createDatePickerStore = () =>
  create<ISelectDates>((set, get) => ({
    draftRange: INITIAL_DATE,
    applyRange: INITIAL_DATE,
    setDraftRange: (range) => set({ draftRange: range }),
    applyDate: () => {
      const { draftRange } = get();
      set({ applyRange: draftRange });
    },

    resetDraft: () => set({ draftRange: INITIAL_DATE }),
    resetAll: () =>
      set({
        draftRange: INITIAL_DATE,
        applyRange: INITIAL_DATE,
      }),
  }));

export const useAlbumDateFilter = createDatePickerStore();

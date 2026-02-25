import { create } from "zustand";

export type ToastType = "success" | "fetching" | "error" | "info";

export interface IToast {
  id: string;
  type: ToastType;
  message: string;
}

interface IToastState {
  toasts: IToast[];
  success: (msg: string) => void;
  fetching: (msg: string) => string;
  info: (msg: string) => void;
  error: (msg: string) => void;
  remove: (id: string) => void;
}

const DURATION = {
  success: 2000,
  fetching: 300,
  error: 3500,
  info: 1500,
};

export const useToastStore = create<IToastState>((set) => {
  const setToast = (type: ToastType, message: string, duration?: number) => {
    const id = crypto.randomUUID();

    set((state) => ({
      toasts: [...state.toasts, { id, type, message }],
    }));

    if (duration) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }));
      }, duration);
    }

    return id;
  };

  return {
    toasts: [],

    success: (message: string) => setToast("success", message, DURATION.success),

    error: (message: string) => setToast("error", message, DURATION.error),

    info: (message: string) => setToast("info", message, DURATION.info),

    fetching: (message: string) => setToast("fetching", message),

    remove: (id: string) =>
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      })),
  };
});

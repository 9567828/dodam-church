import { useMutation } from "@tanstack/react-query";

export const useAddLoginUser = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      if (!id) throw new Error("id is required");
    },
  });
};

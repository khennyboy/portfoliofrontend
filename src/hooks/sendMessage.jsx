import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

export default function useSendMessage(options = {}) {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      api.post("/api/message", data).then((res) => res.data),
    ...options,
  });

  return { sendMessage: mutate, isPending };
}

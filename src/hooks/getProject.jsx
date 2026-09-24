import { useSuspenseQuery } from "@tanstack/react-query";
import api from "../utils/api";

export default function useGetProjects() {
  const { data } = useSuspenseQuery({
    queryKey: ["projects"],
    queryFn: () => api.get("/api/projects").then((res) => res.data),
  });
  return {data};
}
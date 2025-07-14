import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  url: string;
  key: string;
  enabled?: boolean;
}

function useFetch({ key, url, enabled = true }: IProps) {
  return useQuery({
    queryKey: [key],
    queryFn: () => api.get(url).then((res) => res.data),
    enabled,
  });
}

export default useFetch;

import { StaticPagesApi } from "@/api/static";
import useSWR from "swr";


export default function useSettings() {
  const { data, isLoading } = useSWR("/api/settings", () => StaticPagesApi.getSettings());

  return {
    settings: (name = null) => data ? data.filter((setting) => setting?.name == name)[0]?.value : '',
    isLoading,
  };
}

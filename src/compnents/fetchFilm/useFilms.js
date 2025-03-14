import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getFilm } from "../../api/filmApi";

export function useFilms() {
  const searchQueries = useSelector((state) => state.search.search);

  return useQuery({
    queryKey: ["films", searchQueries],
    queryFn: () => getFilm(searchQueries),
    refetchInterval: 100000, // Refetch every 100 seconds
  });
}

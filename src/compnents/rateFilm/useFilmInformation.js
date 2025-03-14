import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getOneFilm } from "../../api/filmApi";

export default function useFilms() {
  const imdbId = useSelector((state) => state.search.imdbId);

  return useQuery({
    queryKey: ["searchFilm", imdbId],
    queryFn: () => getOneFilm(imdbId),
    refetchInterval: 100000, // Refetch every 100 seconds
  });
}

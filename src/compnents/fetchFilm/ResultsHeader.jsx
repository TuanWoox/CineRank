import { useFilms } from "./useFilms";

function ResultsHeader() {
  const { data } = useFilms();
  return (
    <span className="text-gray-700 font-medium">🔹 {data?.length} results</span>
  );
}

export default ResultsHeader;

import FilmItem from "./FilmItem";
import { useFilms } from "./useFilms";

function FilmPanel() {
  const { data: searchQueries } = useFilms(); // Use custom hook

  return (
    <div
      className="bg-amber-50 flex-1 border-3 border-cyan-500 shadow-md flex flex-col items-center p-4 gap-2 m-3 rounded-2xl overscroll-auto overflow-y-auto max-h-[calc(100vh-100px)] 
        scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-amber-100"
    >
      <p className="text-lg font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-200 dark:bg-cyan-800 px-4 py-2 rounded-lg shadow">
        🎬 FETCHING FILM FROM OMDB
      </p>

      {searchQueries?.map((film) => (
        <FilmItem key={film.imdbID} movie={film} />
      ))}
    </div>
  );
}

export default FilmPanel;

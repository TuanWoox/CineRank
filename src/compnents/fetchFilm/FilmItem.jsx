import { useDispatch } from "react-redux";
import { setImdbID } from "./searchSlice";

function FilmItem({ movie }) {
  const dispatch = useDispatch();

  return (
    <div
      key={movie.imdbID}
      className="border rounded-xl p-4 shadow-md flex items-center gap-4 w-full bg-white hover:shadow-xl transition-shadow duration-300"
      onClick={() => {
        dispatch(setImdbID(movie.imdbID));
      }}
    >
      <img
        src={movie.Poster === "N/A" ? "/defaultImage.jpg" : movie.Poster}
        alt={movie.Title}
        className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800">{movie.Title}</h2>
        <p className="text-gray-500 text-sm">📅 {movie.Year}</p>
        <p className="text-blue-600 text-sm font-medium">🎬 {movie.Type}</p>
      </div>
    </div>
  );
}

export default FilmItem;

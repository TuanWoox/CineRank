import { useDispatch } from "react-redux";
import { setImdbID } from "../fetchFilm/searchSlice";

function RateFilmItem({ ratedFilm }) {
  const dispatch = useDispatch();

  return (
    <li
      className="flex items-center gap-4 p-3 bg-white shadow-md rounded-lg border border-gray-200"
      onClick={() => {
        dispatch(setImdbID(ratedFilm.imdbID));
      }}
    >
      {/* Poster */}
      <img
        src={ratedFilm.Poster}
        alt={ratedFilm.Title}
        className="w-16 h-24 object-cover rounded-md border border-gray-300"
      />

      {/* Film Info */}
      <div className="flex flex-col flex-grow">
        <p className="text-lg font-semibold text-gray-800">{ratedFilm.Title}</p>
        <p className="text-sm text-gray-600">
          {ratedFilm.Year} • {ratedFilm.Genre}
        </p>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: ratedFilm.yourRatingScore }, (_, i) => (
            <span key={i} className="text-lg">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* User Rating with Stars */}
    </li>
  );
}

export default RateFilmItem;

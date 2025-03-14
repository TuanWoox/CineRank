import { useDispatch, useSelector } from "react-redux";
import { closeOneFilm } from "../fetchFilm/searchSlice";
import StarRating from "../../ui/StarRating";
import { useState } from "react";
import { addRateFilm, findAFilmBasedOnId } from "./rateSlice";
function FilmInformation({ film }) {
  const dispatch = useDispatch();
  const [starRating, setStarRating] = useState(0);
  const existingRatingScore = useSelector(findAFilmBasedOnId(film.imdbID));
  function handleSubmitRating() {
    if (!starRating) return;
    const filmStore = {
      ...film,
      yourRatingScore: starRating,
    };
    dispatch(addRateFilm(filmStore));
    dispatch(closeOneFilm());
  }
  return (
    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto border border-gray-200">
      {/* Close Button */}
      <button
        onClick={() => {
          dispatch(closeOneFilm());
        }}
        className="absolute top-4 right-4 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        ✖
      </button>

      {/* Movie Title */}
      <p className="text-3xl font-bold text-center text-cyan-700 mb-2">
        {film.Title}
      </p>
      <p className="text-sm text-gray-500 italic">
        ({film.Year}) - {film.Genre}
      </p>

      {/* Movie Poster */}
      <div className="flex justify-center my-4">
        <img
          src={film.Poster}
          alt={`${film.Title} Poster`}
          className="border-4 border-cyan-500 rounded-xl shadow-lg h-[27rem] w-[20rem] object-cover"
        />
      </div>

      {/* Director & Writer */}
      <p className="text-lg font-semibold text-gray-800">
        Directed by: <span className="text-cyan-600">{film.Director}</span>
      </p>
      <p className="text-sm text-gray-600">
        Written by: <span className="font-medium">{film.Writer}</span>
      </p>

      {/* Actors */}
      <p className="text-lg mt-2 font-semibold text-gray-800">Starring:</p>
      <p className="text-sm text-gray-700 text-center px-4">{film.Actors}</p>

      {/* Ratings & Box Office */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <p className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
          IMDb: ⭐ {film.imdbRating}/10 ({film.imdbVotes} votes)
        </p>
        <p className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          Metascore: {film.Metascore}/100
        </p>
      </div>

      {/* Box Office */}
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-semibold text-gray-900">Box Office:</span>{" "}
        {film.BoxOffice}
      </p>

      {/* Awards */}
      <p className="mt-2 text-sm text-yellow-600 font-medium">
        🏆 {film.Awards}
      </p>

      {/* Plot */}
      <p className="mt-4 text-gray-700 text-center px-6 leading-relaxed">
        <span className="font-semibold text-cyan-600">Plot:</span> {film.Plot}
      </p>

      {/* Additional Info */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
        <p className="bg-gray-200 px-3 py-1 rounded-full">
          Rated: {film.Rated}
        </p>
        <p className="bg-gray-200 px-3 py-1 rounded-full">
          Runtime: {film.Runtime}
        </p>
        <p className="bg-gray-200 px-3 py-1 rounded-full">
          Language: {film.Language}
        </p>
        <p className="bg-gray-200 px-3 py-1 rounded-full">
          Country: {film.Country}
        </p>
      </div>
      {existingRatingScore ? (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            ⭐ Your Rating: {existingRatingScore}
          </p>
          <div className="flex justify-center gap-1 text-yellow-500">
            {Array.from({ length: existingRatingScore }, (_, i) => (
              <span key={i} className="text-2xl">
                ★
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            ⭐ Give your mark
          </p>
          <StarRating onRate={setStarRating} />
        </div>
      )}

      {starRating > 0 && (
        <div className="mt-2 text-center">
          <button
            className="px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition"
            onClick={handleSubmitRating}
          >
            Submit Rating
          </button>
        </div>
      )}
    </div>
  );
}

export default FilmInformation;

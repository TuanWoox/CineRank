import { useSelector } from "react-redux";
import RateFilmItem from "./RateFilmItem";

function RateFilmList() {
  const ratedFilms = useSelector((state) => state.rate.ratedFilm);
  return (
    <div className="w-full">
      <ul>
        {ratedFilms?.map((ratedFilm) => (
          <RateFilmItem ratedFilm={ratedFilm} key={ratedFilm.imdbID} />
        ))}
      </ul>
    </div>
  );
}

export default RateFilmList;

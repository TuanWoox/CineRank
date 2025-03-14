import FilmPanel from "../compnents/fetchFilm/FilmPanel";
import RateFilmPanel from "../compnents/rateFilm/RateFilmPanel";
function Body() {
  return (
    <div className="grow bg-amber-50 flex flex-row">
      <FilmPanel />
      <RateFilmPanel />
    </div>
  );
}

export default Body;

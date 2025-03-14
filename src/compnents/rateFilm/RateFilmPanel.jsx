import FilmInformation from "./FilmInformation.jsx";
import GeneralInformation from "./GeneralInformation";
import useFilmInformation from "./useFilmInformation.js";
import Spinner from "../../ui/Spinner.jsx";
import RateFilmList from "./RateFilmList.jsx";
function FilmPanel() {
  const { data: film, isLoading } = useFilmInformation();

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-amber-50 flex-1 border-3 border-cyan-500 shadow-md flex flex-col items-center p-4 gap-2 m-3 rounded-2xl overscroll-auto overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-amber-100">
      {!film ? (
        <>
          <p className="text-lg font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-200 dark:bg-cyan-800 px-4 py-2 rounded-lg shadow">
            🎬 YOUR RATE FILM LIST
          </p>
          <GeneralInformation />
          <RateFilmList />
        </>
      ) : (
        <>
          <FilmInformation film={film} />
        </> // This renders nothing if data exists
      )}
    </div>
  );
}

export default FilmPanel;

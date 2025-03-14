import { useSelector } from "react-redux";
import {
  selectAverageIMDBRating,
  selectAverageUserRating,
  selectTotalRuntime,
} from "./rateSlice";

function GeneralInformation() {
  const totalRuntime = useSelector(selectTotalRuntime);
  const averageImdb = useSelector(selectAverageIMDBRating);
  const averageUser = useSelector(selectAverageUserRating);

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-50 border border-cyan-300 shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto text-gray-800">
      <h2 className="text-2xl font-bold text-cyan-700 text-center mb-4">
        🎥 Film Statistics
      </h2>
      <div className="space-y-3 text-lg">
        <p className="flex items-center gap-2">
          ⏳ <span className="font-semibold">Total Runtime:</span>{" "}
          {totalRuntime} mins
        </p>
        <p className="flex items-center gap-2">
          🎞️ <span className="font-semibold">Average IMDb Rating:</span>{" "}
          {averageImdb} ⭐
        </p>
        <p className="flex items-center gap-2">
          🎬 <span className="font-semibold">Your Average Rating:</span>{" "}
          {averageUser} 🌟
        </p>
      </div>
    </div>
  );
}

export default GeneralInformation;

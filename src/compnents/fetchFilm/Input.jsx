import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFilms } from "./useFilms"; // Import custom hook
import Spinner from "../../ui/Spinner";
import { setSearch as setSearchAction } from "./searchSlice"; // Import Redux action
function Input() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useFilms(); // Use custom hook

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearchAction(search)); // Dispatch the search term to Redux
  }

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        className="bg-white rounded-lg p-2 w-[180px] focus:w-[250px] outline-none transition-all duration-300 shadow-sm focus:shadow-md"
        placeholder="🔍 Search your cinema..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Input;

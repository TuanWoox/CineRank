import Input from "../compnents/fetchFilm/Input";
import Logo from "../compnents/fetchFilm/Logo";
import ResultsHeader from "../compnents/fetchFilm/ResultsHeader";

function Header() {
  return (
    <div className="w-full bg-amber-100 shadow-md flex items-center justify-between h-14 p-6 rounded-t-lg">
      <Logo />
      <Input />
      <ResultsHeader />
    </div>
  );
}

export default Header;

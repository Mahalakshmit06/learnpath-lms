import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-4 text-slate-400" />

      <input
        type="text"
        placeholder="Search courses..."
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-sky-500"
      />
    </div>
  );
};

export default SearchBar;
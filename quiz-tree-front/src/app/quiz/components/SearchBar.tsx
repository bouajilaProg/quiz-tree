import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border-b border-gray-400 max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow  py-2 outline-none bg-transparent"
      />
      <button className="text-gray-700 hover:text-black px-3">
        <FaSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;

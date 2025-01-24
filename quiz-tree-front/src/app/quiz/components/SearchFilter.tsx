const SearchFilter: React.FC = () => {
  return (
    <details className=" max-w-md">
      <summary className="cursor-pointer font-semibold">Filters</summary>
      <div className="mt-2 space-y-2">
        <label className="block">
          Difficulty:
          <select className="block w-full p-2 border border-gray-300 rounded-md">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min solved avg"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Max solved avg"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </details>
  );
};

export default SearchFilter;

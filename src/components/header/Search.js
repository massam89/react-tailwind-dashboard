import { searchIcon } from "../../assets/icons";

const Search = (props) => {
  return (
    <form className={props.className}>
      <input
        className="outline-1 outline-gray-400 w-full mt-1 py-1 bg-gray-200 border-solid border-gray-300 border-2 pl-4 rounded-md"
        type="text"
        placeholder="Search"
      />
      <button
        className="rounded-md p-1 inline-block absolute right-1 top-2 bg-blue-500 text-white"
        type="submit"
      >
        {searchIcon("w-5 w-5")}
      </button>
    </form>
  );
};

export default Search;

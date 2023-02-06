import { type KeyboardEvent, type MouseEvent, useState } from "react";
import { useStore } from "../../utils/store";

const Search = () => {
  const [inputQuery, setInputQuery] = useState("");
  const { setQuery } = useStore();

  function handleSearch(e: KeyboardEvent<HTMLInputElement>) {
    // e.preventDefault();
    if (e.key === "Enter") {
      setQuery(inputQuery);
    }
  }

  function handleSearchButton(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
    e.preventDefault();
    setQuery(inputQuery);
  }

  function handleClear(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
    e.preventDefault();
    setQuery("");
    setInputQuery("");
  }

  return (
    <div className="bg-red500 relative p-2 gap-x-4">
      <input type="text"
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
        className="peer peer placeholder:text-transparent w-[550px] rounded-2xl bg-stone-300 dark:bg-stone-900 border-2 border-orange-500 outline-none caret-orange-500 dark:caret-blue-500  dark:border-blue-500 p-4 text-stone-900 dark:text-stone-300 font-bold"
      />
      <label htmlFor="search"
        className={`pointer-events-none absolute top-1/2 left-0 ml-6 origin-left -translate-y-1/2 transform peer-focus:bg-stone-300 dark:peer-focus:bg-stone-900 px-1 text-sm transition-all duration-350 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[6px] ${inputQuery.length > 0 ? "top-[6px] ml-5 bg-stone-300 dark:bg-stone-900" : "bg-transparent"} peer-focus:ml-5 font-bold text-stone-900 dark:text-stone-300 peer-focus:text-sm peer-focus:text-gray-800 dark:peer-focus:text-stone-300`}>
        Search
      </label>
      {/* <HiSearch /> */}
      <button
        onClick={(e) => handleSearchButton(e)}
        className="p-4 bg-orange-500 hover:bg-orange-700 dark:hover:bg-blue-700 font-bold ml-2 text-stone-900 dark:text-stone-300 dark:bg-blue-500 rounded-xl">
        Search!
      </button>
      <button
        onClick={(e) => handleClear(e)}
        className="invisible md:visible p-4 bg-orange-500 font-bold ml-2 hover:bg-orange-700 dark:hover:bg-blue-700 text-stone-900 dark:text-stone-300 dark:bg-blue-500 rounded-xl">
        Clear
      </button>
    </div>
  )
}

export default Search;
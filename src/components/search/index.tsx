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

  function handleSearchButton(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void {
    e.preventDefault();
    setQuery(inputQuery);
  }

  function handleClear(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void {
    e.preventDefault();
    setQuery("");
    setInputQuery("");
  }

  return (
    <div className="relative mt-8 flex shrink justify-between gap-x-4 p-2">
      <input
        type="text"
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
        className="peer peer flex-grow rounded-2xl border-2 border-orange-500 bg-stone-300 p-4 font-bold text-stone-900 caret-orange-500 outline-none  placeholder:text-transparent dark:border-blue-500 dark:bg-stone-900 dark:text-stone-300 dark:caret-blue-500"
      />
      <label
        htmlFor="search"
        className={`duration-350 pointer-events-none absolute top-1/2 left-0 ml-6 origin-left -translate-y-1/2 transform px-1 text-sm transition-all ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[6px] peer-focus:bg-stone-300 dark:peer-focus:bg-stone-900 ${
          inputQuery.length > 0
            ? "top-[6px] ml-5 bg-stone-300 dark:bg-stone-900"
            : "bg-transparent"
        } font-bold text-stone-900 peer-focus:ml-5 peer-focus:text-sm peer-focus:text-gray-800 dark:text-stone-300 dark:peer-focus:text-stone-300`}
      >
        Search
      </label>
      {/* <HiSearch /> */}
      <button
        onClick={(e) => handleSearchButton(e)}
        className="mr-1 ml-1 rounded-xl bg-orange-500 p-4 font-bold text-stone-900 hover:bg-orange-700 dark:bg-blue-500 dark:text-stone-300 dark:hover:bg-blue-700"
      >
        Search!
      </button>
      <button
        onClick={(e) => handleClear(e)}
        className="ml-1 hidden md:block rounded-xl bg-orange-500 p-4 font-bold text-stone-900 hover:bg-orange-700 dark:bg-blue-500 dark:text-stone-300 dark:hover:bg-blue-700"
      >
        Clear
      </button>
    </div>
  );
};

export default Search;

import { Switch } from "@headlessui/react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import useDarkMode from "../../utils/useDarkMode";

// @typescript-eslint\unsafe-assignment
const ThemeSwitch = () => {
  // const [enabled, setEnabled] = useState(false);
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="flex items-center gap-x-2">
      <Switch
        checked={darkTheme}
        onChange={handleMode}
        className={`${darkTheme ? 'bg-blue-900' : 'bg-orange-700'}
          
          relative inline-flex h-[20px] w-[45px] shrink-0 items-center cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span aria-hidden="true"
          className={`${darkTheme ? 'translate-x-[26px]' : 'translate-x-[1px]'} p-1 pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-stone-300 dark:bg-stone-900 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>

      {/* <div className="bg-red-500"> */}
      <div className="w-[35px]  translate-y-[-10%] h-[40px] flex items-center justify-center bg-transparent overflow-hidden relative">
        <div className={`absolute flex flex-col gap-y-1 ${darkTheme ? "translate-y-[-28%] transition duration-200" : "translate-y-[28%] transition duration-200"}`}>
          <BsSun className="text-3xl text-orange-500" />
          <BsMoonStars className="text-3xl text-blue-500" />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default ThemeSwitch;
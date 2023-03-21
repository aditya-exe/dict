import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../../utils/store";

const fonts = [
  "Sans Serif",
  "Serif",
  "Mono"
]

const FontSelector = () => {
  const { setFont } = useStore();
  const [fontLocal, setFontLocal] = useState(fonts[0]);

  function handleChangeFont(e: string) {
    setFontLocal(e);
    setFont(e);
  }

  return (
    <div className={`w-[130px] border-2 dark:border-blue-500 border-orange-500 rounded`}>
      <Listbox value={fontLocal} onChange={handleChangeFont}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded bg-stone-300 dark:bg-stone-900 dark:text-white py-2 pl-3 pr-5 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{fontLocal}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
               {/*<Image src={"/icon-arrow-down.svg"} alt="arrow-down" height={15} width={15} /> */}
              <MdKeyboardArrowDown className="text-2xl text-orange-500 dark:text-blue-500" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-stone-400 dark:bg-stone-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {fonts.map((font, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none text-left py-2 pl-4 pr-4 ${active ? 'bg-orange-100 dark:bg-blue-100 text-black dark:text-white' : 'text-gray-900 dark:text-white'}`
                  }
                  value={font}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium dark:text-blue-700 text-orange-700' : 'font-normal'}`}>
                        {font}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default FontSelector;
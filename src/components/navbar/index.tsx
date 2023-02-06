import Image from "next/image";
import FontSelector from "../font-selector";
import ThemeSwitch from "../theme-switch";

const Navbar = () => {
  return (
    <div className="min-h-[130px] flex justify-between items-center">
      <div className="p-5 mr-64 md:mr-2 cursor-pointer rounded-full">
        <Image src={"/logo.svg"} alt="logo" height={35} width={35} />
      </div>

      <div className="p-5 z-50 flex flex-row items-center md:gap-x-3">
        <FontSelector />
        <ThemeSwitch />
      </div>

    </div>
  )
};

export default Navbar;
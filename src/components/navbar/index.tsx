import Image from "next/image";
import FontSelector from "../font-selector";
import ThemeSwitch from "../theme-switch";

const Navbar = () => {
  return (
    <div className="mn-h-[130px] mt-7 flex justify-between items-center">
      <div className="ml-7 cursor-pointer rounded-full">
        <Image src={"/logo.svg"} alt="logo" height={35} width={35} />
      </div>

      <div className="z-50 flex flex-row items-center gap-x-3">
        <FontSelector />
        <ThemeSwitch />
      </div>

    </div>
  )
};

export default Navbar;
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="font-normal flex justify-between mb-[24px]">
        <div className="text-lg">
          <a href="/">Hritik khadka</a>
        </div>
        <div className="flex space-x-2">
          <a href="/" className="text-lg">
            About
          </a>

          <a href="/" className="text-lg">
            Work
          </a>

          <div className=" bg-[#e6e6e6] p-[6px] rounded-[4px]">
            <MdOutlineLightMode className="text-2xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

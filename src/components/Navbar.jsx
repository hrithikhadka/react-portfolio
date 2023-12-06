import { Link as ScrollLink } from "react-scroll";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ onThemeSwitch, theme }) => {
  const isDarkMode = theme === "dark";
  return (
    <>
      <nav className="font-normal flex justify-between mb-[24px]">
        <div className="sm:text-lg">
          <a href="/">Hritik Khadka</a>
        </div>
        <div className="flex space-x-2">
          <ScrollLink to="about" smooth={true} duration={400}>
            <div className="sm:text-lg cursor-pointer">About</div>
          </ScrollLink>

          <ScrollLink to="work" smooth={true} duration={500}>
            <div className="sm:text-lg cursor-pointer">Work</div>
          </ScrollLink>

          <div
            className={`p-[6px] rounded-[4px] ${
              isDarkMode ? "" : "bg-[#e6e6e6]"
            }`}
            onClick={onThemeSwitch}
          >
            {isDarkMode ? (
              <FaMoon className="sm:text-2xl cursor-pointer" />
            ) : (
              <MdOutlineLightMode className="sm:text-2xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

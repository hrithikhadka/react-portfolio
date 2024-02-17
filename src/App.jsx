import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import SelectedProjects from "./components/SelectedProjects";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const userPreferredTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(userPreferredTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store the theme preference in localStorage
  };

  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        theme === "dark" ? "dark" : ""
      } bg-white dark:bg-black`}
    >
      <div
        className={`w-full max-w-[1024px] px-8 py-3 font-unica ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <Navbar onThemeSwitch={handleThemeSwitch} theme={theme} />
        <Element name="about">
          <Profile theme={theme} />
        </Element>
        <Element name="work">
          <SelectedProjects theme={theme} />
        </Element>
        <Contact />
        <Analytics />
      </div>
    </div>
  );
}

export default App;

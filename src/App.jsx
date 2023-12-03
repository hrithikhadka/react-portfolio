import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const userPreferredTheme = "light";
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
        <Profile theme={theme} />
        <SelectedProjects theme={theme} />
        <Contact />
      </div>
    </div>
  );
}

export default App;

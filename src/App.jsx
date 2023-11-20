import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <div className="w-full max-w-[1024px] px-8 py-3 font-unica">
          <Navbar />
          <Profile />
          <SelectedProjects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

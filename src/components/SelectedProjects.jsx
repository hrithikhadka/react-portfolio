import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import projects from "../projectData";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative sm:mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div className="bg-white p-7 rounded-md">
          <img src={image} alt={title} className="w-full h-auto object-cover" />

          <h1 className="font-bold md:text-xl mb-2 mt-2">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center gap-1 my-2.5 cursor-pointer">
            <p>Preview</p>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedProjects = () => {
  return (
    <div>
      <h2 className="sm:text-[24px] max-sm:text-[19px] my-[20px]">
        Selected Work
      </h2>
      <figure>
        <img
          src="/images/mernblog.PNG"
          alt="Project Preview"
          className="rounded-md"
        />
        <div className="flex items-center gap-1 mt-3">
          <h1 className="sm:text-xl cursor-pointer">Blog Application</h1>
          <BsArrowUpRight className="cursor-pointer text-xl" />
        </div>
      </figure>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-10 mt-5">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      <div className="flex items-center">
        <h2 className="sm:text-[24px] max-sm:text-[19px] my-[20px]">
          View all Work
        </h2>
        <BsArrowRight className="text-2xl mt-1 ml-2" />
      </div>
    </div>
  );
};

export default SelectedProjects;

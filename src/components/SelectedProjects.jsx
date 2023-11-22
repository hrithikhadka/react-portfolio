import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import projects from "../projectData";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div className="bg-white p-7 rounded-md">
          <img src={image} alt={title} className="w-96 h-48 object-cover" />

          <h1 className="font-bold text-xl mb-2 mt-2">{title}</h1>
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
      <h2 className="text-[24px] my-[20px]">Selected Work</h2>
      <figure>
        <img src="/images/mernblog.PNG" alt="Project Preview" />
        <div className="flex items-center gap-1 mt-3">
          <h1 className="text-xl cursor-pointer">Blog Application</h1>
          <BsArrowUpRight className="cursor-pointer text-xl" />
        </div>
      </figure>

      <div className="grid grid-cols-2 gap-10 mt-[3rem]">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      <div className="flex items-center">
        <h2 className="text-[24px] my-[20px]">View all Work</h2>
        <BsArrowRight className="text-2xl mt-1 ml-2" />
      </div>
    </div>
  );
};

export default SelectedProjects;

import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const SelectedProjects = () => {
  return (
    <div>
      <h2 className="text-[24px] my-[20px]">Selected Work</h2>
      <figure>
        <img src="/images/mernblog.PNG" />
        <div className="flex items-center gap-1 mt-3">
          <h1 className="text-xl cursor-pointer">Blog Application</h1>
          <BsArrowUpRight className="cursor-pointer text-xl" />
        </div>
      </figure>
      <div className="grid grid-cols-2 gap-2 mt-[3rem]">
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <img src="/images/mini-hsl.PNG" />
            <h1 className="font-bold text-xl mb-2 mt-2">Mini HSL</h1>
            <p>
              A react based web application where users can see and filter
              busses arriving at a station.
            </p>
            <div className="flex items-center gap-1 my-3.5 cursor-pointer">
              <p>Preview</p>
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <img src="/images/hrithikhadka.PNG" />

            <h1 className="font-bold text-xl mb-2">Portfolio</h1>
            <p>
              My personal portoflio built using react and tailwind css
              demonstrating my projects and skills
            </p>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <p>Preview</p>
              <BsArrowUpRight />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="grid grid-cols-2 gap-2 mt-[3rem]">
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <img src="/images/nextjstodo.png" />

            <h1 className="font-bold text-xl mb-2 mt-2">NextDo</h1>
            <p>
              A todo application built with NextJS and MongoDB. A user can
              create, update and delete a todo.
            </p>
            <div className="flex items-center gap-1 my-7 cursor-pointer">
              <p>Preview</p>
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <img src="/images/fullstackopen.PNG" />

            <h1 className="font-bold text-xl mb-2">Full Stack Open</h1>
            <p>
              I am learning full stack development from this course. My
              submission for this course exercises will be uploaded here.
            </p>
            <div className="flex items-center gap-1 my-3 cursor-pointer">
              <p>Preview</p>
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/hrithikhadka?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-[24px] my-[20px] cursor-pointer"
          >
            View all Work
          </a>
          <BsArrowRight className="text-2xl mt-1 ml-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;

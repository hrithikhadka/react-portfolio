import { BsArrowRight } from "react-icons/bs";
const Profile = () => {
  return (
    <div className="flex justify-between items-center">
      <section className="mt-16">
        <h1 className="text-5xl font-bold tracking-[-.15rem] leading-[1.15] mb-10">
          Hey 👋 I'm Hritik, a frontend developer based in Helsinki. I have
          experience across web and mobile development. I'm currently learning
          full stack development.
        </h1>
        <p className="text-[1.3rem] leading-[1.6] flex items-center">
          <a
            href="https://drive.google.com/drive/folders/1G-5E4R6ONqFpSE-nNXOQzxeTUAKpq51V"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <BsArrowRight className="text-2xl mt-1 ml-2" />
        </p>
      </section>
    </div>
  );
};

export default Profile;

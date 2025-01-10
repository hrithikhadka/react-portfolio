const Profile = () => {
  return (
    <div className="flex justify-between items-center">
      <section className="sm:mt-9">
        <h1 className="sm:text-[2rem] md:text-[3rem] sm:font-bold sm:tracking-[-.15rem] sm:leading-[1.15] mb-10">
          Hey 👋 I'm Hritik, a frontend developer based in Helsinki. I have
          experience across web and mobile development. I'm currently learning
          full stack development.
        </h1>
        <p className="sm:text-[1.3rem] leading-[1.6] flex items-center max-sm:mt-[-1rem]">
          <a
            href="https://drive.google.com/drive/folders/1G-5E4R6ONqFpSE-nNXOQzxeTUAKpq51V"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span className="max-sm:text-xl">→</span>
          </a>
        </p>
      </section>
    </div>
  );
};

export default Profile;

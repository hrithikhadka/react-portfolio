const Contact = () => {
  return (
    <div className="mb-16">
      <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
      <h3 className="sm:text-[24px] max-sm:text-[19px] my-[9px]">
        Get in touch
      </h3>
      <p className="sm:text-xl max-sm:text-[15px]">
        You can find me on{" "}
        <span className="text-blue-500 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/hrithikhadka/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedln
          </a>
        </span>
        ,{" "}
        <span className="text-gray-400 cursor-pointer">
          <a
            href="https://github.com/hrithikhadka"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>{" "}
        or send an email to {""}
        <span className="text-pink-500">hrithikhadka00@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;

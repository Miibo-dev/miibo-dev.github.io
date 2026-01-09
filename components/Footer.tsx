import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full min-h-[100vh] flex flex-col relative pt-6" id="contact">
      {/* Section Divider */}
      <div className="flex justify-center mb-20 pt-20 relative z-10">
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div>
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center flex-grow justify-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for an <span className="text-purple">automation engineer</span> with digital twin expertise?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center font-sans">
          I&apos;m open to new opportunities and challenging projects.
        </p>
        <a href="mailto:bahrami98mohammad@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

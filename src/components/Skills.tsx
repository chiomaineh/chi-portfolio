import Html from "../assets/images/html-img.png";
import Css from "../assets/images/css-img.png";
import Git from "../assets/images/git-img.png";
import Javascript from "../assets/images/javascript-img.png";
import Typescript from "../assets/images/typescript-img.jpeg";
import ReactImg from "../assets/images/react-img.png";
import Tailwind from "../assets/images/tailwind-img.png";
import Vue from "../assets/images/vue-img.png";

function Skills() {
  return (
    <>
      <main
        data-aos="zoom-in-up"
        data-aos-delivery="15001"
        id="skills"
        className="h-fit py-10 flex flex-col items-center justify-center scroll-mt-24 font-semibold gap-6"
      >
        <h2 className="tech-stack font-bold tracking-widest text-xl lg:text-3xl lg:mt-0">
          My Tech Stack
        </h2>

        <p className="font-semibold">
          I currently work with the following technologies:{" "}
        </p>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div className="flex flex-col items-center gap-3">
            <img src={Html} alt="HTML" className="w-16 h-16" />
            <span>HTML</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Css} alt="CSS" className="w-16 h-16" />
            <span>CSS</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Javascript} alt="JavaScript" className="w-16 h-16" />
            <span>JavaScript</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Typescript} alt="TypeScript" className="w-16 h-16" />
            <span>TypeScript</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={ReactImg} alt="React" className="w-16 h-16" />
            <span>React JS</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Tailwind} alt="Tailwind CSS" className="w-16 h-16" />
            <span>Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Vue} alt="Vue" className="w-16 h-16" />
            <span>Vue JS </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={Git} alt="Git & GitHub" className="w-16 h-16" />
            <span>Git & GitHub</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skills;

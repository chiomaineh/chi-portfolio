import KBS from "../assets/images/kbs.png";
import sneakers from "../assets/images/sneakers.png";
import space from "../assets/images/space.png";
import advice from "../assets/images/advice.png";
import todo from "../assets/images/todo.png";

function Projects() {
  return (
    <>
      <main
        id="projects"
        className="h-fit py-10 flex flex-col items-center justify-center  scroll-mt-24 font-semibold gap-6"
      >
        <h2 className="tech-stack font-bold tracking-widest text-xl lg:text-3xl lg:mt-0">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-5">
          {/* Project 1 */}
          <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
            <img
              src={KBS}
              alt="Knowledge Based"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Knowledge Based</h3>

              <p className="text-sm text-slate-600">
                A web platform designed to organize and present structured
                knowledge in an intuitive way. Built with React JavaScript and TailwindCSS.
              </p>

              <a
                href="https://knowledge-based-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-purple-600 transition"
              >
                View Live
              </a>
              
            </div>
          </div>

          {/* Project 2 */}
          <div data-aos="zoom-in" data-aos-duration="1500"className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
            <img
              src={sneakers}
              alt="Sneakers E-commerce"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Sneakers E-commerce</h3>

              <p className="text-sm text-slate-600">
                A single-page e-commerce product page featuring add-to-cart
                functionality and responsive design. Built with React JavaScript and TailwindCSS.
              </p>

              <a
                href="https://sneakers-project-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-purple-600 transition"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div data-aos="zoom-in" data-aos-duration="2000" className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
            <img
              src={space}
              alt="Space X Website"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Space Tourism Website</h3>

              <p className="text-sm text-slate-600">
                A multi-page space tourism website with a modern UI and smooth
                navigation. Built with TypeScript and TailwindCSS.
              </p>

              <a
                href="https://space-tourism-project-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-purple-600 transition"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div data-aos="zoom-in" data-aos-duration="2500" className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
            <img
              src={todo}
              alt="To-do App"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">To-do Application</h3>

              <p className="text-sm text-slate-600">
                A simple and efficient task management app built with TypeScript and an external API to
                improve productivity. Also built using DaisyUI. 
              </p>

              <a
                href="https://tsx-todo-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-purple-600 transition"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div data-aos="zoom-in" data-aos-duration="3000" className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
            <img
              src={advice}
              alt="Advice Generator"
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Advice Generator</h3>

              <p className="text-sm text-slate-600">
                A fun app that generates random advice using an external API
                with a clean UI. Built with HTML, CSS and Vanilla Javascript.
              </p>

              <a
                href="https://advice-generator-self-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-purple-600 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;

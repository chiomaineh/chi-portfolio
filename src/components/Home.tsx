import Chioma from "../assets/images/chioma.jpeg";

function Home() {
  return (
    <>
      <main>
        <section id="home" className="mt-17 mx-10 py-10">
          <div className="flex flex-col gap-15 md:flex-row lg:gap-30 justify-center items-center text-center">
            <div className="mt-8">
              <img
                src={Chioma}
                alt="Chioma Ineh"
                className="w-68 h-72 rounded-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col gap-5 mt-5">
              <h3 className="font-semibold text-sm lg:text-lg">
                Hi there ! 👋 I’m Chioma 😊
              </h3>

              <p className="font-semibold text-left max-w-md text-sm lg:text-lg lg:max-w-lg">
                I'm a Frontend Developer passionate about building clean,
                responsive, and user-friendly web interfaces just like this one.
                I’m very passionate about creating user-friendly web experiences
                and continuously improving my skills through hands-on projects.
              </p>

              <p className="font-semibold text-left max-w-md text-sm lg:text-lg lg:max-w-lg">
                I enjoy building interfaces that don’t just look good, but feel
                intuitive and enjoyable to use, from smooth navigation to
                thoughtful little details that make users smile. I’m currently
                focused on growing as a full-stack engineer, constantly
                learning, experimenting, and improving my craft one project at a
                time. When I’m not coding, you’ll probably find me watching
                football and defending Arsenal like my life depends on it (yes,
                even during the tough seasons 😄).
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

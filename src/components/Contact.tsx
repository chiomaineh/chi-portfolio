import { useState } from "react";
import Github from "../assets/images/github-logo.png"

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpqqwarp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main
        id="contact"
        className="h-fit py-10 flex flex-col items-center mt-20 scroll-mt-24 font-semibold gap-6"
      >
        <h2 className="tech-stack font-bold tracking-widest text-xl lg:text-3xl lg:mt-0">
          Contact Me 📞
        </h2>

        <p className="work text-sm lg:text-lg font-">Let's get to work ! </p>

        <p className="px-6 max-w-md lg:max-w-xl">
          I'm actively looking for exciting frontend projects, internships, full
          time positions, and partnerships. Please get in touch if you have a
          question opportunity, or simply want to say hello.
        </p>

        <div
          data-aos="fade-in-up"
          data-aos-duration="1500"
          className="flex flex-col lg:flex-row gap-10 mt-5"
        >
          
          <div className="flex flex-col gap-4">
            <a
              href="mailto:chiomaineh3@gmail.com"
              className="text-purple-600 font-medium hover:underline"
            >
              <span className="text-black hover:no-underline">Email Me: </span>
              chiomaineh3@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/chioma-ineh-193431338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline"
            >
              <span className="text-black hover:no-underline">
                Reach out on LinkedIn:
              </span>
              LinkedIn
            </a>

            <a
              href="https://github.com/chiomaineh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium"
            >
              <span className="text-black hover:no-underline">
                You can also have a look at my GitHub here: 
              </span>
              <p className="flex items-center">
                   <img src={Github} alt="" className="w-10 h-6" />
                   <p>Github</p>
              </p>
          
            </a>

            {/* <a
              href="https://github.com/chiomaineh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline"
            >
              <span className="text-black hover:no-underline">
                Check out my GitHub:
              </span>
              GitHub
            </a> */}
          </div>
          {/* Right side */}
          <div data-aos="fade-in-up" data-aos-duration="1500">
            <p className="my-5 lg:my-0">
              Or...fill this form to send me a message ! 😊
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <button
                type="submit"
                className="bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition"
              >
                {isSubmitting ? "Sending" : "Send Message"}
              </button>

              {error && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {showModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg text-center">
                  <h2 className="text-xl font-bold">Message Sent 🎉</h2>
                  <p className="mt-2">
                    Thanks for reaching out to me ! I’ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;

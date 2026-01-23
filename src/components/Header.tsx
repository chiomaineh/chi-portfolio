import { useState } from "react";
import Hamburger from "../assets/images/hamburger-icon.svg";
import CloseIcon from "../assets/images/close-icon.svg";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact Me", path: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <section className="font-nunito absolute">
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg shadow-sm flex items-center justify-between px-6 py-5">
          <div>Chi</div>

          {/* Mobile Menu */}
          <div className="lg:hidden ml-auto">
            {!isOpen && (
              <button onClick={() => setIsOpen(true)} className="z-1000 flex gap-4"> MENU 
                <img src={Hamburger} alt="" className="w-fit h-fit" />
              </button>
            )}

            {/* sidebar */}
            <nav
              className={`fixed top-0 right-0 w-64 h-screen z-999 bg-linear-to-b from-purple-300 to-purple-300 p-6 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* close */}
              <button
                onClick={() => setIsOpen(false)}
                className="mb-6 flex justify-end"
              >
                <img src={CloseIcon} alt="Close" className="w-fit h-fit" />
              </button>

              {/* Menu */}
              <ul className="space-y-8 text-black">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-black hover:bg-purple-500 hover:text-white px-5 py-2 rounded-lg transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

                <button>
                  <a href="https://drive.google.com/file/d/1OQZwZ0RLqv4MQEEIOR11jqg1LK28UnVQ/view?usp=sharing" target="_blank">
                    View my CV 
                  </a>
                </button>
              </ul>
            </nav>
          </div>

          {/* Desktop */}
          <nav>
            <ul className="hidden lg:flex justify-center gap-x-8 cursor-pointer font-semibold text-base">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="hover:bg-purple-500 hover:text-white px-5 py-2 rounded-lg transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <button>
                <a href="https://drive.google.com/file/d/16Weq6qzMxScyFpFKkRZvaUUJ0cnKr0XC/view?usp=drive_link" target="_blank">
                  View my CV 
                </a>
              </button>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Header;

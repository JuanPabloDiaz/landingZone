import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import backgroundImg from "../assets/img/banner-background1440.png";
import heroImage from "../assets/img/1-hero535.png";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", section: "home" },
  { name: "About Us", section: "about" },
  { name: "Portfolio", section: "projects" },
  { name: "Expertise", section: "team" },
  { name: "Clients", section: "testimonials" },
  { name: "Services", section: "services" },
  { name: "Contact Us", section: "footer" },
];
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      name="home"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-end p-12 lg:px-20"
          aria-label="Global"
        >
          {/* Hamburger menu icon: */}
          <div className="flex lg:hidden ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Desktop Navigation: */}
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
            {navigation.map((item) => (
              <Link
                to={item.section}
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-white hover:underline hover:text-gray-400 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white  hover:text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.section}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-zinc-900 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-8xl py-32 sm:py-48 lg:py-56">
          <div>
            <div className="flex justify-around ">
              <div className="text-left max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  Software solution providers that help brands thrive and stand
                  out
                </h1>
                <p className="mt-12 text-lg leading-8 text-slate-300">
                  Revolutionize your customer experience with our AI chatbot,
                  offering natural language understanding, personalized
                  recommendations, and seamless purchasing. Our experts will
                  elevate your customer interactions.
                </p>
                <div className="mt-10 flex items-center justify-left gap-x-6">
                  <a
                    href="https://litslink.com/technologies"
                    className="mt-32 rounded-md bg-white hover:bg-[#92989f] px-3.5 py-2.5 text-sm font-semibold text-black hover:text-[#132577] shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
              <img
                className="h-auto w-auto max-w-lg object-cover hidden md:flex md:w-96 md:h-96"
                src={heroImage}
                alt="background image for hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

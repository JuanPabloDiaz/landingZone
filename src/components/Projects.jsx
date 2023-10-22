// alertSuccess: https://www.floatui.com/components/alerts & tutorial from https://www.youtube.com/watch?v=7L7MhxjI4PE
import { useContext } from "react";
import NotificationContext from "../context/NotificationContext";
import projectImg1 from "../assets/img/9-project295.png";
import projectImg2 from "../assets/img/10-project295.png";
import projectImg3 from "../assets/img/11-project295.png";
import projectImg4 from "../assets/img/12-project295.png";

// https://www.floatui.com/components/stats
export default () => {
  // Source code from alertSuccess: https://www.floatui.com/components/alerts
  const { notificationHandler } = useContext(NotificationContext);

  const alertSuccess = (
    <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="text-red-600 font-semibold">Error</span>
            <p className="text-red-600 mt-1">Sorry something wrong happened.</p>
          </div>
        </div>
        {/* <button className="self-start text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );

  function NotificacionHandler() {
    notificationHandler({ type: "success", message: alertSuccess });
  }
  // --- end ---

  const features = [
    {
      image: (
        <img src={projectImg1} className="rounded-lg" alt="phone project" />
      ),
    },
    {
      image: (
        <img src={projectImg2} className="rounded-lg" alt="dashboard project" />
      ),
    },
    {
      image: (
        <img src={projectImg3} className="rounded-lg" alt="banking project" />
      ),
    },
    {
      image: (
        <img
          src={projectImg4}
          className="rounded-lg"
          alt="white dashboard project"
        />
      ),
    },
  ];

  return (
    <section name="projects" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="hidden lg:block lg:max-w-xl">
          <div className="flex-none mt-6 md:mt-0 lg:mt-16">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-64 h-40 rounded-lg flex items-center justify-center hover:shadow-lg hover:border-gray-400 hover:scale-110 hover:duration-150">
                    {item.image}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h1>PROJECTS</h1>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our amazing project that has been completed
            </h3>
            <p className="mt-3 max-w-xl text-justify">
              "Our remarkable project leveraged cutting-edge AI chatbot
              technology to enhance customer experiences, delivering natural
              language understanding, personalized recommendations, and seamless
              purchasing. It's a testament to our commitment to innovation and
              elevating customer interactions."
            </p>
            <p className="mt-3 max-w-xl text-justify">
              Our groundbreaking project marked a significant milestone in the
              realm of customer experience enhancement.
            </p>
          </div>
          <div>
            <button
              onClick={NotificacionHandler}
              className="px-7 py-4 text-white duration-150 bg-[#132577] rounded-lg hover:bg-[#13257798] active:shadow-lg mt-12 md:mt-20"
            >
              Recent Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

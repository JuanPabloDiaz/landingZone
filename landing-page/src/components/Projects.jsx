// https://www.floatui.com/components/stats

export default () => {
  const features = [
    {
      image: (
        <img
          src={require("../assets/img/9-project295.png")}
          className="rounded-lg"
          alt=""
        />
      ),
    },
    {
      image: (
        <img
          src={require("../assets/img/10-project295.png")}
          className="rounded-lg"
          alt=""
        />
      ),
    },
    {
      image: (
        <img
          src={require("../assets/img/11-project295.png")}
          className="rounded-lg"
          alt=""
        />
      ),
    },
    {
      image: (
        <img
          src={require("../assets/img/12-project295.png")}
          className="rounded-lg"
          alt=""
        />
      ),
    },
  ];

  return (
    <section name="projects" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
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
            <button className="px-7 py-4 text-white duration-150 bg-[#132577] rounded-lg hover:bg-[#13257798] active:shadow-lg mt-32">
              Recent Projects
            </button>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

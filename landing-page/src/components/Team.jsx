// source code: https://www.floatui.com/components/team-sections

export default () => {
  const team = [
    {
      avatar: require("../assets/img/13-team380.png"),
      name: "Daniel martin",
      title: "Code Expert",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Human Resources",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Vicky tanson",
      title: "Product Manager",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "javascript:void(0)",
    },
  ];

  return (
    <section name="team" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-auto lg:mx-0 text-center">
          <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
            TEAM{" "}
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
            Our certified experts
          </p>
        </div>
        <div className="mt-12 p-1 rounded-xl ">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 h-4/5">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="shadow-md w-full p-2 rounded-xl bg-[#ffc107]/80"
              >
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="">{item.title}</p>
                  <div
                    className="mt-3 flex gap-4 text-[#132577] justify-center pt-10"
                    border-10
                  >
                    <a href={item.twitter} className="">
                      <img
                        src={require("../assets/img/17-twitter50.png")}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                    <a href={item.facebook} className="">
                      <img
                        src={require("../assets/img/16-face50.png")}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                    <a href={item.linkedin} className="">
                      <img
                        src={require("../assets/img/18-linkedin50.png")}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default () => {
  return (
    <section name="about" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-[#132577] font-semibold text-xl">
              FEW WORDS ABOUT US
            </h3>
            <p className="text-gray-800 text-3xl font-bold sm:text-2xl">
              We Are Leaders in It Solutions
            </p>
            <p className="text-justify">
              At the forefront of technological innovation, we are the leaders
              in IT solutions. With a relentless commitment to excellence, we
              provide cutting-edge technology services and solutions to help
              businesses thrive in the digital age. Our passion for innovation
              drives us to deliver top-notch IT solutions that transform your
              business and empower your success. Welcome to a world where
              technology meets expertise – welcome to our world."
            </p>
          </div>
          <div className="mt-6 max-w-lg lg:max-w-none">
            <ul className="text-black font-semibold list-disc list-inside grid gap-4 grid-cols-2 grid-rows-2 ">
              <li>Vision and Commitment</li>
              <li>Expertise and Innovation</li>
              <li>Customer-Centric Approach</li>
              <li>Company Culture</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img
            src={require("../assets/img/2-aboutUs582.png")}
            alt="about us"
            className="max-w-xl hidden md:flex "
          />
        </div>
      </div>
    </section>
  );
};

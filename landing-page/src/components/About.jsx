export default () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-[#132577] font-semibold text-xl">
              FEW WORDS ABOUT US
            </h3>
            <p className="text-gray-800 text-3xl font-bold sm:text-2xl">
              We Are Leaders in It Solutions
            </p>
            <p>
              Aliquam a diam gravida, pretium justo non, facilisis eros. Integer
              posuere semper condimentum. Praesent tortor dui, auctor a
              condimentum vitae, aliquam at quam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse consequat lacus a sapien
              pretium, sit amet finibus ex.
            </p>
          </div>
          <div className="mt-6 max-w-lg lg:max-w-none">
            <ul className="space-y-4 flex flex-col md:flex-row md:flex-wrap md:space-x-3">
              <li className="list-disc list-inside text-black font-semibold">
                Quisque metus felis in dictum 1.
              </li>
              <li className="list-disc list-inside text-black font-semibold">
                Mauris sollicitudin nunc quis at 2.
              </li>
              <li className="list-disc list-inside text-black font-semibold">
                Sed ac ligula nec felis modo 3.
              </li>
              <li className="list-disc list-inside text-black font-semibold">
                In massa erat, ac dictum alis 4.
              </li>
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

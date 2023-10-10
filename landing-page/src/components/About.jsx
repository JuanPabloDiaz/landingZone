export default () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">
              FEW WORDS ABOUT US
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
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
          <div className="mt-8 max-w-lg lg:max-w-none">
            <ul className="space-y-8">
              <li>Quisque metus felis in dictum</li>
              <li>Mauris sollicitudin nunc quis at</li>
              <li>Sed ac ligula nec felis modo</li>
              <li>In massa erat, ac dictum alis</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img
            src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
            className="w-full shadow-lg rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
};

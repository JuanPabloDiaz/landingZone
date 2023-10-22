// Source: https://www.floatui.com/components/footers

export default () => {
  const footerNavs = [
    {
      label: "Services",
      items: [
        {
          href: "https://www.hostinger.com/web-hosting",
          name: "Web Hosting",
        },
        {
          href: "https://porkbun.com/products/domains",
          name: "Domains",
        },
        {
          href: "https://www.infinityfree.com/premium/",
          name: "Premium Hosting",
        },
        {
          href: "https://www.hostinger.com/vps-hosting",
          name: "Private Server",
        },
        {
          href: "https://www.hostinger.com/business-email",
          name: "E-mail Hosting",
        },
      ],
    },
    {
      label: "Follow Us",
      items: [
        {
          href: "https://facebook.com/1diazdev",
          name: "Facebook",
        },
        {
          href: "https://twitter.com/1diazdev",
          name: "Twitter",
        },
        {
          href: "https://instagram.com/1diazdev",
          name: "Instagram",
        },
        {
          href: "https://www.linkedin.com/in/1diazdev/",
          name: "LinkedIn",
        },
      ],
    },
    {
      label: "Contact Us",
      items: [
        {
          href: "mailto:jpdiaz@gmx.com?subject = From%your%Landing%Page%with%React&body = Hello%Juan",
          name: "jpdiaz@gmx.com",
        },
      ],
    },
  ];

  return (
    <footer
      name="footer"
      className="text-white bg-[#132577] px-4 py-5 max-w-full mx-auto md:px-8"
    >
      <div className="gap-6 flex justify-between">
        <div className="flex-1 bg-slate-500">
          <div className="max-w-xs bg-orange-300">
            <p className="leading-relaxed mt-2 text-[15px] pt-20">
              Digital experience is always embedded in a physical experience.
            </p>
          </div>
        </div>
        <div className="flex flex-1 space-y-6 justify-between md:space-y-0 bg-slate-600">
          {footerNavs.map((item, idx) => (
            <ul className="md:space-y-4 space-y-2 bg-slate-200" key={idx}>
              <h4 className="text-[#92989F] font-bold text-xl">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-[#ffc107]"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-4 py-2 flex justify-between items-center text-gray-500 text-xs bg-black">
        <div className="mt-4 sm:mt-0">
          &copy; Design with love © Hardik Ramani 2023. All right reserved
        </div>
        <div className="mt-4 sm:mt-0">Claim Privacy Terms</div>
      </div>
    </footer>
  );
};

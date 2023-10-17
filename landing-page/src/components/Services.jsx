const posts = [
  {
    id: 1,
    title: "Software Development",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    buttonLM: { title: "Learn More >", href: "#" },
  },
  // More posts...
  {
    id: 2,
    title: "AI Programmer & Technical",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    buttonLM: { title: "Learn More >", href: "#" },
  },
  {
    id: 1,
    title: "System Application Development",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    buttonLM: { title: "Learn More >", href: "#" },
  },
  {
    id: 1,
    title: "Server and Network Solutions",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    buttonLM: { title: "Learn More >", href: "#" },
  },
];

export default function Example() {
  return (
    <div name="services" className="bg-white pt-24 pb-6 sm:pt-32 sm:pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
            SERVICES
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
            We Provide All-In-One Solution
          </p>
          <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
            For Every IT Job
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between border-spacing-x-28 rounded-lg  shadow-xl hover:shadow-2xl box-border p-4 sm:p-6 lg:p-8 bg-[#ffc107] hover:bg-[#ffbd07]"
            >
              <div className="group relative p-2">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 mb-5 line-clamp-3 text-sm leading-6">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href={post.buttonLM.href}
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 hover:text-gray-500 active:text-[#132577] underline underline-offset-2 "
                >
                  {post.buttonLM.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

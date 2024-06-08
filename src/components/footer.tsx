import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  title: string;
  url: string;
};

type FooterSection = {
  header: string;
  links: FooterLink[];
};

export function Footer() {
  const links = [
    {
      header: "Product",
      links: [
        {
          title: "Features",
          url: "/#features",
        },
        {
          title: "Pricing",
          url: "/pricing",
        },
        {
          title: "Enterprise",
          url: "/enterprise",
        },
        {
          title: "Use Cases",
          url: "/use-cases",
        },
        {
          title: "Changelog",
          url: "/changelog",
        },
        {
          title: "Contact us",
          url: "/contact",
        },

        {
          title: "About",
          url: "/about",
        },
        {
          title: "Help",
          url: "/help",
        },
      ],
    },
    {
      header: "Legal",
      links: [
        {
          title: "Privacy",
          url: "/privacy",
        },
        {
          title: "Terms",
          url: "/terms",
        },
        {
          title: "Refund Policy",
          url: "/refund-policy",
        },
      ],
    },
    {
      header: "Status",
      links: [
        {
          title: "Roadmap",
          url: "https://github.com/orgs/Orgnise/projects/1",
        },
        {
          title: "Book a demo",
          url: "https://go.orgnise.in/book-demo",
        },
      ],
    },
  ] as FooterSection[];
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl border border-border bg-background/70 px-2.5 pb-4 pt-16 backdrop-blur-lg md:rounded-t-2xl lg:px-20">
        <div className="w-full space-y-8 sm:flex sm:space-y-0">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/_static/logo.svg"
                alt="Orgnise Logo"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
              <span className="text-xl font-bold">Orgnise</span>
            </Link>
            <p className="max-w-xs text-sm">
              Bringing your team&apos;s knowledge and projects together in one
              place, simply and fast
            </p>
            <p className="text-sm leading-5 text-gray-500 text-muted-foreground/95 dark:text-gray-200">
              © 2024 Orgnise. All rights reserved.
            </p>
            <div className="flex flex-1 space-x-4 sm:items-end">
              <a target="_blank" href="https://go.orgnise.in/twitter">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
                >
                  <path d="M9.52373 6.77566L15.4811 0H14.0699L8.89493 5.88201L4.7648 0H0L6.24693 8.89549L0 15.9999H1.4112L6.87253 9.78701L11.2352 15.9999H16M1.92053 1.04126H4.08853L14.0688 15.0098H11.9003"></path>
                </svg>
              </a>
              <div className="h-4 w-px bg-gray-100 dark:bg-white/10"></div>
              <a target="_blank" href="https://git.new/orgnise">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.18063 0C4.11532 0 0.0205078 4.125 0.0205078 9.22819C0.0205078 13.3074 2.64419 16.7604 6.28394 17.9826C6.739 18.0744 6.90569 17.784 6.90569 17.5397C6.90569 17.3258 6.89069 16.5924 6.89069 15.8284C4.34257 16.3785 3.81194 14.7283 3.81194 14.7283C3.40244 13.6588 2.79569 13.3839 2.79569 13.3839C1.96169 12.8186 2.85644 12.8186 2.85644 12.8186C3.78157 12.8797 4.26701 13.7659 4.26701 13.7659C5.08582 15.1714 6.40525 14.7742 6.93607 14.5297C7.01182 13.9339 7.25463 13.5214 7.51244 13.2922C5.48013 13.0783 3.34188 12.2839 3.34188 8.73919C3.34188 7.73081 3.70563 6.90581 4.28201 6.26419C4.19107 6.03506 3.87251 5.08763 4.37313 3.81956C4.37313 3.81956 5.14657 3.57506 6.8905 4.76681C7.63715 4.56481 8.40714 4.46205 9.18063 4.46119C9.95407 4.46119 10.7425 4.56825 11.4706 4.76681C13.2147 3.57506 13.9881 3.81956 13.9881 3.81956C14.4888 5.08763 14.17 6.03506 14.0791 6.26419C14.6706 6.90581 15.0194 7.73081 15.0194 8.73919C15.0194 12.2839 12.8811 13.0629 10.8336 13.2922C11.1674 13.5825 11.4554 14.1324 11.4554 15.0034C11.4554 16.2409 11.4404 17.2341 11.4404 17.5395C11.4404 17.784 11.6073 18.0744 12.0621 17.9827C15.7019 16.7603 18.3256 13.3074 18.3256 9.22819C18.3406 4.125 14.2308 0 9.18063 0Z"
                  ></path>
                </svg>
              </a>
              <div className="h-4 w-px bg-gray-100 dark:bg-white/10"></div>
              <Link target="_blank" href="https://go.orgnise.in/linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid flex-1 grid-cols-3 gap-8">
            {links.map((key, index) => (
              <div key={index}>
                {
                  <div>
                    <label className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                      {key.header}
                    </label>
                    <ul className="mt-5 space-y-3.5">
                      {key.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            href={link.url}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function OgPage() {
  return (
    <div className="backdrop-blur-sm">
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          content: '""',
          backgroundImage: "url(_static/grid.svg)",
          zIndex: -1,
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          opacity: 0.4,
          filter: "invert(1)",
        }}
      />

      <div className="mx-auto h-screen max-w-screen-2xl px-6 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-24 lg:mt-20">
            <a
              href="https://github.com/Orgnise/webapp"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-white/40 px-5 py-2 text-sm shadow transition-all hover:shadow-lg"
            >
              <svg
                className="text-night mr-2 inline-block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
              Star us on GitHub <span className="animate-wave ml-2"> ⭐</span>
            </a>
          </div>
          <div className="mt-10">
            <h1 className="">
              <span className="text-4xl font-medium sm:text-6xl">
                Introducing 🔥{" "}
              </span>
              <span className="bg-gradient-to-r from-indigo-800 via-violet-600 to-yellow-500 bg-clip-text text-7xl font-semibold text-transparent sm:text-9xl">
                Orgnise
              </span>
            </h1>
            <p className="text-night/70 mt-6 text-lg leading-8">
              Bringing your team&apos;s knowledge and projects together in one
              place, simply and fast
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <picture>
              <Image
                src="/_static/hero-section.webp"
                alt="App screenshot"
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                loading="lazy"
                width="2432"
                height="1442"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

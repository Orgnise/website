import { ImageResponse, NextRequest } from "next/server";
import { allChangelogPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/functions/utils";

export const runtime = "edge";

export  async function GET(req: NextRequest) {
  
  const post = allChangelogPosts.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  })[0];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          fontFamily: "Inter Medium",
        }}
      >
        <div tw="flex items-center space-x-5 absolute top-4 left-4">
          <Logo />
          <BrandLabel />
        </div>
        <div tw="flex flex-col text-left pt-20 pb-10 pl-80 border-b border-gray-200 w-full">
          <h1
            style={{
              fontFamily: "Satoshi Bold",
            }}
            tw="text-5xl font-bold text-black"
          >
            Changelog
          </h1>
          <p tw="text-lg text-gray-500">
            All the latest updates, improvements, and fixes to Orgnise.
          </p>
        </div>
        <div tw="flex w-full pt-10 pl-28">
          <p tw="text-gray-500">{formatDate(post.publishedAt)}</p>
          <div tw="flex flex-col ml-24">
            <img src={post.image} tw="rounded-lg h-96" />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: "Satoshi Bold",
      //     data: satoshiBoldData,
      //   },
      //   {
      //     name: "Inter Medium",
      //     data: interMediumData,
      //   },
      // ],
    },
  );
}

function Logo() {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 180 180"
      // style={{ position: "absolute", top: 70, left: 80 }}
      height="40"
      enableBackground="new 0 0 180 180"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle
        cx="90"
        cy="90"
        r="87"
        stroke="black"
        strokeWidth="0"
        fill="white"
      />
      <path
        fill="#2d2d2d"
        d="M180,90c0-23.274-8.836-44.485-23.334-60.462c-1.949-1.653-3.328-2.571-3.754-2.806
	c-12.951-7.145-31.58-0.164-40.645,4.388c-10.698,5.374-19.258,12.595-19.484,15.685c-0.229,3.09,5.104,4.162,11.258,7.79
	c18.205,12.106,32.846,31.306,36.291,54.97c3.639,24.986-4.109,49.531-11.086,60.809c1.779-0.633,3.512-1.354,5.221-2.109
	C161.66,152.777,180,123.532,180,90z"
        className="color c1"
      ></path>
      <path
        fill="#2d2d2d"
        d="M135.677,12.374C108.671-3.435,74.173-4.695,45.134,12.071C24.977,23.708,11.026,41.965,4.439,62.511
	c-0.457,2.515-0.563,4.168-0.554,4.653c0.289,14.79,15.649,27.432,24.123,33.006c10.002,6.578,20.536,10.379,23.325,9.031
	c2.79-1.348,1.052-6.502,1.117-13.645c1.382-21.819,10.689-44.098,29.458-58.913c19.821-15.645,44.952-21.207,58.207-20.804
	C138.677,14.615,137.187,13.476,135.677,12.374z"
        className="color c2"
      ></path>
      <path
        fill="#2d2d2d"
        d="M126.028,113.994c-2.562-1.742-6.155,2.34-12.375,5.855c-19.586,9.713-43.534,12.791-65.749,3.942
	C24.445,114.45,7.063,95.468,0.784,83.788C0.442,85.646,0.2,87.506,0,89.364c-0.188,31.293,15.97,61.798,45.01,78.563
	c20.157,11.64,42.943,14.593,64.029,10.023c2.407-0.861,3.893-1.597,4.308-1.847c12.663-7.646,15.932-27.27,16.522-37.395
	C130.565,126.758,128.589,115.736,126.028,113.994z"
        className="color c3"
      ></path>
    </svg>
  );
}

function BrandLabel({ className }: { className?: string }) {
  return (
    <span tw={("font-mono font-bold pl-2")}>
      <h1>Orgnise</h1>
    </span>
  );
}

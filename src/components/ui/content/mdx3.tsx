"use client";

import { compile, run } from "@mdx-js/mdx";
// import { MDXRemoteSerializeResult } from "next-mdx-remote";
import * as runtime from "react/jsx-runtime";
import { MdxComponents } from "./mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { cn } from "@/lib/utils";

interface MDXProps2 {
  content?: string;
  className?: string;
  mdxSource:MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}
export default  function MDX3({ content,mdxSource,className }: MDXProps2) {
  // const mdxSource = await serialize(content);
  // Compile the MDX source code to a function body
  // const code = String(
  //   await compile(mdxSource, { outputFormat: "function-body" }),
  // );
  // You can then either run the code on the server, generating a server
  // component, or you can pass the string to a client component for
  // final rendering.

  // Run the compiled code with the runtime and get the default export
  // @ts-ignore
  // const { default: MDXContent } = await run(code, {
  //   ...runtime,
  //   baseUrl: import.meta.url,
  // });

  // console.log({content})

  // Render the MDX content, supplying the ClientComponent as a component
  return <article
      data-mdx-container
      className={cn(
        "prose-headings:font-display prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-bold",
        className,
      )}
    >
      {/* <Component
        components={{
          ...components,
          Image: MDXImage,
        }}
      /> */}
  <MDXRemote {...mdxSource} components={MdxComponents} />
    </article>
}



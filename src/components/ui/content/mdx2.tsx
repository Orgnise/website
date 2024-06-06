import { compile, run } from "@mdx-js/mdx";
// import { MDXRemoteSerializeResult } from "next-mdx-remote";
import * as runtime from "react/jsx-runtime";
import { MdxComponents } from "./mdx";
import { serialize } from "next-mdx-remote/serialize";

interface MDXProps2 {
  content: string;
}
export default async function MDX2({ content }: MDXProps2) {
  const mdxSource = await serialize(content);
  // Compile the MDX source code to a function body
  const code = String(
    await compile(mdxSource, { outputFormat: "function-body" }),
  );
  // You can then either run the code on the server, generating a server
  // component, or you can pass the string to a client component for
  // final rendering.

  // Run the compiled code with the runtime and get the default export
  // @ts-ignore
  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  console.log({content})

  // Render the MDX content, supplying the ClientComponent as a component
  return <MDXContent components={{ MdxComponents }} />;
}

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function Query({
  name = "John Doe",
  email = "john@doe.io",
  comment = "I'm  looking for a knowledge base management platform with the infrastructure that can handle our scale.",
}: {
  name: string;
  email: string;
  comment: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New Query for Orgnise</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src={"https://app.orgnise.in/_static/logo.png"}
                width="40"
                height="40"
                alt="Orgnise"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              New query for Orgnise
            </Heading>
            <Section className="mt-1">
              <Text className="text-sm font-bold leading-6 text-black">
                Name
              </Text>
              <Text className="text-sm leading-6 text-black">{name}</Text>
            </Section>

            <Section className="mt-1">
              <Text className="text-sm font-bold leading-6 text-black">
                Email
              </Text>
              <Text className="text-sm leading-6 text-black">{email}</Text>
            </Section>

            <Section className="mt-1">
              <Text className="text-sm font-bold leading-6 text-black">
                Comment
              </Text>
              <Text className="text-sm leading-6 text-black">
                Comment: {comment}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

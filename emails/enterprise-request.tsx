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

export default function EnterpriseRequest({
  email = "john@doe.io",
  company = "Acme Inc.",
  comment = "We're a product based saas company that has huge team. We're looking for a knowledge base management platform with the infrastructure that can handle our scale.",
}: {
  email: string;
  company: string;
  comment: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New Enterprise Plan Request</Preview>
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
              New Enterprise Request
            </Heading>

            <Text className="text-sm leading-6 text-black">
              {" "}
              Email: {email}
            </Text>

            <Text className="text-sm leading-6 text-black">
              Company: {company}
            </Text>
            <Text className="text-sm leading-6 text-black">
              Comment: {comment}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

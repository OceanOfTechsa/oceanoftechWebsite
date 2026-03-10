import {
  Body,
  Head,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
  pixelBasedPreset,
  Hr,
} from "@react-email/components";
import { GeoLocationData } from "@/lib/GeoLocationData";

interface EmailOnlyContactUsEmailProps {
  email: string;
}

function EmailOnlyContactUsEmail(
  { email }: EmailOnlyContactUsEmailProps,
  location: GeoLocationData,
) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body style={main}>
          <Preview>
            A client just submitted a contact form. Email: {email}
          </Preview>
          <div>
            {/*<Heading style={h1}>New Contact Inquiry Received</Heading>*/}
            <div className="bg-amber-500/10 p-2 border-l-4 border-amber-500 my-2 text-[#49494f] flex items-center text-xs">
              <div className="text-amber-500 me-2 text-xs">CAUTION:</div>
              This email originated from outside the organisation. Do not click
              links or open attachments unless you recognise the sender and you
              know the content is safe.
            </div>
            <p className="text-[#49494f] -mb-5">Hello Admin 👋🏾,</p>
            <p style={text}>
              You have received a new contact form submission on Ocean of Tech.
            </p>
            <p className="text-[#49494f] -mb-1">Submission Details:</p>
            <Link
              href={`mailto:${email}`}
              target="_blank"
              style={{ ...link, color: "#898989" }}
            >
              {email}
            </Link>
            <Text
              style={{
                ...text,
                color: "#ababab",
                marginTop: "14px",
                marginBottom: "16px",
              }}
            >
              Please follow up as needed.
            </Text>
            <Hr className="border-[#e6ebf1] my-5" />
            <Text style={footer}>
              This invitation was intended for <span>Ocean of tech Admin</span>.
              This email was sent from <span>{location?.query}</span> located in{" "}
              <span>
                {location?.regionName}, {location?.country}
              </span>
              . If you were not expecting this invitation, you can ignore this
              email. If you are concerned about your account&#39;s safety,
              please reply to this email to get in touch with us.
            </Text>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailOnlyContactUsEmail.PreviewProps = {
  email: "example@mail.com",
} as EmailOnlyContactUsEmailProps;

export default EmailOnlyContactUsEmail;

const main = {
  backgroundColor: "#ffffff",
};
const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

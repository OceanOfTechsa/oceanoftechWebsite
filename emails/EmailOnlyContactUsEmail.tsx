import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
} from '@react-email/components';
interface GeoLocationData {
    query: string;       // IP address
    city: string;
    country: string;
    countryCode: string;
    regionName: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    status: 'success' | 'fail';
    message?: string;
}

interface EmailOnlyContactUsEmail {
    email: string;
    location: GeoLocationData;
}

export const EmailOnlyContactUsEmail = ({email, location}: EmailOnlyContactUsEmail) => (
    <Html>
        <Head />
        <Body style={main}>
            <Preview>Someone just submitted your contact form. Email: {email}</Preview>
        <Container style={container}>
                <Heading style={h1}>New Contact Inquiry Received</Heading>

                <Text style={text}>Hello Admin,</Text>

                <Text>You’ve received a new contact form submission from your website.</Text>

                <Text style={text}>Details</Text>

                <code style={emailStyles}>Email:
                    <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    style={{ ...link, color: '#898989' }}
                    >
                        {email}
                    </Link>
                </code>
                <Text
                    style={{
                        ...text,
                        color: '#ababab',
                        marginTop: '14px',
                        marginBottom: '16px',
                    }}
                >
                    Please follow up as needed.
                </Text>

                <Text style={footer}>
                    This invitation was intended for{' '}
                    <span >Ocean of tech Admin</span>. This email was
                    sent from <span>{location?.query}</span>{' '}
                    located in{' '}
                    <span >{location?.city}, {location?.country}</span>. If you
                    were not expecting this invitation, you can ignore this email. If
                    you are concerned about your account&#39;s safety, please reply to
                    this email to get in touch with us.
                </Text>
            </Container>
        </Body>
    </Html>
);

EmailOnlyContactUsEmail.PreviewProps = {
    email: 'example@mail.com',
    location: {
        query: '0.0.0.0',
        city: 'Sample City',
        country: 'Sample Country',
        countryCode: 'US',
        regionName: 'Sample Region',
        lat: 0,
        lon: 0,
        timezone: 'UTC',
        isp: 'Sample ISP',
        org: 'Sample Org',
        as: 'Sample AS',
        status: 'success'
    }
} as EmailOnlyContactUsEmail;
export default EmailOnlyContactUsEmail;

const main = {
    backgroundColor: '#ffffff',
};

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
};

const link = {
    color: '#2754C5',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};

const footer = {
    color: '#898989',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
};

const emailStyles = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
};

import { getUserGeoData } from "@/lib/GeoLocationData";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    pixelBasedPreset,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components';

interface VercelInviteUserEmailProps {
    name?: string;
    surname?: string;
    email?: string;
    company?: string;
    message?: string;
    services: string[];
    otherServices?: string;
}

export  const ContactEmail = async ({
                                        name,
                                        surname,
                                        email,
                                        company,
                                        message,
                                        otherServices,
                                        services,
                                      }: VercelInviteUserEmailProps) => {
    const previewText = "A visitor has just submitted a new inquiry. Review their details below";
    const location = await getUserGeoData();

    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Preview>{previewText}</Preview>
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea]  border-solid p-[20px]">
                        <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
                           New form submission on <br />
                            <strong>Ocean of tech</strong>
                        </Heading>
                        <Text className="text-[14px] text-black leading-[24px]">
                            Hello Admin,
                        </Text>
                        <Text className="text-[14px] text-black leading-[24px]">
                            <strong>{name} {surname}</strong> (
                            <Link
                                href={`mailto:${email}`}
                                className="text-blue-600 no-underline"
                            >
                                {email}
                            </Link>
                            ) has submitted <strong>a contact form</strong>.
                        </Text>

                        <Text className="text-[14px] text-black leading-[24px]">
                            A new contact request has just been submitted through the website. Below are the details of the inquiry for your review.
                        </Text>
                        <Text className="mt-3 mb-0">
                            <strong>Contact Form Details</strong>
                        </Text>

                        <div className="flex flex-col -gap-5">
                            <div className="flex gap-2 items-center justify-start mt-0 mb-0">
                                <Text className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill mb-0" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    Full Name:</Text>
                                <Text className="ml-2">{name} {surname}</Text>
                            </div>

                            <div className="flex gap-2 items-center justify-start">
                                <Text className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                    </svg>
                                    Email:</Text>
                                <Text className="ml-2">{email}</Text>
                            </div>

                            <div className="flex gap-2 items-center justify-start">
                                <Text className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                                        <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                                    </svg>
                                    Company:
                                </Text>
                                <Text className="ml-2">{company ? company : "N/A"}</Text>
                            </div>

                            <div className="flex gap-2 items-start justify-start">
                                <Text className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                                        <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
                                    </svg>
                                    Service Requested:
                                </Text >
                                <div>
                                    <div className="grid grid-cols-2 items-center gap-2">
                                        {
                                            services?.map((service: string, index: number) => (
                                                <Text key={index} className="ml-2 bg-zinc-500 text-white p-1 rounded-md">
                                                    {service}
                                                </Text>
                                            ))
                                        }
                                    </div>
                                    {services.includes("Other") &&
                                        <div className="bg-amber-500 text-white p-1 rounded-md ml-2">
                                            {otherServices}
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="flex gap-2 items-start justify-start">
                                <Text className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                                    </svg>
                                    Message:
                                </Text>
                                <Text className="ml-2">{message}</Text>
                            </div>
                        </div>

                        <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />

                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{' '}
                            <span className="text-black">Ocean of tech Admin</span>. This invite was
                            sent from <span className="text-black">{location?.query || 'Unknown location'}</span>{' '}
                            located in{' '}
                            <span className="text-black">{location?.city || 'Unknown'}, {location?.country || 'Unknown'}</span>. If you                            were not expecting this invitation, you can ignore this email. If
                            you are concerned about your account&#39;s safety, please reply to
                            this email to get in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ContactEmail.PreviewProps = {
    name: "Sithuliso",
    surname: "Zulu",
    email: "sithuliso@oceanoftechsa.com",
    company: "Ocean of tech",
    message: "This invitation was intended for Admin. This invite was sent from 123.544.765 located in Durban. If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.",
    services: ['web Dev', 'automation'],
    otherServices: "web web web",
} as VercelInviteUserEmailProps;

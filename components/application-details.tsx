"use client";

import {useState, useEffect, JSX} from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplicationTimeline, ApplicationStatus } from "@/components/partials/_application-timeline";
import { PersonalInfo } from "@/components/partials/_personal-info";
import { EducationSection } from "@/components/partials/_education-section";
import { WorkExperienceSection } from "@/components/partials/_work-experience-section";
import { DocumentsSection } from "@/components/partials/_documents-section";
import {
    Calendar,
    MapPin,
    Users,
    Building2,
    AlertCircle,
    CheckCircle2,
    XCircle,
    MessageCircle,
    Info,
    PauseCircle,
    Lock,HelpCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

// Define Document interface (move to types.ts if shared across components)
interface Document {
    id: string;
    name: string;
    type: "resume" | "cover_letter" | "other";
    uploadDate: string;
    size: string;
}

// Define the type for mockApplications
interface Application {
    id: string;
    jobTitle: string;
    company: string;
    appliedDate: string;
    status: ApplicationStatus;
    location: { city: string; country: string };
    salary: { amount: number; currency: string; period: string };
    type: "Hybrid" | "Remote";
    candidates: number;
    personalInfo: {
        name: string;
        surname: string;
        email: string;
        phone: string;
        dob: string;
        p_g_link: string;
        about: string;
    };
    educationalBackgrounds: {
        id: string;
        educational_level: string;
        institution: string;
        start_date: string;
        end_date: string;
        d_or_c: string;
        field_of_study: string;
        academicRecord: string | null;
    }[];
    workExperiences: {
        id: string;
        job_title: string;
        company: string;
        work_start_date: string;
        work_end_date: string;
        responsibilities: string;
    }[];
    documents: Document[];
    interviewDate: string | null;
    statusReason: string | null;
    password: string;
}

const mockApplications: Record<string, Application> = {
    "app-123": {
        id: "app-123",
        jobTitle: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        appliedDate: "2024-01-15",
        status: ApplicationStatus.INTERVIEW_SCHEDULED,
        location: { city: "Cape Town", country: "South Africa" },
        salary: { amount: 850000, currency: "ZAR", period: "year" },
        type: "Hybrid",
        candidates: 47,
        personalInfo: {
            name: "John",
            surname: "Doe",
            email: "john.doe@email.com",
            phone: "+27 82 123 4567",
            dob: "1990-05-15",
            p_g_link: "https://linkedin.com/in/johndoe",
            about:
                "Passionate frontend developer with 5+ years of experience in React and modern web technologies. I love creating intuitive user interfaces and solving complex problems.",
        },
        educationalBackgrounds: [
            {
                id: "edu-1",
                educational_level: "Bachelor's Degree",
                institution: "University of Cape Town",
                start_date: "2012-02-01",
                end_date: "2015-12-01",
                d_or_c: "Pending",
                field_of_study: "Computer Science",
                academicRecord: null,
            },
            {
                id: "edu-2",
                educational_level: "Certificate",
                institution: "FreeCodeCamp",
                start_date: "2020-01-01",
                end_date: "2020-06-01",
                d_or_c: "Completed",
                field_of_study: "Full Stack Web Development",
                academicRecord: null,
            },
        ],
        workExperiences: [
            {
                id: "work-1",
                job_title: "Frontend Developer",
                company: "Digital Agency Co",
                work_start_date: "2019-03-01",
                work_end_date: "2023-12-31",
                responsibilities:
                    "Developed responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with design teams to implement pixel-perfect UI components. Led frontend architecture decisions for 3 major client projects.",
            },
            {
                id: "work-2",
                job_title: "Junior Web Developer",
                company: "StartupXYZ",
                work_start_date: "2016-06-01",
                work_end_date: "2019-02-28",
                responsibilities:
                    "Built and maintained company website using HTML, CSS, and JavaScript. Implemented SEO best practices and improved site performance by 40%. Worked closely with marketing team on landing page optimization.",
            },
        ],
        documents: [
            { id: "doc-1", name: "Resume_John_Doe.pdf", type: "resume", uploadDate: "2024-01-15", size: "245 KB" },
            { id: "doc-2", name: "Cover_Letter.pdf", type: "cover_letter", uploadDate: "2024-01-15", size: "128 KB" },
            { id: "doc-3", name: "Portfolio_Screenshots.pdf", type: "other", uploadDate: "2024-01-15", size: "1.2 MB" },
        ],
        interviewDate: "2024-02-20T10:00:00Z",
        statusReason: null,
        password: "password123",
    },
    "app-456": {
        id: "app-456",
        jobTitle: "UI/UX Designer",
        company: "Creative Studio",
        appliedDate: "2024-01-10",
        status: ApplicationStatus.REJECTED,
        location: { city: "Johannesburg", country: "South Africa" },
        salary: { amount: 650000, currency: "ZAR", period: "year" },
        type: "Remote",
        candidates: 89,
        personalInfo: {
            name: "Jane",
            surname: "Smith",
            email: "jane.smith@email.com",
            phone: "+27 83 987 6543",
            dob: "1992-08-22",
            p_g_link: "https://behance.net/janesmith",
            about: "Creative UI/UX designer with a passion for user-centered design and modern aesthetics.",
        },
        educationalBackgrounds: [
            {
                id: "edu-3",
                educational_level: "Bachelor's Degree",
                institution: "Wits University",
                start_date: "2014-02-01",
                end_date: "2017-12-01",
                d_or_c: "Completed",
                field_of_study: "Graphic Design",
                academicRecord: null,
            },
        ],
        workExperiences: [
            {
                id: "work-3",
                job_title: "Junior Designer",
                company: "Design House",
                work_start_date: "2018-01-01",
                work_end_date: "2023-12-31",
                responsibilities:
                    "Created user interfaces for mobile and web applications. Conducted user research and usability testing.",
            },
        ],
        documents: [
            { id: "doc-4", name: "Resume_Jane_Smith.pdf", type: "resume", uploadDate: "2024-01-10", size: "198 KB" },
            { id: "doc-5", name: "Design_Portfolio.pdf", type: "other", uploadDate: "2024-01-10", size: "5.8 MB" },
        ],
        interviewDate: "2024-02-20T10:00:00Z",
        statusReason:
            "While your portfolio shows great creativity, we decided to move forward with a candidate who has more experience with enterprise-level design systems and accessibility standards.",
        password: "password123",
    },
};

const ApplicationDetails = (): JSX.Element => {
    const params = useParams();
    const trackingId = params?.trackingId as string;
    const application = mockApplications[trackingId];
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const [isDeletionModelOpen, setIsDeletionModelOpen] = useState(false);
    const [withdrawReason, setWithdrawReason] = useState("");
    const [, setIsEditPersonalInfoModalOpen] = useState(false);
    const [, setIsEditEducationModalOpen] = useState(false);
    const [, setIsEditWorkExperienceModalOpen] = useState(false);
    const [, setIsEditDocumentsModalOpen] = useState(false);
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
    const [password, setPassword] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [locked, setLocked] = useState(false);

    const appKey = `app_security_${trackingId}`;

    useEffect(() => {
        const stored: string | null = localStorage.getItem(appKey);
        if (stored) {
            const { attempts: storedAttempts, locked: storedLocked } = JSON.parse(stored);
            setAttempts(storedAttempts);
            setLocked(storedLocked);
        }
    }, [appKey]);

    // Define terminal statuses where editing should be disabled
    const terminalStatuses: ApplicationStatus[] = [
        ApplicationStatus.HIRED,
        ApplicationStatus.REJECTED,
        ApplicationStatus.REJECTED_AFTER_INTERVIEW,
        ApplicationStatus.REJECTED_AFTER_ASSESSMENT,
        ApplicationStatus.OFFER_REJECTED,
        ApplicationStatus.WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW,
        ApplicationStatus.NO_CONTACT
    ];

    const noEditStatuses: ApplicationStatus[] = [
        ApplicationStatus.UNDER_REVIEW,
        ApplicationStatus.INTERVIEW_SCHEDULED,
        ApplicationStatus.SKILLS_ASSESSMENT,
        ApplicationStatus.BACKGROUND_CHECK,
        ApplicationStatus.OFFER_EXTENDED,
        ApplicationStatus.ONBOARDING,
        ApplicationStatus.HIRED,
        ApplicationStatus.ON_HOLD,
        ApplicationStatus.ON_HOLD_AFTER_REVIEW,
        ApplicationStatus.ON_HOLD_AFTER_INTERVIEW,
        ApplicationStatus.ON_HOLD_AFTER_ASSESSMENT,
        ApplicationStatus.CONTACT_US,
        ApplicationStatus.CONTACT_CONFIRMED,
        ApplicationStatus.NO_CONTACT,
        ApplicationStatus.REJECTED,
        ApplicationStatus.REJECTED_AFTER_INTERVIEW,
        ApplicationStatus.REJECTED_AFTER_ASSESSMENT,
        ApplicationStatus.OFFER_REJECTED,
        ApplicationStatus.WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW
    ];

    // Check if editing is allowed
    const isEditingAllowed: boolean = !noEditStatuses.includes(application.status);

    // Define status groups
    const onHoldStatuses: ApplicationStatus[] = [
        ApplicationStatus.ON_HOLD,
        ApplicationStatus.ON_HOLD_AFTER_REVIEW,
        ApplicationStatus.ON_HOLD_AFTER_INTERVIEW,
        ApplicationStatus.ON_HOLD_AFTER_ASSESSMENT,
    ];

    const rejectedStatuses: ApplicationStatus[] = [
        ApplicationStatus.REJECTED,
        ApplicationStatus.REJECTED_AFTER_INTERVIEW,
        ApplicationStatus.REJECTED_AFTER_ASSESSMENT,
        ApplicationStatus.OFFER_REJECTED,
    ];

    const withdrawnStatuses: ApplicationStatus[] = [
        ApplicationStatus.WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW,
    ];

    if (!application) {
        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
                <div className="flex min-w-screen w-full h-screen overflow-hidden">
                    <div className="hidden md:block w-2/3 bg-cover bg-center" style={{ backgroundImage: "url(/auth-cover.avif)" }}>
                        <div className="h-full flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/50 to-transparent">
                            <p className="text-4xl mb-4 leading-tight text-white text-white">
                                &quot;An exceptional agency CEO is visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect.&quot;
                            </p>
                            <p className="font-semibold text-2xl">Sithuliso Zulu</p>
                            <p className="text-sm">CEO, Ocean of tech</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8 flex flex-col justify-center ">
                        <div className="text-center mb-6">
                            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Application Not Found</h2>
                            <p className="text-muted-foreground">The requested application does not exist or you don&apos;t have access to it.</p>
                        </div>
                        <Button variant="default" asChild className="w-full">
                            <Link href="/">Back to Home</Link>
                        </Button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-5">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="mb-2 font-semibold">Quick Fixes</h3>
                                    <ul className="text-sm space-y-1">
                                        <li>• Refresh the page</li>
                                        <li>• Clear your browser cache</li>
                                        <li>• Try a different browser</li>
                                        <li>• Check your internet connection</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="mb-2 font-semibold">Get Help</h3>
                                    <div className="space-y-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="w-full justify-start bg-transparent"
                                            asChild
                                        >
                                            <Link href="/support">
                                                <MessageCircle className="w-4 h-4 mr-2" />
                                                Contact Support
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const handleWithdrawConfirm = () => {
        application.status = ApplicationStatus.WITHDRAWN;
        application.statusReason = withdrawReason || "Application withdrawn by candidate";
        setIsWithdrawModalOpen(false);
        setWithdrawReason("");
    };

    const handlePasswordSubmit = () => {
        if (password === application.password) {
            setShowPasswordPrompt(false);
            localStorage.removeItem(appKey);
            setAttempts(0);
            setLocked(false);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            const newLocked = newAttempts >= 3;
            setLocked(newLocked);
            localStorage.setItem(appKey, JSON.stringify({ attempts: newAttempts, locked: newLocked }));
            setPassword("");
        }
    };

    if (showPasswordPrompt) {
        if (locked) {
            return (
                <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
                    <div className="flex min-w-screen w-full h-screen overflow-hidden">
                        <div className="hidden md:block w-2/3 bg-cover bg-center" style={{ backgroundImage: "url(/auth-cover.avif)" }}>
                            <div className="h-full flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/50 to-transparent">
                                <p className="text-4xl mb-4 leading-tight text-white">
                                    &quot;An exceptional agency CEO is visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect.&quot;
                                </p>
                                <p className="font-semibold text-2xl text-white">Sithuliso Zulu</p>
                                <p className="text-sm text-white">CEO, Ocean of tech</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                            <div className="text-center mb-6">
                                <Lock className="h-12 w-12 text-destructive mx-auto mb-4" />
                                <h2 className="text-2xl font-bold mb-2">Account Locked</h2>
                                <p className="text-muted-foreground">You have exceeded the maximum number of attempts. Please contact support.</p>
                            </div>
                            <Button variant="default" asChild className="w-full">
                                <Link href="/support">Contact Support</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
                <div className="flex w-full min-w-screen h-screen overflow-hidden">
                    <div className="hidden md:block w-2/3 bg-cover bg-center" style={{ backgroundImage: "url(/auth-cover.avif)" }}>
                        <div className="h-full flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/50 to-transparent">
                            <p className="text-4xl mb-4 leading-tight text-white">
                                &quot;An exceptional agency CEO is visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect.&quot;
                            </p>
                            <p className="font-semibold text-2xl text-white">Sithuliso Zulu</p>
                            <p className="text-sm text-white">CEO, Ocean of tech</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8 flex flex-col justify-center ">
                        <h2 className="text-2xl font-bold mb-2">Enter Password</h2>
                        <p className="text-muted-foreground mb-6">Please enter the password to view this application.</p>
                        <div className="space-y-4">
                            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className="text-sm text-muted-foreground">Attempts left: {3 - attempts}</p>
                            <Button className="w-full cursor-pointer" onClick={handlePasswordSubmit}>
                                Submit
                            </Button>
                            <Button variant="link" className="w-full text-sm">
                                Lost password?  <Link href="/contact" className="underline">Contact us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    let statusCard = null;
    if (onHoldStatuses.includes(application.status) || rejectedStatuses.includes(application.status) || withdrawnStatuses.includes(application.status)) {
        let cardClass = "";
        let titleClass = "";
        let icon = null;
        let statusText = "";

        if (onHoldStatuses.includes(application.status)) {
            cardClass = "mb-8 border-yellow-500/20 bg-yellow-500/5 shadow-none rounded-sm border";
            titleClass = "text-lg flex items-center gap-2 text-yellow-600 dark:text-yellow-300";
            icon = <PauseCircle className="h-5 w-5" />;
            statusText = "Application On Hold";
        } else if (rejectedStatuses.includes(application.status)) {
            cardClass = "mb-8 border-red-500/20 bg-red-500/5 shadow-none rounded-sm border";
            titleClass = "text-lg flex items-center gap-2 text-red-600 dark:text-red-300";
            icon = <XCircle className="h-5 w-5" />;
            if (application.status === ApplicationStatus.REJECTED) {
                statusText = "Application Rejected";
            } else if (application.status === ApplicationStatus.REJECTED_AFTER_INTERVIEW) {
                statusText = "Rejected After Interview";
            } else if (application.status === ApplicationStatus.REJECTED_AFTER_ASSESSMENT) {
                statusText = "Rejected After Assessment";
            } else if (application.status === ApplicationStatus.OFFER_REJECTED) {
                statusText = "Offer Rejected";
            } else {
                statusText = `Application Status: ${ApplicationStatus[application.status]}`;
            }
        } else if (withdrawnStatuses.includes(application.status)) {
            cardClass = "mb-8 border-yellow-500/20 bg-yellow-500/5 shadow-none rounded-sm border";
            titleClass = "text-lg flex items-center gap-2 text-yellow-600 dark:text-yellow-300";
            icon = <AlertCircle className="h-5 w-5" />;
            if (application.status === ApplicationStatus.WITHDRAWN) {
                statusText = "Application Withdrawn";
            } else if (application.status === ApplicationStatus.COMPANY_WITHDRAWN) {
                statusText = "Company Withdrawn";
            } else if (application.status === ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW) {
                statusText = "Company Withdrawn After Interview";
            }
        }

        statusCard = (
            <Card className={cardClass}>
                <CardHeader>
                    <CardTitle className={titleClass}>
                        {icon} Status: {statusText}
                    </CardTitle>
                </CardHeader>
                <CardContent className="-mt-3">
                    <p className="text-sm leading-relaxed">{application.statusReason || "No reason provided"}</p>
                </CardContent>
            </Card>
        );
    } else if (application.status === ApplicationStatus.HIRED) {
        statusCard = (
            <Card className="mb-8 border-green-500/20 bg-green-500/5 shadow-none rounded-sm border">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-green-600 dark:text-green-300">
                        <CheckCircle2 className="h-5 w-5" />
                        Application Status: Hired
                    </CardTitle>
                </CardHeader>
                <CardContent className="-mt-3">
                    <p className="text-sm leading-relaxed">{application.statusReason || "No reason provided"}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="min-h-screen w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6">
            <div className="flex flex-col gap-2 mb-7">
                <Alert className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                    <Info className="h-4 w-4 -mt-1" />
                    <AlertDescription className="text-black dark:text-white font-normal">
                        Please verify that the information displayed is correct.
                    </AlertDescription>
                </Alert>

                <Alert className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                    <Info className="h-4 w-4 -mt-1" />
                    <AlertDescription className="text-black dark:text-white flex flex-wrap items-start justify-start md:items-center font-normal">
                        React out to our support team if you need any assistance{" "}
                        <Link href="mailto:support@oceanoftechsa.com" className="text-blue-600 hover:underline">
                            support@oceanoftechsa.com
                        </Link>
                    </AlertDescription>
                </Alert>

                <Alert className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                    <Info className="h-4 w-4 -mt-1" />
                    <AlertDescription className="text-black dark:text-white flex items-center font-normal">
                        Hover over <HelpCircle className="mx-1" size={18} /> to get more help.
                    </AlertDescription>
                </Alert>

                <Alert className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                    <Info className="h-4 w-4 -mt-1" />
                    <AlertDescription className="text-black dark:text-white flex items-center font-normal">
                        <strong>Note:</strong> You can only edit your application if it has not been reviewed yet.
                    </AlertDescription>
                </Alert>
            </div>

            <div className="">
                <div className="mb-8">
                    <Card className="border shadow-none rounded-sm bg-transparent">
                        <CardHeader className="pb-0">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building2 className="h-6 w-6 text-muted-foreground" />
                                        <span className="text-sm font-medium text-muted-foreground">Ocean of Tech</span>
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-balance mb-3">{application.jobTitle}</CardTitle>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:text-right">
                                    <div className="space-y-1">
                                        <div className="text-sm text-muted-foreground">Applied</div>
                                        <div className="font-medium">{new Date(application.appliedDate).toLocaleDateString()}</div>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/40">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <div className="text-sm text-muted-foreground">{application.type}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <div className="font-medium">{application.candidates} Total applicants</div>
                                    </div>
                                </div>
                                {application.interviewDate && [
                                    ApplicationStatus.INTERVIEW_SCHEDULED,
                                    ApplicationStatus.OFFER_EXTENDED,
                                    ApplicationStatus.HIRED,
                                    ApplicationStatus.REJECTED_AFTER_INTERVIEW,
                                    ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW,
                                    ApplicationStatus.ON_HOLD_AFTER_INTERVIEW,
                                    ApplicationStatus.BACKGROUND_CHECK,
                                ].includes(application.status) && (
                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <div className="font-medium">Interview Scheduled</div>
                                            <div className="text-sm text-muted-foreground">
                                                {new Date(application.interviewDate).toLocaleDateString()} at{" "}
                                                {new Date(application.interviewDate).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {statusCard}

                <ApplicationTimeline currentStatus={application.status} reason={application.statusReason as string} className="mb-8" />

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 space-y-8">
                        <PersonalInfo
                            personalInfo={application.personalInfo}
                            onEdit={() => setIsEditPersonalInfoModalOpen(true)}
                            isEditingAllowed={isEditingAllowed}
                        />
                        <WorkExperienceSection
                            workExperiences={application.workExperiences}
                            onEdit={() => setIsEditWorkExperienceModalOpen(true)}
                            isEditingAllowed={isEditingAllowed}
                        />
                        <EducationSection
                            educationalBackgrounds={application.educationalBackgrounds}
                            onEdit={() => setIsEditEducationModalOpen(true)}
                            isEditingAllowed={isEditingAllowed}
                        />
                    </div>

                    <div className="space-y-8">
                        <DocumentsSection
                            documents={application.documents}
                            onEdit={() => setIsEditDocumentsModalOpen(true)}
                            isEditingAllowed={isEditingAllowed}
                        />

                        <Card className="border shadow-none rounded-sm bg-transparent">
                            <CardHeader>
                                <CardTitle className="text-lg">Action(s)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {terminalStatuses.includes(application.status) && (
                                    <Dialog open={isDeletionModelOpen} onOpenChange={setIsDeletionModelOpen}>
                                        <DialogTrigger asChild>
                                            <Button variant="destructive" className="w-full dark:bg-red-500 dark:text-white dark:hover:bg-red-600">
                                                Delete Application
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent >
                                            <DialogHeader>
                                                <DialogTitle>Confirm Deletion?</DialogTitle>
                                                <DialogDescription>
                                                    Are you sure you want to delete this application record? This action cannot be undone.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Button variant="outline" onClick={() => setIsDeletionModelOpen(false)}>Cancel</Button>
                                                <Button variant="destructive" className="dark:bg-red-500 dark:text-white dark:hover:bg-red-600">Confirm Delete</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                )}

                                {!terminalStatuses.includes(application.status) && (
                                    <Dialog open={isWithdrawModalOpen} onOpenChange={setIsWithdrawModalOpen}>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full text-destructive border-destructive hover:bg-destructive hover:text-white bg-transparent cursor-pointer"
                                            >
                                                Withdraw Application
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="md:min-w-4xl w-full">
                                            <DialogHeader>
                                                <DialogTitle>Confirm Withdrawal</DialogTitle>
                                                <DialogDescription>
                                                    Are you sure you want to withdraw this application? This action cannot be undone.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="py-4">
                                                <Label  className="mb-2" htmlFor="withdrawReason">Reason (optional)</Label>
                                                <Textarea
                                                    id="withdrawReason"
                                                    placeholder="Enter reason for withdrawal"
                                                    value={withdrawReason}
                                                    className="w-full h-40 text-base p-3"
                                                    onChange={(e) => setWithdrawReason(e.target.value)}
                                                />
                                            </div>
                                            <DialogFooter>
                                                <Button variant="outline" onClick={() => setIsWithdrawModalOpen(false)} className="rounded-[0.2rem]">
                                                    Cancel
                                                </Button>
                                                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-[0.2rem]" onClick={handleWithdrawConfirm}>
                                                    Confirm Withdrawal
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ApplicationDetails;
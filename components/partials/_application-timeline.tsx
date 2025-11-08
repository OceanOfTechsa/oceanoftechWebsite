import type React from "react";
import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle, Clock, FileText, Trophy, XCircle,
    AlertTriangle, PauseCircle, MessageCircle, Ban, Shield, Phone, UserCheck, FileCheck, BadgeCheck, HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

// Status Enum
export enum ApplicationStatus {
    APPLIED = 0,
    UNDER_REVIEW = 1,
    INTERVIEW_SCHEDULED = 2,
    SKILLS_ASSESSMENT = 3,
    BACKGROUND_CHECK = 4,
    OFFER_EXTENDED = 5,
    ONBOARDING = 6,
    HIRED = 7,
    CONTACT_US = 8,
    CONTACT_CONFIRMED = 9,
    NO_CONTACT = 10,
    REJECTED = 11,
    REJECTED_AFTER_INTERVIEW = 12,
    REJECTED_AFTER_ASSESSMENT = 13,
    OFFER_REJECTED = 14,
    WITHDRAWN = 15,
    COMPANY_WITHDRAWN = 16,
    COMPANY_WITHDRAWN_AFTER_INTERVIEW = 17,
    ON_HOLD = 18,
    ON_HOLD_AFTER_REVIEW = 19,
    ON_HOLD_AFTER_INTERVIEW = 20,
    ON_HOLD_AFTER_ASSESSMENT = 21,
}

// Step Status Enum
export enum StepStatus {
    COMPLETED = "completed",
    CURRENT = "current",
    PENDING = "pending",
    REJECTED = "rejected",
    WITHDRAWN = "withdrawn",
    ONHOLD = "onhold",
    CONTACT = "contact",
    CONTACT_CONFIRMED = "contact-confirmed",
    NO_CONTACT = "no-contact"
}

interface TimelineStep {
    id: string;
    title: string;
    description: string;
    status: StepStatus;
    icon: React.ReactNode;
    startDate?: string;
    endDate?: string;
    hasNext?: boolean;
}

interface ApplicationTimelineProps {
    currentStatus: ApplicationStatus;
    reason?: string;
    className?: string;
}

const CURRENT_DATE = new Date("2025-09-18T12:46:00Z");

const StepCircle: React.FC<{
    step: TimelineStep;
    timelineTheme: "success" | "reject" | "withdraw" | "onhold" | "contact";
}> = ({ step }) => {
    const getThemeClasses = (status: StepStatus) => {
        if (status === StepStatus.COMPLETED) return "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700";
        if (status === StepStatus.CURRENT || status === StepStatus.CONTACT || status === StepStatus.CONTACT_CONFIRMED) return "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700";
        if (status === StepStatus.NO_CONTACT || status === StepStatus.REJECTED) return "bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700";
        if (status === StepStatus.WITHDRAWN || status === StepStatus.ONHOLD) return "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700";
        return "bg-muted text-muted-foreground border-border";
    };

    const tooltipThemeClasses = () => {
        if (step.status === StepStatus.NO_CONTACT || step.status === StepStatus.REJECTED) return "bg-red-50 text-red-800 dark:bg-red-800 dark:text-red-100";
        if (step.status === StepStatus.WITHDRAWN || step.status === StepStatus.ONHOLD) return "bg-yellow-50 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
        if (step.status === StepStatus.CURRENT || step.status === StepStatus.CONTACT || step.status === StepStatus.CONTACT_CONFIRMED) return "bg-blue-50 text-blue-800 dark:bg-blue-800 dark:text-blue-100";
        return "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100";
    };

    const getIcon = (status: StepStatus) => {
        switch (status) {
            case StepStatus.COMPLETED: return <CheckCircle className="h-5 w-5" />;
            case StepStatus.CONTACT: return <MessageCircle className="h-5 w-5 animate-pulse" />;
            case StepStatus.CONTACT_CONFIRMED: return <CheckCircle className="h-5 w-5" />;
            case StepStatus.NO_CONTACT: return <Ban className="h-5 w-5" />;
            case StepStatus.REJECTED: return <XCircle className="h-5 w-5" />;
            case StepStatus.WITHDRAWN: return <AlertTriangle className="h-5 w-5" />;
            case StepStatus.ONHOLD: return <PauseCircle className="h-5 w-5" />;
            case StepStatus.PENDING: return step.icon;
            default: return step.icon;
        }
    };

    return (
        <div className="relative group">
            <div
                className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 bg-background transition-all duration-300",
                    getThemeClasses(step.status),
                    (step.status === StepStatus.CURRENT || step.status === StepStatus.CONTACT || step.status === StepStatus.CONTACT_CONFIRMED) && "ring-4 ring-blue-100 dark:ring-blue-900/30",
                    (step.status === StepStatus.NO_CONTACT || step.status === StepStatus.REJECTED) && "ring-4 ring-red-100 dark:ring-red-900/30"
                )}
            >
                {getIcon(step.status)}
            </div>
            {(step.status === StepStatus.CURRENT || step.status === StepStatus.CONTACT || step.status === StepStatus.CONTACT_CONFIRMED) && (
                <span className="absolute -inset-1 rounded-full bg-blue-300 opacity-75 animate-ping dark:bg-blue-700"></span>
            )}
            {step.status !== StepStatus.PENDING && (
                <div
                    className={cn(
                        "absolute top-[-60px] left-1/2 -translate-x-1/2 hidden group-hover:block px-3 py-1 text-xs rounded-md shadow-md z-20 max-w-[200px] text-center",
                        tooltipThemeClasses()
                    )}
                >
                    <span>{step.description}</span>
                    <div className={cn(
                        "absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent",
                        (step.status === StepStatus.NO_CONTACT || step.status === StepStatus.REJECTED) ? "border-t-red-50 dark:border-t-red-800" :
                            (step.status === StepStatus.WITHDRAWN || step.status === StepStatus.ONHOLD) ? "border-t-yellow-50 dark:border-t-yellow-800" :
                                (step.status === StepStatus.CURRENT || step.status === StepStatus.CONTACT || step.status === StepStatus.CONTACT_CONFIRMED) ? "border-t-blue-50 dark:border-t-blue-800" :
                                    "border-t-green-50 dark:border-t-green-900"
                    )} />
                </div>
            )}
        </div>
    );
};

export const ApplicationTimeline = memo(function ApplicationTimeline({ currentStatus, reason, className }: ApplicationTimelineProps) {
    const contactStatuses = [ApplicationStatus.CONTACT_US, ApplicationStatus.CONTACT_CONFIRMED, ApplicationStatus.NO_CONTACT];
    const noContactReasons = [
        "No response received",
        "Candidate unreachable",
        "Process terminated by company",
        "Failed to initiate contact",
    ];

    const rejectedStatuses = [
        ApplicationStatus.REJECTED,
        ApplicationStatus.REJECTED_AFTER_INTERVIEW,
        ApplicationStatus.REJECTED_AFTER_ASSESSMENT,
        ApplicationStatus.OFFER_REJECTED
    ];

    const withdrawnStatuses = [
        ApplicationStatus.WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN,
        ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW
    ];

    const onHoldStatuses = [
        ApplicationStatus.ON_HOLD_AFTER_REVIEW,
        ApplicationStatus.ON_HOLD_AFTER_INTERVIEW,
        ApplicationStatus.ON_HOLD_AFTER_ASSESSMENT,
        ApplicationStatus.ON_HOLD
    ];

    const isRejected = rejectedStatuses.includes(currentStatus);
    const isWithdrawn = withdrawnStatuses.includes(currentStatus);
    const isOnHold = onHoldStatuses.includes(currentStatus);
    const isContact = contactStatuses.includes(currentStatus);
    const isTerminated = isRejected || isWithdrawn;
    const isHired = currentStatus === ApplicationStatus.HIRED;
    const isGeneralOnHold = currentStatus === ApplicationStatus.ON_HOLD;
    const isNoContact = currentStatus === ApplicationStatus.NO_CONTACT;

    let timelineTheme: "success" | "reject" | "withdraw" | "onhold" | "contact" = "success";
    if (isRejected) timelineTheme = "reject";
    if (isWithdrawn) timelineTheme = "withdraw";
    if (isOnHold) timelineTheme = "onhold";
    if (isNoContact) timelineTheme = "reject";
    if ([ApplicationStatus.CONTACT_US, ApplicationStatus.CONTACT_CONFIRMED].includes(currentStatus)) timelineTheme = "contact";

    const getTimelineSteps = (status: ApplicationStatus, reason?: string): TimelineStep[] => {
        const baseSteps: Omit<TimelineStep, "status">[] = [
            {
                id: "applied",
                title: "Application Submitted",
                description: "Your application has been received and is being processed",
                icon: <FileText className="h-4 w-4" />,
            },
            {
                id: "review",
                title: "Under Review",
                description: "HR team is carefully reviewing your application and qualifications",
                icon: <Clock className="h-4 w-4" />,
            },
            {
                id: "interview",
                title: "Interview Stage",
                description: "Interview with our hiring team and department managers",
                icon: <UserCheck className="h-4 w-4" />,
            },
            {
                id: "assessment",
                title: "Skills Assessment",
                description: "Evaluation of your technical skills and capabilities",
                icon: <FileCheck className="h-4 w-4" />,
            },
            {
                id: "background",
                title: "Background Check",
                description: "Verification of credentials, references, and background information",
                icon: <Shield className="h-4 w-4" />,
            },
            {
                id: "offer",
                title: "Offer Extended",
                description: "Formal job offer has been prepared and sent to you",
                icon: <Trophy className="h-4 w-4" />,
            },
            {
                id: "onboarding",
                title: "Onboarding Process",
                description: "Paperwork completion and initial training preparations",
                icon: <BadgeCheck className="h-4 w-4" />,
            },
            {
                id: "hired",
                title: "Hired 🎉",
                description: "Welcome to the team! Your journey with us begins now",
                icon: <CheckCircle className="h-4 w-4" />,
            },
        ];

        let steps: TimelineStep[] = baseSteps.map((step) => ({ ...step, status: StepStatus.PENDING }));

        const statusToIndex: Record<ApplicationStatus, number> = {
            [ApplicationStatus.APPLIED]: 0,
            [ApplicationStatus.UNDER_REVIEW]: 1,
            [ApplicationStatus.INTERVIEW_SCHEDULED]: 2,
            [ApplicationStatus.SKILLS_ASSESSMENT]: 3,
            [ApplicationStatus.BACKGROUND_CHECK]: 4,
            [ApplicationStatus.OFFER_EXTENDED]: 5,
            [ApplicationStatus.ONBOARDING]: 6,
            [ApplicationStatus.HIRED]: 7,
            [ApplicationStatus.ON_HOLD]: -1,
            [ApplicationStatus.CONTACT_US]: 8,
            [ApplicationStatus.CONTACT_CONFIRMED]: 9,
            [ApplicationStatus.NO_CONTACT]: 9,
            [ApplicationStatus.REJECTED]: -1,
            [ApplicationStatus.REJECTED_AFTER_INTERVIEW]: -1,
            [ApplicationStatus.REJECTED_AFTER_ASSESSMENT]: -1,
            [ApplicationStatus.OFFER_REJECTED]: -1,
            [ApplicationStatus.WITHDRAWN]: -1,
            [ApplicationStatus.COMPANY_WITHDRAWN]: -1,
            [ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW]: -1,
            [ApplicationStatus.ON_HOLD_AFTER_REVIEW]: -1,
            [ApplicationStatus.ON_HOLD_AFTER_INTERVIEW]: -1,
            [ApplicationStatus.ON_HOLD_AFTER_ASSESSMENT]: -1,
        };

        let completedIndex = 0;
        let terminationStep: TimelineStep | null = null;
        let insertionIndex = 0;

        if (isTerminated || isOnHold || isContact) {
            switch (status) {
                case ApplicationStatus.WITHDRAWN:
                    completedIndex = 0;
                    insertionIndex = 1;
                    terminationStep = {
                        id: "withdrawn",
                        title: "Application Withdrawn by Candidate",
                        description: reason ? `Application was withdrawn by the candidate: ${reason}` : "Application was withdrawn by the candidate",
                        status: StepStatus.WITHDRAWN,
                        icon: <AlertTriangle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.REJECTED:
                    completedIndex = 1;
                    insertionIndex = 2;
                    terminationStep = {
                        id: "rejected",
                        title: "Application Rejected",
                        description: reason ? `Unfortunately, we've decided not to move forward: ${reason}` : "Unfortunately, we've decided not to move forward",
                        status: StepStatus.REJECTED,
                        icon: <XCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.COMPANY_WITHDRAWN:
                    completedIndex = 1;
                    insertionIndex = 2;
                    terminationStep = {
                        id: "company_withdrawn",
                        title: "Application Withdrawn by Company",
                        description: reason ? `Application was withdrawn by the company: ${reason}` : "Application was withdrawn by the company",
                        status: StepStatus.WITHDRAWN,
                        icon: <AlertTriangle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.REJECTED_AFTER_INTERVIEW:
                    completedIndex = 2;
                    insertionIndex = 3;
                    terminationStep = {
                        id: "rejected",
                        title: "Application Rejected After Interview",
                        description: reason ? `Unfortunately, we've decided not to move forward: ${reason}` : "Unfortunately, we've decided not to move forward after the interview",
                        status: StepStatus.REJECTED,
                        icon: <XCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.REJECTED_AFTER_ASSESSMENT:
                    completedIndex = 3;
                    insertionIndex = 4;
                    terminationStep = {
                        id: "rejected",
                        title: "Application Rejected After Assessment",
                        description: reason ? `Unfortunately, we've decided not to move forward: ${reason}` : "Unfortunately, we've decided not to move forward after the assessment",
                        status: StepStatus.REJECTED,
                        icon: <XCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.COMPANY_WITHDRAWN_AFTER_INTERVIEW:
                    completedIndex = 2;
                    insertionIndex = 3;
                    terminationStep = {
                        id: "company_withdrawn",
                        title: "Application Withdrawn by Company",
                        description: reason ? `Application was withdrawn by the company: ${reason}` : "Application was withdrawn by the company after interview",
                        status: StepStatus.WITHDRAWN,
                        icon: <AlertTriangle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.OFFER_REJECTED:
                    completedIndex = 5;
                    insertionIndex = 6;
                    terminationStep = {
                        id: "offer_rejected",
                        title: "Offer Rejected by Candidate",
                        description: reason ? `Candidate rejected the offer: ${reason}` : "Candidate rejected the offer",
                        status: StepStatus.REJECTED,
                        icon: <XCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.ON_HOLD_AFTER_REVIEW:
                    completedIndex = 1;
                    insertionIndex = 2;
                    terminationStep = {
                        id: "on_hold",
                        title: "Application On Hold",
                        description: reason ? `Application placed on hold: ${reason}` : "Application placed on hold after initial review",
                        status: StepStatus.ONHOLD,
                        icon: <PauseCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.ON_HOLD_AFTER_INTERVIEW:
                    completedIndex = 2;
                    insertionIndex = 3;
                    terminationStep = {
                        id: "on_hold",
                        title: "Application On Hold",
                        description: reason ? `Application placed on hold: ${reason}` : "Application placed on hold after interview",
                        status: StepStatus.ONHOLD,
                        icon: <PauseCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.ON_HOLD_AFTER_ASSESSMENT:
                    completedIndex = 3;
                    insertionIndex = 4;
                    terminationStep = {
                        id: "on_hold",
                        title: "Application On Hold",
                        description: reason ? `Application placed on hold: ${reason}` : "Application placed on hold after assessment",
                        status: StepStatus.ONHOLD,
                        icon: <PauseCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.ON_HOLD:
                    completedIndex = 0;
                    insertionIndex = 1;
                    terminationStep = {
                        id: "on_hold",
                        title: "Application On Hold",
                        description: reason ? `Application placed on hold: ${reason}` : "Application placed on hold",
                        status: StepStatus.ONHOLD,
                        icon: <PauseCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.CONTACT_US:
                    completedIndex = 7;
                    insertionIndex = 8;
                    terminationStep = {
                        id: "contact",
                        title: "Contact Required",
                        description: "Please contact us at +27 82 123 4567 or email support@oceanoftechsa.com to proceed with onboarding.",
                        status: StepStatus.CONTACT,
                        icon: <Phone className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.CONTACT_CONFIRMED:
                    completedIndex = 8;
                    insertionIndex = 9;
                    terminationStep = {
                        id: "confirmation",
                        title: "Contact Confirmed",
                        description: "We have received your contact and will proceed with onboarding.",
                        status: StepStatus.CONTACT_CONFIRMED,
                        icon: <CheckCircle className="h-4 w-4" />,
                    };
                    break;
                case ApplicationStatus.NO_CONTACT:
                    completedIndex = 8;
                    insertionIndex = 9;
                    terminationStep = {
                        id: "no_contact",
                        title: "No Contact Made",
                        description: reason ? `No contact has been made: ${reason}` : noContactReasons[Math.floor(Math.random() * noContactReasons.length)],
                        status: StepStatus.NO_CONTACT,
                        icon: <Ban className="h-4 w-4" />,
                    };
                    break;
            }

            if (terminationStep) {
                steps.splice(insertionIndex, 0, terminationStep);
                if (status === ApplicationStatus.NO_CONTACT) {
                    // For no-contact, keep all previous steps green
                    steps = steps.map((step, i) => ({
                        ...step,
                        status: i < completedIndex ? StepStatus.COMPLETED : i === insertionIndex ? StepStatus.NO_CONTACT : StepStatus.PENDING,
                    }));
                } else {
                    steps = steps.map((step, i) => ({
                        ...step,
                        status: i <= completedIndex ? StepStatus.COMPLETED : i === insertionIndex ? terminationStep!.status : StepStatus.PENDING,
                    }));
                }
            }
        } else if (isHired) {
            steps = steps.map((step, i) => ({
                ...step,
                status: i <= 7 ? StepStatus.COMPLETED : StepStatus.PENDING,
            }));
            const contactStep: TimelineStep = {
                id: "contact",
                title: "Contact Required",
                description: "Please contact us at +27 82 123 4567 or email support@oceanoftechsa.com to proceed with onboarding.",
                status: StepStatus.CONTACT,
                icon: <Phone className="h-4 w-4" />,
            };
            const confirmationStep: TimelineStep = {
                id: "confirmation",
                title: "Contact Confirmed",
                description: "We have received your contact and will proceed with onboarding. If not confirmed, please make contact as soon as possible.",
                status: StepStatus.PENDING,
                icon: <CheckCircle className="h-4 w-4" />,
            };
            steps.splice(8, 0, contactStep);
            steps.push(confirmationStep);
        } else {
            const currentIndex = statusToIndex[status] ?? 0;
            steps = steps.map((step, i) => ({
                ...step,
                status: i < currentIndex ? StepStatus.COMPLETED : i === currentIndex ? StepStatus.CURRENT : StepStatus.PENDING,
            }));
        }

        // Filter to show only previous and current steps
        const currentStepIndex = steps.findIndex(step => [
            StepStatus.CURRENT,
            StepStatus.CONTACT,
            StepStatus.CONTACT_CONFIRMED,
            StepStatus.NO_CONTACT,
            StepStatus.REJECTED,
            StepStatus.WITHDRAWN,
            StepStatus.ONHOLD
        ].includes(step.status));

        let visibleSteps: TimelineStep[];
        if (currentStepIndex >= 0) {
            visibleSteps = steps.slice(0, currentStepIndex + 1);
            if (currentStepIndex < steps.length - 1) {
                visibleSteps[currentStepIndex].hasNext = true;
            }
        } else if (steps.some(step => step.status === StepStatus.COMPLETED)) {
            visibleSteps = steps.filter(step => step.status === StepStatus.COMPLETED);
            if (steps.length > visibleSteps.length) {
                visibleSteps[visibleSteps.length - 1].hasNext = true;
            }
        } else {
            visibleSteps = steps;
        }

        let currentStepDate = new Date(CURRENT_DATE.getTime() - 60 * 24 * 60 * 60 * 1000);
        visibleSteps = visibleSteps.map((step) => {
            if (step.status === StepStatus.PENDING) {
                return { ...step, startDate: undefined, endDate: undefined };
            }
            const startDateStr = currentStepDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
            let endDateStr: string | undefined;
            if (step.status === StepStatus.CURRENT || step.status === StepStatus.ONHOLD || step.status === StepStatus.CONTACT || step.status === StepStatus.CONTACT_CONFIRMED || step.status === StepStatus.NO_CONTACT) {
                endDateStr = undefined;
            } else if (["rejected", "withdrawn", "offer_rejected", "no_contact"].includes(step.id)) {
                endDateStr = startDateStr;
            } else if (step.id === "hired") {
                endDateStr = undefined;
            } else {
                const duration = Math.floor(Math.random() * 4) + 3;
                currentStepDate = new Date(currentStepDate.getTime() + duration * 24 * 60 * 60 * 1000);
                endDateStr = currentStepDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
            }
            currentStepDate = new Date(currentStepDate.getTime() + 24 * 60 * 60 * 1000);
            return { ...step, startDate: startDateStr, endDate: endDateStr };
        });

        return visibleSteps;
    };

    const steps = getTimelineSteps(currentStatus, reason);

    const lastNonPendingIndex = steps.reduce((max, step, i) => (step.status !== StepStatus.PENDING ? i : max), -1);
    const progressWidth = steps.length > 1 ? `${(lastNonPendingIndex / (steps.length - 1)) * 100}%` : "0%";
    const lastStepStatus = steps[lastNonPendingIndex]?.status;

    // Determine progress color - keep it green until the last step if it's contact-related
    let progressColor = "bg-green-300 dark:bg-green-700";
    if (lastStepStatus === StepStatus.NO_CONTACT || lastStepStatus === StepStatus.REJECTED) progressColor = "bg-red-300 dark:bg-red-700";
    if (lastStepStatus === StepStatus.WITHDRAWN || lastStepStatus === StepStatus.ONHOLD) progressColor = "bg-yellow-300 dark:bg-yellow-700";
    if (lastStepStatus === StepStatus.CONTACT || lastStepStatus === StepStatus.CONTACT_CONFIRMED) progressColor = "bg-blue-300 dark:bg-blue-700";

    const getConnectorColor = (status: StepStatus) => {
        if (status === StepStatus.COMPLETED) return "bg-green-300 dark:bg-green-700";
        if (status === StepStatus.NO_CONTACT || status === StepStatus.REJECTED) return "bg-red-300 dark:bg-red-700";
        if (status === StepStatus.WITHDRAWN || status === StepStatus.ONHOLD) return "bg-yellow-300 dark:bg-yellow-700";
        if (status === StepStatus.CONTACT || status === StepStatus.CONTACT_CONFIRMED) return "bg-blue-300 dark:bg-blue-700";
        return "bg-border";
    };

    const getTextColor = (status: StepStatus) => {
        if (status === StepStatus.CURRENT || status === StepStatus.CONTACT || status === StepStatus.CONTACT_CONFIRMED) return "text-blue-700 dark:text-blue-300";
        if (status === StepStatus.NO_CONTACT || status === StepStatus.REJECTED) return "text-red-700 dark:text-red-300";
        if (status === StepStatus.WITHDRAWN || status === StepStatus.ONHOLD) return "text-yellow-700 dark:text-yellow-300";
        return "";
    };

    return (
        <Card className={cn("border shadow-none rounded-sm bg-transparent", className)}>
            <CardHeader>
                <CardTitle className="text-lg flex justify-between w-full items-center">
                    Application Progress{" "}
                    <Tooltip>
                        <TooltipTrigger className="cursor-help">
                            <HelpCircle className="mx-1" size={20} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="mb-0 text-white dark:text-black">Hover over any step to see more details.</p>
                        </TooltipContent>
                    </Tooltip>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    {/* Mobile Timeline - Vertical */}
                    <div className={cn("lg:hidden flex flex-col items-center space-y-6 px-2", isGeneralOnHold && "blur-sm")}>
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <StepCircle step={step} timelineTheme={timelineTheme} />
                                    {index < steps.length - 1 && (
                                        <div
                                            className={cn(
                                                "w-0.5 h-16 mt-2 transition-colors",
                                                getConnectorColor(step.status),
                                                isNoContact && "bg-red-300 dark:bg-red-700"
                                            )}
                                        />
                                    )}
                                </div>
                                <div className="text-center" title={step.status !== StepStatus.PENDING ? step.description : undefined}>
                                    <h4
                                        className={cn(
                                            "font-medium",
                                            getTextColor(step.status),
                                            isNoContact && "text-red-700 dark:text-red-300"
                                        )}
                                    >
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed mb-0">{step.description}</p>
                                    {(step.startDate || step.endDate) && (
                                        <p className="text-xs text-muted-foreground mt-2 font-medium mb-0">
                                            {step.startDate ? `Start: ${step.startDate}` : ""}
                                            {step.startDate && step.endDate ? " - " : ""}
                                            {step.endDate ? `End: ${step.endDate}` : ""}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Timeline - Horizontal */}
                    <div className={cn("hidden lg:block", isGeneralOnHold && "blur-sm")}>
                        <div className="flex items-center justify-center relative">
                            <div className="flex items-center justify-center relative">
                                <div className="absolute top-5 left-0 right-0 h-0.5 bg-border flex items-center justify-center">
                                    <div
                                        className={cn("h-full transition-all duration-700 ease-out", progressColor, isNoContact && "bg-red-300 dark:bg-red-700")}
                                        style={{ width: progressWidth }}
                                    />
                                </div>
                                <div className="flex items-center justify-center space-x-8">
                                    {steps.map((step) => (
                                        <div key={step.id} className="flex flex-col items-center relative z-10">
                                            <StepCircle step={step} timelineTheme={timelineTheme} />
                                            <div className="mt-4 text-center max-w-32 min-h-[60px]">
                                                <h4
                                                    className={cn(
                                                        "text-sm font-medium text-balance leading-tight",
                                                        getTextColor(step.status),
                                                        isNoContact && "text-red-700 dark:text-red-300"
                                                    )}
                                                >
                                                    {step.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground mt-1 font-medium h-4 mb-0">
                                                    {(step.startDate || step.endDate) ? `${step.startDate ? `Start: ${step.startDate}` : ""}${step.startDate && step.endDate ? " - " : ""}${step.endDate ? `End: ${step.endDate}` : ""}` : ""}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});
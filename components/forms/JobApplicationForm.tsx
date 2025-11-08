"use client"

import type {
    EducationalBackground,
    JobApplicationErrors,
    JobApplicationFormData,
    WorkExperience,
} from "@/Shared/job-application"
import {Alert, AlertDescription} from "@/components/ui/alert"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Progress} from "@/components/ui/progress"
import {Textarea} from "@/components/ui/textarea"
import {validateEmail} from "@/lib/utils"
import {
    AlertTriangle,
    Briefcase,
    CheckCircle,
    ClipboardCheck,
    Clock,
    Copy,
    Download,
    Eye,
    FileCheck,
    FileText,
    FolderOpen,
    GraduationCap,
    Info,
    Loader2,
    Plus,
    RotateCw,
    Shield,
    Trash2,
    Upload,
    User,
    X,
    ZoomIn,
    HelpCircle
} from "lucide-react"
import type React from "react"
import {JSX, useCallback, useState} from "react"
import {Career} from "../conts"
import {ChevronUp, ChevronDown} from "lucide-react";
import {TiArrowBackOutline} from "react-icons/ti";
import {FiSend} from "react-icons/fi";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import Image from "next/image"

// Define types for the uploaded files state
interface UploadedFileState {
    uploaded: boolean
    fileName: string
    fileUrl: string
    type: string
    uploading?: boolean
}

interface UploadedFiles {
    academicRecords: Record<string, UploadedFileState>
    resume: UploadedFileState
    coverLetter: UploadedFileState
    otherDocuments: UploadedFileState
}

// Define types for the preview document
interface PreviewDocument {
    url: string
    name: string
    type: string
}

// // Define types for step information
// interface StepInfo {
//   title: string
//   description: string
//   icon: React.ComponentType<{ className?: string }>
//   tips: string[]
// }

interface JobApplicationFormProps {
    job: Career
}

export default function JobApplicationForm({job}: JobApplicationFormProps) {
    const [step, setStep] = useState(1)
    const [submitting, setSubmitting] = useState(false)
    const [submissionError, setSubmissionError] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [uploadingDocuments, setUploadingDocuments] = useState(false)
    const [documentBeingUploaded, setDocumentBeingUploaded] = useState("")
    const [applicationId, setApplicationId] = useState("")
    const [trackingLink, setTrackingLink] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0)
    const [previewDocument, setPreviewDocument] = useState<PreviewDocument | null>(null)
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(100)
    const [collapsedEduStates, setCollapsedEduStates] = useState<Record<string, boolean>>({})
    const [collapsedWorkStates, setCollapsedWorkStates] = useState<Record<string, boolean>>({})
    const [individualUploadProgress, setIndividualUploadProgress] = useState<{ [key: string]: number; }>({});

    // Form data state
    const [formData, setFormData] = useState<JobApplicationFormData>({
        name: "",
        surname: "",
        email: "",
        phone: "",
        dob: "",
        p_g_link: "",
        about: "",
        educationalBackgrounds: [
            {
                id: "edu-1",
                educational_level: "",
                institution: "",
                start_date: "",
                end_date: "",
                d_or_c: "",
                field_of_study: "",
                academicRecord: null,
            },
        ],
        workExperiences: [
            {
                id: "work-1",
                job_title: "",
                company: "",
                work_start_date: "",
                work_end_date: "",
                responsibilities: "",
            },
        ],
        resume: null,
        CoverLetter: null,
        other: null,
        agree: false,
    })

    // Error states
    const [errors, setErrors] = useState<JobApplicationErrors>({
        nameError: false,
        surnameError: false,
        emailError: false,
        phoneError: false,
        dobError: false,
        aboutError: false,
        educationalBackgroundsError: {},
        workExperiencesError: {},
        resumeError: false,
        CoverLetterError: false,
        otherError: false,
    })

    // File upload states
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({
        academicRecords: {},
        resume: {uploaded: false, fileName: "", fileUrl: "", type: ""},
        coverLetter: {uploaded: false, fileName: "", fileUrl: "", type: ""},
        otherDocuments: {uploaded: false, fileName: "", fileUrl: "", type: ""},
    })

    const updateFormData = (field: keyof JobApplicationFormData, value: string | boolean | File) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }

    const updateError = (field: keyof JobApplicationErrors, value: boolean) => {
        setErrors((prev) => ({...prev, [field]: value}))
    }

    const resetErrors = (fields: (keyof JobApplicationErrors)[]) => {
        setErrors((prev) => {
            const newErrors = {...prev}
            fields.forEach((field) => {
                if (field === "educationalBackgroundsError" || field === "workExperiencesError") {
                    const subFields: string[] = Object.keys(newErrors[field] || {})
                    const resetObj: { [key: string]: { [field: string]: boolean } } = {}
                    subFields.forEach((subField) => {
                        resetObj[subField] = Object.keys(newErrors[field][subField] || {}).reduce(
                            (acc, key) => ({...acc, [key]: false}),
                            {}
                        )
                    })
                    newErrors[field] = resetObj
                } else {
                    newErrors[field] = false
                }
            })
            return newErrors
        })
    }

    const scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    const handleEmailValidation = useCallback(() => {
        const valid = validateEmail(formData.email)
        setIsEmailValid(valid)
        return valid
    }, [formData.email])

    const handlePreviewDocument = useCallback((url: string, name: string, type: string) => {
        console.log("[v0] Opening document preview:", {name, type})
        setPreviewDocument({url, name, type})
        setZoomLevel(100)
        setIsPreviewOpen(true)
    }, [])

    const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 25, 200))
    const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 25, 50))
    const handleZoomReset = () => setZoomLevel(100)

    const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Simulate upload progress
            setIndividualUploadProgress(prev => ({ ...prev, resume: 0 }));
            updateFormData("resume", file);

            // Simulate upload process
            const simulateUpload = () => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    setIndividualUploadProgress(prev => ({ ...prev, resume: progress }));
                    if (progress >= 100) {
                        clearInterval(interval);
                        const fileUrl = URL.createObjectURL(file);
                        setUploadedFiles(prev => ({
                            ...prev,
                            resume: {
                                uploaded: true,
                                fileName: file.name,
                                fileUrl,
                                type: file.type,
                            },
                        }));
                        setTimeout(() => {
                            setIndividualUploadProgress(prev => ({ ...prev, resume: 0 }));
                        }, 1000);
                    }
                }, 200);
            };

            simulateUpload();
        }
    };

    const handleCoverLetterUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIndividualUploadProgress(prev => ({ ...prev, coverLetter: 0 }));
            updateFormData("CoverLetter", file);

            const simulateUpload = () => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    setIndividualUploadProgress(prev => ({ ...prev, coverLetter: progress }));
                    if (progress >= 100) {
                        clearInterval(interval);
                        const fileUrl = URL.createObjectURL(file);
                        setUploadedFiles(prev => ({
                            ...prev,
                            coverLetter: {
                                uploaded: true,
                                fileName: file.name,
                                fileUrl,
                                type: file.type,
                            },
                        }));
                        setTimeout(() => {
                            setIndividualUploadProgress(prev => ({ ...prev, coverLetter: 0 }));
                        }, 1000);
                    }
                }, 200);
            };

            simulateUpload();
        }
    };

    const handleOtherDocumentsUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIndividualUploadProgress(prev => ({ ...prev, otherDocuments: 0 }));
            updateFormData("other", file);

            const simulateUpload = () => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    setIndividualUploadProgress(prev => ({ ...prev, otherDocuments: progress }));
                    if (progress >= 100) {
                        clearInterval(interval);
                        const fileUrl = URL.createObjectURL(file);
                        setUploadedFiles(prev => ({
                            ...prev,
                            otherDocuments: {
                                uploaded: true,
                                fileName: file.name,
                                fileUrl,
                                type: file.type,
                            },
                        }));
                        setTimeout(() => {
                            setIndividualUploadProgress(prev => ({ ...prev, otherDocuments: 0 }));
                        }, 1000);
                    }
                }, 200);
            };

            simulateUpload();
        }
    };

    const handlePersonalDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const personalFields: (keyof JobApplicationErrors)[] = [
            "nameError",
            "surnameError",
            "emailError",
            "phoneError",
            "dobError",
            "aboutError",
        ]

        resetErrors(personalFields)

        let hasErrors = false

        if (!formData.name) {
            updateError("nameError", true)
            hasErrors = true
        }
        if (!formData.surname) {
            updateError("surnameError", true)
            hasErrors = true
        }
        if (!formData.email) {
            updateError("emailError", true)
            hasErrors = true
        }
        if (!formData.phone) {
            updateError("phoneError", true)
            hasErrors = true
        }
        if (!formData.dob) {
            updateError("dobError", true)
            hasErrors = true
        }
        if (!formData.about) {
            updateError("aboutError", true)
            hasErrors = true
        }

        if (!hasErrors) {
            setStep(2)
            scrollToTop()
            setSubmissionError(false)
        } else {
            setSubmissionError(true)
        }
    }

    const addEducationalBackground = () => {
        const newId = `edu-${Date.now()}`
        setFormData((prev) => ({
            ...prev,
            educationalBackgrounds: [
                ...prev.educationalBackgrounds,
                {
                    id: newId,
                    educational_level: "",
                    institution: "",
                    start_date: "",
                    end_date: "",
                    d_or_c: "",
                    field_of_study: "",
                    academicRecord: null,
                },
            ],
        }))
    }

    const removeEducationalBackground = (id: string) => {
        if (formData.educationalBackgrounds.length > 1) {
            setFormData((prev) => ({
                ...prev,
                educationalBackgrounds: prev.educationalBackgrounds.filter((edu) => edu.id !== id),
            }))
            setErrors((prev) => {
                const newErrors = {...prev}
                delete newErrors.educationalBackgroundsError[id]
                return newErrors
            })
            setUploadedFiles((prev) => {
                const newAcademicRecords = {...prev.academicRecords}
                delete newAcademicRecords[id]
                return {...prev, academicRecords: newAcademicRecords}
            })
        }
    }

    const updateEducationalBackground = (id: string, field: keyof EducationalBackground, value: string | File | null) => {
        setFormData((prev) => ({
            ...prev,
            educationalBackgrounds: prev.educationalBackgrounds.map((edu) =>
                edu.id === id ? {...edu, [field]: value} : edu
            ),
        }))
    }

    const addWorkExperience = () => {
        const newId = `work-${Date.now()}`
        setFormData((prev) => ({
            ...prev,
            workExperiences: [
                ...prev.workExperiences,
                {
                    id: newId,
                    job_title: "",
                    company: "",
                    work_start_date: "",
                    work_end_date: "",
                    responsibilities: "",
                },
            ],
        }))
    }

    const removeWorkExperience = (id: string) => {
        if (formData.workExperiences.length > 1) {
            setFormData((prev) => ({
                ...prev,
                workExperiences: prev.workExperiences.filter((work) => work.id !== id),
            }))
            setErrors((prev) => {
                const newErrors = {...prev}
                delete newErrors.workExperiencesError[id]
                return newErrors
            })
        }
    }

    const updateWorkExperience = (id: string, field: keyof WorkExperience, value: string) => {
        setFormData((prev) => ({
            ...prev,
            workExperiences: prev.workExperiences.map((work) => (work.id === id ? {...work, [field]: value} : work)),
        }))
    }

    const handleEducationalDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let hasErrors = false
        const newEducationalErrors: { [key: string]: { [field: string]: boolean } } = {}

        formData.educationalBackgrounds.forEach((edu) => {
            const eduErrors: { [field: string]: boolean } = {}

            if (!edu.educational_level) eduErrors.educational_level = true
            if (!edu.institution) eduErrors.institution = true
            if (!edu.start_date) eduErrors.start_date = true
            if (!edu.end_date) eduErrors.end_date = true
            if (!edu.d_or_c) eduErrors.d_or_c = true
            if (!edu.field_of_study) eduErrors.field_of_study = true
            if (!edu.academicRecord) eduErrors.academicRecord = true

            if (Object.keys(eduErrors).length > 0) {
                newEducationalErrors[edu.id] = eduErrors
                hasErrors = true
            }
        })

        setErrors((prev) => ({
            ...prev,
            educationalBackgroundsError: newEducationalErrors,
        }))

        if (!hasErrors) {
            setStep(3)
            setSubmissionError(false)
            window.scrollTo(0, 0)
        } else {
            setSubmissionError(true)
        }
    }

    const handleWorkExperienceSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let hasErrors = false
        const newWorkErrors: { [key: string]: { [field: string]: boolean } } = {}

        formData.workExperiences.forEach((work) => {
            const workErrors: { [field: string]: boolean } = {}

            if (!work.job_title) workErrors.job_title = true
            if (!work.company) workErrors.company = true
            if (!work.work_start_date) workErrors.work_start_date = true
            if (!work.work_end_date) workErrors.work_end_date = true
            if (!work.responsibilities) workErrors.responsibilities = true

            if (Object.keys(workErrors).length > 0) {
                newWorkErrors[work.id] = workErrors
                hasErrors = true
            }
        })

        setErrors((prev) => ({
            ...prev,
            workExperiencesError: newWorkErrors,
        }))

        if (!hasErrors) {
            setStep(4)
            setSubmissionError(false)
            window.scrollTo(0, 0)
        } else {
            setSubmissionError(true)
        }
    }

    const simulateDocumentUpload = async (fileName: string, delay = 2000) => {
        console.log(`[v0] Starting upload for ${fileName}`)
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`[v0] Completed upload for ${fileName}`)
                resolve(true)
            }, delay)
        })
    }

    const generateApplicationData = () => {
        const id = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
        const tracking = `${window.location.origin}/track/${id}`
        setApplicationId(id)
        setTrackingLink(tracking)
        console.log(`[v0] Generated application ID: ${id}`)
        return {id, tracking}
    }

    const handleRemoveAcademicRecord = (eduId: string) => {
        setFormData(prev => ({
            ...prev,
            educationalBackgrounds: prev.educationalBackgrounds.map(edu =>
                edu.id === eduId ? { ...edu, academicRecord: null } : edu
            )
        }));

        setUploadedFiles(prev => {
            const newAcademicRecords = { ...prev.academicRecords };
            delete newAcademicRecords[eduId];
            return { ...prev, academicRecords: newAcademicRecords };
        });
    };

    const handleRemoveResume = () => {
        updateFormData("resume", '');
        setUploadedFiles(prev => ({
            ...prev,
            resume: { uploaded: false, fileName: "", fileUrl: "", type: "" }
        }));
    };

    const handleRemoveCoverLetter = () => {
        updateFormData("CoverLetter", '');
        setUploadedFiles(prev => ({
            ...prev,
            coverLetter: { uploaded: false, fileName: "", fileUrl: "", type: "" }
        }));
    };

    const handleRemoveOtherDocuments = () => {
        updateFormData("other", '');
        setUploadedFiles(prev => ({
            ...prev,
            otherDocuments: { uploaded: false, fileName: "", fileUrl: "", type: "" }
        }));
    };

    const handleFinalSubmit = async () => {
        console.log("[v0] Starting final submission process")
        setSubmitting(true)
        setUploadingDocuments(true)
        setUploadProgress(0)

        try {
            const documentsToUpload = []

            formData.educationalBackgrounds.forEach((edu) => {
                if (edu.academicRecord && uploadedFiles.academicRecords[edu.id]) {
                    const fileName = uploadedFiles.academicRecords[edu.id].fileName || "Academic Record"
                    documentsToUpload.push(simulateDocumentUpload(fileName, 2000))
                    setDocumentBeingUploaded(fileName) // Set the document name being uploaded
                }
            })

            if (formData.resume) {
                const fileName = uploadedFiles.resume.fileName || "Resume"
                documentsToUpload.push(simulateDocumentUpload(fileName, 1500))
                setDocumentBeingUploaded(fileName) // Set the document name being uploaded
            }
            if (formData.CoverLetter) {
                const fileName = uploadedFiles.coverLetter.fileName || "Cover Letter"
                documentsToUpload.push(simulateDocumentUpload(fileName, 1800))
                setDocumentBeingUploaded(fileName) // Set the document name being uploaded
            }
            if (formData.other) {
                const fileName = uploadedFiles.otherDocuments.fileName || "Supporting Document"
                documentsToUpload.push(simulateDocumentUpload(fileName, 1200))
                setDocumentBeingUploaded(fileName) // Set the document name being uploaded
            }

            if (documentsToUpload.length > 0) {
                console.log(`[v0] Uploading ${documentsToUpload.length} documents...`)

                const progressInterval = setInterval(() => {
                    setUploadProgress((prev) => Math.min(prev + 10, 90))
                }, 200)

                await Promise.all(documentsToUpload)
                clearInterval(progressInterval)
                setUploadProgress(100)
                console.log("[v0] All documents uploaded successfully")
            }

            setDocumentBeingUploaded("")

            setUploadingDocuments(false)

            const {id, tracking} = generateApplicationData()
            setApplicationId(id)
            setTrackingLink(tracking)

            const data = {
                name: formData.name,
                surname: formData.surname,
                email: formData.email,
                contact_number: formData.phone,
                dob: formData.dob,
                portFolioOrGitHub: formData.p_g_link,
                about: formData.about,
                educationalBackgrounds: formData.educationalBackgrounds.map(({...rest}) => rest),
                workExperiences: formData.workExperiences.map(({...rest}) => rest),
                resume: formData.resume,
                coverLetter: formData.CoverLetter,
                supportingDocument: formData.other,
                JobPost: job.id,
                applicationId: id,
            }

            console.log("[v0] Submitting application data...", data)

            await new Promise((resolve) => setTimeout(resolve, 1000))

            console.log("[v0] Application submitted successfully")
            toast.success("Application submitted successfully!", {
                description: "We have received your application",
            })
            setStep(6)
            scrollToTop();
        } catch (error) {
            console.error("[v0] Submission error:", error);
            toast.error("Failed to submit application", {
                description: error instanceof Error ? error.message : "Please try again later.",
            });
            setSubmissionError(true)
        } finally {
            setSubmitting(false)
            setUploadingDocuments(false)
            setUploadProgress(0)
            setDocumentBeingUploaded("")
        }
    }

    const goBack = () => {
        setStep((prev) => prev - 1)
        scrollToTop()
    }

    const goToStep = (targetStep: number) => {
        setStep(targetStep)
        scrollToTop()
    }

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8 w-full">
            <h1 className="text-3xl font-bold">Apply Now - {job.title}</h1>
            <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                <DialogContent
                    className="max-w-6xl min-w-[220px] md:min-w-[900px] max-h-[85vh] overflow-hidden w-full bg-white dark:bg-[#202124] rounded-md shadow-md pb-6 mx-4">
                    <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-6 w-full">
                        <DialogTitle className="flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400"/>
                                <span className="truncate text-lg font-semibold text-gray-900 dark:text-gray-100">
                                  {previewDocument?.name}
                                </span>
                                <Badge variant="outline"
                                       className="ml-3 text-xs border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                                    {(() => {
                                        if (!previewDocument?.name) return "UNKNOWN";
                                        const extension = previewDocument.name.split(".").pop()?.toLowerCase();
                                        if (extension === "doc") return "DOC";
                                        if (extension === "docx") return "DOCX";
                                        return previewDocument?.type.split("/")[1]?.toUpperCase() || "UNKNOWN";
                                    })()}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-3">
                                {previewDocument?.type.includes("pdf") && (
                                    <div
                                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2 shadow-sm">
                                        <Button size="sm" variant="ghost" onClick={handleZoomOut}
                                                disabled={zoomLevel <= 50} className="p-1">
                                            <ZoomIn className="h-4 w-4 rotate-180 text-gray-600 dark:text-gray-300"/>
                                        </Button>
                                        <span
                                            className="text-sm px-3 text-gray-700 dark:text-gray-200 min-w-[70px] text-center">
                                          {zoomLevel}%
                                        </span>
                                        <Button size="sm" variant="ghost" onClick={handleZoomIn}
                                                disabled={zoomLevel >= 200} className="p-1">
                                            <ZoomIn className="h-4 w-4 text-gray-600 dark:text-gray-300"/>
                                        </Button>
                                        <Button size="sm" variant="ghost" onClick={handleZoomReset} className="p-1">
                                            <RotateCw className="h-4 w-4 text-gray-600 dark:text-gray-300"/>
                                        </Button>
                                    </div>
                                )}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                        const link = document.createElement("a")
                                        link.href = previewDocument?.url || ""
                                        link.download = previewDocument?.name || "document"
                                        link.click()
                                    }}
                                    className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900"
                                >
                                    <Download className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400"/>
                                    Download
                                </Button>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-auto p-6 w-full">
                        {previewDocument?.type.includes("pdf") ? (
                            <div className="flex justify-center items-center w-full">
                                <iframe
                                    src={previewDocument.url}
                                    className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
                                    style={{
                                        width: `${zoomLevel}%`,
                                        height: "90vh",
                                        minWidth: "700px",
                                        maxWidth: "100%",
                                        maxHeight: "90vh",
                                    }}
                                    title="Document Preview"
                                />
                            </div>
                        ) : previewDocument?.type.includes("image") ? (
                            <div className="flex justify-center items-center w-full">
                                <Image
                                    src={previewDocument.url || "/placeholder.svg"}
                                    alt="Document Preview"
                                    fill
                                    className="max-w-[90%] max-h-[90vh] object-contain border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
                                    style={{transform: `scale(${zoomLevel / 100})`}}
                                />
                            </div>
                        ) : (
                            <div
                                className="flex flex-col items-center justify-center h-[90vh] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800">
                                <FileText className="h-24 w-24 text-gray-400 dark:text-gray-500 mb-6"/>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Preview Not
                                    Available</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg mb-6">
                                    This file type cannot be previewed in the browser. You can download it to view the
                                    contents.
                                </p>
                                <Button
                                    onClick={() => {
                                        const link = document.createElement("a")
                                        link.href = previewDocument?.url || ""
                                        link.download = previewDocument?.name || "document"
                                        link.click()
                                    }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors"
                                >
                                    <Download className="h-5 w-5 mr-2 text-white"/>
                                    Download File
                                </Button>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((stepNumber: number): JSX.Element => {
                        // Helper function to check if the current step's fields are complete
                        const isCurrentStepComplete = () => {
                            if (stepNumber !== step) return true; // Only validate the current step

                            let isComplete = true;
                            switch (step) {
                                case 1: // Step 1: Personal Details
                                    isComplete = !!formData.name && !!formData.surname && !!formData.email && !!formData.phone && !!formData.dob && !!formData.about;
                                    break;
                                case 2: // Step 2: Educational Background
                                    isComplete = formData.educationalBackgrounds.every((edu) =>
                                        !!edu.educational_level &&
                                        !!edu.institution &&
                                        !!edu.start_date &&
                                        !!edu.end_date &&
                                        !!edu.d_or_c &&
                                        !!edu.field_of_study
                                    );
                                    break;
                                case 3: // Step 3: Work Experience
                                    isComplete = formData.workExperiences.every((work) =>
                                        !!work.job_title &&
                                        !!work.company &&
                                        !!work.work_start_date &&
                                        !!work.work_end_date &&
                                        !!work.responsibilities
                                    );
                                    break;
                                case 4: // Step 4: Supporting Documents
                                    isComplete = !!formData.resume && !!formData.CoverLetter && !!formData.other;
                                    break;
                                case 5: // Step 5: Review & Submit (no new fields, just review)
                                    isComplete = true; // Handled by previous steps' validation
                                    break;
                            }
                            return isComplete;
                        };

                        // Helper function to check if all previous steps are valid
                        const isPreviousStepValid = () => {
                            if (stepNumber === 1) return true; // Step 1 has no previous steps

                            let isValid = true;
                            switch (stepNumber) {
                                case 2: // Check Step 1 validation
                                    isValid = !!formData.name && !!formData.surname && !!formData.email && !!formData.phone && !!formData.dob && !!formData.about;
                                    break;
                                case 3: // Check Step 1 and Step 2 validation
                                    isValid = !!formData.name && !!formData.surname && !!formData.email && !!formData.phone && !!formData.dob && !!formData.about;
                                    isValid = isValid && formData.educationalBackgrounds.every((edu) =>
                                        !!edu.educational_level &&
                                        !!edu.institution &&
                                        !!edu.start_date &&
                                        !!edu.end_date &&
                                        !!edu.d_or_c &&
                                        !!edu.field_of_study
                                    );
                                    break;
                                case 4: // Check Step 1, Step 2, and Step 3 validation
                                    isValid = !!formData.name && !!formData.surname && !!formData.email && !!formData.phone && !!formData.dob && !!formData.about;
                                    isValid = isValid && formData.educationalBackgrounds.every((edu) =>
                                        !!edu.educational_level &&
                                        !!edu.institution &&
                                        !!edu.start_date &&
                                        !!edu.end_date &&
                                        !!edu.d_or_c &&
                                        !!edu.field_of_study
                                    );
                                    isValid = isValid && formData.workExperiences.every((work) =>
                                        !!work.job_title &&
                                        !!work.company &&
                                        !!work.work_start_date &&
                                        !!work.work_end_date &&
                                        !!work.responsibilities
                                    );
                                    break;
                                case 5: // Check all previous steps (1, 2, 3, 4)
                                    isValid = !!formData.name && !!formData.surname && !!formData.email && !!formData.phone && !!formData.dob && !!formData.about;
                                    isValid = isValid && formData.educationalBackgrounds.every((edu) =>
                                        !!edu.educational_level &&
                                        !!edu.institution &&
                                        !!edu.start_date &&
                                        !!edu.end_date &&
                                        !!edu.d_or_c &&
                                        !!edu.field_of_study
                                    );
                                    isValid = isValid && formData.workExperiences.every((work) =>
                                        !!work.job_title &&
                                        !!work.company &&
                                        !!work.work_start_date &&
                                        !!work.work_end_date &&
                                        !!work.responsibilities
                                    );
                                    isValid = isValid && !!formData.resume && !!formData.CoverLetter && !!formData.other;
                                    break;
                            }
                            return isValid;
                        };

                        return (
                            <div key={stepNumber} className="flex items-center">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => isPreviousStepValid() && isCurrentStepComplete() && goToStep(stepNumber)}
                                    disabled={!isPreviousStepValid() || !isCurrentStepComplete()}
                                    className={`w-8 cursor-pointer h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                                        stepNumber < step
                                            ? "bg-green-500 text-white shadow-lg"
                                            : stepNumber === step
                                                ? "bg-green-500/90 text-white shadow-lg ring-2 ring-green-200"
                                                : "bg-muted text-muted-foreground"
                                    } ${(!isPreviousStepValid() || !isCurrentStepComplete()) && stepNumber >= step ? "cursor-not-allowed opacity-50" : ""}`}
                                >
                                    {stepNumber < step ? <CheckCircle className="h-4 w-4"/> : stepNumber}
                                </Button>
                                {stepNumber < 5 && (
                                    <div
                                        className={`w-8 h-0.5 mx-2 transition-colors duration-300 ${
                                            stepNumber < step ? "bg-green-500" : "bg-muted"
                                        }`}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3"/>
                    Step {step} of 5
                </Badge>
            </div>

            {/* Personal Details - Step 1 */}
            {step === 1 && (
                <Card className="bg-transparent rounded-md border shadow-none">
                    <CardHeader>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#0b9944]/30 rounded-md">
                                <User className="h-6 w-6 text-[#0b9944]"/>
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Personal Information</CardTitle>
                                <p className="text-muted-foreground mt-1">
                                    Please provide your basic personal details. This information helps us understand who
                                    you are and how to contact you.
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {submissionError && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertTriangle className="h-4 w-4"/>
                                <AlertDescription>Unable to continue, missing required field(s)</AlertDescription>
                            </Alert>
                        )}

                        <div className="flex flex-col gap-2 mb-7">
                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Ensure your email is correct as
                                    we&apos;ll use it for communication</AlertDescription>
                            </Alert>

                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Double-check your contact
                                    number.</AlertDescription>
                            </Alert>

                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto ">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white flex items-center">Hover
                                    over <HelpCircle className="mx-1 h-5 w-5 cursor-help" size={18}/> to get more help
                                </AlertDescription>
                            </Alert>
                        </div>

                        <form onSubmit={handlePersonalDetailsSubmit} className="space-y-6 mt-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name" className="mb-1 w-full flex justify-between items-center">
                                        <span>Name <span className="text-red-500">*</span></span>
                                        <Tooltip>
                                            <TooltipTrigger><HelpCircle
                                                className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-white dark:text-black mb-0">Please provide your first
                                                    name and, if you have a second name, include it as shown on your
                                                    official documents.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => updateFormData("name", e.target.value)}
                                        className={`rounded-sm ${errors.nameError ? "border-red-500" : ""}`}
                                        placeholder="eg., John"
                                    />
                                    {errors.nameError && (
                                        <p className="text-xs text-red-500 mt-1">
                                            <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                            Please provide your name.
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="surname" className="mb-1 w-full flex justify-between items-center">
                                        <span>Surname <span className="text-red-500">*</span></span>
                                        <Tooltip>
                                            <TooltipTrigger><HelpCircle
                                                className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-white dark:text-black mb-0">Enter your last name as
                                                    it appears on official documents.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </Label>
                                    <Input
                                        id="surname"
                                        value={formData.surname}
                                        onChange={(e) => updateFormData("surname", e.target.value)}
                                        className={`rounded-sm ${errors.surnameError ? "border-red-500" : ""}`}
                                        placeholder="eg., Smith"
                                    />
                                    {errors.surnameError && (
                                        <p className="text-xs text-red-500 mt-1">
                                            <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                            Please provide your surname.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email" className="mb-1 w-full flex justify-between items-center">
                                    <span>Email Address <span className="text-red-500">*</span></span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle
                                            className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Provide a valid email address
                                                for communication (e.g., example@email.com).</p>
                                            <p className="text-white dark:text-black mb-0">The provided email will be
                                                used for communications.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>
                                {!isEmailValid && <p className="text-xs text-red-500 my-1">Email is not valid</p>}
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => updateFormData("email", e.target.value)}
                                    onBlur={handleEmailValidation}
                                    onFocus={() => updateError("emailError", false)}
                                    className={`rounded-sm ${errors.emailError ? "border-red-500" : ""}`}
                                    placeholder="eg., example@mail.com"
                                />
                                {errors.emailError && (
                                    <p className="text-xs text-red-500 mt-1">
                                        <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                        Please provide your email address.
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="phone" className="mb-1 w-full flex justify-between items-center">
                                    <span>Contact number <span className="text-red-500">*</span></span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle
                                            className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Enter your contact number
                                                (e.g., 0823 456 789) with no letters.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>
                                <Input
                                    id="phone"
                                    type="number"
                                    value={formData.phone}
                                    onChange={(e) => updateFormData("phone", e.target.value)}
                                    className={`rounded-sm ${errors.phoneError ? "border-red-500" : ""}`}
                                    placeholder="eg., 0234567891"
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                    <strong>Note:</strong> No Letters are allowed
                                </p>
                                {errors.phoneError && (
                                    <p className="text-xs text-red-500 mt-1">
                                        <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                        Please provide your contact number.
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="dob" className="mb-1 w-full flex justify-between items-center">
                                    <span>Date of birth <span className="text-red-500">*</span></span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle
                                            className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Select your date of birth in
                                                YYYY-MM-DD format.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={(e) => updateFormData("dob", e.target.value)}
                                    className={`rounded-sm w-full ${errors.dobError ? "border-red-500" : ""}`}
                                />
                                {errors.dobError && (
                                    <p className="text-xs text-red-500 mt-1">
                                        <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                        Please provide your date of birth.
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="portfolio" className="mb-1 w-full flex justify-between items-center">
                                    <span>Portfolio/Github link <span className="text-red-500">*</span></span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle
                                            className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Optional: Add a link to your
                                                portfolio or GitHub profile.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>
                                <Input
                                    id="portfolio"
                                    value={formData.p_g_link}
                                    className="rounded-sm"
                                    placeholder="eg., www.yourportfolio.com"
                                    onChange={(e) => updateFormData("p_g_link", e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="about" className="mb-1 w-full flex justify-between items-center">
                                    <span>Tell us about yourself <span className="text-red-500">*</span></span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle
                                            className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Write a brief introduction
                                                about yourself (e.g., skills, experience, or goals)</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>
                                <Textarea
                                    id="about"
                                    value={formData.about}
                                    onChange={(e) => updateFormData("about", e.target.value)}
                                    placeholder="A brief description about yourself"
                                    className={`rounded-sm w-full h-40 text-base p-3 ${errors.aboutError ? "border-red-500" : ""}`}
                                />

                                {errors.aboutError && (
                                    <p className="text-xs text-red-500 mt-1">
                                        <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                        Please give us a brief intro of yourself.
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="text-sm text-muted-foreground hidden md:block">Step {step} of 5</div>
                                <Button type="submit"
                                        className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer">
                                    Continue
                                    <User className="ml-2 h-4 w-4"/>
                                </Button>
                                <div className="text-sm text-muted-foreground md:hidden">Step {step} of 5</div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Educational Background - Step 2 */}
            {step === 2 && (
                <Card className="bg-transparent rounded-md border shadow-none">
                    <CardHeader>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#0b9944]/30 rounded-md">
                                <GraduationCap className="h-6 w-6 text-[#0b9944]"/>
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Educational Background</CardTitle>
                                <p className="text-muted-foreground mt-1">
                                    Tell us about your educational qualifications and academic achievements.
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white"> Upload clear, readable
                                    academic documents. Include all relevant certifications.</AlertDescription>
                            </Alert>

                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Include all relevant
                                    certifications.</AlertDescription>
                            </Alert>

                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto ">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white flex items-center">Hover
                                    over <HelpCircle className="mx-1 h-5 w-5 cursor-help" size={18}/> to get more help
                                </AlertDescription>
                            </Alert>
                        </div>

                        {submissionError && (
                            <Alert variant="destructive" className="my-6">
                                <AlertTriangle className="h-4 w-4"/>
                                <AlertDescription className="flex items-center justify-between">
                                    <span>Unable to continue, missing required fields</span>
                                    <Button variant="ghost" size="sm" onClick={() => setSubmissionError(false)}>
                                        <X className="h-4 w-4"/>
                                    </Button>
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleEducationalDetailsSubmit} className="space-y-4 mt-10">
                            {formData.educationalBackgrounds.map((edu: EducationalBackground, index: number) => {
                                const isCollapsed: boolean = collapsedEduStates[edu.id] || false;
                                return (
                                    <Card key={edu.id}
                                          className="bg-transparent border rounded-sm shadow-none py-2 transition-all duration-500 ease-in-out">
                                        <CardHeader className="py-0 cursor-pointer flex items-center w-full justify-between"
                                                    onClick={() => setCollapsedEduStates((prev) => ({
                                                        ...prev,
                                                        [edu.id]: !isCollapsed
                                                    }))}>
                                            <div className="flex items-center justify-between w-full">
                                                <CardTitle className="text-lg">
                                                    {edu.institution ? (
                                                        <>
                                                            <span>{index + 1}. {edu.institution}</span>
                                                            {" - "}
                                                            <span className="text-sm">{edu.educational_level}</span>
                                                        </>
                                                    ) : (
                                                        <span
                                                            className="text-gray-500 italic">Add educational history</span>
                                                    )}
                                                </CardTitle>
                                                <div className="flex gap-3 items-center">
                                                    <Button variant="ghost" size="sm" className="p-1 cursor-pointer"
                                                            type="button">
                                                        {isCollapsed ? <ChevronDown className="h-5 w-5"/> :
                                                            <ChevronUp className="h-5 w-5"/>}
                                                    </Button>
                                                    {formData.educationalBackgrounds.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeEducationalBackground(edu.id)}
                                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                                        >
                                                            <Trash2 className="h-4 w-4"/>
                                                        </Button>
                                                    )}
                                                </div>

                                            </div>
                                        </CardHeader>
                                        {
                                            !isCollapsed && (
                                                <CardContent className="space-y-6 transition-all duration-500 ease-in-out">
                                                    <div>
                                                        <Label htmlFor={`education-level-${edu.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Highest level of education completed <span
                                                                className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Select or
                                                                        enter your highest level of education (e.g.,
                                                                        Diploma, Bachelor&apos;&apos;s).</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`education-level-${edu.id}`}
                                                            placeholder="e.g., NSC, Diploma, Bachelor's degree, Master's degree, PhD"
                                                            value={edu.educational_level}
                                                            onChange={(e) => updateEducationalBackground(edu.id, "educational_level", e.target.value)}
                                                            className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.educational_level ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.educationalBackgroundsError[edu.id]?.educational_level && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide your educational level.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <Label htmlFor={`institution-${edu.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Name of educational institution attended <span
                                                                className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Enter the
                                                                        name of the institution where you studied.</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`institution-${edu.id}`}
                                                            value={edu.institution}
                                                            placeholder="Mangosuthu university of technology, Durban university of technology"
                                                            onChange={(e) => updateEducationalBackground(edu.id, "institution", e.target.value)}
                                                            className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.institution ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.educationalBackgroundsError[edu.id]?.institution && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide your educational institution.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor={`start-date-${edu.id}`}
                                                                   className="mb-1 w-full flex justify-between items-center">
                                                                <span>Start date <span
                                                                    className="text-red-500">*</span></span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><HelpCircle
                                                                        className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-white dark:text-black mb-0">Select
                                                                            the start date of your education in YYYY-MM-DD
                                                                            format.</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </Label>
                                                            <Input
                                                                id={`start-date-${edu.id}`}
                                                                type="date"
                                                                value={edu.start_date}
                                                                onChange={(e) => updateEducationalBackground(edu.id, "start_date", e.target.value)}
                                                                className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.start_date ? "border-red-500" : ""}`}
                                                            />
                                                            {errors.educationalBackgroundsError[edu.id]?.start_date && (
                                                                <p className="text-xs text-red-500 mt-1">
                                                                    <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                    Please provide the start date.
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <Label htmlFor={`end-date-${edu.id}`}
                                                                   className="mb-1 w-full flex justify-between items-center">
                                                                <span>End date <span
                                                                    className="text-red-500">*</span></span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><HelpCircle
                                                                        className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-white dark:text-black mb-0">Select
                                                                            the end date of your education in YYYY-MM-DD
                                                                            format (must be after start date).</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </Label>
                                                            <Input
                                                                id={`end-date-${edu.id}`}
                                                                type="date"
                                                                value={edu.end_date}
                                                                onChange={(e) => updateEducationalBackground(edu.id, "end_date", e.target.value)}
                                                                className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.end_date ? "border-red-500" : ""}`}
                                                            />
                                                            {errors.educationalBackgroundsError[edu.id]?.end_date && (
                                                                <p className="text-xs text-red-500 mt-1">
                                                                    <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                    Please provide the end date.
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Label htmlFor={`degree-${edu.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Degree or certification obtained <span
                                                                className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Enter the
                                                                        degree or certification obtained (e.g., B.Sc. in
                                                                        Computer Science).</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`degree-${edu.id}`}
                                                            placeholder="eg., National Diploma in ICT"
                                                            value={edu.d_or_c}
                                                            onChange={(e) => updateEducationalBackground(edu.id, "d_or_c", e.target.value)}
                                                            className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.d_or_c ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.educationalBackgroundsError[edu.id]?.d_or_c && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide your degree or certification.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <Label htmlFor={`field-study-${edu.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Field of study <span
                                                                className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Enter
                                                                        your field of study (e.g., Software
                                                                        Engineering).</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`field-study-${edu.id}`}
                                                            placeholder="eg., Software Development, Computer Science"
                                                            value={edu.field_of_study}
                                                            onChange={(e) => updateEducationalBackground(edu.id, "field_of_study", e.target.value)}
                                                            className={`rounded-sm ${errors.educationalBackgroundsError[edu.id]?.field_of_study ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.educationalBackgroundsError[edu.id]?.field_of_study && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide your field of study.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <Label className="mb-1 w-full flex justify-between items-center">
                                                            <span>Academic record <span className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Upload a PDF, DOC, or DOCX file of your academic record or transcript.</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>

                                                        {/* Upload progress indicator */}
                                                        {individualUploadProgress[`academic-${edu.id}`] > 0 && individualUploadProgress[`academic-${edu.id}`] < 100 && (
                                                            <div className="mb-2">
                                                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                                                    <span>Uploading...</span>
                                                                    <span>{individualUploadProgress[`academic-${edu.id}`]}%</span>
                                                                </div>
                                                                <Progress value={individualUploadProgress[`academic-${edu.id}`]} className="h-1" />
                                                            </div>
                                                        )}

                                                        <Label
                                                            htmlFor={`academic-record-${edu.id}`}
                                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors mb-5"
                                                        >
                                                            <Upload className="h-6 w-6 mb-2"/>
                                                            <span>Upload Academic Record</span>
                                                            <span className="text-xs text-muted-foreground">Accepted types: .pdf, .doc, .docx</span>
                                                            {uploadedFiles.academicRecords[edu.id]?.uploaded && (
                                                                <p className="text-xs text-blue-500 mb-2">
                                                                    <Info className="inline h-3 w-3 mr-1"/>
                                                                    To change the uploaded document, click here.
                                                                </p>
                                                            )}
                                                        </Label>
                                                        <input
                                                            id={`academic-record-${edu.id}`}
                                                            type="file"
                                                            accept=".doc,.docx,.pdf"
                                                            className="hidden"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0] || null;
                                                                if (file) {
                                                                    // Set upload progress
                                                                    setIndividualUploadProgress(prev => ({ ...prev, [`academic-${edu.id}`]: 0 }));
                                                                    updateEducationalBackground(edu.id, "academicRecord", file);

                                                                    // Simulate upload process
                                                                    const simulateUpload = () => {
                                                                        let progress = 0;
                                                                        const interval = setInterval(() => {
                                                                            progress += 10;
                                                                            setIndividualUploadProgress(prev => ({ ...prev, [`academic-${edu.id}`]: progress }));
                                                                            if (progress >= 100) {
                                                                                clearInterval(interval);
                                                                                const fileUrl = URL.createObjectURL(file);
                                                                                setUploadedFiles((prev) => ({
                                                                                    ...prev,
                                                                                    academicRecords: {
                                                                                        ...prev.academicRecords,
                                                                                        [edu.id]: {
                                                                                            uploaded: true,
                                                                                            fileName: file.name,
                                                                                            fileUrl,
                                                                                            type: file.type,
                                                                                        },
                                                                                    },
                                                                                }));
                                                                                setTimeout(() => {
                                                                                    setIndividualUploadProgress(prev => ({ ...prev, [`academic-${edu.id}`]: 0 }));
                                                                                }, 1000);
                                                                            }
                                                                        }, 200);
                                                                    };

                                                                    simulateUpload();
                                                                }
                                                            }}
                                                        />
                                                        {errors.educationalBackgroundsError[edu.id]?.academicRecord && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please upload your academic record.
                                                            </p>
                                                        )}
                                                        {uploadedFiles.academicRecords[edu.id]?.uploaded && (
                                                            <div className="mt-1 w-full mb-6">
                                                                <div className="flex justify-between items-center">
                                                                    <span className="text-sm text-muted-foreground">{uploadedFiles.academicRecords[edu.id]?.fileName}</span>
                                                                    <div className="space-x-2">
                                                                        <Button
                                                                            size="sm"
                                                                            type="button"
                                                                            className="cursor-pointer rounded-[0.2rem]"
                                                                            onClick={() => handlePreviewDocument(
                                                                                uploadedFiles.academicRecords[edu.id].fileUrl,
                                                                                uploadedFiles.academicRecords[edu.id].fileName,
                                                                                uploadedFiles.academicRecords[edu.id].type
                                                                            )}
                                                                        >
                                                                            <Eye className="h-4 w-4 mr-1"/>
                                                                            Preview
                                                                        </Button>
                                                                        <Button
                                                                            size="sm"
                                                                            type="button"
                                                                            className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                                            onClick={() => handleRemoveAcademicRecord(edu.id)}
                                                                        >
                                                                            <Trash2 className="h-4 w-4 mr-1"/>
                                                                            Remove
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            )
                                        }
                                    </Card>
                                )
                            })}

                            <Button
                                type="button"
                                variant="outline"
                                onClick={addEducationalBackground}
                                className="w-full border-dashed bg-transparent cursor-pointer"
                            >
                                <Plus className="h-4 w-4 mr-2"/>
                                Add Another Educational Background
                            </Button>

                            <div className="flex justify-between items-center gap-3">
                                <Button type="button" onClick={() => setStep(1)}
                                        className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem] flex items-center gap-2 cursor-pointer">
                                    <TiArrowBackOutline/> Go back
                                </Button>
                                <div className="text-sm text-muted-foreground hidden md:block">Step {step} of 5</div>
                                <Button type="submit"
                                        className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer">
                                    Continue
                                    <GraduationCap className="ml-2 h-4 w-4"/>
                                </Button>
                                <div className="text-sm text-muted-foreground md:hidden">Step {step} of 5</div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Work Experience - Step 3 */}
            {step === 3 && (
                <Card className="bg-transparent rounded-md border shadow-none">
                    <CardHeader>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#0b9944]/30 rounded-md">
                                <Briefcase className="h-6 w-6 text-[#0b9944]"/>
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Work Experience</CardTitle>
                                <p className="text-muted-foreground mt-1">
                                    Share your professional experience and previous roles.
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Be specific about your
                                    responsibilities.</AlertDescription>
                            </Alert>

                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Include measurable achievements
                                    where possible.</AlertDescription>
                            </Alert>

                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto ">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white flex items-center">Hover
                                    over <HelpCircle className="mx-1 h-5 w-5 cursor-help" size={18}/> to get more help
                                </AlertDescription>
                            </Alert>
                        </div>

                        {submissionError && (
                            <Alert variant="destructive" className="my-6">
                                <AlertTriangle className="h-4 w-4"/>
                                <AlertDescription className="flex items-center justify-between">
                                    <span>Unable to continue, missing required fields</span>
                                    <Button variant="ghost" size="sm" onClick={() => setSubmissionError(false)}>
                                        <X className="h-4 w-4"/>
                                    </Button>
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleWorkExperienceSubmit} className="space-y-4 mt-10">
                            {formData.workExperiences.map((work: WorkExperience, index: number) => {
                                const isCollapsed: boolean = collapsedWorkStates[work.id] || false;
                                return (
                                    <Card key={work.id}
                                          className="bg-transparent border rounded-sm shadow-none py-2 transition-all duration-500 ease-in-out">
                                        <CardHeader className="py-0 cursor-pointer"
                                                    onClick={() => setCollapsedWorkStates((prev) => ({
                                                        ...prev,
                                                        [work.id]: !isCollapsed
                                                    }))}>
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-lg">
                                                    {work.job_title ? (
                                                        <>
                                                            <span>{index + 1}. {work.company}</span>
                                                            {" - "}
                                                            <span className="text-sm">{work.job_title}</span>
                                                        </>
                                                    ) : (
                                                        <span
                                                            className="text-gray-500 italic">Add work experience</span>
                                                    )}
                                                </CardTitle>
                                                <div className="flex gap-3 items-center">
                                                    <Button variant="ghost" size="sm" className="p-1 cursor-pointer"
                                                            type="button">
                                                        {isCollapsed ? <ChevronDown className="h-5 w-5"/> :
                                                            <ChevronUp className="h-5 w-5"/>}
                                                    </Button>
                                                    {formData.workExperiences.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeWorkExperience(work.id)}
                                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                                        >
                                                            <Trash2 className="h-4 w-4"/>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        {
                                            !isCollapsed && (
                                                <CardContent className="space-y-6">
                                                    <div>
                                                        <Label htmlFor={`job-title-${work.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Job title <span className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Enter the
                                                                        title of the job you held (e.g., Software
                                                                        Developer).</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`job-title-${work.id}`}
                                                            value={work.job_title}
                                                            placeholder="Software Developer"
                                                            onChange={(e) => updateWorkExperience(work.id, "job_title", e.target.value)}
                                                            className={`rounded-sm ${errors.workExperiencesError[work.id]?.job_title ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.workExperiencesError[work.id]?.job_title && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide the job title.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <Label htmlFor={`company-${work.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Company <span className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Enter the
                                                                        name of the company where you worked.</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Input
                                                            id={`company-${work.id}`}
                                                            value={work.company}
                                                            placeholder="Ocean of tech"
                                                            onChange={(e) => updateWorkExperience(work.id, "company", e.target.value)}
                                                            className={`rounded-sm ${errors.workExperiencesError[work.id]?.company ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.workExperiencesError[work.id]?.company && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide the company name.
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor={`work-start-date-${work.id}`}
                                                                   className="mb-1 w-full flex justify-between items-center">
                                                                <span>Start date <span
                                                                    className="text-red-500">*</span></span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><HelpCircle
                                                                        className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-white dark:text-black mb-0">Select
                                                                            the start date of your employment in YYYY-MM-DD
                                                                            format.</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </Label>
                                                            <Input
                                                                id={`work-start-date-${work.id}`}
                                                                type="date"
                                                                value={work.work_start_date}
                                                                onChange={(e) => updateWorkExperience(work.id, "work_start_date", e.target.value)}
                                                                className={`rounded-sm ${errors.workExperiencesError[work.id]?.work_start_date ? "border-red-500" : ""}`}
                                                            />
                                                            {errors.workExperiencesError[work.id]?.work_start_date && (
                                                                <p className="text-xs text-red-500 mt-1">
                                                                    <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                    Please provide the start date.
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <Label htmlFor={`work-end-date-${work.id}`}
                                                                   className="mb-1 w-full flex justify-between items-center">
                                                                <span>End date <span
                                                                    className="text-red-500">*</span></span>
                                                                <Tooltip>
                                                                    <TooltipTrigger><HelpCircle
                                                                        className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-white dark:text-black mb-0">Select
                                                                            the end date of your employment in YYYY-MM-DD
                                                                            format (must be after start date).</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </Label>
                                                            <Input
                                                                id={`work-end-date-${work.id}`}
                                                                type="date"
                                                                value={work.work_end_date}
                                                                onChange={(e) => updateWorkExperience(work.id, "work_end_date", e.target.value)}
                                                                className={`rounded-sm ${errors.workExperiencesError[work.id]?.work_end_date ? "border-red-500" : ""}`}
                                                            />
                                                            {errors.workExperiencesError[work.id]?.work_end_date && (
                                                                <p className="text-xs text-red-500 mt-1">
                                                                    <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                    Please provide the end date.
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Label htmlFor={`responsibilities-${work.id}`}
                                                               className="mb-1 w-full flex justify-between items-center">
                                                            <span>Responsibilities <span
                                                                className="text-red-500">*</span></span>
                                                            <Tooltip>
                                                                <TooltipTrigger><HelpCircle
                                                                    className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="text-white dark:text-black mb-0">Describe
                                                                        your key responsibilities in this role (e.g.,
                                                                        developed web applications).</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </Label>
                                                        <Textarea
                                                            id={`responsibilities-${work.id}`}
                                                            rows={6}
                                                            value={work.responsibilities}
                                                            onChange={(e) => updateWorkExperience(work.id, "responsibilities", e.target.value)}
                                                            className={`rounded-sm w-full h-40 text-base p-3 mb-6 ${errors.workExperiencesError[work.id]?.responsibilities ? "border-red-500" : ""}`}
                                                        />
                                                        {errors.workExperiencesError[work.id]?.responsibilities && (
                                                            <p className="text-xs text-red-500 mt-1">
                                                                <AlertTriangle className="inline h-3 w-3 mr-1"/>
                                                                Please provide your responsibilities.
                                                            </p>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            )
                                        }
                                    </Card>
                                )
                            })
                            }

                            <Button
                                type="button"
                                variant="outline"
                                onClick={addWorkExperience}
                                className="w-full border-dashed bg-transparent cursor-pointer"
                            >
                                <Plus className="h-4 w-4 mr-2"/>
                                Add Another Work Experience
                            </Button>

                            <div className="flex justify-between items-center gap-3">
                                <Button type="button" onClick={() => setStep(2)}
                                        className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem] flex items-center gap-2 cursor-pointer">
                                    <TiArrowBackOutline/> Go back
                                </Button>
                                <div className="text-sm text-muted-foreground hidden md:block">Step {step} of 5</div>
                                <Button type="submit"
                                        className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer">
                                    Continue
                                    <Briefcase className="ml-2 h-4 w-4"/>
                                </Button>
                                <div className="text-sm text-muted-foreground md:hidden">Step {step} of 5</div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Supporting Documents - Step 4 */}
            {step === 4 && (
                <Card className="bg-transparent rounded-md border shadow-none">
                    <CardHeader>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#0b9944]/30 rounded-md">
                                <FolderOpen className="h-6 w-6 text-[#0b9944]"/>
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Supporting Documents</CardTitle>
                                <p className="text-muted-foreground mt-1">
                                    Upload your resume, cover letter, and any other supporting documents that showcase
                                    your qualifications.
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Ensure documents are in PDF,
                                    DOC, or DOCX format.</AlertDescription>
                            </Alert>
                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Keep file sizes reasonable for
                                    faster uploads.</AlertDescription>
                            </Alert>
                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Upload clear, readable academic
                                    documents.</AlertDescription>
                            </Alert>
                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Merge other supporting document
                                    into one document</AlertDescription>
                            </Alert>

                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto ">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white flex items-center">Hover
                                    over <HelpCircle className="mx-1 h-5 w-5 cursor-help" size={18}/> to get more help
                                </AlertDescription>
                            </Alert>
                        </div>
                        <div className="space-y-6 mt-10">
                            {/* Resume Upload */}
                            <div>
                                <Label htmlFor="resume" className="mb-1 w-full flex justify-between items-center">
                                    <span>Resume</span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Upload your resume in PDF, DOC, or DOCX format. (Recommended: PDF)</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>

                                {/* Upload progress indicator */}
                                {individualUploadProgress.resume > 0 && individualUploadProgress.resume < 100 && (
                                    <div className="mb-2">
                                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                            <span>Uploading resume...</span>
                                            <span>{individualUploadProgress.resume}%</span>
                                        </div>
                                        <Progress value={individualUploadProgress.resume} className="h-1" />
                                    </div>
                                )}

                                <Label
                                    htmlFor="resume"
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors cursor-pointer"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Resume</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                    {uploadedFiles.resume.uploaded && (
                                        <p className="text-xs text-blue-500 mb-2">
                                            <Info className="inline h-3 w-3 mr-1"/>
                                            To change the uploaded document, click here.
                                        </p>
                                    )}
                                </Label>
                                <input
                                    id="resume"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleResumeUpload}
                                />

                                {uploadedFiles.resume.uploaded && (
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">{uploadedFiles.resume.fileName}</span>
                                            <div className="space-x-2">
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem]"
                                                    onClick={() => handlePreviewDocument(
                                                        uploadedFiles.resume.fileUrl,
                                                        uploadedFiles.resume.fileName,
                                                        uploadedFiles.resume.type
                                                    )}
                                                >
                                                    <Eye className="h-4 w-4 mr-1"/>
                                                    Preview
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                    onClick={handleRemoveResume}
                                                >
                                                    <Trash2 className="h-4 w-4 mr-1"/>
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cover Letter Upload */}
                            <div>
                                <Label htmlFor="cover-letter" className="mb-1 w-full flex justify-between items-center">
                                    <span>Cover letter</span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Upload your cover letter in PDF, DOC, or DOCX format. (Recommended: PDF)</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>

                                {/* Upload progress indicator */}
                                {individualUploadProgress.coverLetter > 0 && individualUploadProgress.coverLetter < 100 && (
                                    <div className="mb-2">
                                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                            <span>Uploading cover letter...</span>
                                            <span>{individualUploadProgress.coverLetter}%</span>
                                        </div>
                                        <Progress value={individualUploadProgress.coverLetter} className="h-1" />
                                    </div>
                                )}

                                <Label
                                    htmlFor="cover-letter"
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Cover letter</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                    {uploadedFiles.coverLetter.uploaded && (
                                        <p className="text-xs text-blue-500 mb-2">
                                            <Info className="inline h-3 w-3 mr-1"/>
                                            To change the uploaded document, click here.
                                        </p>
                                    )}
                                </Label>
                                <input
                                    id="cover-letter"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleCoverLetterUpload}
                                />

                                {uploadedFiles.coverLetter.uploaded && (
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">{uploadedFiles.coverLetter.fileName}</span>
                                            <div className="space-x-2">
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem]"
                                                    onClick={() => handlePreviewDocument(
                                                        uploadedFiles.coverLetter.fileUrl,
                                                        uploadedFiles.coverLetter.fileName,
                                                        uploadedFiles.coverLetter.type
                                                    )}
                                                >
                                                    <Eye className="h-4 w-4 mr-1"/>
                                                    Preview
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                    onClick={handleRemoveCoverLetter}
                                                >
                                                    <Trash2 className="h-4 w-4 mr-1"/>
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Other Documents Upload */}
                            <div>
                                <Label htmlFor="other-documents" className="mb-1 w-full flex justify-between items-center">
                                    <span>Supporting documents</span>
                                    <Tooltip>
                                        <TooltipTrigger><HelpCircle className="mx-1 h-4 w-4 text-muted-foreground cursor-help"/></TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white dark:text-black mb-0">Please upload any supporting documents in PDF, DOC, or DOCX format. For best results, use PDF.</p>
                                            <p className="text-white dark:text-black mb-0">If you have several files, consider merging them into a single PDF before uploading</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Label>

                                {/* Upload progress indicator */}
                                {individualUploadProgress.otherDocuments > 0 && individualUploadProgress.otherDocuments < 100 && (
                                    <div className="mb-2">
                                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                            <span>Uploading supporting documents...</span>
                                            <span>{individualUploadProgress.otherDocuments}%</span>
                                        </div>
                                        <Progress value={individualUploadProgress.otherDocuments} className="h-1" />
                                    </div>
                                )}

                                <Label
                                    htmlFor="other-documents"
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Other supporting documents</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                    {uploadedFiles.otherDocuments.uploaded && (
                                        <p className="text-xs text-blue-500 mb-2">
                                            <Info className="inline h-3 w-3 mr-1"/>
                                            To change the uploaded document, click here.
                                        </p>
                                    )}
                                </Label>
                                <input
                                    id="other-documents"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleOtherDocumentsUpload}
                                />

                                {uploadedFiles.otherDocuments.uploaded && (
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">{uploadedFiles.otherDocuments.fileName}</span>
                                            <div className="space-x-2">
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem]"
                                                    onClick={() => handlePreviewDocument(
                                                        uploadedFiles.otherDocuments.fileUrl,
                                                        uploadedFiles.otherDocuments.fileName,
                                                        uploadedFiles.otherDocuments.type
                                                    )}
                                                >
                                                    <Eye className="h-4 w-4 mr-1"/>
                                                    Preview
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                    onClick={handleRemoveOtherDocuments}
                                                >
                                                    <Trash2 className="h-4 w-4 mr-1"/>
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-center gap-3">
                                <Button type="button" onClick={goBack}
                                        className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem] flex items-center gap-2 cursor-pointer">
                                    <TiArrowBackOutline/> Go back
                                </Button>
                                <div className="text-sm text-muted-foreground hidden md:block">Step {step} of 5</div>
                                <Button
                                    className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer"
                                    onClick={() => {
                                        setStep(5)
                                        scrollToTop()
                                    }}
                                >
                                    Continue
                                    <FolderOpen className="ml-2 h-4 w-4"/>
                                </Button>
                                <div className="text-sm text-muted-foreground md:hidden">Step {step} of 5</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Application Review - Step 5 */}
            {step === 5 && (
                <Card className="bg-transparent rounded-md border shadow-none">
                    <CardHeader>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-[#0b9944]/30 rounded-md">
                                <ClipboardCheck className="h-6 w-6 text-[#0b9944]"/>
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Review & Submit</CardTitle>
                                <p className="text-muted-foreground mt-1">
                                    Review all your information carefully before submitting. You can edit any section by
                                    clicking on the respective fields.
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="flex flex-col gap-2">
                            <Alert
                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Double-check all information
                                    for accuracy.</AlertDescription>
                            </Alert>
                            <Alert
                                className=" flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-2 rounded-sm w-auto">
                                <Info className="h-2 w-2 -mt-1"/>
                                <AlertDescription className="text-black dark:text-white">Ensure all required documents
                                    are uploaded.</AlertDescription>
                            </Alert>
                        </div>


                        {/* Personal Details Review */}
                        <div className="mt-10">
                            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <Label htmlFor="review-name" className="mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="review-name"
                                        className="rounded-sm"
                                        value={formData.name}
                                        onChange={(e) => updateFormData("name", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="review-surname" className="mb-1">
                                        Surname <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="review-surname"
                                        value={formData.surname}
                                        className="rounded-sm"
                                        onChange={(e) => updateFormData("surname", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="review-email" className="mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="review-email"
                                        type="email"
                                        value={formData.email}
                                        className="rounded-sm"
                                        onBlur={(e) => {
                                            updateFormData("email", e.target.value)
                                            handleEmailValidation()
                                        }}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="review-phone" className="mb-1">
                                        Contact number <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="review-phone"
                                        className="rounded-sm"
                                        value={formData.phone}
                                        onChange={(e) => updateFormData("phone", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="review-dob" className="mb-1">
                                        Date of birth <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="review-dob"
                                        type="date"
                                        className="rounded-sm"
                                        value={formData.dob}
                                        onChange={(e) => updateFormData("dob", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="review-portfolio" className="mb-1">
                                        Portfolio/Github link <span
                                        className="text-muted-foreground text-xs italic">(Optional)</span>
                                    </Label>
                                    <Input
                                        id="review-portfolio"
                                        value={formData.p_g_link}
                                        className="rounded-sm"
                                        onChange={(e) => updateFormData("p_g_link", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="review-about" className="mb-1">
                                        Tell us about yourself <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="review-about"
                                        rows={6}
                                        value={formData.about}
                                        className="rounded-sm w-full h-40 text-base p-3"
                                        onChange={(e) => updateFormData("about", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Educational Details Review */}
                        {formData.educationalBackgrounds.map((educationalHistory, index: number) => (
                            <div key={educationalHistory.id}>
                                <h3 className="text-xl font-semibold mb-4">{index + 1}. Educational details</h3>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="review-education" className="mb-1">
                                            Highest level of education completed <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-education"
                                            className="rounded-sm"
                                            value={educationalHistory.educational_level}
                                            onChange={(e) => updateEducationalBackground(educationalHistory.id, "educational_level", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="review-institution" className="mb-1">
                                            Name of educational institution attended <span
                                            className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-institution"
                                            value={educationalHistory.institution}
                                            className="rounded-sm"
                                            onChange={(e) => updateEducationalBackground(educationalHistory.id, "institution", e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="review-start-date" className="mb-1">
                                                Start date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="review-start-date"
                                                type="date"
                                                value={educationalHistory.start_date}
                                                className="rounded-sm"
                                                onChange={(e) => updateEducationalBackground(educationalHistory.id, "start_date", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="review-end-date" className="mb-1">
                                                End date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="review-end-date"
                                                type="date"
                                                value={educationalHistory.end_date}
                                                className="rounded-sm"
                                                onChange={(e) => updateEducationalBackground(educationalHistory.id, "end_date", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="review-degree" className="mb-1">
                                            Degree or certification obtained <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-degree"
                                            value={educationalHistory.d_or_c}
                                            className="rounded-sm"
                                            onChange={(e) => updateEducationalBackground(educationalHistory.id, "d_or_c", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="review-field" className="mb-1">
                                            Field of study <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-field"
                                            value={educationalHistory.field_of_study}
                                            className="rounded-sm"
                                            onChange={(e) => updateEducationalBackground(educationalHistory.id, "field_of_study", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full h-24 border-2 border-dashed bg-transparent cursor-pointer flex flex-col gap-1"
                                            onClick={() => goToStep(2)}
                                        >
                                            <Upload className="h-6 w-6 mr-2"/>
                                            Change uploaded academic record
                                            <span className="text-xs text-muted-foreground">You&apos;ll be redirected to the Educational History step. Use the top navigation to come back. or use the continue button</span>
                                        </Button>
                                        {uploadedFiles.academicRecords[educationalHistory.id]?.uploaded && (
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm text-muted-foreground">
                                                  {uploadedFiles.academicRecords[educationalHistory.id].fileName}
                                                </span>
                                                <div className="flex gap-x-2">
                                                    <Button
                                                        size="sm"
                                                        type="button"
                                                        className="cursor-pointer rounded-[0.2rem]"
                                                        onClick={() => handlePreviewDocument(
                                                            uploadedFiles.academicRecords[educationalHistory.id].fileUrl,
                                                            uploadedFiles.academicRecords[educationalHistory.id].fileName,
                                                            uploadedFiles.academicRecords[educationalHistory.id].type
                                                        )}
                                                    >
                                                        <Eye className="h-4 w-4 mr-1"/>
                                                        Preview
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        type="button"
                                                        className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                        onClick={() => handleRemoveAcademicRecord(educationalHistory.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1"/>
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Work History Review */}
                        {formData.workExperiences.map((workExperience) => (
                            <div key={workExperience.id}>
                                <h3 className="text-xl font-semibold mb-4">Work History</h3>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="review-job-title" className="mb-1">
                                            Job title <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-job-title"
                                            value={workExperience.job_title}
                                            className="rounded-sm"
                                            onChange={(e) => updateWorkExperience(workExperience.id, "job_title", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="review-company" className="mb-1">
                                            Company <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="review-company"
                                            value={workExperience.company}
                                            className="rounded-sm"
                                            onChange={(e) => updateWorkExperience(workExperience.id, "company", e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="review-work-start" className="mb-1">
                                                Start date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="review-work-start"
                                                type="date"
                                                value={workExperience.work_start_date}
                                                className="rounded-sm"
                                                onChange={(e) => updateWorkExperience(workExperience.id, "work_start_date", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="review-work-end" className="mb-1">
                                                End date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="review-work-end"
                                                type="date"
                                                value={workExperience.work_end_date}
                                                className="rounded-sm"
                                                onChange={(e) => updateWorkExperience(workExperience.id, "work_end_date", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="review-responsibilities" className="mb-1">
                                            Responsibilities <span className="text-red-500">*</span>
                                        </Label>
                                        <Textarea
                                            id="review-responsibilities"
                                            rows={6}
                                            className="rounded-sm w-full h-40 text-base p-3"
                                            value={workExperience.responsibilities}
                                            onChange={(e) => updateWorkExperience(workExperience.id, "responsibilities", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Supporting Documents Review */}
                        <div className="space-y-4">
                            {/* Resume */}
                            <div>
                                <Label
                                    htmlFor="review-resume"
                                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Resume</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <input
                                    id="review-resume"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleResumeUpload}
                                />
                                {uploadedFiles.resume.uploaded && (
                                    <div className="flex justify-between items-center mt-2">
                                        <span
                                            className="text-sm text-muted-foreground">{uploadedFiles.resume.fileName}</span>
                                        <div className="space-x-2">
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem]"
                                                onClick={() => handlePreviewDocument(
                                                    uploadedFiles.resume.fileUrl,
                                                    uploadedFiles.resume.fileName,
                                                    uploadedFiles.resume.type
                                                )}
                                            >
                                                <Eye className="h-4 w-4 mr-1"/>
                                                Preview
                                            </Button>
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                onClick={handleRemoveResume}
                                            >
                                                <Trash2 className="h-4 w-4 mr-1"/>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <Label
                                    htmlFor="review-cover-letter"
                                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Cover letter</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <input
                                    id="review-cover-letter"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleCoverLetterUpload}
                                />
                                {uploadedFiles.coverLetter.uploaded && (
                                    <div className="flex justify-between items-center mt-2">
                                        <span
                                            className="text-sm text-muted-foreground">{uploadedFiles.coverLetter.fileName}</span>
                                        <div className="space-x-2">
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem]"
                                                onClick={() => handlePreviewDocument(
                                                    uploadedFiles.coverLetter.fileUrl,
                                                    uploadedFiles.coverLetter.fileName,
                                                    uploadedFiles.coverLetter.type
                                                )}
                                            >
                                                <Eye className="h-4 w-4 mr-1"/>
                                                Preview
                                            </Button>
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                onClick={handleRemoveCoverLetter}
                                            >
                                                <Trash2 className="h-4 w-4 mr-1"/>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Other Documents */}
                            <div>
                                <Label
                                    htmlFor="review-other-documents"
                                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <Upload className="h-6 w-6 mb-2"/>
                                    <span>Upload Other supporting documents</span>
                                    <span className="text-xs text-muted-foreground italic">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <input
                                    id="review-other-documents"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleOtherDocumentsUpload}
                                />
                                {uploadedFiles.otherDocuments.uploaded && (
                                    <div className="flex justify-between items-center mt-2">
                                        <span
                                            className="text-sm text-muted-foreground">{uploadedFiles.otherDocuments.fileName}</span>
                                        <div className="space-x-2">
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem]"
                                                onClick={() => handlePreviewDocument(
                                                    uploadedFiles.otherDocuments.fileUrl,
                                                    uploadedFiles.otherDocuments.fileName,
                                                    uploadedFiles.otherDocuments.type
                                                )}
                                            >
                                                <Eye className="h-4 w-4 mr-1"/>
                                                Preview
                                            </Button>
                                            <Button
                                                size="sm"
                                                type="button"
                                                className="cursor-pointer rounded-[0.2rem] bg-red-600 hover:bg-red-500 text-white"
                                                onClick={handleRemoveOtherDocuments}
                                            >
                                                <Trash2 className="h-4 w-4 mr-1"/>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center mt-6">
                            <Checkbox
                                id="agree"
                                checked={formData.agree}
                                onCheckedChange={(checked) => updateFormData("agree", checked as boolean)}
                                className="mr-3 cursor-pointer"
                            />
                            <Label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                                I, {formData.name} {formData.surname}, hereby declare that the information provided is
                                true and may be used for evaluation during the selection process.
                            </Label>
                        </div>

                        <div className="flex justify-between items-center mt-6 gap-3">
                            <Button type="button"
                                    className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem] flex items-center gap-2 cursor-pointer"
                                    onClick={goBack}>
                                <TiArrowBackOutline/> Go back
                            </Button>
                            <div className="text-sm text-muted-foreground hidden md:block">Step {step} of 5</div>
                            <Button
                                type="button"
                                onClick={handleFinalSubmit}
                                disabled={!formData.agree || submitting}
                                className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer"
                            >
                                {uploadingDocuments ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                        Uploading Documents...
                                    </>
                                ) : submitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                        Submitting Application...
                                    </>
                                ) : (
                                    <>
                                        Submit Application
                                        <FiSend/>
                                    </>
                                )}
                            </Button>
                        </div>
                        <div className="text-sm text-muted-foreground md:hidden mt-2">Step {step} of 5</div>
                    </CardContent>
                </Card>
            )}

            {step === 6 && (
                <div className="space-y-6">
                    <Card className="bg-transparent rounded-md border shadow-none">
                        <CardContent className="text-center py-12">
                            <div
                                className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 p-4 flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-500 dark:text-green-400"/>
                            </div>

                            <h2 className="text-3xl font-bold text-foreground mb-3">🎉 Application Submitted
                                Successfully!</h2>

                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Thank you for your interest in the <strong>{job.title}</strong> position. We have
                                received your
                                application and will review it shortly.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                                {/* Application Details */}
                                <Card
                                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                            <FileCheck className="h-5 w-5"/>
                                            Application Details
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Application ID:</span>
                                            <Badge variant="secondary" className="font-mono text-sm">
                                                {applicationId}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Position:</span>
                                            <span className="font-medium">{job.title}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Submitted:</span>
                                            <span className="font-medium">{new Date().toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Status:</span>
                                            <Badge className="bg-green-500 hover:bg-green-600">
                                                <CheckCircle className="h-3 w-3 mr-1"/>
                                                Received
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Tracking Information */}
                                <Card
                                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                                    <CardHeader>
                                        <CardTitle
                                            className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                            <Shield className="h-5 w-5"/>
                                            Track Your Application
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex flex-col items-start justufy-start  w-full">
                                        <p className="text-sm text-muted-foreground">
                                            Use this link to check your application status anytime:
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Input value={trackingLink} readOnly
                                                   className="text-xs bg-white dark:bg-gray-800 font-mono"/>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => {
                                                    navigator.clipboard.writeText(trackingLink)
                                                }}
                                            >
                                                <Copy className="h-3 w-3"/>
                                            </Button>
                                        </div>
                                        <Button variant="outline" onClick={() => window.open(trackingLink, "_blank")}>
                                            Track Application
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Next Steps */}
                            <Card className=" max-w-4xl w-full mx-auto shadow-none rounded-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-4 flex items-start justify-start gap-2">
                                        What Happens Next?
                                    </h3>
                                    <div className="space-y-3 text-left">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                                                1
                                            </div>
                                            <p className="text-sm">Our HR team will review your application within 2-3
                                                business days</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                                                2
                                            </div>
                                            <p className="text-sm">If shortlisted, we&apos;ll contact you via email for
                                                the next steps</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                                                3
                                            </div>
                                            <p className="text-sm">
                                                Keep an eye on your email and check your application status using the
                                                tracking link
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                <Button
                                    onClick={() => (window.location.href = "/careers")}
                                    className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] cursor-pointer"
                                >
                                    Browse More Positions
                                </Button>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {uploadingDocuments && (
                <Card className="fixed bottom-4 right-4 w-80 z-50 shadow-lg">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Upload className="h-4 w-4 animate-pulse"/>
                            <span className="text-sm font-medium">
                Uploading Documents...{" "}
                                {documentBeingUploaded ? (
                                    <span className="text-xs">{documentBeingUploaded}</span>
                                ) : (
                                    <span className="text-xs text-muted-foreground">Preparing uploads...</span>
                                )}
              </span>
                        </div>
                        <Progress value={uploadProgress} className="mb-2"/>
                        <p className="text-xs text-muted-foreground">{uploadProgress}% complete</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
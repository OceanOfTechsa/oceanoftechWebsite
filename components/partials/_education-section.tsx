import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, BookOpen, Edit, HelpCircle, Plus, Trash2, Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner";
import Loader from "@/components/Loader";

interface EducationalBackground {
    id: string
    educational_level: string
    institution: string
    start_date: string
    end_date: string
    d_or_c: string
    field_of_study: string
    academicRecord: File | null | string
}

interface EducationSectionProps {
    educationalBackgrounds: EducationalBackground[]
    onEdit: (updatedEducation: EducationalBackground[]) => void
    isEditingAllowed: boolean
}

export function EducationSection({ educationalBackgrounds, isEditingAllowed }: EducationSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [educationItems, setEducationItems] = useState<EducationalBackground[]>(educationalBackgrounds)
    const [isSaving, setIsSaving] = useState(false)

    const addEducation = () => {
        setEducationItems([
            ...educationItems,
            {
                id: `edu-${Date.now()}`,
                educational_level: "",
                institution: "",
                start_date: "",
                end_date: "",
                d_or_c: "Completed",
                field_of_study: "",
                academicRecord: null,
            },
        ])
    }

    const removeEducation = (index: number) => {
        setEducationItems(educationItems.filter((_, i) => i !== index))
    }

    const handleEducationChange = (index: number, field: keyof EducationalBackground, value: string) => {
        const updated = [...educationItems]
        updated[index] = {
            ...updated[index],
            [field]: value,
        }
        setEducationItems(updated)
    }

    const handleAcademicRecordChange = (index: number, file: File | null) => {
        const updated = [...educationItems]
        updated[index] = {
            ...updated[index],
            academicRecord: file,
        }
        setEducationItems(updated)
    }

    const handleSave = async () => {
        setIsSaving(true)

        try {
            console.log("Saving education:", educationItems)
            toast.success("Education information updated successfully!", {
                description: "Your changes have been saved.",
            })
            setIsModalOpen(false)
        } catch (error) {
            toast.error("Failed to update education information", {
                description: error instanceof Error ? error.message : "Please try again later.",
            })
        } finally {
            setIsSaving(false);
        }
    }

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString()
        } catch {
            return dateString
        }
    }

    return (
        <>
            <Card className="border shadow-none rounded-sm bg-transparent">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        <CardTitle className="text-lg">Education</CardTitle>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-white dark:text-black mb-0">Your educational background and qualifications.</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsModalOpen(true)}
                        disabled={!isEditingAllowed}
                        className="md:px-2 md:py-1"
                    >
                        <Edit className="h-4 w-4" />
                        <span className="hidden md:inline ml-2">Edit</span>
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {educationalBackgrounds.length > 0 ? (
                            educationalBackgrounds.map((edu, index) => (
                                <div key={edu.id} className={`${index > 0 ? "pt-6 border-t border-border/40" : ""}`}>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base">{edu.educational_level}</h4>
                                            <p className="text-muted-foreground font-medium">{edu.institution}</p>
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={edu.d_or_c === "Completed" ? "bg-green-500/20 text-green-700 border-green-300 w-fit" : "bg-blue-500/20 text-blue-700 border-blue-300 w-fit"}
                                        >
                                            {edu.d_or_c}
                                        </Badge>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                            <BookOpen className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                            <span className="text-sm">
                        <span className="font-medium">Field of Study:</span> {edu.field_of_study}
                      </span>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                            <span className="text-sm">
                        {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : "Present"}
                      </span>
                                        </div>

                                        {edu.academicRecord && (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                                <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                <span className="text-sm">
                          <span className="font-medium">Academic Record:</span>
                                                    {typeof edu.academicRecord === 'string'
                                                        ? "Uploaded"
                                                        : edu.academicRecord.name
                                                    }
                        </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8 text-muted-foreground">
                                <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>No education information added yet.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="md:w-full md:min-w-5xl rounded-sm max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="mb-0">Edit Education</DialogTitle>
                        <DialogDescription>
                            Update your educational background and qualifications.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                        {educationItems.map((edu, index) => (
                            <div key={edu.id} className="border rounded-lg p-4 space-y-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium">Education #{index + 1}</h4>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-destructive hover:text-destructive"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Delete Education</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you sure you want to delete this education entry? This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="rounded-[0.2rem]">Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => removeEducation(index)} className="bg-red-500 hover:bg-red-600 text-white rounded-[0.2rem]">
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-level-${index}`}>Highest Level of Education</Label>
                                        <Input
                                            id={`edu-level-${index}`}
                                            value={edu.educational_level}
                                            onChange={(e) => handleEducationChange(index, "educational_level", e.target.value)}
                                            placeholder="e.g., Bachelor's Degree"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-institution-${index}`}>Institution</Label>
                                        <Input
                                            id={`edu-institution-${index}`}
                                            value={edu.institution}
                                            onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                                            placeholder="University name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                                        <Input
                                            id={`edu-start-${index}`}
                                            type="date"
                                            value={edu.start_date}
                                            onChange={(e) => handleEducationChange(index, "start_date", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                                        <Input
                                            id={`edu-end-${index}`}
                                            type="date"
                                            value={edu.end_date}
                                            onChange={(e) => handleEducationChange(index, "end_date", e.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Leave empty if currently studying
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-status-${index}`}>Status</Label>
                                        <Select
                                            value={edu.d_or_c}
                                            onValueChange={(value) => handleEducationChange(index, "d_or_c", value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Completed">Completed</SelectItem>
                                                <SelectItem value="In Progress">In Progress</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`edu-field-${index}`}>Field of Study</Label>
                                        <Input
                                            id={`edu-field-${index}`}
                                            value={edu.field_of_study}
                                            onChange={(e) => handleEducationChange(index, "field_of_study", e.target.value)}
                                            placeholder="e.g., Computer Science"
                                        />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label
                                            htmlFor={`academic-record-${index}`}
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors p-4"
                                        >
                                            <Upload className="h-6 w-6 mb-2" />
                                            <span>Upload Academic Record</span>
                                            <span className="text-xs text-muted-foreground mt-1">Accepted types: .pdf, .doc, .docx</span>
                                        </Label>
                                        <Input
                                            id={`academic-record-${index}`}
                                            type="file"
                                            onChange={(e) => handleAcademicRecordChange(index, e.target.files?.[0] || null)}
                                            className="hidden"
                                            accept=".pdf,.doc,.docx"
                                        />
                                        {edu.academicRecord && (
                                            <div className="text-sm text-muted-foreground mt-2">
                                                {typeof edu.academicRecord === 'string'
                                                    ? `Current file: ${edu.academicRecord}`
                                                    : `Selected: ${edu.academicRecord.name}`
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button type="button" variant="outline" onClick={addEducation} className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Another Education
                        </Button>
                    </div>
                    <DialogFooter className="mt-5">
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(false)}
                            disabled={isSaving}
                            className="rounded-[0.2rem]"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem]"
                        >
                            {isSaving ? <>Saving Changes  <Loader /></> : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
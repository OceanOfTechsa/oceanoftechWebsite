import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Building2, Edit, HelpCircle, Plus, Trash2 } from "lucide-react"
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
    AlertDialogTrigger,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner";
import Loader from "@/components/Loader";

interface WorkExperience {
    id: string
    job_title: string
    company: string
    work_start_date: string
    work_end_date: string
    responsibilities: string
}

interface WorkExperienceSectionProps {
    workExperiences: WorkExperience[]
    onEdit: (updatedWorkExperiences: WorkExperience[]) => void
    isEditingAllowed: boolean
}

interface Work {
    work_start_date: string;
    work_end_date: string;
}

export function WorkExperienceSection({ workExperiences, isEditingAllowed }: WorkExperienceSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [workItems, setWorkItems] = useState<WorkExperience[]>(workExperiences);
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const calculateDuration = (startDate: string, endDate: string): string => {
        try {
            const start = new Date(startDate);
            const end = new Date(endDate);

            if (isNaN(start.getTime()) || (endDate !== "Present" && isNaN(end.getTime()))) {
                return "Invalid date";
            }

            if (endDate === "Present" || isNaN(end.getTime())) {
                return "Present";
            }

            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const years = Math.floor(diffDays / 365);
            const months = Math.floor((diffDays % 365) / 30);

            if (years > 0 && months > 0) {
                return `${years} year${years > 1 ? "s" : ""}, ${months} month${months > 1 ? "s" : ""}`;
            } else if (years > 0) {
                return `${years} year${years > 1 ? "s" : ""}`;
            } else {
                return `${months} month${months > 1 ? "s" : ""}`;
            }
        } catch (error) {
            console.error("Error calculating duration:", error);
            return "Error calculating duration";
        }
    };

    const addWork = () => {
        setWorkItems([
            ...workItems,
            {
                id: `work-${Date.now()}`,
                job_title: "",
                company: "",
                work_start_date: "",
                work_end_date: "",
                responsibilities: "",
            },
        ])
    }

    const removeWork = (index: number) => {
        setWorkItems(workItems.filter((_, i) => i !== index))
    }

    const handleWorkChange = (index: number, field: keyof WorkExperience, value: string) => {
        const updated = [...workItems]
        updated[index] = {
            ...updated[index],
            [field]: value,
        }
        setWorkItems(updated)
    }

    const handleWorkExperienceSave = async () => {
        setIsSaving(true);
        try {
            console.log("Saving work experience:", workItems)
            toast.success("Work experience updated successfully!", {
                description: "Your changes have been saved.",
            })
            setIsModalOpen(false)
        } catch (error) {
            toast.error("Failed to update work experience", {
                description: error instanceof Error ? error.message : "Please try again later.",
            })
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <>
            <Card className="border shadow-none rounded-sm bg-transparent">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        <CardTitle className="text-lg">Work Experience</CardTitle>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-white dark:text-black mb-0">Your professional work experience and history.</p>
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
                        {workExperiences.length > 0 ? (
                            workExperiences.map((work, index) => (
                                <div key={work.id} className={`${index > 0 ? "pt-6 border-t border-border/40" : ""}`}>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-base">{work.job_title}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Building2 className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-muted-foreground font-medium">{work.company}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                            <div className="text-sm">
                                                <div>
                                                    {new Date(work.work_start_date).toLocaleDateString()} -{" "}
                                                    {work.work_end_date ? new Date(work.work_end_date).toLocaleDateString() : "Present"}
                                                </div>
                                                <div className="text-muted-foreground text-xs mt-1">
                                                    {calculateDuration(work.work_start_date, work.work_end_date)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {work.responsibilities && (
                                        <div className="bg-muted/20 p-4 rounded-lg">
                                            <h5 className="font-medium text-sm mb-3">Key Responsibilities:</h5>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{work.responsibilities}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8 text-muted-foreground">
                                <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>No work experience added yet.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="md:w-full md:min-w-5xl rounded-sm max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="mb-0">Edit Work Experience</DialogTitle>
                        <DialogDescription>
                            Update your professional work experience and history.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                        {workItems.map((work, index) => (
                            <div key={work.id} className="border rounded-sm p-4 space-y-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium">Work Experience #{index + 1}</h4>
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
                                                <AlertDialogTitle>Delete Work Experience</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you sure you want to delete this work experience entry? This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="rounded-[0.2rem]">Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => removeWork(index)} className="bg-red-500 hover:bg-red-600 text-white rounded-[0.2rem]">
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`work-title-${index}`}>Job Title</Label>
                                        <Input
                                            id={`work-title-${index}`}
                                            value={work.job_title}
                                            onChange={(e) => handleWorkChange(index, "job_title", e.target.value)}
                                            placeholder="e.g., Software Engineer"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`work-company-${index}`}>Company</Label>
                                        <Input
                                            id={`work-company-${index}`}
                                            value={work.company}
                                            onChange={(e) => handleWorkChange(index, "company", e.target.value)}
                                            placeholder="Company name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`work-start-${index}`}>Start Date</Label>
                                        <Input
                                            id={`work-start-${index}`}
                                            type="date"
                                            value={work.work_start_date}
                                            onChange={(e) => handleWorkChange(index, "work_start_date", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`work-end-${index}`}>End Date</Label>
                                        <Input
                                            id={`work-end-${index}`}
                                            type="date"
                                            value={work.work_end_date}
                                            onChange={(e) => handleWorkChange(index, "work_end_date", e.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Leave empty if this is your current position
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`work-responsibilities-${index}`}>Responsibilities</Label>
                                    <Textarea
                                        id={`work-responsibilities-${index}`}
                                        value={work.responsibilities}
                                        onChange={(e) => handleWorkChange(index, "responsibilities", e.target.value)}
                                        placeholder="Describe your responsibilities and achievements..."
                                        rows={4}
                                        className="w-full h-40 text-base p-3"
                                    />
                                </div>
                            </div>
                        ))}
                        <Button type="button" variant="outline" onClick={addWork} className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Another Work Experience
                        </Button>
                    </div>
                    <DialogFooter className="mt-4">
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            disabled={isSaving}
                            className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem]"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleWorkExperienceSave}
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
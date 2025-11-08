import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Calendar, ExternalLink, User, Edit, HelpCircle } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Loader from "@/components/Loader";

interface PersonalInfo {
    name: string
    surname: string
    email: string
    phone: string
    dob: string
    p_g_link: string
    about: string
}

interface PersonalInfoProps {
    personalInfo: PersonalInfo
    onEdit: () => void
    isEditingAllowed: boolean
}

export function PersonalInfo({ personalInfo, isEditingAllowed }: PersonalInfoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState<PersonalInfo>(personalInfo)
    const [isSaving, setIsSaving] = useState(false)

    const handleChange = (field: keyof PersonalInfo, value: string) => {
            setFormData({
            ...formData,
            [field]: value,
        })
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            console.log(formData);
            toast.success("Personal information updated successfully!", {
                description: "Your changes have been saved.",

            });

            setIsModalOpen(false);

        } catch (error) {
            toast.error("Failed to update personal information", {
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
                        <User className="h-5 w-5" />
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-white dark:text-black mb-0">Your personal details and contact information.</p>
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
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-bold text-2xl text-balance">
                            {personalInfo.name} {personalInfo.surname}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <Link href={`mailto:${personalInfo.email}`} className="text-sm transition-colors truncate">
                                {personalInfo.email}
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm">{personalInfo.phone}</span>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm">Born: {new Date(personalInfo.dob).toLocaleDateString()}</span>
                        </div>

                        {personalInfo.p_g_link && (
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                <Link
                                    href={personalInfo.p_g_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-colors truncate"
                                >
                                    LinkedIn Profile
                                </Link>
                            </div>
                        )}
                    </div>

                    {personalInfo.about && (
                        <div className="pt-6 border-t border-border/40">
                            <h4 className="font-semibold mb-3 text-base">About</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{personalInfo.about}</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="md:w-full md:min-w-5xl rounded-sm border-none">
                    <DialogHeader>
                        <DialogTitle className="mb-0">Edit Personal Information</DialogTitle>
                        <DialogDescription >
                            Update your personal details and contact information.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">First Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    placeholder="Your first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="surname">Last Name</Label>
                                <Input
                                    id="surname"
                                    value={formData.surname}
                                    onChange={(e) => handleChange("surname", e.target.value)}
                                    placeholder="Your last name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={(e) => handleChange("dob", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="p_g_link">Portfolio/LinkedIn URL</Label>
                                <Input
                                    id="p_g_link"
                                    value={formData.p_g_link}
                                    onChange={(e) => handleChange("p_g_link", e.target.value)}
                                    placeholder="https://linkedin.com/in/yourname"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="about">About Me</Label>
                            <Textarea
                                id="about"
                                value={formData.about}
                                onChange={(e) => handleChange("about", e.target.value)}
                                placeholder="Tell us about yourself..."
                                rows={4}
                                className="rounded-sm w-full h-40 text-base p-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            disabled={isSaving}
                            className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem]"
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
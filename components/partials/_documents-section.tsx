import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Edit, HelpCircle, Upload, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {JSX, useState} from "react";
import { toast } from "sonner";
import Loader from "@/components/Loader";

interface Document {
    id: string;
    name: string;
    type: "resume" | "cover_letter" | "other";
    uploadDate: string;
    size: string;
}

interface DocumentsSectionProps {
    documents: Document[];
    onEdit: (updatedDocuments: Document[], documentsToDelete: string[], newFiles: File[]) => void;
    isEditingAllowed: boolean;
}

export function DocumentsSection({ documents, onEdit, isEditingAllowed }: DocumentsSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resume, setResume] = useState<File | null>(null);
    const [coverLetter, setCoverLetter] = useState<File | null>(null);
    const [other, setOther] = useState<File | null>(null);
    const [documentsToDelete, setDocumentsToDelete] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    const getDocumentIcon = (): JSX.Element => {
        return <FileText className="h-4 w-4" />;
    };

    const getDocumentTypeLabel = (type: Document['type']): "Resume" | "Cover Letter" | "Other Document" => {
        switch (type) {
            case "resume":
                return "Resume";
            case "cover_letter":
                return "Cover Letter";
            case "other":
                return "Other Document";
            default:
                return "Document" as never;
        }
    };

    const handleSave = async () => {
        setIsSaving(true);

        try {
            const newFiles: File[] = [];
            if (resume) newFiles.push(resume);
            if (coverLetter) newFiles.push(coverLetter);
            if (other) newFiles.push(other);
            console.log("Saving documents:", { resume, coverLetter, other });
            console.log("Deleting documents:", documentsToDelete);
            toast.success("Documents updated successfully!", {
                description: "Your changes have been saved.",
            })
            if (onEdit) {
                onEdit(documents, documentsToDelete, newFiles);
            }

            setIsModalOpen(false);
            setDocumentsToDelete([]);
            setResume(null);
            setCoverLetter(null);
            setOther(null);
        } catch (error) {
            toast.error("Failed to update documents", {
                description: error instanceof Error ? error.message : "Please try again later.",
            });
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteDocument = (docId: string) => {
        setDocumentsToDelete([...documentsToDelete, docId]);
    };

    const handleUndoDelete = (docId: string) => {
        setDocumentsToDelete(documentsToDelete.filter(id => id !== docId));
    };

    const isDocumentMarkedForDeletion = (docId: string) => {
        return documentsToDelete.includes(docId);
    };

    const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File | null>>, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setter(e.target.files[0]);
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Card className="bg-transparent border shadow-none rounded-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Uploaded Documents</CardTitle>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-white dark:text-black mb-0">Documents you&apos;ve submitted with your application.</p>
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
                <CardContent className="space-y-4">
                    {documents.length > 0 ? (
                        documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="flex items-center justify-between p-3 rounded-lg border border-border/40 bg-muted/20"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    {getDocumentIcon()}
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">{doc.name}</div>
                                        <div className="text-xs text-muted-foreground">
                                            {getDocumentTypeLabel(doc.type)} • {doc.size}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Uploaded {new Date(doc.uploadDate).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <Button size="icon" variant="outline" className="h-8 w-8">
                                        <Eye className="h-3 w-3" />
                                    </Button>
                                    <Button size="icon" variant="outline" className="h-8 w-8">
                                        <Download className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>No documents uploaded yet.</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="md:w-full md:min-w-5xl rounded-sm max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="mb-0">Edit Documents</DialogTitle>
                        <DialogDescription>
                            Update your resume, cover letter, and other supporting documents.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                        {/* Current Documents with Delete Options */}
                        {documents.length > 0 && (
                            <div className="space-y-3">
                                <h4 className="font-medium">Current Documents</h4>
                                {documents.map((doc) => {
                                    const isMarkedForDeletion = isDocumentMarkedForDeletion(doc.id);
                                    return (
                                        <div
                                            key={doc.id}
                                            className={`flex items-center justify-between p-3 rounded-lg border ${
                                                isMarkedForDeletion
                                                    ? "border-destructive/20 bg-destructive/5"
                                                    : "border-border/40 bg-muted/20"
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                {getDocumentIcon()}
                                                <div className="flex-1 min-w-0">
                                                    <div className={`font-medium text-sm truncate ${isMarkedForDeletion ? "line-through" : ""}`}>
                                                        {doc.name}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {getDocumentTypeLabel(doc.type)} • {doc.size}
                                                    </div>
                                                </div>
                                            </div>
                                            {isMarkedForDeletion ? (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleUndoDelete(doc.id)}
                                                    className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                                >
                                                    Undo
                                                </Button>
                                            ) : (
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Delete Document?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Are you sure you want to delete &quot;{doc.name}&quot;? This action cannot be undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel className="rounded-[0.2rem]">Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleDeleteDocument(doc.id)} className="bg-red-500 hover:bg-red-600 text-white rounded-[0.2rem]">
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Add New Documents */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors p-4">
                                    <Upload className="h-6 w-6 mb-2" />
                                    <span>Upload Resume</span>
                                    <span className="text-xs text-muted-foreground mt-1">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    onChange={(e) => handleFileChange(setResume, e)}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                />
                                {resume && (
                                    <div className="text-sm text-muted-foreground p-2 bg-muted/30 rounded-md">
                                        Selected: {resume.name} ({formatFileSize(resume.size)})
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="coverLetter" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors p-4">
                                    <Upload className="h-6 w-6 mb-2" />
                                    <span>Upload Cover Letter</span>
                                    <span className="text-xs text-muted-foreground mt-1">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <Input
                                    id="coverLetter"
                                    type="file"
                                    onChange={(e) => handleFileChange(setCoverLetter, e)}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                />
                                {coverLetter && (
                                    <div className="text-sm text-muted-foreground p-2 bg-muted/30 rounded-md">
                                        Selected: {coverLetter.name} ({formatFileSize(coverLetter.size)})
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="other" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors p-4">
                                    <Upload className="h-6 w-6 mb-2" />
                                    <span>Upload Other Documents</span>
                                    <span className="text-xs text-muted-foreground mt-1">Accepted types: .pdf, .doc, .docx</span>
                                </Label>
                                <Input
                                    id="other"
                                    type="file"
                                    onChange={(e) => handleFileChange(setOther, e)}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                />
                                {other && (
                                    <div className="text-sm text-muted-foreground p-2 bg-muted/30 rounded-md">
                                        Selected: {other.name} ({formatFileSize(other.size)})
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="mt-5">
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
    );
}
"use client";

import { JSX } from "react";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorResponse, CreateEmailResponseSuccess } from "resend";
import { X, Send } from "lucide-react";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {PartnerFormSchema} from "@/Shared/PartnerFormSchema";
import {SendPartnerRequestEmail} from "@/lib/SendPartnerRequest";

let results:
    | { success: boolean; error: ErrorResponse; email?: undefined; errors?: undefined }
    | { success: boolean; email: CreateEmailResponseSuccess; error?: undefined; errors?: undefined }
    | { success: boolean; errors: z.ZodIssue[]; error?: undefined; email?: undefined }
    | { success: boolean; error: string; email?: undefined; errors?: undefined };
type FormValues = z.infer<typeof PartnerFormSchema>;

export default function PartnerForm(): JSX.Element {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(PartnerFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            message: "",
        },
    });

    async function onSubmit(data: FormValues): Promise<void> {
        setIsSubmitting(true);
        try {
            results = await SendPartnerRequestEmail(data);
            if (results.success) {
                setShowSuccess(true);
                toast.success("Message sent successfully!", {
                    description: "We have received your message.",
                });
                form.reset();
            } else {
                setShowError(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message", {
                description: error instanceof Error ? error.message : "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="mx-auto py-6 w-full">
            <h1 className="text-2xl font-bold mb-14 hidden">Partner with Us</h1>

            {(showSuccess || showError) && (
                <Alert
                    className={`mb-6 relative text-white ${
                        showSuccess
                            ? "bg-green-500/70 dark:bg-green-800/40"
                            : "bg-rose-500/70 dark:bg-rose-800/40"
                    }`}
                >
                    <AlertDescription className="text-white">
                        {showSuccess
                            ? "Submission successful! We have received your message."
                            : results?.error?.toString() || "There was an error, please try again."}
                    </AlertDescription>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 absolute top-3 right-2 cursor-pointer"
                        onClick={(): void => {
                            setShowSuccess(false);
                            setShowError(false);
                        }}
                    >
                        <X className="h-3 w-3" />
                    </Button>
                </Alert>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Your Name<span className="text-red-500">*</span></Label>
                    <Input id="name" {...form.register("name")} />
                    {form.formState.errors.name && (
                        <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address<span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" {...form.register("email")} />
                    {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" {...form.register("phone")} />
                    {form.formState.errors.phone && (
                        <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                    )}
                </div>

                {/* Website */}
                <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" {...form.register("website")} />
                    {form.formState.errors.website && (
                        <p className="text-sm text-red-500">{form.formState.errors.website.message}</p>
                    )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="message">Message<span className="text-red-500">*</span></Label>
                    <Textarea
                        id="message"
                        {...form.register("message")}
                        className="min-h-[120px]"
                        placeholder="Tell us about your project or any question you have..."
                    />
                    {form.formState.errors.message && (
                        <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-green-600 dark:bg-green-700 hover:bg-green-700 hover:dark:bg-green-600 text-white cursor-pointer font-medium rounded-sm"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            Submitting...
                            <Loader />
                        </>
                    ) : (
                        <>
                            Send a Message <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>

                <p className="text-center text-sm text-gray-500 -mt-5">
                    Our team will respond within 24 Hours.
                </p>
            </form>
        </div>
    );
}
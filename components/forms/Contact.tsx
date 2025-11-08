"use client";

import {ForwardRefExoticComponent, JSX, RefAttributes} from "react";
import { z } from "zod";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorResponse, CreateEmailResponseSuccess } from "resend";
import { SendContactEmail } from "@/lib/SendContactEmail";
import {ContactSchema} from "@/Shared/ContactSchema";
import {X, Send, Home, Search, Palette, Users, Sparkles, Server, Mail, Workflow, LucideProps,} from "lucide-react";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

let results:
| { success: boolean; error: ErrorResponse; email?: undefined; errors?: undefined }
| { success: boolean; email: CreateEmailResponseSuccess; error?: undefined; errors?: undefined }
| { success: boolean; errors: z.ZodIssue[]; error?: undefined; email?: undefined }
| { success: boolean; error: string; email?: undefined; errors?: undefined };
type FormValues = z.infer<typeof ContactSchema>;
const ContactForm = (): JSX.Element => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otherSelected, setOtherSelected] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            company: "",
            message: "",
            services: [],
            otherServices: "",
        },
    });

    const services:string[] = form.watch("services");

    useEffect((): void => {
        const hasOther: boolean = services.includes("Other");
        setOtherSelected(hasOther);

        if (hasOther) {
            form.trigger("otherServices");
        }
    }, [services, form]);

    useEffect((): void => {
        form.register("otherServices", {
            validate: (value: string | undefined): true | string => {
                if (otherSelected && (!value || value.trim() === "")) {
                    return "Please specify other services";
                }
                return true;
            },
        });
    }, [form, otherSelected]);

    async function onSubmit(data: FormValues): Promise<void> {
        if (data.services.includes("Other") && (!data.otherServices || data.otherServices.trim() === "")) {
            form.setError("otherServices", {
                type: "manual",
                message: "Please specify other services",
            });
            return;
        }
        setIsSubmitting(true);
        try {
            results = await SendContactEmail(data);
            if (results.success) {
                setShowSuccess(true);
                toast.success("Messege sent successfully!", {
                    description: "We have received your messsage.",
                })
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

    // Updated service options
    const serviceOptions = [
        { value: "Web Development", label: "Web Development", icon: Home },
        { value: "SEO Optimization", label: "SEO Optimization", icon: Search },
        { value: "UX/UI Design", label: "UX/UI Design", icon: Palette },
        { value: "Hosting", label: "Hosting Services", icon: Server },
        { value: "Business Email", label: "Business Email", icon: Mail },
        { value: "Automation", label: "Automation Solutions", icon: Workflow },
        { value: "Mentorship", label: "Mentorship & Training", icon: Users },
        { value: "Other", label: "Other Services", icon: Sparkles },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-md">
            <h1 className="text-2xl font-bold mb-14 hidden">Get in Touch with Our Experts</h1>

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
                            : results?.error?.toString() || "There was an error, please try again."
                        }
                    </AlertDescription>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 absolute top-3 right-2 cursor-pointer"
                        onClick={(): void => {setShowSuccess(false); setShowError(false)}}
                    >
                        <X className="h-3 w-3" />
                    </Button>
                </Alert>
            )}


            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name + Surname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">First Name<span className="text-red-500">*</span></Label>
                        <Input id="name" {...form.register("name")} />
                        {form.formState.errors.name && (
                            <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="surname">Last Name<span className="text-red-500">*</span></Label>
                        <Input id="surname" {...form.register("surname")} />
                        {form.formState.errors.surname && (
                            <p className="text-sm text-red-500">{form.formState.errors.surname.message}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address<span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" {...form.register("email")} />
                    {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input id="company" {...form.register("company")} />
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="message">Message<span className="text-red-500">*</span></Label>
                    <Textarea id="message" {...form.register("message")} className="min-h-[120px]" placeholder="Tell us about your project or any question you have..." />
                    {form.formState.errors.message && (
                        <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                </div>

                {/* Services */}
                <div className="space-y-2 mt-2">
                    <Label>
                        Which services are you interested in?{" "}
                        <span className="text-sm text-gray-500">(select all that apply)<span className="text-red-500">*</span></span>
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {serviceOptions.map((service: {value: string; label: string; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;}): JSX.Element => {
                            const Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> = service.icon;
                            const isSelected: boolean = services.includes(service.value);

                            return (
                                <Button
                                    key={service.value}
                                    type="button"
                                    variant="outline"
                                    onClick={(): void => {
                                        const current: string[] = form.getValues("services") || [];
                                        if (isSelected) {
                                            form.setValue(
                                                "services",
                                                current.filter((s) => s !== service.value),
                                                { shouldValidate: true }
                                            );
                                        } else {
                                            form.setValue("services", [...current, service.value], {
                                                shouldValidate: true,
                                            });
                                        }
                                    }}
                                    data-state={isSelected ? "selected" : "default"}
                                    className={`cursor-pointer justify-start h-auto py-3 px-4bg-white dark:bg-[#292a2d] hover:bg-green-50 dark:hover:bg-green-900/20 
                                            hover:text-green-700 dark:hover:text-green-400 
                                            hover:border-green-200 dark:hover:border-green-800 
                                            ${isSelected ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-400 font-semibold shadow-sm"
                                            : "text-gray-700 dark:text-gray-300"
                                    }`}
                                >
                                    <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                                    <span className="text-sm">{service.label}</span>
                                </Button>
                            );
                        })}
                    </div>
                    {form.formState.errors.services && (
                        <p className="text-sm text-red-500">{form.formState.errors.services.message}</p>
                    )}

                    {/* Other Services */}
                    {otherSelected && (
                        <div className="mt-8 space-y-2">
                            <Label htmlFor="otherServices">Other Service(s)</Label>
                            <p className="text-xs text-yellow-600">
                                ⚠️ Separate multiple services with a comma (,)
                            </p>
                            <Input
                                id="otherServices"
                                {...form.register("otherServices")}
                                placeholder="Please specify other services"
                            />
                            {form.formState.errors.otherServices && (
                                <p className="text-sm text-red-500">
                                    {form.formState.errors.otherServices.message}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-green-600 dark:bg-green-700 hover:bg-green-700 hover:dark:bg-green-600 text-white cursor-pointer font-medium"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            Submitting...
                            <Loader />
                        </>
                    ) : (
                        <>
                            Send Message <Send className="ml-2 h-4 w-4" />
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

export default ContactForm;
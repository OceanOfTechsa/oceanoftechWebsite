"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import {useState} from "react";
import {SendEmailOnlyEmail} from "@/lib/SendEmailOnlyContactEmail";

interface EMailOnlyContactFormProps {
    bg?: string;
    showBorder?: boolean;
    buttonBg?: string;
}

// zod schema for validation
const formSchema = z.object({
    email: z.string().email("Please enter a valid email"),
});

const EmailOnlyContactForm = ({bg = "bg-transparent", showBorder = true, buttonBg = "bg-[#202124] hover:bg-[#414245]",}: EMailOnlyContactFormProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);

        try {
            const results = await SendEmailOnlyEmail(values);
            console.log(results);
            if (results.success) {
                setShowSuccess(true);
            } else {
                setShowError(true);
            }
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
        console.log("Form submitted:", values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`${bg} ${showBorder ? "border" : ""} rounded-sm flex items-center p-2 w-full gap-2`}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-grow">
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="border-none focus-visible:ring-0 focus-visible:outline-none shadow-none outline-none ring-0 bg-transparent dark:bg-[#161618]"
                                    {...field}
                                />
                            </FormControl>
                            {
                                showError && <FormMessage className="text-xs text-red-500 mt-1" />
                            }
                            {
                                showSuccess && <FormMessage className="text-xs text-green-500 mt-1">Submitted Successfully</FormMessage>
                            }
                        </FormItem>
                    )}
                />
                <Button type="submit" className={`text-white rounded-sm px-4 py-2 transition cursor-pointer ${buttonBg}`} disabled={isLoading}>
                    {
                        !isLoading ? "Submit" : <Loader />
                    }
                </Button>
            </form>
        </Form>
    );
};

export default EmailOnlyContactForm;

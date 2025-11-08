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

const NewsLetterSubForm = ({buttonBg = "bg-[#202124] hover:bg-[#414245]",}: EMailOnlyContactFormProps) => {
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
            className="rounded-sm flex flex-col p-2 w-full max-w-md gap-2"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="border border-neutral-700 focus-visible:ring-0 focus-visible:outline-none focus:shadow-md shadow-none outline-none ring-0 bg-transparent w-full px-[1rem] py-[0.5rem] rounded-sm text-[#606261] dark:text-[#c4c5c7]"
                            {...field}
                        />
                        </FormControl>
                        {showError && (
                        <FormMessage className="text-xs text-red-500 mt-1">❌ Something went wrong. Please try again in a few minutes.</FormMessage>
                        )}
                        {showSuccess && (
                        <FormMessage className="text-xs text-green-500 mt-1">
                            🎉 You’re now subscribed! Expect awesome updates in your inbox soon.
                        </FormMessage>
                        )}
                    </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className={`text-white font-semibold rounded-sm px-[1rem] py-[0.5rem] transition cursor-pointer ${buttonBg} w-full`}
                    disabled={isLoading}
                >
                    {!isLoading ? "Subscribe now" : <Loader />}
                </Button>
            </form>
        </Form>
    );
};

export default NewsLetterSubForm;

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
import { Search } from "lucide-react";

interface FaqSearchFormProps {
    onQueryChange: (query: string) => void;
    onSubmit: (values: { query: string }) => void;
    isLoading?: boolean;
    bg?: string;
    showBorder?: boolean;
    buttonBg?: string;
}

const formSchema = z.object({
    query: z.string(),
});

const HelpCenterSearchForm: React.FC<FaqSearchFormProps> = ({
                                                         onQueryChange,
                                                         onSubmit,
                                                         isLoading = false,
                                                         bg = "bg-transparent",
                                                         showBorder = true,
                                                         buttonBg = "bg-[#202124] hover:bg-[#414245]",
                                                     }) => {
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [, setIsLoading] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            query: "",
        },
    });

    // Handle input change with debounce to prevent excessive updates
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onQueryChange(value);
    };

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            await onSubmit(values);
            setShowSuccess(true);
            setShowError(false);
            // Optional: reset form after submission
            // form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setShowError(true);
            setShowSuccess(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className={`${bg} ${showBorder ? "border" : ""} rounded-sm flex items-center p-2 w-full gap-2`}
            >
                <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                        <FormItem className="flex-grow">
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Search for answer..."
                                    className="border-none focus-visible:ring-0 focus-visible:outline-none shadow-none outline-none ring-0 bg-transparent dark:bg-[#161618]"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleInputChange(e);
                                    }}
                                />
                            </FormControl>
                            {showError && (
                                <FormMessage className="text-xs text-red-500 mt-1" />
                            )}
                            {showSuccess && (
                                <FormMessage className="text-xs text-green-500 mt-1">
                                    Submitted Successfully
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className={`text-white rounded-sm px-4 py-2 transition cursor-pointer ${buttonBg}`}
                    disabled={isLoading}
                >
                    <Search />
                </Button>

            </form>
        </Form>
    );
};

export default HelpCenterSearchForm;
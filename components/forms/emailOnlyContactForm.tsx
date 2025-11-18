"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormControl,FormField,FormItem} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import {useState} from "react";
import {SendEmailOnlyEmail} from "@/lib/SendEmailOnlyContactEmail";
import { toast } from "sonner";
import { FiSend } from "react-icons/fi";

interface EMailOnlyContactFormProps {
    bg?: string;
    showBorder?: boolean;
    buttonBg?: string;
}

const formSchema = z.object({
    email: z.string().email("Please enter a valid email"),
});

const EmailOnlyContactForm = ({bg = "bg-transparent", showBorder = true, buttonBg = "bg-[#202124] hover:bg-[#414245]"}: EMailOnlyContactFormProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {email: "",},
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if(values.email === ""){
            setEmailError(true);
        }
        setIsLoading(true);
        const toastId = toast.loading("Submitting, please wait...");
        const results = await SendEmailOnlyEmail(values);
        if (results.success) {
          toast.success("We have received your message", { id: toastId });
        } else {
          toast.error(results.error?.toString() || "Something went wrong, please try again.", { id: toastId });
        }
        setIsLoading(false);
      } 

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`${bg} ${showBorder ? "border" : ""} ${emailError && "border-rose-500"} $ rounded-sm flex items-center p-2 w-full gap-2`}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-grow">
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:bg-transparent rounded-[0.2rem] shadow-none outline-none ring-0 bg-transparent dark:bg-transparent"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className={`text-white px-4 py-2 rounded-[0.2rem] transition cursor-pointer ${buttonBg}`} disabled={isLoading}>
                    {!isLoading ? <>Send <FiSend /></> : <>Submitting <Loader /></>}
                </Button>
            </form>
        </Form>
    );
};

export default EmailOnlyContactForm;
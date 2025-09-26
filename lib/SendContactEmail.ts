"use server";

import { ContactEmail } from "@/emails/ContactEmail";
import { ContactSchema } from "@/Shared/ContactSchema";
import { Resend } from "resend";
import { z } from "zod";

if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not configured");
}

 const resend = new Resend(process.env.RESEND_API_KEY);export type FormValues = z.infer<typeof ContactSchema>;

export async function SendContactEmail(data: FormValues) {
    try {
        const validatedData = ContactSchema.parse(data);

        const { data: email, error } = await resend.emails.send({
            from: "Oceanoftech <accounts@oceanoftechsa.com>",
            to: "okasithuli@outlook.com",
            subject: "New Contact Form Submission – Ocean of Tech",
            react: ContactEmail(validatedData),
            replyTo: validatedData.email,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error };
        }

        return { success: true, email };
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation failed:", error.issues);
            return { success: false, errors: error.issues};
        }
        console.error("Failed to send email:", error);
        return { success: false, error: "Unexpected error occurred" };
    }
}

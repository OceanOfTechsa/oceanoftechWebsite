"use server";

import { EmailOnlyContactSchema } from "@/Shared/EmailOnlyContactSchema";
import EmailOnlyContactUsEmail from "@/emails/EmailOnlyContactUsEmail";
import { getUserGeoData } from "@/lib/GeoLocationData";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
export type FormValues = z.infer<typeof EmailOnlyContactSchema>;

export async function SendEmailOnlyEmail(data: FormValues) {
    const location = await getUserGeoData();
    try {
        const validatedData = EmailOnlyContactSchema.parse(data);

        const { data: email, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || "Oceanoftech <accounts@oceanoftechsa.com>",
            to:   process.env.TO_EMAIL   || "sithuliso@oceanoftechsa.com",
            subject: "📩 New Contact Form Submission",
            react: EmailOnlyContactUsEmail(validatedData, location),
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

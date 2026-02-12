"use server";

import { EmailOnlyContactSchema } from "@/Shared/EmailOnlyContactSchema";
import EmailOnlyContactUsEmail from "@/emails/EmailOnlyContactUsEmail";
import {GeoLocationData, getUserGeoData} from "@/lib/GeoLocationData";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
export type FormValues = z.infer<typeof EmailOnlyContactSchema>;

export async function SendEmailOnlyEmail(data: FormValues) {
    const location: GeoLocationData = await getUserGeoData();
    try {
        const validatedData = EmailOnlyContactSchema.parse(data);
        const { data: email, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || "Oceanoftech <info@oceanoftechsa.com>",
            to:   process.env.TO_EMAIL   || "okasithuli@outlook.com",
            subject: "📩 New Contact Form Submission",
            react: EmailOnlyContactUsEmail(validatedData, location),
            replyTo: validatedData.email,
        });
        return error ? { success: false, error } : { success: true, email };
    } catch (error) {
        return error instanceof z.ZodError ?  { success: false, errors: error.issues} : { success: false, error: "Unexpected error occurred" };
    }
}

import {z} from "zod";

export const PartnerFormSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(1, {message: "Invalid phone number"}),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
    website: z.string().url("Invalid website URL"),
});
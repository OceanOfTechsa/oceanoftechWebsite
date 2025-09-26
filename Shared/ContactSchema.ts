import {z} from "zod";

export const ContactSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    surname: z.string().min(2, { message: "Surname is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    company: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
    services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
    otherServices: z.string().optional(),
});
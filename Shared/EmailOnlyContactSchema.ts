import {z} from "zod";

export const EmailOnlyContactSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});
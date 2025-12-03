// src/lib/validation.ts   ← ONLY THIS (no JSX, no React!)
import { z } from "zod";

export const passwordSchema = z.string()
  .min(12, "Use 12+ characters")
  .refine(p => /[A-Z]/.test(p), "Add one uppercase letter")
  .refine(p => /[0-9]/.test(p), "Add one number")
  .refine(p => /[^A-Za-z0-9]/.test(p), "Add one special character");

export const studentSchema = z.object({
  firstname: z.string().min(2, "First name too short"),
  lastname: z.string().min(2, "Last name too short"),
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
  c_password: z.string(),
  phone: z.string().regex(/^\d{10}$/, "Enter 10-digit phone number"),
  university: z.string().min(3, "University name required"),
  linkdin: z.string().url().or(z.literal("")).optional(),
  github: z.string().url().or(z.literal("")).optional(),
}).refine(data => data.password === data.c_password, {
  message: "Passwords do not match",
  path: ["c_password"]
});

export type StudentFormData = z.infer<typeof studentSchema>;
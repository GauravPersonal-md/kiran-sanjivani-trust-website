import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  age: z.string().min(1, "Age is required"),
  occupation: z.string().min(2, "Occupation is required"),
  interests: z.string().min(3, "Please describe your interests"),
  availability: z.string().min(3, "Please specify your availability"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type VolunteerFormData = z.infer<typeof volunteerSchema>;

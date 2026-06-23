"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  contactSchema,
  volunteerSchema,
  type ContactFormData,
  type VolunteerFormData,
} from "@/lib/validations";

interface ContactFormProps {
  className?: string;
}

async function submitForm(
  endpoint: string,
  data: Record<string, string | undefined>
): Promise<{ success: boolean; message?: string; error?: string }> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const result = await response.json();
    if (!response.ok && !result.error) {
      return { success: false, error: "Something went wrong. Please try again." };
    }
    return result;
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitForm("/api/contact", data);

      if (result.success) {
        toast({
          variant: "success",
          title: "Message Sent!",
          description:
            result.message ??
            "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input id="contact-name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input id="contact-email" type="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone *</Label>
          <Input id="contact-phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-destructive" role="alert">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject *</Label>
          <Input id="contact-subject" placeholder="How can we help?" {...register("subject")} aria-invalid={!!errors.subject} />
          {errors.subject && <p className="text-sm text-destructive" role="alert">{errors.subject.message}</p>}
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea id="contact-message" placeholder="Tell us more..." rows={5} {...register("message")} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-destructive" role="alert">{errors.message.message}</p>}
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

interface VolunteerFormProps {
  className?: string;
}

export function VolunteerForm({ className }: VolunteerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitForm("/api/volunteer", data);

      if (result.success) {
        toast({
          variant: "success",
          title: "Application Received!",
          description:
            result.message ??
            "Welcome to the KST family! Our team will contact you shortly.",
        });
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vol-name">Full Name *</Label>
          <Input id="vol-name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vol-email">Email *</Label>
          <Input id="vol-email" type="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vol-phone">Phone *</Label>
          <Input id="vol-phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-destructive" role="alert">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vol-age">Age *</Label>
          <Input id="vol-age" type="number" placeholder="25" min="16" {...register("age")} aria-invalid={!!errors.age} />
          {errors.age && <p className="text-sm text-destructive" role="alert">{errors.age.message}</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="vol-occupation">Occupation *</Label>
          <Input id="vol-occupation" placeholder="Student, Professional, etc." {...register("occupation")} aria-invalid={!!errors.occupation} />
          {errors.occupation && <p className="text-sm text-destructive" role="alert">{errors.occupation.message}</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="vol-interests">Areas of Interest *</Label>
          <Input id="vol-interests" placeholder="Education, Healthcare, Events, etc." {...register("interests")} aria-invalid={!!errors.interests} />
          {errors.interests && <p className="text-sm text-destructive" role="alert">{errors.interests.message}</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="vol-availability">Availability *</Label>
          <Input id="vol-availability" placeholder="Weekends, 4 hours/week, etc." {...register("availability")} aria-invalid={!!errors.availability} />
          {errors.availability && <p className="text-sm text-destructive" role="alert">{errors.availability.message}</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="vol-message">Additional Message</Label>
          <Textarea id="vol-message" placeholder="Tell us why you want to volunteer..." rows={4} {...register("message")} />
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}

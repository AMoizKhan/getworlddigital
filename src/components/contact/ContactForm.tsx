"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button, ServiceSelect, useToast } from "@/components/ui";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d\s().-]{7,20}$/;

export function ContactForm() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your full name (at least 2 characters).";
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (phone.trim() && !PHONE_RE.test(phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!service) {
      next.service = "Please select a service you are interested in.";
    }
    if (message.trim().length < 10) {
      next.message =
        "Please tell us a bit more about your project (at least 10 characters).";
    }
    return next;
  };

  const clearFieldError = (field: keyof FieldErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = Object.values(validationErrors)[0];
      toast.warning("Please check the form", firstError);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          service,
          message: message.trim(),
          source: "contact-page",
        }),
      });

      const data = (await res.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
          const firstFieldErr = Object.values(data.fieldErrors)[0];
          toast.warning("Validation Error", firstFieldErr ?? data.error);
        } else {
          toast.error(
            "Submission Failed",
            data.error ?? "Something went wrong. Please try again."
          );
        }
        return;
      }

      setSubmitted(true);
      toast.success(
        "Inquiry Sent Successfully!",
        data.message ??
          "Thank you for reaching out. We'll respond within one business day."
      );
    } catch {
      toast.error(
        "Network Error",
        "Unable to send your message right now. Please try again or email info@getworlddigital.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setService("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-emerald-200/80 bg-white px-6 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-[#071a38]">
          Inquiry Received!
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-600">
          Thank you, <span className="font-semibold text-[#071a38]">{name}</span>
          . Our team will review your project brief and follow up at{" "}
          <span className="font-semibold text-[#071a38]">{email}</span> within
          one business day.
        </p>
        <div className="mt-6">
          <Button variant="secondary" onClick={handleReset}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  const getInputClasses = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#071a38] placeholder:text-slate-400 outline-none transition-all duration-200 ${
      hasError
        ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
        : "border-slate-200 focus:border-[#0d57b8] focus:ring-4 focus:ring-[#0d57b8]/10"
    }`;

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#071a38]">
            Full Name <span className="text-rose-500">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearFieldError("name");
            }}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            className={getInputClasses(errors.name)}
          />
          {errors.name ? (
            <span className="mt-1 block text-xs font-medium text-rose-600">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#071a38]">
            Email <span className="text-rose-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            className={getInputClasses(errors.email)}
          />
          {errors.email ? (
            <span className="mt-1 block text-xs font-medium text-rose-600">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#071a38]">
            Phone Number
          </span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearFieldError("phone");
            }}
            placeholder="+1 713 555 0199"
            aria-invalid={Boolean(errors.phone)}
            className={getInputClasses(errors.phone)}
          />
          {errors.phone ? (
            <span className="mt-1 block text-xs font-medium text-rose-600">
              {errors.phone}
            </span>
          ) : null}
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#071a38]">
            Company
          </span>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className={getInputClasses()}
          />
        </label>
      </div>

      <div className="block text-sm">
        <label
          htmlFor="contact-service"
          className="mb-1.5 block font-semibold text-[#071a38]"
        >
          Service Interest <span className="text-rose-500">*</span>
        </label>
        <ServiceSelect
          id="contact-service"
          value={service}
          onChange={(val) => {
            setService(val);
            clearFieldError("service");
          }}
          placeholder="Select a service"
          otherLabel="Other / Custom Solution"
          otherValue="other"
          hasError={Boolean(errors.service)}
        />
        {errors.service ? (
          <span className="mt-1 block text-xs font-medium text-rose-600">
            {errors.service}
          </span>
        ) : null}
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-[#071a38]">
          Project Details <span className="text-rose-500">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearFieldError("message");
          }}
          placeholder="Tell us about your goals, timeline, and automation or app requirements..."
          aria-invalid={Boolean(errors.message)}
          className={`${getInputClasses(errors.message)} resize-y`}
        />
        {errors.message ? (
          <span className="mt-1 block text-xs font-medium text-rose-600">
            {errors.message}
          </span>
        ) : null}
      </label>

      <Button
        type="submit"
        className={submitting ? "pointer-events-none opacity-80" : ""}
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </form>
  );
}

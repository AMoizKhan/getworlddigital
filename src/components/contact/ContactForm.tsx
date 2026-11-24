"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui";
import { services } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#dbe6ff] bg-[#f6f9ff] px-6 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f4fe0] text-white shadow-md shadow-blue-600/25">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-[#0b1533]">
          Inquiry Received!
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-600">
          Thank you for reaching out. Our team will review your project brief
          and get back to you within one business day.
        </p>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-[#f8faff] px-4 py-2.5 text-sm text-[#0b1533] placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#1f4fe0] focus:bg-white focus:ring-4 focus:ring-[#1f4fe0]/10";

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#0b1533]">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#0b1533]">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#0b1533]">
            Company
          </span>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className={inputClasses}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-[#0b1533]">
            Service Interest
          </span>
          <select name="service" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-[#0b1533]">
          Project Details
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your goals, timeline, and budget range..."
          className={`${inputClasses} resize-y`}
        />
      </label>

      <Button type="submit">
        Submit Inquiry
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Button>
    </form>
  );
}

import { Quote, Star } from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Client Stories"
      title="Trusted by leaders who"
      highlight="value results."
      subtitle="Feedback and outcomes from the teams we partner with to build and scale."
      align="center"
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 80}>
            <Card className="flex h-full flex-col p-7 text-left">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={`${item.id}-${index}`}
                      className={`h-4 w-4 ${
                        index < item.rating
                          ? "fill-[#1f5bff] text-[#1f5bff]"
                          : "fill-slate-100 text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-[#dbe7ff] transition-colors duration-300 group-hover:text-[#bfd4ff]" />
              </div>

              <p className="flex-1 text-base leading-relaxed text-slate-700">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2f6bff] to-[#1f4fe0] text-xs font-bold text-white shadow-sm shadow-blue-600/20">
                  {getInitials(item.name)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b1533]">{item.name}</p>
                  <p className="text-xs font-medium text-slate-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

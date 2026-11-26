import {
  BotMessageSquare,
  CalendarCheck,
  Cpu,
  Headset,
  MessageCircle,
  PhoneCall,
  Smartphone,
  TrendingUp,
  Workflow,
} from "lucide-react";

type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className = "h-6 w-6" }: ServiceIconProps) {
  switch (slug) {
    case "ai-chatbot":
      return <BotMessageSquare className={className} />;
    case "ai-voice-receptionist":
      return <PhoneCall className={className} />;
    case "lead-generation-follow-up":
      return <TrendingUp className={className} />;
    case "appointment-booking-automation":
      return <CalendarCheck className={className} />;
    case "customer-support-automation":
      return <Headset className={className} />;
    case "email-whatsapp-automation":
      return <MessageCircle className={className} />;
    case "crm-automation":
      return <Workflow className={className} />;
    case "custom-ai-automation":
      return <Cpu className={className} />;
    case "mobile-application":
      return <Smartphone className={className} />;
    default:
      return <BotMessageSquare className={className} />;
  }
}

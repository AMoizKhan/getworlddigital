import { Bot, Headset, SearchCheck, ServerCog } from "lucide-react";

type SolutionIconProps = {
  slug: string;
  className?: string;
};

export function SolutionIcon({
  slug,
  className = "h-6 w-6",
}: SolutionIconProps) {
  switch (slug) {
    case "ai-automation":
      return <Bot className={className} />;
    case "seo-ppc":
      return <SearchCheck className={className} />;
    case "front-desk-solutions":
      return <Headset className={className} />;
    case "managed-it-services":
    default:
      return <ServerCog className={className} />;
  }
}

import {
  Code2,
  Layers,
  Palette,
  ShoppingBag,
  Smartphone,
  TrendingUp,
} from "lucide-react";

type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className = "h-6 w-6" }: ServiceIconProps) {
  switch (slug) {
    case "mobile-app-development":
      return <Smartphone className={className} />;
    case "ui-ux-design":
      return <Palette className={className} />;
    case "digital-marketing":
      return <TrendingUp className={className} />;
    case "ecommerce-solutions":
      return <ShoppingBag className={className} />;
    case "branding-identity":
      return <Layers className={className} />;
    case "web-development":
    default:
      return <Code2 className={className} />;
  }
}

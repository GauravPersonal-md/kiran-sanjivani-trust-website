import {
  Heart,
  Shield,
  Users,
  Award,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Building2,
  Accessibility,
  FileBadge,
  Crown,
  TrendingUp,
  Network,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Shield,
  Users,
  Award,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Building2,
  Accessibility,
  FileBadge,
  Crown,
  TrendingUp,
  Network,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] || Heart;
  return <Icon className={className} aria-hidden="true" />;
}

export { iconMap };

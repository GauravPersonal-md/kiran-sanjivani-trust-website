import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4", img: 36 },
  md: { box: "h-10 w-10", icon: "h-5 w-5", img: 40 },
  lg: { box: "h-12 w-12", icon: "h-6 w-6", img: 48 },
};

export function SiteLogo({
  className,
  iconClassName,
  showText = siteConfig.logo.showText,
  textClassName,
  subtextClassName,
  size = "md",
}: SiteLogoProps) {
  const { box, icon, img } = sizeMap[size];
  const { src, alt, width, height } = siteConfig.logo;

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-secondary/90 shadow-sm",
          box
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width || img}
            height={height || img}
            className="object-contain p-0.5"
            unoptimized={src.endsWith(".svg")}
            priority
          />
        ) : (
          <Heart className={cn("fill-current text-trust-green-dark", icon, iconClassName)} aria-hidden="true" />
        )}
      </div>
      {showText && (
        <div className="min-w-0">
          <span className={cn("block truncate font-display text-sm font-bold leading-tight sm:text-base md:text-sm lg:text-base", textClassName)}>
            {siteConfig.logo.textPrimary}
          </span>
          <span className={cn("block truncate text-[10px] font-medium tracking-wide sm:text-xs", subtextClassName)}>
            {siteConfig.logo.textSecondary}
          </span>
        </div>
      )}
    </div>
  );
}

interface SiteLogoLinkProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  isLight?: boolean;
  textClassName?: string;
  subtextClassName?: string;
}

export function SiteLogoLink({
  className,
  showText,
  size = "md",
  isLight = false,
  textClassName,
  subtextClassName,
}: SiteLogoLinkProps) {
  return (
    <Link
      href="/"
      className={cn("group shrink-0 transition-opacity hover:opacity-90", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <SiteLogo
        showText={showText}
        size={size}
        textClassName={textClassName ?? (isLight ? "text-white" : "text-foreground")}
        subtextClassName={subtextClassName ?? (isLight ? "text-white/70" : "text-muted-foreground")}
        className="transition-transform group-hover:scale-[1.02]"
      />
    </Link>
  );
}

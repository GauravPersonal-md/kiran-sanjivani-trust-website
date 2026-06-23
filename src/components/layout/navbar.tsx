"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HandHeart } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SiteLogoLink } from "@/components/shared/site-logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomeHero = pathname === "/" && !scrolled;
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeMenu]);

  const linkClass = (isActive: boolean) =>
    cn(
      "shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 md:px-2 md:text-[11px] lg:px-2.5 lg:text-xs xl:px-3 xl:text-sm",
      isHomeHero
        ? isActive
          ? "bg-white/25 text-white shadow-sm"
          : "text-white/90 hover:bg-white/12 hover:text-white"
        : isActive
          ? "bg-primary/15 font-semibold text-neutral-900 dark:bg-white/10 dark:text-primary"
          : "text-neutral-900 hover:bg-black/[0.06] hover:text-black dark:text-muted-foreground dark:hover:bg-white/10 dark:hover:text-foreground"
    );

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-3 pt-2.5 sm:px-4 sm:pt-3 md:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 rounded-[1.25rem] px-2.5 py-2 transition-all duration-500 sm:gap-3 sm:px-3 sm:py-2.5 md:px-4",
            isHomeHero ? "glass-nav-ios-dark" : "glass-nav-ios"
          )}
        >
          {/* Logo */}
          <div className="min-w-0 shrink-0">
            <SiteLogoLink isLight={isHomeHero} size="sm" className="max-w-[9rem] sm:max-w-none" />
          </div>

          {/* Tablet + desktop nav (center, scrollable on iPad) */}
          <nav
            className="hidden min-w-0 justify-center overflow-x-auto scrollbar-hide md:flex"
            aria-label="Main navigation"
          >
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-xl p-0.5 sm:p-1",
                isHomeHero ? "bg-white/8" : "bg-black/[0.04] dark:bg-white/[0.06]"
              )}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={linkClass(isActive)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-1.5">
            <ThemeToggle
              className={cn(
                "h-9 w-9 shrink-0 rounded-xl text-neutral-900 dark:text-foreground",
                isHomeHero && "text-white hover:bg-white/15 hover:text-white"
              )}
            />

            <Button
              asChild
              size="sm"
              className={cn(
                "h-9 shrink-0 rounded-xl px-2.5 font-semibold sm:px-3 md:px-2.5 lg:px-3.5",
                isHomeHero
                  ? "border border-white/25 bg-white/20 text-white shadow-sm backdrop-blur-sm hover:bg-white/30 hover:text-white"
                  : "border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <Link href="/volunteer">
                <HandHeart className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline md:hidden lg:inline">Volunteer</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="gold"
              size="sm"
              className="h-9 shrink-0 rounded-xl px-2.5 sm:px-3 md:px-2.5 lg:px-3.5"
            >
              <Link href="/donate">
                <span className="hidden sm:inline">Donate</span>
                <span className="sm:hidden">Give</span>
              </Link>
            </Button>

            {/* Mobile only menu */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-9 w-9 shrink-0 rounded-xl text-neutral-900 dark:text-foreground",
                isHomeHero && "text-white hover:bg-white/15 hover:text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu (< md) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="glass-nav-ios fixed inset-x-3 top-[4.25rem] z-50 overflow-hidden rounded-2xl sm:inset-x-4 md:hidden"
            >
              <div className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto p-3 sm:p-4">
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-1 sm:gap-0.5">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "rounded-xl px-3 py-3 text-sm font-medium transition-colors sm:px-4 sm:text-base",
                          isActive
                            ? "bg-primary/15 font-semibold text-neutral-900 dark:bg-primary/10 dark:text-primary"
                            : "text-neutral-900 hover:bg-black/[0.04] dark:text-foreground dark:hover:bg-white/[0.06]"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-3 dark:border-white/[0.08]">
                  <Button asChild variant="outline" className="h-11 rounded-xl text-sm" size="lg">
                    <Link href="/volunteer">
                      <HandHeart className="h-4 w-4" />
                      Volunteer
                    </Link>
                  </Button>
                  <Button asChild variant="gold" className="h-11 rounded-xl text-sm" size="lg">
                    <Link href="/donate">Donate</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

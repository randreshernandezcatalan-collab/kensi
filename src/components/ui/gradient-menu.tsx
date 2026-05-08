"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Layers,
  Briefcase,
  GitBranch,
  Tag,
  HelpCircle,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Servicios",
    href: "#servicios",
    icon: <Layers size={15} />,
    gradientFrom: "#6FFF00",
    gradientTo: "#00D4AA",
    active: true,
  },
  {
    title: "Trabajo",
    href: "#trabajo",
    icon: <Briefcase size={15} />,
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
  },
  {
    title: "Proceso",
    href: "#proceso",
    icon: <GitBranch size={15} />,
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
  },
  {
    title: "Precios",
    href: "#precios",
    icon: <Tag size={15} />,
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
  },
  {
    title: "FAQ",
    href: "#faq",
    icon: <HelpCircle size={15} />,
    gradientFrom: "#80FF72",
    gradientTo: "#7EE8FA",
  },
];

export function GradientMenu({ className }: { className?: string }) {
  return (
    <nav className={cn("nav-links", className)}>
      <ul className="flex gap-[5px] list-none m-0 p-0">
        {navItems.map(
          ({ title, href, icon, gradientFrom, gradientTo, active }, idx) => (
            <li key={idx}>
              <a
                href={href}
                style={
                  {
                    "--gf": gradientFrom,
                    "--gt": gradientTo,
                  } as React.CSSProperties
                }
                className={cn(
                  "gradient-menu-item",
                  "relative flex items-center justify-center gap-[7px]",
                  "h-[38px] rounded-full px-[16px]",
                  "transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                  "group cursor-pointer overflow-hidden",
                  active
                    ? "border border-transparent"
                    : "border border-[rgba(234,242,225,.08)] hover:border-transparent"
                )}
              >
                {/* Gradient fill */}
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--gf),var(--gt))] transition-opacity duration-500",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />

                {/* Glow beneath */}
                <span
                  className={cn(
                    "absolute top-[8px] inset-x-[4px] h-full rounded-full bg-[linear-gradient(135deg,var(--gf),var(--gt))] blur-[14px] -z-10 transition-opacity duration-500",
                    active ? "opacity-40" : "opacity-0 group-hover:opacity-40"
                  )}
                />

                {/* Icon */}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-500",
                    active
                      ? "text-white"
                      : "text-[var(--ink-dim)] group-hover:text-white"
                  )}
                >
                  {icon}
                </span>

                {/* Label */}
                <span
                  className={cn(
                    "relative z-10 uppercase tracking-[.1em] text-[11px] font-semibold transition-colors duration-500 whitespace-nowrap",
                    active
                      ? "text-white"
                      : "text-[var(--ink-dim)] group-hover:text-white"
                  )}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {title}
                </span>
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

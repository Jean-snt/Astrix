import React from "react";

interface AstrixLogoProps {
  showText?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Official AVENTORIX Logo Component
 * Horizontal layout: [ ICONO AVENTORIX ] -> [ TEXTO AVENTORIX ]
 * Direct transparent PNG assets preserving aspect ratio and render sizes.
 */
export function AstrixLogo({
  showText = true,
  className = "",
  size = "md",
}: AstrixLogoProps) {
  // Enriched sizes: Prominent enlarged icon + proportional text
  const iconSizes = {
    sm: "h-8",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20",
  };

  const textHeights = {
    sm: "h-4 sm:h-5",
    md: "h-6 sm:h-7",
    lg: "h-8 sm:h-9",
    xl: "h-12",
  };

  return (
    <div className={`inline-flex items-center gap-3.5 group flex-shrink-0 select-none ${className}`}>
      {/* Icon: Official AVENTORIX Icon */}
      <img
        src="/icono-aventorix.png"
        alt="AVENTORIX Logo Icon"
        className={`${iconSizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
      />

      {/* Text: Official AVENTORIX Typography */}
      {showText && (
        <img
          src="/texto-aventorix.png"
          alt="AVENTORIX"
          className={`${textHeights[size]} w-auto object-contain transition-opacity duration-300 group-hover:opacity-90`}
        />
      )}
    </div>
  );
}

export const AventorixLogo = AstrixLogo;

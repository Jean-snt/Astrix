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
  // Enriched sizes: Prominent enlarged icon + 1:1 proportional text
  const iconSizes = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11 md:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20",
  };

  // Increased text heights for 1:1 proportion with icon and matching menu typography
  const textHeights = {
    sm: "h-6 sm:h-7",
    md: "h-8 sm:h-9 md:h-10",
    lg: "h-11 sm:h-13",
    xl: "h-16",
  };

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 group flex-shrink-0 select-none ${className}`}>
      {/* Icon: Official AVENTORIX Icon */}
      <img
        src="/icono-aventorix.png"
        alt="AVENTORIX Logo Icon"
        className={`${iconSizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
      />

      {/* Text: Official AVENTORIX Typography */}
      {showText && (
        <div className="flex items-center">
          <img
            src="/texto-aventorix.png"
            alt="AVENTORIX"
            className={`${textHeights[size]} w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 font-bold tracking-wider text-xl sm:text-2xl`}
          />
        </div>
      )}
    </div>
  );
}

export const AventorixLogo = AstrixLogo;

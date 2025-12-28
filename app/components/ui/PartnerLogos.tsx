"use client";

interface LogoProps {
  className?: string;
}

// SXSW - Bold wordmark with arrow
export function SXSWLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="currentColor"
      className={className}
      aria-label="SXSW"
    >
      <text
        x="0"
        y="30"
        fontFamily="Arial Black, sans-serif"
        fontSize="28"
        fontWeight="900"
        letterSpacing="-1"
      >
        SXSW
      </text>
    </svg>
  );
}

// Wonderfruit - Bold wordmark
export function WonderfruitLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="currentColor"
      className={className}
      aria-label="Wonderfruit"
    >
      <text
        x="0"
        y="28"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontSize="20"
        fontWeight="900"
        letterSpacing="1"
      >
        WONDERFRUIT
      </text>
    </svg>
  );
}

// Shambala - Whimsical festival wordmark
export function ShambalaLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 140 40"
      fill="currentColor"
      className={className}
      aria-label="Shambala"
    >
      <text
        x="0"
        y="28"
        fontFamily="Georgia, serif"
        fontSize="24"
        fontWeight="400"
        letterSpacing="3"
      >
        SHAMBALA
      </text>
    </svg>
  );
}

// San Francisco Zen Center - Clean minimal wordmark
export function SFZCLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="currentColor"
      className={className}
      aria-label="San Francisco Zen Center"
    >
      <text
        x="0"
        y="16"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="11"
        fontWeight="300"
        letterSpacing="1.5"
      >
        SAN FRANCISCO
      </text>
      <text
        x="0"
        y="32"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="14"
        fontWeight="400"
        letterSpacing="2"
      >
        ZEN CENTER
      </text>
    </svg>
  );
}

// Colours of Ostrava - Bold festival wordmark
export function ColoursLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      fill="currentColor"
      className={className}
      aria-label="Colours of Ostrava"
    >
      <text
        x="0"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="1"
      >
        COLOURS
      </text>
      <text
        x="0"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="400"
        letterSpacing="0.5"
      >
        OF OSTRAVA
      </text>
    </svg>
  );
}

// Stanford - Clean serif wordmark
export function StanfordLogo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="currentColor"
      className={className}
      aria-label="Stanford"
    >
      <text
        x="0"
        y="28"
        fontFamily="Palatino, Georgia, serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="1"
      >
        Stanford
      </text>
    </svg>
  );
}

// Export mapping by name (matches PARTNER_LOGOS in constants.ts)
export const PARTNER_LOGO_COMPONENTS: Record<string, React.FC<LogoProps>> = {
  SXSW: SXSWLogo,
  Wonderfruit: WonderfruitLogo,
  Shambala: ShambalaLogo,
  "San Francisco Zen Center": SFZCLogo,
  "Colors of Ostrava": ColoursLogo,
  Stanford: StanfordLogo,
};

"use client";

interface ShapeProps {
  className?: string;
}

// Voice Meditation - Sound Ripples
export function VoiceWaveShape({ className = "" }: ShapeProps) {
  return (
    <svg
      className={`voice-wave-shape absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Concentric ripples emanating from bottom-left */}
      <circle
        cx="0"
        cy="300"
        r="80"
        fill="none"
        stroke="rgba(218, 197, 167, 0.2)"
        strokeWidth="1.5"
        className="voice-ripple-1"
      />
      <circle
        cx="0"
        cy="300"
        r="140"
        fill="none"
        stroke="rgba(218, 197, 167, 0.15)"
        strokeWidth="1.5"
        className="voice-ripple-2"
      />
      <circle
        cx="0"
        cy="300"
        r="200"
        fill="none"
        stroke="rgba(218, 197, 167, 0.1)"
        strokeWidth="1"
        className="voice-ripple-3"
      />
      <circle
        cx="0"
        cy="300"
        r="260"
        fill="none"
        stroke="rgba(218, 197, 167, 0.06)"
        strokeWidth="1"
        className="voice-ripple-4"
      />
      {/* Floating particles top-right */}
      <circle
        cx="350"
        cy="50"
        r="6"
        fill="rgba(218, 197, 167, 0.15)"
        className="voice-particle-1"
      />
      <circle
        cx="320"
        cy="80"
        r="4"
        fill="rgba(218, 197, 167, 0.1)"
        className="voice-particle-2"
      />
      <circle
        cx="370"
        cy="90"
        r="3"
        fill="rgba(218, 197, 167, 0.08)"
        className="voice-particle-3"
      />
    </svg>
  );
}

// Active Meditation - Organic Flow
export function ActiveFlowShape({ className = "" }: ShapeProps) {
  return (
    <svg
      className={`active-flow-shape absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Flowing organic curve from top-right */}
      <path
        d="M 450 -20 Q 350 80, 320 150 T 280 280"
        fill="none"
        stroke="rgba(218, 197, 167, 0.08)"
        strokeWidth="2"
        strokeLinecap="round"
        className="active-flow-1"
      />
      {/* Secondary flow line */}
      <path
        d="M 420 -40 Q 330 60, 300 130 T 250 260"
        fill="none"
        stroke="rgba(218, 197, 167, 0.05)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="active-flow-2"
      />
      {/* Movement circles in bottom-left */}
      <circle
        cx="50"
        cy="230"
        r="12"
        fill="none"
        stroke="rgba(218, 197, 167, 0.08)"
        strokeWidth="1"
        className="active-circle-1"
      />
      <circle
        cx="80"
        cy="260"
        r="6"
        fill="rgba(218, 197, 167, 0.05)"
        className="active-circle-2"
      />
    </svg>
  );
}

// Sound-Mandala Performance - Layered Mandala
export function MandalaShape({ className = "" }: ShapeProps) {
  // Generate radial spoke positions
  const spokeAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      className={`mandala-shape absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Mandala positioned in top-right area */}
      <g className="mandala-group">
        {/* Outer rotating ring with dashed pattern */}
        <circle
          cx="320"
          cy="80"
          r="60"
          fill="none"
          stroke="rgba(218, 197, 167, 0.06)"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="mandala-outer"
        />
        {/* Middle ring */}
        <circle
          cx="320"
          cy="80"
          r="40"
          fill="none"
          stroke="rgba(218, 197, 167, 0.08)"
          strokeWidth="1"
          className="mandala-middle"
        />
        {/* Inner ring */}
        <circle
          cx="320"
          cy="80"
          r="20"
          fill="none"
          stroke="rgba(218, 197, 167, 0.1)"
          strokeWidth="1"
          className="mandala-inner"
        />
        {/* Radial spokes */}
        {spokeAngles.map((angle, i) => (
          <line
            key={i}
            x1="320"
            y1="80"
            x2={320 + 50 * Math.cos((angle * Math.PI) / 180)}
            y2={80 + 50 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(218, 197, 167, 0.05)"
            strokeWidth="1"
            className="mandala-spoke"
          />
        ))}
        {/* Center dot */}
        <circle cx="320" cy="80" r="3" fill="rgba(218, 197, 167, 0.1)" />
      </g>
      {/* Small decorative dots bottom-left */}
      <circle
        cx="40"
        cy="250"
        r="4"
        fill="rgba(218, 197, 167, 0.06)"
        className="mandala-dot-1"
      />
      <circle
        cx="60"
        cy="270"
        r="2"
        fill="rgba(218, 197, 167, 0.04)"
        className="mandala-dot-2"
      />
    </svg>
  );
}

// Export a mapping for easy integration
export const OFFERING_SHAPES: Record<string, React.FC<ShapeProps>> = {
  "Voice Meditation": VoiceWaveShape,
  "Active Meditation": ActiveFlowShape,
  "Sound-Mandala Performance": MandalaShape,
};

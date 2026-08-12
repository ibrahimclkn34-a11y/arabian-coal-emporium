export function RadiantLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 130" className={className} fill="currentColor" aria-hidden="true">
      <text x="0" y="90" fontFamily="var(--font-serif)" fontWeight="600" fontSize="100">
        R
      </text>
      <text x="46" y="90" fontFamily="var(--font-serif)" fontWeight="500" fontSize="88">
        T
      </text>
      <line x1="99" y1="18" x2="99" y2="102" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <text x="119" y="74" fontFamily="var(--font-serif)" fontWeight="500" fontSize="44" letterSpacing="8">
        RADIANT
      </text>
      <line x1="121" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <text x="278" y="104" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="500" fontSize="13" letterSpacing="4" opacity="0.6">
        TRADING
      </text>
      <line x1="356" y1="100" x2="435" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

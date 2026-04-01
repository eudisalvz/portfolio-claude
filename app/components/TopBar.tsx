export default function TopBar() {
  return (
    <div className="flex items-center justify-between h-5">
      {/* Open for work badge */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-dot flex-shrink-0" />
        <span className="text-white text-[12px] leading-5">Open for work</span>
      </div>

      {/* Visit counter */}
      <div className="flex items-center gap-1.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9E9E9E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6"  y1="20" x2="6"  y2="14" />
        </svg>
        <span className="text-[#9E9E9E] text-[12px] leading-5">1.2k</span>
      </div>
    </div>
  );
}

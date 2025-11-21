export function CSharpIcon({ className = "h-4 w-4", color = "currentColor" }: { className?: string, color?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Hexagon shape */}
        <path
          d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
          fill="#68217A"
          stroke="#68217A"
          strokeWidth="0.5"
        />
        {/* C Letter */}
        <path
          d="M10 8.5C8.61929 8.5 7.5 9.61929 7.5 11V13C7.5 14.3807 8.61929 15.5 10 15.5C10.8 15.5 11.5 15.1 12 14.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Sharp symbols */}
        <line x1="14" y1="9" x2="14" y2="15" stroke="white" strokeWidth="1" />
        <line x1="16.5" y1="9" x2="16.5" y2="15" stroke="white" strokeWidth="1" />
        <line x1="13" y1="10.5" x2="17.5" y2="10.5" stroke="white" strokeWidth="1" />
        <line x1="13" y1="13.5" x2="17.5" y2="13.5" stroke="white" strokeWidth="1" />
      </svg>
    )
  }
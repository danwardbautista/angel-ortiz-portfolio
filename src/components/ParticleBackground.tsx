const ArchitecturalBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Subtle blueprint-inspired grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Fine grid pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0, 0, 0, 0.03)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Larger accent grid */}
          <pattern id="grid-large" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="rgba(0, 0, 0, 0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-large)" />

        {/* Subtle diagonal accent lines - architectural feel */}
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="rgba(0, 0, 0, 0.02)"
          strokeWidth="1"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="rgba(0, 0, 0, 0.02)"
          strokeWidth="1"
        />
      </svg>

      {/* Subtle corner accent - like architectural plan markers */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-black/5"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-black/5"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-black/5"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-black/5"></div>
    </div>
  );
};

export default ArchitecturalBackground;

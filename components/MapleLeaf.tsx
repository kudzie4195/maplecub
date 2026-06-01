// Simplified maple leaf SVG — Canadian flag inspired
export default function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M32 4l3.4 11.1 10.6-4-3.5 10.9 11.5 1.1-9.2 6.7 6.2 9.8-11.2-2.7-1.8 11.4L32 39.4l-6 8.9-1.8-11.4-11.2 2.7 6.2-9.8L10 23.1l11.5-1.1L18 11.1l10.6 4z" />
      <rect x="30" y="42" width="4" height="14" />
    </svg>
  );
}

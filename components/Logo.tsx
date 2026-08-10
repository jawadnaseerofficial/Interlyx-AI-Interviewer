export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="4"
        stroke="#3bf083"
        strokeWidth="1.5"
      />
      <circle cx="13" cy="13" r="4" fill="#3bf083" />
      <path d="M13 1v6M13 19v6M1 13h6M19 13h6" stroke="#3bf083" strokeWidth="1.5" />
    </svg>
  );
}

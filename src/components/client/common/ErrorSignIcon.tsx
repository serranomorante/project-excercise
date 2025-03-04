export function ErrorSignIcon({ size = 24, color = 'black' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
      <line x1="12" y1="8" x2="12" y2="13" stroke="red" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="16" stroke="red" strokeWidth="2" />
    </svg>
  );
};

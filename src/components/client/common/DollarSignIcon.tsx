export function DollarSignIcon({ size = 24, color = 'black' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <text 
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fontSize="24" 
        fill={color}
      >
        $
      </text>
    </svg>
  );
};

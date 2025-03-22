// components/GridIcon.tsx
import { FC } from 'react';

interface GridIconProps {
  className?: string;
  fill?: string;
}

const GridIcon: FC<GridIconProps> = ({ className, fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* SVG paths remain the same */}
    <ellipse cx="3.93" cy="4.08" rx="3.93" ry="4.08" />
    <ellipse cx="17.98" cy="4.08" rx="3.93" ry="4.08" />
    <ellipse cx="32.02" cy="4.08" rx="3.93" ry="4.08" />
    <ellipse cx="46.07" cy="4.08" rx="3.93" ry="4.08" />
    <ellipse cx="3.93" cy="18.03" rx="3.93" ry="4.08" />
    <ellipse cx="3.93" cy="31.97" rx="3.93" ry="4.08" />
    <ellipse cx="3.93" cy="45.92" rx="3.93" ry="4.08" />
    <ellipse cx="17.98" cy="18.03" rx="3.93" ry="4.08" />
    <ellipse cx="17.98" cy="31.97" rx="3.93" ry="4.08" />
    <ellipse cx="17.98" cy="45.92" rx="3.93" ry="4.08" />
    <ellipse cx="32.02" cy="18.03" rx="3.93" ry="4.08" />
    <ellipse cx="32.02" cy="31.97" rx="3.93" ry="4.08" />
    <ellipse cx="32.02" cy="45.92" rx="3.93" ry="4.08" />
    <ellipse cx="46.07" cy="18.03" rx="3.93" ry="4.08" />
    <ellipse cx="46.07" cy="31.97" rx="3.93" ry="4.08" />
    <ellipse cx="46.07" cy="45.92" rx="3.93" ry="4.08" />
  </svg>
);

export default GridIcon;
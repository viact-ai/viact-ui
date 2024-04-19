import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DrawZone({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#draw-zone_svg__a)">
        <circle cx={4.5} cy={3.5} r={1.5} fill="currentColor" />
        <circle cx={4.5} cy={15.5} r={1.5} fill="currentColor" />
        <circle cx={16.5} cy={15.5} r={1.5} fill="currentColor" />
        <circle cx={16.5} cy={3.5} r={1.5} fill="currentColor" />
        <path
          stroke="currentColor"
          strokeWidth={1.3}
          d="M4.65 3.65h11.7v11.7H4.65z"
        />
      </g>
      <defs>
        <clipPath id="draw-zone_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DrawZone

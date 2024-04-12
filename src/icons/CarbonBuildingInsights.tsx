import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CarbonBuildingInsights({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 26"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g stroke="currentColor" strokeWidth={2}>
        <rect width={10} height={20} x={13} y={3} rx={1} />
        <path
          fill="#fff"
          d="m3.553 6.342 10-5A1 1 0 0 1 15 2.236v21.528a1 1 0 0 1-1.447.894l-10-5A1 1 0 0 1 3 18.764V7.236a1 1 0 0 1 .553-.894Z"
        />
      </g>
    </svg>
  )
}
export default CarbonBuildingInsights

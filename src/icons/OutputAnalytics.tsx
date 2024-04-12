import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OutputAnalytics({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={40} height={40} fill="#56CCF2" rx={8} />
      <g
        stroke="#fff"
        strokeWidth={1.5}
        clipPath="url(#output-analytics_svg__a)">
        <circle cx={13} cy={25} r={2} />
        <circle cx={17} cy={15} r={2} />
        <circle cx={23} cy={25} r={2} />
        <path d="m14 23 2-6M18 16l4 8M24.5 23l2.5-4" />
        <circle cx={28} cy={17} r={2} />
      </g>
      <defs>
        <clipPath id="output-analytics_svg__a">
          <path fill="#fff" d="M8 8h24v24H8z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default OutputAnalytics

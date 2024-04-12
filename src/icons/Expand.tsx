import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Expand({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#expand_svg__a)">
        <rect
          width={20.5}
          height={20.5}
          x={1.75}
          y={1.75}
          stroke="currentColor"
          strokeWidth={1.5}
          rx={2.25}
        />
        <path fill="currentColor" d="M8 11h8v2H8z" />
        <path fill="currentColor" d="M13 8v8h-2V8z" />
      </g>
      <defs>
        <clipPath id="expand_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Expand

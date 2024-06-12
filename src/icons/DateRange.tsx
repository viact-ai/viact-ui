import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DateRange({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 13"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#dateRange_svg__a)">
        <path
          stroke="#212121"
          strokeLinecap="square"
          strokeMiterlimit={10}
          d="M3.75 6.75h-1v.5h1zM6.75 6.75h-1v.5h1zM3.75 9.25h-1v.5h1zM6.75 9.25h-1v.5h1zM9.75 6.75h-1v.5h1z"
        />
        <path
          fill="#212121"
          d="M3.75 6.75h-1v.5h1zM6.75 6.75h-1v.5h1zM3.75 9.25h-1v.5h1zM6.75 9.25h-1v.5h1zM9.75 6.75h-1v.5h1z"
        />
        <path
          stroke="#212121"
          strokeLinecap="square"
          strokeMiterlimit={10}
          d="M10.75 2.25h-9a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1ZM3.25 1.25v1.5M9.25 1.25v1.5M.75 4.75h11"
        />
      </g>
      <defs>
        <clipPath id="dateRange_svg__a">
          <path fill="#fff" d="M0 .5h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DateRange

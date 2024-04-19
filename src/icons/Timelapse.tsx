import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Timelapse({
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
      <g clipPath="url(#timelapse_svg__a)">
        <path
          fill="currentColor"
          d="M13.534 6.467A4.98 4.98 0 0 0 10 5v5l-3.533 3.533a5.01 5.01 0 0 0 7.075 0 4.99 4.99 0 0 0-.008-7.066M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.334 14.6 18.334 10 14.6 1.667 10 1.667m0 15A6.665 6.665 0 0 1 3.334 10 6.665 6.665 0 0 1 10 3.333 6.665 6.665 0 0 1 16.667 10 6.665 6.665 0 0 1 10 16.666"
        />
      </g>
      <defs>
        <clipPath id="timelapse_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Timelapse

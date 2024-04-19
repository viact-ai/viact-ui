import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function TickGreen({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 90 90"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#tickGreen_svg__a)">
        <path
          fill="#27AE60"
          fillRule="evenodd"
          d="M45 3.75C22.219 3.75 3.75 22.219 3.75 45S22.219 86.25 45 86.25 86.25 67.781 86.25 45 67.781 3.75 45 3.75m17.88 34.275a3.75 3.75 0 1 0-5.76-4.8L40.995 52.571l-8.344-8.347a3.75 3.75 0 0 0-5.302 5.302l11.25 11.25a3.75 3.75 0 0 0 5.531-.251z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="tickGreen_svg__a">
          <path fill="#fff" d="M0 0h90v90H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default TickGreen

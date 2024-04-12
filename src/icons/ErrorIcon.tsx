import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ErrorIcon({
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
      <g clipPath="url(#errorIcon_svg__a)">
        <path
          fill="#EB5757"
          d="M45 5.25a40 40 0 1 0 0 80 40 40 0 0 0 0-80ZM41.5 22a3.5 3.5 0 0 1 7 0v30a3.5 3.5 0 1 1-7 0V22ZM45 71.5a4.5 4.5 0 1 1 0-8.999 4.5 4.5 0 0 1 0 8.999Z"
        />
      </g>
      <defs>
        <clipPath id="errorIcon_svg__a">
          <path fill="#fff" d="M0 0h90v90H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ErrorIcon

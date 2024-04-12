import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ViActShare({
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
      <path
        stroke="#27AE60"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.333 5c0 1.38 2.986 2.5 6.667 2.5 3.682 0 6.667-1.12 6.667-2.5S13.682 2.5 10 2.5C6.32 2.5 3.333 3.62 3.333 5Z"
      />
      <path
        stroke="#27AE60"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.333 5v5c0 1.38 2.986 2.5 6.667 2.5.301 0 .597-.008.888-.022m5.779-1.645V5"
      />
      <path
        stroke="#27AE60"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.333 10v5c0 1.38 2.986 2.5 6.667 2.5m3.334.833 4.166-4.166m0 0v3.75m0-3.75h-3.75"
      />
    </svg>
  )
}
export default ViActShare

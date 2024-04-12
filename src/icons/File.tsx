import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function File({
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
      <rect
        width={16.5}
        height={16.5}
        x={3.75}
        y={3.75}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={3.25}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.75 7A3.25 3.25 0 0 1 7 3.75h5.25v4.5h-8.5V7Z"
      />
    </svg>
  )
}
export default File

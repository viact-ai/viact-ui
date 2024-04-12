import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Monitor({
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
        rx={1.25}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.75 4v16M20 11.75H4"
      />
    </svg>
  )
}
export default Monitor

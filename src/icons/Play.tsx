import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Play({
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
        width={24}
        height={24}
        fill="currentColor"
        fillOpacity={0.1}
        rx={12}
      />
      <path
        fill="currentColor"
        d="M16.5 11.134a1 1 0 0 1 0 1.732l-6 3.464a1 1 0 0 1-1.5-.866V8.536a1 1 0 0 1 1.5-.866l6 3.464Z"
      />
      <rect
        width={23}
        height={23}
        x={0.5}
        y={0.5}
        stroke="currentColor"
        strokeOpacity={0.7}
        rx={11.5}
      />
    </svg>
  )
}
export default Play

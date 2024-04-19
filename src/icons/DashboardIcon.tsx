import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DashboardIcon({
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
      <path
        fill="currentColor"
        d="M11.25 13.5h1.5v3h-1.5zM15 12h1.5v4.5H15zM7.5 9H9v7.5H7.5z"
      />
      <rect
        width={16.5}
        height={16.5}
        x={3.75}
        y={3.75}
        stroke="currentColor"
        rx={2.25}
      />
    </svg>
  )
}
export default DashboardIcon

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DashboardEvent({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={42} height={42} fill="#56CCF2" rx={8} />
      <rect width={18} height={18} x={12} y={12} fill="#fff" rx={4} />
      <path stroke="#56CCF2" strokeWidth={1.5} d="M22 12v6H12" />
    </svg>
  )
}
export default DashboardEvent

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function AnalyticsChart({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={40} height={40} fill="currentColor" rx={8} />
      <path
        fill="#fff"
        d="M7 18h6v11H7zM21 14h6v15h-6zM14 10h6v19h-6zM28 18h6v11h-6z"
      />
    </svg>
  )
}
export default AnalyticsChart

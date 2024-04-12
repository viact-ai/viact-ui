import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function BarChart({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 74 74"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={74} height={74} fill="currentColor" rx={8} />
      <path
        fill="#fff"
        d="M12.95 33.3h11.1v20.35h-11.1zM38.85 25.9h11.1v27.75h-11.1zM25.9 18.5H37v35.15H25.9zM51.8 33.3h11.1v20.35H51.8z"
      />
    </svg>
  )
}
export default BarChart

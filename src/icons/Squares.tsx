import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Squares({
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
      <circle cx={6.5} cy={6.5} r={1.5} fill="currentColor" />
      <circle cx={6.5} cy={18.5} r={1.5} fill="currentColor" />
      <circle cx={18.5} cy={18.5} r={1.5} fill="currentColor" />
      <circle cx={18.5} cy={6.5} r={1.5} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M6.65 6.65h11.7v11.7H6.65z"
      />
    </svg>
  )
}
export default Squares

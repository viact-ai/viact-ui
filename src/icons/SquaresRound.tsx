import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SquaresRound({
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
        stroke="currentColor"
        strokeWidth={1.8}
        d="M6 4.9h12A1.1 1.1 0 0 1 19.1 6v12a1.1 1.1 0 0 1-1.1 1.1H6A1.1 1.1 0 0 1 4.9 18V6A1.1 1.1 0 0 1 6 4.9Z"
      />
    </svg>
  )
}
export default SquaresRound

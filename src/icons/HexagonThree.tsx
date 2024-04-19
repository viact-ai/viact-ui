import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function HexagonThree({
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
        strokeWidth={1.5}
        d="M9.067 2.42 11.134 6 9.067 9.58H4.933L2.866 6l2.067-3.58zM9.067 14.42 11.134 18l-2.067 3.58H4.933L2.866 18l2.067-3.58zM19.067 8.42 21.134 12l-2.067 3.58h-4.134L12.866 12l2.067-3.58z"
      />
    </svg>
  )
}
export default HexagonThree

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Ai({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) {
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
        d="M6.75 6.75h10.5v10.5H6.75zM9.75 3v4M9.75 17v4M14.75 3v4M14.75 17v4M3 15.25h4M17 15.25h4M3 9.25h4M17 9.25h4"
      />
    </svg>
  )
}
export default Ai

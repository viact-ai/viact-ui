import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Link({
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
      <rect width={24} height={24} fill="#2B518E" rx={12} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.03 10.97a2.91 2.91 0 0 0-4.118 0l-2.06 2.06a2.912 2.912 0 0 0 4.119 4.117L12 16.117"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.97 13.03a2.91 2.91 0 0 0 4.118 0l2.06-2.06a2.912 2.912 0 0 0-4.119-4.117L12 7.883"
      />
    </svg>
  )
}
export default Link

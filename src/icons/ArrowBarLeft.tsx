import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowBarLeft({
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
        fillRule="evenodd"
        d="M3.75 22.5a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 1.5 0v19.5a.75.75 0 0 1-.75.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.282 12.531a.75.75 0 0 0-.53-1.28h-8.69l3.22-3.219A.75.75 0 1 0 12.22 6.97l-4.5 4.5a.75.75 0 0 0 0 1.062l4.5 4.5a.75.75 0 1 0 1.062-1.062l-3.22-3.22h8.69a.75.75 0 0 0 .53-.219"
      />
    </svg>
  )
}
export default ArrowBarLeft

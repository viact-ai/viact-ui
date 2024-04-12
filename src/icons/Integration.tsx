import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Integration({
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.8 6.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6v0Zm.9 13.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4v0Zm12.6.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Zm-7.2-7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2v0Zm5.4-7.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6v0ZM7.5 15.15l1.8-1.8m-3.15-7.2 1.8 1.8-1.8-1.8Zm8.55.45-.9.9.9-.9Zm1.8 9.675L13.8 12.9l2.7 3.375Z"
      />
    </svg>
  )
}
export default Integration

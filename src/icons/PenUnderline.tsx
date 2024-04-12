import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PenUnderline({
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
        d="M1.5 19.5h21V21h-21v-1.5ZM19.05 6.75c.6-.6.6-1.5 0-2.1l-2.7-2.7c-.6-.6-1.5-.6-2.1 0L3 13.2V18h4.8L19.05 6.75ZM15.3 3 18 5.7l-2.25 2.25-2.7-2.7L15.3 3ZM4.5 16.5v-2.7L12 6.3 14.7 9l-7.5 7.5H4.5Z"
      />
    </svg>
  )
}
export default PenUnderline

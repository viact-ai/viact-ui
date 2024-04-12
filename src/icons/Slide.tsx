import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Slide({
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
        strokeWidth={1.3}
        d="M5.65 5.65h13.7v13.7H5.65z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M10.65 5.65h8.7v13.7h-8.7z"
      />
      <path fill="currentColor" d="M9 12h3.9v1.3H9z" />
    </svg>
  )
}
export default Slide

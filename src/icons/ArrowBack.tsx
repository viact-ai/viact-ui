import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowBack({
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
        fill="#000"
        d="M5.25 11.25h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 1 1 0-1.5Z"
      />
      <path
        fill="#000"
        d="m5.562 12 6.22 6.22a.75.75 0 1 1-1.062 1.062l-6.75-6.75a.75.75 0 0 1 0-1.062l6.75-6.75a.751.751 0 0 1 1.062 1.062L5.562 12Z"
      />
    </svg>
  )
}
export default ArrowBack

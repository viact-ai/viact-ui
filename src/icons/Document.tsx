import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Document({
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
        d="m19.795 7.958-4.78-4.754A.621.621 0 0 0 14.537 3H5.366C4.615 3 4 3.611 4 4.358v15.284C4 20.389 4.615 21 5.366 21h13.268c.751 0 1.366-.611 1.366-1.358V8.434a.615.615 0 0 0-.205-.476ZM14.537 4.63l3.824 3.804h-3.824V4.63Zm4.097 15.012H5.366V4.357h7.805v4.076c0 .747.614 1.358 1.366 1.358h4.097v9.85Z"
      />
      <path fill="currentColor" d="M8 15.75h8V17H8v-1.25ZM8 12h8v1.25H8V12Z" />
    </svg>
  )
}
export default Document

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function User2({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 22"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        d="M10 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM15 13h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 16.734 21H3.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 4.649 13H5"
      />
    </svg>
  )
}
export default User2

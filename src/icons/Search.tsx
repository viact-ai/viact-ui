import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Search({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 15"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M6.5 12.5a5.964 5.964 0 0 0 3.673-1.266l3.297 3.297 1.06-1.06-3.297-3.297A5.964 5.964 0 0 0 12.5 6.5c0-3.308-2.692-6-6-6s-6 2.692-6 6 2.692 6 6 6ZM6.5 2C8.982 2 11 4.018 11 6.5S8.982 11 6.5 11A4.505 4.505 0 0 1 2 6.5C2 4.018 4.018 2 6.5 2Z"
      />
    </svg>
  )
}
export default Search

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ListBoxes({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 18"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M11 3h10.5v1.5H11zm0 10.5h10.5V15H11zm-4.5-6H2A1.5 1.5 0 0 1 .5 6V1.5A1.5 1.5 0 0 1 2 0h4.5A1.5 1.5 0 0 1 8 1.5V6a1.5 1.5 0 0 1-1.5 1.5M2 1.5V6h4.5V1.5zM6.5 18H2a1.5 1.5 0 0 1-1.5-1.5V12A1.5 1.5 0 0 1 2 10.5h4.5A1.5 1.5 0 0 1 8 12v4.5A1.5 1.5 0 0 1 6.5 18M2 12v4.5h4.5V12z"
      />
    </svg>
  )
}
export default ListBoxes

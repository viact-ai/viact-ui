import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CloseCircle({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M9 .875C4.52.875.875 4.52.875 9S4.52 17.125 9 17.125 17.125 13.48 17.125 9 13.48.875 9 .875Zm2.942 10.183a.624.624 0 1 1-.884.884L9 9.884l-2.058 2.058a.625.625 0 0 1-.884-.884L8.116 9 6.058 6.942a.625.625 0 0 1 .884-.884L9 8.116l2.058-2.058a.625.625 0 0 1 .884.884L9.884 9l2.058 2.058Z"
      />
    </svg>
  )
}
export default CloseCircle

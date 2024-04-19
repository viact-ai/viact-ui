import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Feedback({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 19"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M4.411 14.25H16.75a1.5 1.5 0 0 0 1.5-1.5V3a1.5 1.5 0 0 0-1.5-1.5H3.25A1.5 1.5 0 0 0 1.75 3v13.38zm.527 1.5-3.47 2.775A.75.75 0 0 1 .25 17.94V3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v9.75a3 3 0 0 1-3 3z"
      />
    </svg>
  )
}
export default Feedback

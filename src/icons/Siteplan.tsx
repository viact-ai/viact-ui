import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Siteplan({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 18"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M9.705.948a.63.63 0 0 1 .588 0l9.375 5a.625.625 0 0 1 0 1.103l-9.375 5a.63.63 0 0 1-.588 0l-9.375-5a.625.625 0 0 1 0-1.103z"
      />
      <path
        fill="currentColor"
        d="M2.655 9.707.33 10.947a.625.625 0 0 0 0 1.103l9.375 5a.62.62 0 0 0 .588 0l9.375-5a.625.625 0 0 0 0-1.103l-2.325-1.24-6.462 3.445a1.87 1.87 0 0 1-1.763 0z"
      />
    </svg>
  )
}
export default Siteplan

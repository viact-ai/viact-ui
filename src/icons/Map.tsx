import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Map({
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
        d="M8.5 4.5 3 7v12.994a.1.1 0 0 0 .156.084L8.5 16.5m0-12 6 2.5m-6-2.5v12m6-9.5 5.352-2.92a.1.1 0 0 1 .148.088v11.196l-5.5 4.363M14.5 7v12.727m0 0-6-3.227"
      />
    </svg>
  )
}
export default Map

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Download({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12V4m0 8L7.2 9.333M10 12l2.8-2.667m-9.8 4 .435 1.657c.075.288.25.544.496.727.246.183.55.283.862.283h10.414c.313 0 .616-.1.862-.283a1.33 1.33 0 0 0 .496-.727L17 13.333"
      />
    </svg>
  )
}
export default Download

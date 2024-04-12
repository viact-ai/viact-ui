import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Device({
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
      <circle
        cx={12}
        cy={12}
        r={9.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={12}
        r={5.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
export default Device

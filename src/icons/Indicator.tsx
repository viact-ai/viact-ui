import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Indicator({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 176"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path stroke="currentColor" strokeWidth={3} d="M11.5 172V0" />
      <path fill="currentColor" d="M8 8a8 8 0 0 1-8-8h23a8 8 0 0 1-8 8H8Z" />
    </svg>
  )
}
export default Indicator

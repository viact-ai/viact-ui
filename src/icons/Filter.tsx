import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Filter({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M2.79 5.445c6.124-.008 12.25 0 18.374.024.544.114.825.45.844 1.008-.02.558-.3.894-.844 1.007-6.125.032-12.25.032-18.375 0-.544-.114-.825-.45-.844-1.007.029-.56.31-.903.844-1.032Z"
        opacity={0.968}
      />
      <path
        fill="currentColor"
        d="M5.79 11.445c4.124-.008 8.25 0 12.374.024.544.114.825.45.844 1.008-.02.558-.3.894-.844 1.007-4.125.032-8.25.032-12.375 0-.544-.114-.825-.45-.844-1.007.029-.56.31-.903.844-1.032Z"
        opacity={0.967}
      />
      <path
        fill="currentColor"
        d="M8.79 17.445c2.124-.008 4.25 0 6.374.024.639.144.912.542.82 1.195-.085.461-.359.734-.82.82-2.125.032-4.25.032-6.375 0-.544-.114-.825-.45-.844-1.007.029-.56.31-.903.844-1.032Z"
        opacity={0.965}
      />
    </svg>
  )
}
export default Filter

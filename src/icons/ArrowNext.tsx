import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowNext({
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
      <g clipPath="url(#arrowNext_svg__a)">
        <path
          fill="currentColor"
          d="m13.3 5.303-1.4 1.4 4.3 4.3H4v2h12.2l-4.3 4.3 1.4 1.4 6.7-6.7z"
        />
      </g>
      <defs>
        <clipPath id="arrowNext_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ArrowNext

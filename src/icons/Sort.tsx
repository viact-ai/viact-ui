import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Sort({
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
      <g clipPath="url(#sort_svg__a)">
        <g clipPath="url(#sort_svg__b)">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="m3 9 4-4m0 0 4 4M7 5v14m14-4-4 4m0 0-4-4m4 4V5"
          />
        </g>
      </g>
      <defs>
        <clipPath id="sort_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
        <clipPath id="sort_svg__b">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Sort

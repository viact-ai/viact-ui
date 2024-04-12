import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Upload({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#upload_svg__a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.25 9h1.875A1.875 1.875 0 0 1 20 10.875v9a1.875 1.875 0 0 1-1.875 1.875H6.875A1.875 1.875 0 0 1 5 19.875v-9A1.875 1.875 0 0 1 6.875 9H8.75m7.5-3L12.5 2.25 8.75 6m3.75 9.047V2.25"
        />
      </g>
      <defs>
        <clipPath id="upload_svg__a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Upload

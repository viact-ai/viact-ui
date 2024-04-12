import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function InsufficientDiskSpace({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={42} height={42} fill="#F2C94C" rx={8} />
      <g fill="#fff" clipPath="url(#insufficient-disk-space_svg__a)">
        <path d="M28.716 14.386a1.278 1.278 0 0 0-1.227-.914H13.511a1.278 1.278 0 0 0-1.233.94l-1.815 7.366h20.074l-1.82-7.392ZM10.278 23.056v4.472a1.278 1.278 0 0 0 1.278 1.278h17.888a1.278 1.278 0 0 0 1.278-1.278v-4.472H10.278Zm17.889 3.194H25.61v-1.278h2.556v1.278Z" />
      </g>
      <defs>
        <clipPath id="insufficient-disk-space_svg__a">
          <path fill="#fff" d="M9 9h23v23H9z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default InsufficientDiskSpace

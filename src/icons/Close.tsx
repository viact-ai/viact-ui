import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Close({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#close_svg__a)">
        <path
          fill="currentColor"
          d="m17.796 15.94 8.91-8.91a1.222 1.222 0 0 0-1.723-1.724l-8.91 8.91-8.91-8.922a1.222 1.222 0 0 0-1.724 1.723l8.91 8.922-8.922 8.91a1.222 1.222 0 1 0 1.724 1.724l8.922-8.91 8.91 8.91a1.223 1.223 0 0 0 1.723-1.724l-8.91-8.91Z"
        />
      </g>
      <defs>
        <clipPath id="close_svg__a">
          <rect width={32} height={32} fill="currentColor" rx={16} />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Close

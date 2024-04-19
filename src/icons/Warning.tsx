import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Warning({
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
      <g clipPath="url(#warning_svg__a)">
        <path
          fill="#EB5757"
          d="m20.22 17.027-6.493-11.96a2 2 0 0 0-3.513 0l-6.5 11.96a2 2 0 0 0 1.76 2.974H18.46a2 2 0 0 0 1.76-2.954zm-9.246-8.533a1 1 0 1 1 2 0v4.593a1 1 0 1 1-2 0zM12 17.501a1.147 1.147 0 1 1 0-2.294 1.147 1.147 0 0 1 0 2.294"
        />
      </g>
      <defs>
        <clipPath id="warning_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Warning

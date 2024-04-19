import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Deactive({
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
      <g clipPath="url(#deactive_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9m-4.415-3.312L17.688 7.585A7.2 7.2 0 0 1 7.585 17.688m-1.273-1.273A7.2 7.2 0 0 1 16.415 6.312z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="deactive_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Deactive

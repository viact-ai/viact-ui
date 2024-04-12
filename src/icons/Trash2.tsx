import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Trash2({
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
      <g clipPath="url(#trash2_svg__a)">
        <path
          fill="currentColor"
          d="M8.042 3.8h-.209c.115 0 .209-.09.209-.2v.2h7.916v-.2c0 .11.094.2.209.2h-.209v1.8h1.875v-2c0-.883-.747-1.6-1.666-1.6H7.833c-.919 0-1.666.717-1.666 1.6v2h1.875V3.8Zm13.125 1.8H2.833c-.46 0-.833.357-.833.8v.8c0 .11.094.2.208.2h1.573l.643 13.075C4.466 21.327 5.201 22 6.09 22H17.91c.891 0 1.623-.67 1.665-1.525L20.219 7.4h1.573c.114 0 .208-.09.208-.2v-.8c0-.443-.372-.8-.833-.8ZM17.71 20.2H6.289L5.66 7.4H18.34l-.63 12.8Z"
        />
      </g>
      <defs>
        <clipPath id="trash2_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Trash2

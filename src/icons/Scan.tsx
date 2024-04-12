import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Scan({
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
      <g clipPath="url(#scan_svg__a)">
        <path
          fill="currentColor"
          d="M17 22v-2h3v-3h2v3.5c0 .4-.2.7-.5 1-.3.3-.7.5-1 .5H17ZM7 22H3.5c-.4 0-.7-.2-1-.5-.3-.3-.5-.7-.5-1V17h2v3h3v2ZM17 2h3.5c.4 0 .7.2 1 .5.3.3.5.6.5 1V7h-2V4h-3V2ZM7 2v2H4v3H2V3.5c0-.4.2-.7.5-1 .3-.3.6-.5 1-.5H7Zm12 9H5v2h14v-2Z"
        />
      </g>
      <defs>
        <clipPath id="scan_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Scan

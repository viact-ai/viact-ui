import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Paper({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 80"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="url(#paper_svg__a)"
        d="M65.984 26.528 50.049 10.68c-.455-.453-.91-.679-1.594-.679H17.886c-2.504 0-4.552 2.038-4.552 4.528v50.944c0 2.49 2.048 4.528 4.552 4.528h44.228c2.504 0 4.553-2.038 4.553-4.528V28.113c0-.679-.228-1.132-.683-1.585M48.455 15.434l12.748 12.68H48.455z"
      />
      <path
        fill="#fff"
        d="M26.667 52.5h26.666v4.167H26.667zm0-12.5h26.666v4.167H26.667z"
      />
      <defs>
        <linearGradient
          id="paper_svg__a"
          x1={66.667}
          x2={36.569}
          y1={10}
          y2={39.168}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default Paper

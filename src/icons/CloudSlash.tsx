import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CloudSlash({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#cloudSlash_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 11.035v1.094c-.397 2.148-1.673 3.417-3.828 3.809-1.016.019.05.006-.965 0v-1.27c.99.007-.103 0 .887-.02 1.438-.293 2.304-1.158 2.597-2.597.132-1.555-.5-2.668-1.894-3.34-.32-.11-.646-.2-.977-.274a.692.692 0 0 1-.254-.292c-.568-2.496-2.098-4.026-4.59-4.59-2.313-.305-4.168.47-5.566 2.324a5.925 5.925 0 0 0-1.015 3.36.703.703 0 0 1-.41.448c-1.279.03-2.145.636-2.598 1.817-.287 1.465.254 2.487 1.62 3.066.117.031.234.057.352.078 1.185.02 6.706.027 7.891.02 1.07 0 1.04 1.284 0 1.289-1.224.006-6.784 0-8.008-.02C1.438 15.585.358 14.511 0 12.716V11.66c.359-1.726 1.4-2.78 3.125-3.164a7.72 7.72 0 0 1 .607-2.369c.626-1.41 1.7-2.515 3.221-3.315 2.75-1.186 5.29-.847 7.617 1.016a7.121 7.121 0 0 1 2.11 3.457c1.866.584 2.973 1.834 3.32 3.75Z"
          clipRule="evenodd"
          opacity={0.965}
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M2.5 4.167 15.833 17.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m2.5 2.5 15 15"
        />
      </g>
      <defs>
        <clipPath id="cloudSlash_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default CloudSlash

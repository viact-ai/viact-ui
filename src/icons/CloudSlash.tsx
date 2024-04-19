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
          d="M20 11.035v1.094q-.596 3.221-3.828 3.809c-1.016.019.05.006-.965 0v-1.27c.99.007-.103 0 .887-.02q2.157-.439 2.597-2.597.197-2.332-1.894-3.34-.48-.164-.977-.274a.7.7 0 0 1-.254-.292q-.852-3.744-4.59-4.59-3.47-.457-5.566 2.324a5.93 5.93 0 0 0-1.015 3.36.7.7 0 0 1-.41.448q-1.918.045-2.598 1.817-.43 2.198 1.62 3.066.175.047.352.078c1.185.02 6.706.027 7.891.02 1.07 0 1.04 1.284 0 1.289-1.224.006-6.784 0-8.008-.02Q.537 15.41 0 12.716V11.66q.538-2.588 3.125-3.164a7.7 7.7 0 0 1 .607-2.369q.94-2.115 3.221-3.315 4.126-1.779 7.617 1.016a7.1 7.1 0 0 1 2.11 3.457q2.8.876 3.32 3.75"
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

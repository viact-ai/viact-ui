import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function LocalRtsp({
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
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#localRTSP_svg__a)"
        clipRule="evenodd">
        <path
          d="M4.992 4.43q.83-.002.938.82-.045.237-.164.445-3.849 3.886-2.25 9.14a8.74 8.74 0 0 0 2.25 3.423q.33.686-.258 1.148a1.17 1.17 0 0 1-.797 0q-3.612-3.45-3.211-8.46.438-3.7 3.07-6.305.199-.147.422-.211"
          opacity={0.963}
        />
        <path
          d="M18.727 4.476q.294-.006.562.118 4.117 4.08 2.93 9.773a10.04 10.04 0 0 1-2.93 4.992q-.57.28-1.055-.117-.327-.516 0-1.031 3.367-3.328 2.532-8.016a9.1 9.1 0 0 0-1.407-3.187 27 27 0 0 0-1.218-1.453q-.182-.81.586-1.079M8.46 6.727q.974-.024.915.937-.05.172-.14.328-2.604 2.682-1.266 6.188.465 1.05 1.312 1.828.354.613-.164 1.102a.95.95 0 0 1-.984-.047q-2.868-2.912-1.945-6.914A7.4 7.4 0 0 1 8.133 6.89z"
          opacity={0.961}
        />
        <path
          d="M15.023 6.727q.435-.06.797.164 3.194 3.334 1.664 7.71a6.3 6.3 0 0 1-1.804 2.555q-.826.312-1.149-.492a.9.9 0 0 1 .094-.61q2.744-2.748 1.313-6.374a6.1 6.1 0 0 0-1.313-1.781q-.339-.779.398-1.172"
          opacity={0.96}
        />
        <path
          d="M11.602 10.476q2.002-.118 1.851 1.875-.447 1.332-1.851 1.102-1.332-.447-1.102-1.852.235-.879 1.102-1.125"
          opacity={0.966}
        />
      </g>
      <defs>
        <clipPath id="localRTSP_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default LocalRtsp

import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Hook({
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
      <rect width={42} height={42} fill="#EB5757" rx={8} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11.375 25.297A5.328 5.328 0 0 0 21 28.448a5.328 5.328 0 0 0 9.625-3.151v-5.67l-1.76 1.76-2.049 2.047a1.032 1.032 0 0 0 1.46 1.459l.285-.286v.69a3.264 3.264 0 0 1-4.515 3.017 3.265 3.265 0 0 1-2.016-3.017v-7.205a3.439 3.439 0 1 0-2.063 0v7.205a3.266 3.266 0 0 1-6.53 0v-.69l.285.286a1.03 1.03 0 1 0 1.458-1.458l-2.045-2.048-1.76-1.76zm11-10.484a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default Hook

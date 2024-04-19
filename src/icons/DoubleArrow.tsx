import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DoubleArrow({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#doubleArrow_svg__a)"
        clipRule="evenodd">
        <path
          d="M16.016 7.766v.5q-.08.246-.235.468L8.766 15.75q-.858.533-1.578-.172-.492-.693-.032-1.406 3.08-3.071 6.14-6.156a1716 1716 0 0 0-6.14-6.157q-.501-.838.172-1.546Q8.034-.2 8.766.28l7.015 7.016q.154.222.235.469"
          opacity={0.986}
        />
        <path
          d="M.016 15.11v-.5q.06-.233.203-.438 3.079-3.072 6.14-6.157A1713 1713 0 0 0 .22 1.86a1.4 1.4 0 0 1-.203-.437v-.5q.396-1.09 1.53-.797.15.066.282.156l7.047 7.047q.47.688 0 1.375L1.828 15.75Q1 16.27.281 15.61a2 2 0 0 1-.265-.5"
          opacity={0.986}
        />
      </g>
      <defs>
        <clipPath id="doubleArrow_svg__a">
          <path fill="#fff" d="M16 16H0V0h16z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DoubleArrow

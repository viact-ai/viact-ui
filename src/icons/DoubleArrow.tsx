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
          d="M16.016 7.766v.5c-.054.164-.132.32-.235.468L8.766 15.75c-.572.355-1.098.298-1.579-.172-.327-.462-.338-.93-.03-1.406 2.052-2.047 4.099-4.1 6.14-6.156a1715.841 1715.841 0 0 0-6.14-6.157c-.335-.558-.278-1.074.171-1.546C7.8-.03 8.278-.04 8.766.28l7.015 7.016c.103.148.181.304.235.469Z"
          opacity={0.986}
        />
        <path
          d="M.016 15.11v-.5c.04-.156.108-.301.203-.438 2.052-2.048 4.1-4.1 6.14-6.157A1712.613 1712.613 0 0 0 .22 1.86a1.388 1.388 0 0 1-.203-.437v-.5C.28.196.79-.07 1.546.125c.1.044.193.096.282.156l7.047 7.047c.313.458.313.917 0 1.375L1.828 15.75c-.553.347-1.068.3-1.547-.14a1.93 1.93 0 0 1-.265-.5Z"
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

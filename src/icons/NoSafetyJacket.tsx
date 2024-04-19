import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NoSafetyJacket({
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
      <rect width={42} height={42} fill="#F2C94C" rx={8} />
      <mask
        id="no-safety-jacket_svg__a"
        width={18}
        height={22}
        x={12}
        y={10}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}>
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M27 11.004h-2.5l-3.5 10v10h8v-12.5l-2-3zm-12 0h2.5l3.5 10v10h-8v-12.5l2-3z"
        />
      </mask>
      <g mask="url(#no-safety-jacket_svg__a)">
        <path fill="#fff" d="M9 9h33v33H9z" />
      </g>
    </svg>
  )
}
export default NoSafetyJacket

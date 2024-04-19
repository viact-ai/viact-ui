import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function BarrierCollision2({
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
        d="M30 15h-2v-3h-2v3H16v-3h-2v3h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v6h2v-6h10v6h2v-6h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-16.58 7 2.857-5h2.303l-2.857 5zm7.857-5h2.303l-2.857 5H18.42zm5 0h2.303l-2.857 5H23.42z"
      />
    </svg>
  )
}
export default BarrierCollision2

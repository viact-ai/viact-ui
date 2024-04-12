import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Analytic({
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
      <circle cx={5} cy={17} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={9} cy={7} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={15} cy={17} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 15 2-6M10 8l4 8M16.5 15l2.5-4"
      />
      <circle cx={20} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
export default Analytic

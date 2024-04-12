import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Cliff({
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
      <rect width={42} height={42} fill="#9B51E0" rx={8} />
      <path fill="#fff" d="m12 16.5 18-3-2.727 12H12v-9Z" />
      <circle cx={30} cy={12} r={1.5} fill="#fff" />
      <circle cx={27} cy={25.5} r={1.5} fill="#fff" />
      <circle cx={12} cy={25.5} r={1.5} fill="#fff" />
      <circle cx={12} cy={16.5} r={1.5} fill="#fff" />
    </svg>
  )
}
export default Cliff

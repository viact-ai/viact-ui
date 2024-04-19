import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DangerZone2({
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
        d="M19.7 21.5c0 .3-1.3.7-2.3.7s-2.1-.7-2.1-.9c0-.3.7-1.2 2.3-1.3.9-.1 1.9.5 2.1 1.5m4.7-1.5c-1-.1-1.9.5-2.1 1.5 0 .3 1.2.7 2.3.7s2.1-.7 2.1-.9-.7-1.2-2.3-1.3m6.6 1c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10m-2-.8c0-2-.7-2.7-3.3-2.7s-3.4 1.1-4.7 1.1-2-1.1-4.7-1.1-3.3.6-3.3 2.7c0 3.4 1.5 5.3 3.6 5.3 1.6 0 2.8-2 4.4-2s2.7 2 4.4 2c2.1 0 3.6-1.9 3.6-5.3"
      />
    </svg>
  )
}
export default DangerZone2

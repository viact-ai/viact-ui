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
        d="M19.7 21.5c0 .3-1.3.7-2.3.7-1 0-2.1-.7-2.1-.9 0-.3.7-1.2 2.3-1.3.9-.1 1.9.5 2.1 1.5Zm4.7-1.5c-1-.1-1.9.5-2.1 1.5 0 .3 1.2.7 2.3.7 1.1 0 2.1-.7 2.1-.9 0-.2-.7-1.2-2.3-1.3Zm6.6 1c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10Zm-2-.8c0-2-.7-2.7-3.3-2.7-2.6 0-3.4 1.1-4.7 1.1-1.3 0-2-1.1-4.7-1.1s-3.3.6-3.3 2.7c0 3.4 1.5 5.3 3.6 5.3 1.6 0 2.8-2 4.4-2 1.6 0 2.7 2 4.4 2 2.1 0 3.6-1.9 3.6-5.3Z"
      />
    </svg>
  )
}
export default DangerZone2

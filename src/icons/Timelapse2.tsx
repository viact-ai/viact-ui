import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Timelapse2({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 29"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={28} height={28} y={0.627} fill="currentColor" rx={8} />
      <path
        fill="#fff"
        d="M17.513 11.113a4.48 4.48 0 0 0-3.18-1.32v4.5l-3.18 3.18a4.51 4.51 0 0 0 6.367 0 4.493 4.493 0 0 0-.007-6.36m-3.18-4.32c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5m0 13.5c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6"
      />
    </svg>
  )
}
export default Timelapse2

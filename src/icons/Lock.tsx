import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Lock({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M16.667 10c0-.92-.748-1.667-1.667-1.667h-.833v-2.5A4.17 4.17 0 0 0 10 1.667a4.17 4.17 0 0 0-4.167 4.166v2.5H5c-.92 0-1.667.748-1.667 1.667v6.667c0 .919.748 1.666 1.667 1.666h10c.92 0 1.667-.747 1.667-1.666zM7.5 5.833c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v2.5h-5z"
      />
    </svg>
  )
}
export default Lock

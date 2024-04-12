import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function TimeBar({
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
        d="M3.333 1.667v5H1.667v-5h1.666ZM1.667 18.334h1.666v-5H1.667v5ZM4.167 10a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM20 5v10a1.66 1.66 0 0 1-1.667 1.667h-10A1.667 1.667 0 0 1 6.667 15v-3.333L5 10l1.667-1.666V5a1.667 1.667 0 0 1 1.666-1.666h10A1.66 1.66 0 0 1 20 5Zm-4.167 5.834H9.167V12.5h6.666v-1.666ZM17.5 7.5H9.167v1.667H17.5V7.5Z"
      />
    </svg>
  )
}
export default TimeBar

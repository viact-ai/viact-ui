import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FullWasteBin({
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
      <rect width={42} height={42} fill="#219653" rx={8} />
      <path
        fill="#fff"
        d="M27.178 11.811a.65.65 0 0 0-.656-1.123l-15.6 9.1a.65.65 0 0 0-.322.562v7.8a3.25 3.25 0 0 0 3.25 3.25h14.3a3.25 3.25 0 0 0 3.25-3.25v-7.8a.65.65 0 0 0-.65-.65h-.65v-3.25a1.95 1.95 0 0 0-1.95-1.95h-2.6a1.95 1.95 0 0 0-1.95 1.95v.65h-3.25a1.95 1.95 0 0 0-1.95 1.95v.65h-4.745l13.523-7.889ZM23.6 18.4v1.3h-3.9v-.65a.65.65 0 0 1 .65-.65h3.25Zm1.3 1.3v-3.25a.65.65 0 0 1 .65-.65h2.6a.65.65 0 0 1 .65.65v3.25h-3.9Z"
      />
    </svg>
  )
}
export default FullWasteBin

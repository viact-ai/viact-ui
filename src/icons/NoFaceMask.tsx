import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NoFaceMask({
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
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20.829 13.442a.6.6 0 0 1 .343 0l7.583 2.334a.58.58 0 0 1 .412.557v.584h.583a2.917 2.917 0 0 1 2.917 2.916v2.334a2.916 2.916 0 0 1-2.917 2.916h-1.433a5.24 5.24 0 0 1-2.856 2.155l-4.29 1.32a.6.6 0 0 1-.343 0l-4.289-1.32a5.24 5.24 0 0 1-2.856-2.155H12.25a2.917 2.917 0 0 1-2.917-2.916v-2.334a2.917 2.917 0 0 1 2.917-2.916h.583v-.584a.58.58 0 0 1 .412-.557zm-7.996 8.778c0 .589.098 1.16.281 1.697h-.864a1.75 1.75 0 0 1-1.75-1.75v-2.334a1.75 1.75 0 0 1 1.75-1.75h.583zm16.052 1.697h.865a1.75 1.75 0 0 0 1.75-1.75v-2.334a1.75 1.75 0 0 0-1.75-1.75h-.583v4.137c0 .589-.098 1.16-.282 1.697M24.5 19.25h-7v-1.167h7zm0 3.5h-7v-1.167h7z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default NoFaceMask

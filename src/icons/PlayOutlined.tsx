import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PlayOutlined({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 22"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M16.983 9.413 3.476 1.151A1.875 1.875 0 0 0 .625 2.738v16.525a1.875 1.875 0 0 0 2.85 1.587l13.508-8.262a1.858 1.858 0 0 0 0-3.175ZM2.875 18.58V3.42L15.265 11l-12.39 7.58Z"
      />
    </svg>
  )
}
export default PlayOutlined

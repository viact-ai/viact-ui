import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CarbonBuilding({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 26"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M22.75 1.625H13a1.627 1.627 0 0 0-1.625 1.625v8.125H3.25A1.627 1.627 0 0 0 1.625 13v11.375h22.75V3.25a1.627 1.627 0 0 0-1.625-1.625M7.313 22.75v-5.687h3.25v5.687zm15.437 0H12.188v-6.5a.81.81 0 0 0-.813-.812H6.5a.81.81 0 0 0-.812.812v6.5H3.25V13H13V3.25h9.75z"
      />
      <path
        fill="currentColor"
        d="M14.625 6.5h1.625v1.625h-1.625zm4.875 0h1.625v1.625H19.5zm-4.875 4.875h1.625V13h-1.625zm4.875 0h1.625V13H19.5zm-4.875 4.875h1.625v1.625h-1.625zm4.875 0h1.625v1.625H19.5zM7.313 9.75H5.688A4.067 4.067 0 0 1 9.75 5.688v1.625A2.44 2.44 0 0 0 7.313 9.75m-4.063 0H1.625A8.134 8.134 0 0 1 9.75 1.625V3.25a6.51 6.51 0 0 0-6.5 6.5"
      />
    </svg>
  )
}
export default CarbonBuilding

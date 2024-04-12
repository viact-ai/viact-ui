import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NonInertConstructionWaste({
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
        d="m28.029 17.556-2.055 12.267a.767.767 0 0 1-.751.628h-9.446a.767.767 0 0 1-.751-.628l-2.055-12.267a.767.767 0 0 1 .752-.89h13.539a.769.769 0 0 1 .767.89Zm.904-3.19a.767.767 0 0 1-.766.767H12.833a.767.767 0 0 1 0-1.533h3.834v-2.3a.767.767 0 0 1 .766-.767h6.134a.767.767 0 0 1 .766.767v2.3h3.834a.767.767 0 0 1 .766.767ZM22.8 13.6v-1.534h-4.6V13.6h4.6Z"
      />
    </svg>
  )
}
export default NonInertConstructionWaste

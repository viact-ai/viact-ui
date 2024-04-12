import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowBox({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        width={22}
        height={22}
        x={1}
        y={1}
        stroke="currentColor"
        strokeWidth={2}
        rx={3}
      />
      <path
        fill="currentColor"
        d="M16.219 10.74a.79.79 0 0 1-.604.24.863.863 0 0 1-.605-.262l-2.354-2.354v9.292c0 .236-.08.434-.24.594a.806.806 0 0 1-.593.24.809.809 0 0 1-.594-.24.808.808 0 0 1-.24-.594V8.364L8.616 10.74a.812.812 0 0 1-.595.25.81.81 0 0 1-.593-.25.812.812 0 0 1-.25-.594.81.81 0 0 1 .25-.593l3.813-3.813a.736.736 0 0 1 .27-.177.929.929 0 0 1 .313-.052c.111 0 .215.017.312.052a.737.737 0 0 1 .271.177l3.834 3.834c.152.152.229.343.229.572 0 .23-.084.428-.25.594Z"
      />
    </svg>
  )
}
export default ArrowBox
